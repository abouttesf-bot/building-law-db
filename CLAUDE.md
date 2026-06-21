# CLAUDE.md — 建築基準法条文検索DB 作業マニュアル

## 言語設定
- 返答は常に日本語で簡潔に行う

---

## プロジェクト概要

建築物の用途・規模等を入力すると、建築基準法令のどの条文が審査対象となるかを確認できるWebアプリ。

**コンセプト：**
- 建築基準法に慣れていない人〜慣れている人まで幅広く使えること
- 「あたりをつける」ためのツール。具体的な判断は利用者が行う
- 入力・表示はできるだけ簡潔でわかりやすく

**参照法令（e-gov）：**
- 建築基準法：https://laws.e-gov.go.jp/law/325AC0000000201
- 建築基準法施行令：https://laws.e-gov.go.jp/law/325CO0000000338/

---

## ファイル構成

```
building-law-db/
├── index.html     # メイン画面（入力フォーム＋検索結果）
├── app.js         # 条文データ（articlesData）＋検索ロジック
├── style.css      # スタイル
└── mindmap.html   # 法令関係マップ（カテゴリ別ビジュアル）
```

---

## app.js の構造

### articlesData（条文データ配列）

各条文オブジェクトのフィールド：

| フィールド | 内容 |
|-----------|------|
| `id` | 条文の識別子（例：`law21`, `rei112_7`） |
| `law` | 「建築基準法」または「建築基準法施行令」 |
| `number` | 条番号（例：「法21条」「令112条第7項」） |
| `title` | 条文タイトル |
| `category` | カテゴリ（下記5種） |
| `description` | 説明欄（簡潔に。検索対象・規模要件を含める） |
| `memo` | Memo欄（📌で表示。詳細な適用要件・注意点） |

**カテゴリ（CATEGORY_ORDER）：**
`集団規定` / `一般構造` / `防火規定` / `避難規定` / `構造規定`

### ID命名規則
- 建築基準法条文：`law` + 条番号（例：`law21`, `law27_1`, `law28_2`）
- 建築基準法施行令：`rei` + 内容略称（例：`rei112_7`, `rei_wood`, `rei_ventilation`）

### matchesArticle 関数
条文ごとに適用条件を記述。`inp`（入力値オブジェクト）を受け取りbooleanを返す。

**inp の主なフィールド：**
- `useType`：用途
- `totalFloorArea`：延べ床面積（㎡）
- `stories`：階数
- `height`：建築物の高さ（m）
- `structure`：構造
- `areaType`：用途地域
- `fireZone`：防火地域・準防火地域・22条区域
- `fireResistance`：耐火・準耐火区分

---

## UI 用語規則

| 画面上の表示 | 会話での呼び方 |
|------------|------------|
| 📌（条文カードの注記欄） | **Memo**（「Note」と呼ばない） |
| 「混在表示に切替」ボタン | 切替ボタン |
| 「法令関係マップ →」ボタン | マップリンク |

---

## mindmap.html の仕様

### data-id 属性
各ボックス・タグに `data-id` を付与することで、条文検索結果とのハイライト連動を実現。

- 1つのIDの場合：`data-id="law21"`
- 複数IDが対応する場合（スペース区切り）：`data-id="law27_1 law27_2 law27_3"`

### ハイライトの仕組み
`index.html` で検索 → `renderResults()` がマッチした条文IDをカンマ区切りでURLパラメータに付与 → `mindmap.html?matched=law21,law27_1,...` を別タブで開く → `DOMContentLoaded` イベントで `data-id` を照合しCSSクラスを付与。

| CSSクラス | 効果 |
|----------|------|
| `.highlight-item` | 黄色枠（該当条文） |
| `.dimmed-item` | opacity 0.22（非該当） |

---

## GitHub プッシュ運用ルール

- ファイル編集後のGitHubプッシュは**確認なしで即実行**する

---

## GitHub プッシュ手順

```bash
TOKEN="ghp_****"  # 実際のトークンはローカルで設定
REPO="abouttesf-bot/building-law-db"

# 既存ファイルの更新
SHA=$(curl -s -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$REPO/contents/ファイル名" | \
  node -e "let d=''; process.stdin.on('data',c=>d+=c); process.stdin.on('end',()=>console.log(JSON.parse(d).sha));")

BASE64=$(base64 -i "ローカルパス" | tr -d '\n')

curl -s -X PUT -H "Authorization: token $TOKEN" -H "Content-Type: application/json" \
  "https://api.github.com/repos/$REPO/contents/ファイル名" \
  -d "{\"message\":\"コミットメッセージ\",\"content\":\"$BASE64\",\"sha\":\"$SHA\"}" | \
  node -e "let d=''; process.stdin.on('data',c=>d+=c); process.stdin.on('end',()=>{const r=JSON.parse(d); console.log(r.commit?'OK: '+r.commit.sha:'NG: '+JSON.stringify(r));});"

# 新規ファイル：上記から "sha" フィールドを省略
```

---

## DB作成・編集方針

### 内容の精度について
- 条文の内容や適用条件は、**まず e-Gov 法令APIで原文を取得して確認する**（hourei.net は条文が古い場合があるため使用しない）
- 条文の適用条件は法令原文（e-gov）で必ず確認する

**e-Gov 法令API（建築基準法）：**
```bash
# 建築基準法 第○条を取得（○は数字）
curl "https://laws.e-gov.go.jp/api/1/articles;lawId=325AC0000000201;article=○"

# 建築基準法施行令 第○条を取得
curl "https://laws.e-gov.go.jp/api/1/articles;lawId=325CO0000000338;article=○"
```
- `description`：簡潔に。主な適用対象・規模要件を1〜2文で
- `memo`（Memo）：詳細な号別内容・注意点・関連条文を記載。`<br>` でHTML改行可
- 「あたりをつける」ためのDBなので、厳密すぎる除外条件よりも「該当する可能性がある条文を広めに表示」する方向で判断する

### 条文追加時のチェックリスト
1. `id` は既存と重複しないか
2. `category` は5種のいずれか
3. `matchesArticle` に条件を追加したか
4. mindmap.html に対応する `data-id` を追加したか（マップに掲載する場合）

### 表示スタイルの統一
- `description` に改行・HTMLタグは使わない
- 削除対象：改正年度への言及（法改正の記述は基本不要）、他条文との重複説明

### memoの書き方ルール
- 各項は `【第○項】` の形式で始め、`<br>` で区切る（`<br><br>` の空行は不要）
- 内容は「対象・条件のみ」を極力短く。詳細な説明・用途の羅列は不要
- 書き方の基本形：`【第○項】法別表（X）〜（Y）が対象。`
- 施行令の場合：`【令○条第○項】〜による。` 形式
- 複数の施行令を束ねる場合：`【令○○条〜○○条】〜による。` 形式
- 法27条のmemoを基準スタイルとして参照すること

**法27条memoの例（基準スタイル）：**
```
"memo": "【第1項】法別表（1）〜（4）が対象。<br>【第2項】法別表（5）（6）が対象。<br>【第3項】法別表（5）（6）及び危険物貯蔵処理場が対象。"
```
