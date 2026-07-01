const articlesData = [
  {
    "id": "law20",
    "law": "建築基準法",
    "number": "法20条",
    "title": "構造耐力",
    "category": "構造規定",
    "description": "建築物は、自重・積載荷重・積雪・風圧・地震等に対して安全な構造としなければならない。規模に応じて第1〜4号の計算方法が適用される",
    "memo": "【第1号】高さ60m超：時刻歴応答解析（大臣認定）。<br>【第2号】4階以上または高さ13m超等：ルート2または3。<br>【第3号】木造3階以上または延べ300㎡超等：ルート1。<br>【第4号】小規模木造等：仕様規定（壁量計算等）で対応可。"
  },
  {
    "id": "law28",
    "law": "建築基準法",
    "number": "法28条",
    "title": "居室の採光・換気",
    "category": "一般構造",
    "description": "住宅等の居室には採光のための窓等が必要（床面積の1/7以上）、換気設備も必要",
    "memo": "【第1項】住宅・学校・病院等の居室に採光有効面積（床面積の1/7等、種類により政令で規定）が必要。<br>【第2項】全居室に換気有効面積（床面積の1/20以上）が必要。換気設備設置で代替可（令20条の2）。<br>【第3項】法別表（1）の特殊建築物の居室・火気使用室には換気設備が必要（令20条の3）。"
  },
  {
    "id": "law28_2",
    "law": "建築基準法",
    "number": "法28条の2",
    "title": "シックハウス対策",
    "category": "一般構造",
    "description": "クロルピリホス・ホルムアルデヒドを発散する建材の使用制限、換気設備の設置義務",
    "memo": "【第1・2号】石綿の使用・添付禁止（全建築物）。<br>【第3号】クロルピリホス・ホルムアルデヒド規制（居室を有する建築物）。建材の使用制限（令20条の5・6）と24時間換気システムの設置（令20条の8）が義務付けられる。"
  },
  {
    "id": "rei_ventilation",
    "law": "建築基準法施行令",
    "number": "令20条の2・令20条の3・令129条の2の5",
    "title": "換気設備・火気使用室の換気・機械換気設備・中央管理方式空調の技術基準",
    "category": "一般構造",
    "description": "換気設備の構造基準（ダクト・換気量等）、火気使用室の換気、機械換気設備・中央管理方式の空調換気設備の性能基準",
    "memo": "令20条の2（換気量の算定・設備構造）、令20条の3（火気使用室の換気）、令129条の2の5（機械換気設備・中央管理方式空調）による。"
  },
  {
    "id": "rei21",
    "law": "建築基準法施行令",
    "number": "令21条",
    "title": "居室の天井の高さ",
    "category": "一般構造",
    "description": "居室の天井の高さは2.1m以上としなければならない",
    "memo": "【第2項】天井の高さは床面から測る。一室で高さが異なる部分がある場合は平均の高さによる。"
  },
  {
    "id": "law35",
    "law": "建築基準法",
    "number": "法35条",
    "title": "避難施設等",
    "category": "避難規定",
    "description": "①法別表第一(い)欄(1)〜(4)項の特殊建築物、②3階以上の建築物、③延べ面積1000㎡超の建築物、④令116条の2の無窓居室を有する建築物に対して廊下・階段・出入口・排煙設備・非常用照明・非常用進入口等の基準が適用される",
    "memo": "①法別表第一(1)〜(4)の特殊建築物、②3階以上、③延べ1000㎡超、④無窓居室のいずれかで適用。令117〜126条の規定が連動する。"
  },
  {
    "id": "law35_3",
    "law": "建築基準法",
    "number": "法35条の3",
    "title": "無窓居室の主要構造部",
    "category": "避難規定",
    "description": "政令で定める開口部を有しない居室（採光上有効な開口部が床面積の1/20未満等）は、その居室を区画する主要構造部を耐火構造又は不燃材料で造らなければならない",
    "memo": "令111条で定める開口部を有しない居室が対象。主要構造部を耐火構造又は不燃材料とする必要がある。<br>ただし法別表第一(い)欄(一)項（劇場・映画館・演芸場・観覧場・公会堂・集会場）は除外。"
  },
  {
    "id": "law48",
    "law": "建築基準法",
    "number": "法48条",
    "title": "用途地域による用途制限",
    "category": "集団規定",
    "description": "用途地域内における建築物の用途の制限（別表第二）",
    "memo": "用途地域ごとに建築可能な用途が別表第二で規定されている"
  },
  {
    "id": "law52",
    "law": "建築基準法",
    "number": "法52条",
    "title": "容積率",
    "category": "集団規定",
    "description": "建築物の延べ面積の敷地面積に対する割合の最高限度",
    "memo": "用途地域・前面道路幅員により容積率が制限される"
  },
  {
    "id": "law53",
    "law": "建築基準法",
    "number": "法53条",
    "title": "建蔽率",
    "category": "集団規定",
    "description": "建築物の建築面積の敷地面積に対する割合の最高限度",
    "memo": "用途地域・防火地域等により建蔽率が制限される。<br>【第3項】防火・準防火地域内の耐火・準耐火建築物等は+1/10、角地（特定行政庁指定）は+1/10、両方該当は+2/10。"
  },
  {
    "id": "law56",
    "law": "建築基準法",
    "number": "法56条",
    "title": "建築物の各部分の高さ制限",
    "category": "集団規定",
    "description": "道路斜線・隣地斜線・北側斜線による高さ制限",
    "memo": "道路斜線は全用途地域、北側斜線は住居系地域に適用"
  },
  {
    "id": "law27",
    "law": "建築基準法",
    "number": "法27条",
    "title": "耐火建築物等としなければならない特殊建築物",
    "category": "防火規定",
    "description": "法別表第一の特殊建築物は各号の要件に応じて、第1項：耐火建築物等、第2項：耐火建築物、第3項：耐火建築物又は準耐火建築物としなければならない",
    "memo": "【第1項】法別表（1）〜（4）が対象。<br>【第2項】法別表（5）（6）が対象。<br>【第3項】法別表（5）（6）及び危険物貯蔵処理場が対象。"
  },
  {
    "id": "rei112_area",
    "law": "建築基準法施行令",
    "number": "令112条第1項・第4項・第5項",
    "title": "面積区画（500〜1500㎡）",
    "category": "防火規定",
    "description": "耐火建築物・準耐火建築物等は、建物の法的根拠に応じて500㎡・1000㎡・1500㎡のいずれかの面積以内ごとに防火区画しなければならない",
    "memo": "【1500㎡（第1項）】一般の耐火・準耐火建築物。<br>【1000㎡（第5項）】法21条・法27条等による1時間準耐火建築物。<br>【500㎡（第4項）】法21条・法27条等による45分準耐火建築物。<br>竪穴区画（第7項）・異種用途区画（第18項）も合わせて確認。"
  },
  {
    "id": "rei112_7",
    "law": "建築基準法施行令",
    "number": "令112条第11項",
    "title": "竪穴区画",
    "category": "防火規定",
    "description": "準耐火建築物等の地階または3階以上の部分に存する竪穴部分（階段・EV昇降路・吹き抜け・メゾネット・ダクトスペース等）は防火区画しなければならない",
    "memo": "階段・EV昇降路は竪穴部分に含まれるため、準耐火建築物以上で3階以上の建築物にはほぼ必ず適用される。吹き抜けがない場合も要確認"
  },
  {
    "id": "rei112_11",
    "law": "建築基準法施行令",
    "number": "令112条第7項",
    "title": "高層区画（11階以上）",
    "category": "防火規定",
    "description": "建築物の11階以上の部分は100㎡以内（内装不燃の場合200㎡・500㎡）ごとに防火区画",
    "memo": "11階以上の部分が対象。内装仕上げの仕様により区画面積が変わる"
  },
  {
    "id": "rei112_18",
    "law": "建築基準法施行令",
    "number": "令112条第18項",
    "title": "異種用途区画",
    "category": "防火規定",
    "description": "法27条各項のいずれかに該当する特殊建築物用途部分と他の用途部分が同一建築物内にある場合、1時間準耐火基準の床・壁および特定防火設備で区画しなければならない",
    "memo": "法27条各項に該当する用途部分と他用途部分を1時間準耐火構造の床・壁で区画。自動車車庫は令112条第19項も適用。"
  },
  {
    "id": "rei117_126",
    "law": "建築基準法施行令",
    "number": "令117条〜令126条",
    "title": "廊下・避難階段・出入口",
    "category": "避難規定",
    "description": "法別表第1（い）欄(1)〜(4)項の特殊建築物・3階以上・延べ面積1000㎡超・令116条の2の無窓居室を有する建築物に適用される廊下幅・直通階段・避難階段・出入口等の基準（令117条〜令126条）",
    "memo": "令119条（廊下幅）・令120条（歩行距離）・令121条（2以上の直通階段）・令122〜123条（避難階段・特別避難階段）・令126条（手すり壁）等が適用される。"
  },
  {
    "id": "rei126_2",
    "law": "建築基準法施行令",
    "number": "令126条の2・令126条の3",
    "title": "排煙設備",
    "category": "避難規定",
    "description": "①法別表第一(1)〜(4)項の特殊建築物で延べ面積500㎡超、②3階以上で延べ面積500㎡超、③排煙無窓居室を有する建築物には排煙設備が必要",
    "memo": "【令126条の2】排煙無窓居室は規模不問で必要。床面積100㎡以内・準不燃材料等は免除。<br>【令126条の3】自然排煙は床面積の1/50以上の有効開口が必要。"
  },
  {
    "id": "rei126_4",
    "law": "建築基準法施行令",
    "number": "令126条の4・令126条の5",
    "title": "非常用照明装置",
    "category": "避難規定",
    "description": "法35条が適用される建築物の居室・廊下・階段等に非常用照明が必要",
    "memo": "法35条が適用される建築物の居室・廊下・階段等に設置（令126条の4）。床面1lx以上・停電後30分以上点灯できる予備電源が必要（令126条の5）。"
  },
  {
    "id": "rei126_6",
    "law": "建築基準法施行令",
    "number": "令126条の6・令126条の7",
    "title": "非常用進入口",
    "category": "避難規定",
    "description": "3階以上の階を有する建築物の外壁には、非常用進入口を設けなければならない",
    "memo": "【令126条の6】3階以上の建築物の道・通路に面する外壁に設置。非常用EVまたは幅75cm以上の窓を10m以内ごとに設けた場合は不要。<br>【令126条の7】間隔40m以下・幅75cm×高さ1.2m以上の開口部＋バルコニーが必要。"
  },
  {
    "id": "rei129_2_3",
    "law": "建築基準法施行令",
    "number": "令129条の2の3",
    "title": "建築設備の構造強度",
    "category": "構造規定",
    "description": "建築設備（昇降機・配管設備等）および屋上突出物（水槽・煙突等）の構造耐力に関する基準",
    "memo": "【第1号】昇降機は令129条の4・5・6・8・12に適合。<br>【第2号】昇降機以外の建築設備は大臣認定の構造方法を用いる。<br>【第3号】法20条第1〜3号の建築物の屋上突出物（水槽・煙突等）は構造計算により風圧・地震等に対して安全を確認。"
  },
  {
    "id": "rei129_pipe",
    "law": "建築基準法施行令",
    "number": "令129条の2の4",
    "title": "給水・排水その他の配管設備の設置及び構造",
    "category": "一般構造",
    "description": "建築物に設ける給水・排水のための配管設備の構造基準（配管材料・勾配・給水タンク・排水トラップ・阻集器等）",
    "memo": "給水タンク・排水配管・通気管・阻集器の設置基準。飲食店等ではグリーストラップが必要。"
  },
  {
    "id": "law61",
    "law": "建築基準法",
    "number": "法61条",
    "title": "防火地域・準防火地域内の建築物",
    "category": "集団規定",
    "description": "防火地域・準防火地域内における建築物の構造制限",
    "memo": "防火地域：原則耐火建築物。準防火地域：規模により耐火・準耐火建築物"
  },
  {
    "id": "rei128",
    "law": "建築基準法施行令",
    "number": "令127条〜令128条の3",
    "title": "敷地内の通路等",
    "category": "避難規定",
    "description": "法35条が適用される建築物の敷地内に、建築物の出口から道路・公園等に通じる避難上有効な通路を設けなければならない",
    "memo": "【令127条】避難階に直通階段から道路等へ通じる出口を確保。<br>【令128条】敷地内通路1.5m以上（延べ200㎡未満の3階以下は90cm以上）。<br>【令128条の2】木造延べ1000㎡超または延べ3000㎡超は幅員3m以上の通路が必要。"
  },
  {
    "id": "law43",
    "law": "建築基準法",
    "number": "法43条",
    "title": "敷地等と道路との関係（接道規制）",
    "category": "集団規定",
    "description": "建築物の敷地は幅員4m以上の道路に2m以上接しなければならない",
    "memo": "全ての建築物に適用。4m未満の道路（2項道路）は道路中心線から2mのセットバックが必要。特定行政庁による緩和・強化規定あり（法43条第2項）"
  },
  {
    "id": "law22",
    "law": "建築基準法",
    "number": "法22条",
    "title": "屋根の延焼防止",
    "category": "防火規定",
    "description": "指定区域（22条区域）内の建築物の屋根は、市街地における火災の延焼を防止するために必要な不燃性等の性能を有する構造としなければならない",
    "memo": "埼玉県の場合、市街化区域内が指定されていることが多い。NM-、DR-、DW-"
  },
  {
    "id": "rei114",
    "law": "建築基準法施行令",
    "number": "令114条",
    "title": "界壁・間仕切壁の防火",
    "category": "防火規定",
    "description": "共同住宅・長屋・寄宿舎等の各戸の界壁は準耐火構造以上とし、天井裏または屋根裏に達するものとしなければならない。学校・病院・ホテル等の間仕切壁も一定の防火性能が必要",
    "memo": "【第1項】共同住宅・長屋・寄宿舎・下宿の界壁は準耐火構造以上で小屋裏・天井裏まで到達させる。<br>【第2項】学校・病院・ホテル・児童福祉施設等の間仕切壁は準耐火構造以上で天井裏まで到達させる。"
  },
  {
    "id": "law23",
    "law": "建築基準法",
    "number": "法23条",
    "title": "外壁の延焼防止",
    "category": "防火規定",
    "description": "22条区域内の木造建築物等については、延焼のおそれのある部分の外壁を準防火性能のある構造としなければならない",
  },
  {
    "id": "law21",
    "law": "建築基準法",
    "number": "法21条",
    "title": "大規模建築物の主要構造部の防耐火性能",
    "category": "防火規定",
    "description": "木造建築物等（木造・混構造等）で、各号のいずれかに該当する建築物の主要構造部は、通常火災が終了するまで耐えられる防耐火性能が必要（第1項）。延べ面積3000㎡超の木造建築物等は第2項が別途適用される",
    "memo": "【第1項第1号】地階を除く階数4以上。<br>【第1項第2号】高さ16m超。<br>【第1項第3号】別表第一(い)欄(5)項（倉庫）・(6)項（自動車車庫・自動車修理工場等）の特殊建築物で高さ13m超。"
  },
  {
    "id": "law26",
    "law": "建築基準法",
    "number": "法26条",
    "title": "防火壁・防火床",
    "category": "防火規定",
    "description": "延べ面積が1000㎡を超える建築物は、防火壁または防火床によって1000㎡以内ごとに区画しなければならない",
    "memo": "耐火・準耐火建築物等は適用除外。木造建築物等の一般建築物で延べ1000㎡超の場合に主に確認が必要。令113条（防火壁の構造：自立する耐火構造等）による。"
  },
  {
    "id": "law29",
    "law": "建築基準法",
    "number": "法29条",
    "title": "地階の居室の防湿・換気",
    "category": "一般構造",
    "description": "住宅・学校・病院等に地階を設けて居室を設ける場合は、防湿・換気・採光・排水等の衛生上必要な措置を講じなければならない",
    "memo": "令20条の2（換気設備）・令22条の2（防湿措置）等が必要。採光確保が困難なケースが多い。"
  },
  {
    "id": "law54",
    "law": "建築基準法",
    "number": "法54条",
    "title": "外壁の後退距離",
    "category": "集団規定",
    "description": "第一種・第二種低層住居専用地域・田園住居地域内では、特定行政庁が都市計画で指定する外壁の後退距離（1m又は1.5m）に適合しなければならない",
    "memo": "都市計画で指定した場合のみ適用。令135条の20による一定の除外規定あり。"
  },
  {
    "id": "law55",
    "law": "建築基準法",
    "number": "法55条",
    "title": "低層住居専用地域等の絶対高さ制限",
    "category": "集団規定",
    "description": "第一種・第二種低層住居専用地域・田園住居地域内の建築物の高さは、都市計画で定める10m又は12mを超えてはならない",
    "memo": "10m・12mのどちらが適用されるかは都市計画で指定。法56条の斜線制限も別途適用される。"
  },
  {
    "id": "law56_2",
    "law": "建築基準法",
    "number": "法56条の2",
    "title": "日影規制",
    "category": "集団規定",
    "description": "住居系・近隣商業・準工業地域等において、一定の高さ以上の建築物は別表第四に規定する日影時間を超えてはならない",
    "memo": "対象：住居系全地域・近隣商業・準工業地域。軒高7m超または3階以上が対象（別表第四）。計測面の高さは用途地域により異なる。"
  },
  {
    "id": "rei116_2",
    "law": "建築基準法施行令",
    "number": "令116条の2",
    "title": "無窓居室の判定基準",
    "category": "一般構造",
    "description": "採光無窓居室・排煙無窓居室の定義。これに該当すると規模条件に関わらず法35条・令126条の2の避難規定・排煙設備が適用される",
    "memo": "【採光無窓（第1項第1号）】採光有効面積が床面積の1/20未満→法35条が規模不問で適用。<br>【排煙無窓（第1項第2号）】排煙有効面積が床面積の1/50未満かつ1㎡未満→排煙設備が規模不問で必要。"
  },
  {
    "id": "law31",
    "law": "建築基準法",
    "number": "法31条",
    "title": "便所",
    "category": "一般構造",
    "description": "下水道法の処理区域内では水洗便所（公共下水道接続）のみ認められる。それ以外に放流する場合は屎尿浄化槽の設置が必要",
    "memo": "【第1項】下水道法の処理区域内は水洗便所（公共下水道接続）以外不可。区域内かどうかは自治体に確認が必要。<br>【第2項】公共下水道の終末処理場以外に放流する場合は、政令の技術基準に適合する屎尿浄化槽を設置しなければならない。"
  },
  {
    "id": "law33",
    "law": "建築基準法",
    "number": "法33条",
    "title": "避雷設備",
    "category": "一般構造",
    "description": "高さ20mを超える建築物には避雷設備（避雷針等）を設けなければならない",
    "memo": "令129条の14・15による。高さ20m超の部分を保護（危険物貯蔵場等は一部適用外）。"
  },
  {
    "id": "law34",
    "law": "建築基準法",
    "number": "法34条",
    "title": "昇降機（エレベーター）の安全基準",
    "category": "一般構造",
    "description": "建築物にエレベーターを設ける場合は、安全装置・構造等の技術的基準（令129条の3以降）に適合しなければならない。高さ31mを超える建築物は非常用エレベーターの設置が義務（第2項）",
    "memo": "令129条の3〜12の構造基準に適合が必要。高さ31m超は法34条第2項・令129条の13の3の非常用EVも必要（消防活動用。1台以上、床面積により追加台数あり）。エスカレーターは令129条の12、小荷物専用昇降機は令129条の13による。"
  },
  {
    "id": "rei77",
    "law": "建築基準法施行令",
    "number": "令38条・令93条",
    "title": "基礎の構造・地盤調査",
    "category": "構造規定",
    "description": "建築物の基礎は地盤の長期許容応力度に応じた種類・構造としなければならない。令93条により地盤の許容応力度を調査・確認する",
    "memo": "令93条の地盤調査で長期許容応力度を確認し基礎形式を選定。長期許容応力度20kN/㎡未満は原則杭基礎等（令38条）。"
  },
  {
    "id": "rei128_4",
    "law": "建築基準法施行令",
    "number": "令128条の3の2〜令128条の5",
    "title": "内装制限",
    "category": "防火規定",
    "description": "法35条の2による内装制限。特殊建築物・大規模建築物・自動車車庫等・無窓居室・火気使用室の内装仕上げを不燃・準不燃・難燃材料で制限する",
    "memo": "【令128条の3の2】木造延べ1000㎡超の居室等は準不燃材料以上。<br>【令128条の3の3】自動車車庫等は規模不問。<br>【令128条の4】特殊建築物の一定規模以上・無窓居室・火気使用室が対象。火気使用室は用途・規模不問で対象（第4項）。"
  },
  {
    "id": "rei_wood",
    "law": "建築基準法施行令",
    "number": "令40条〜令50条（第三章第三節）",
    "title": "木造の構造基準・壁量計算",
    "category": "構造規定",
    "description": "木造建築物の各部材（柱・梁・筋かい・仕口・継手等）の品質・構造・接合に関する技術的基準。令46条により各階・各方向の耐力壁（筋かい・構造用面材等）は、床面積・見付面積から算定した必要壁量以上としなければならない",
    "memo": "柱の小径（令41条）・壁量計算（令46条）・防腐措置（令49条）等が主な確認事項。2025年4月改正で3階以上または延べ300㎡超も仕様規定の審査対象となった。"
  },
  {
    "id": "rei_masonry",
    "law": "建築基準法施行令",
    "number": "令51条〜令62条（第三章第四節）",
    "title": "組積造の構造基準",
    "category": "構造規定",
    "description": "れんが造・石造・無筋コンクリート造等の組積造建築物の壁・開口部・臥梁・床・屋根等の構造基準",
    "memo": "令55条（壁長さは開口幅の3倍以上）・令56条（壁厚20cm以上）・令57条（臥梁）等による。現在は既存建築物の増改築が主な適用場面。"
  },
  {
    "id": "rei_block",
    "law": "建築基準法施行令",
    "number": "令62条の2〜令62条の8（第三章第五節）",
    "title": "補強コンクリートブロック造の構造基準",
    "category": "構造規定",
    "description": "補強コンクリートブロック造の耐力壁・配置・壁量・臥梁・補強材等の構造基準",
    "memo": "令62条の3（配筋径9mm以上等）・令62条の5（壁量15cm/㎡以上）・令62条の6（臥梁）等による。高さ11m以下・軒高9m以下の制限あり（令62条の3第6項）。"
  },
  {
    "id": "rei_steel",
    "law": "建築基準法施行令",
    "number": "令63条〜令70条（第三章第六節）",
    "title": "鉄骨造の構造基準",
    "category": "構造規定",
    "description": "鉄骨造の材料・圧縮材の有効細長比・柱脚・接合（溶接・高力ボルト）・通し柱等の構造基準",
    "memo": "令64条（有効細長比200以下）・令65条（柱脚部）・令67条（溶接・高力ボルト）等による。耐火建築物等は防耐火被覆も確認。"
  },
  {
    "id": "rei_rc",
    "law": "建築基準法施行令",
    "number": "令71条〜令79条の3（第三章第七節）",
    "title": "鉄筋コンクリート造の構造基準",
    "category": "構造規定",
    "description": "RC造のコンクリート強度・養生・打込み・鉄筋の継手・定着・かぶり厚さ・帯筋・あばら筋等の構造基準",
    "memo": "令77条（帯筋径6mm以上・間隔150mm以下等）・令79条（かぶり厚さ：屋外2cm以上・基礎6cm以上等）等が主な確認事項。"
  },
  {
    "id": "rei_src",
    "law": "建築基準法施行令",
    "number": "令79条の4（第三章第七節の二）",
    "title": "鉄骨鉄筋コンクリート造の構造基準",
    "category": "構造規定",
    "description": "SRC造の骨組・コンクリート・鉄筋に関する技術的基準（RC造・鉄骨造の規定を準用）",
    "memo": "RC造（令71〜79条の3）と鉄骨造（令64〜68条）の規定を準用。鉄骨とコンクリートの一体性・かぶり厚さに注意。"
  },
  {
    "id": "law40",
    "law": "建築基準法",
    "number": "法40条",
    "title": "地方公共団体の条例による付加制限",
    "category": "一般構造",
    "description": "地方公共団体は、その地方の気候・風土の特殊性または特殊建築物の用途・規模から必要な場合、建築物の敷地・構造・建築設備に関して安全上・防火上・衛生上必要な制限を条例で付加することができる",
    "memo": "法39・40条に基づく地方独自の制限（豪雪地域の積雪荷重割増・東京都の条例等）。適用される自治体の条例を個別に確認。"
  },
  {
    "id": "law68_2",
    "law": "建築基準法",
    "number": "法68条の2",
    "title": "地区計画等の区域内における建築物の制限",
    "category": "集団規定",
    "description": "地区計画・特定街区・景観地区・風致地区等が定められた区域内において、市区町村は条例で建築物の用途・形態・高さ・壁面の位置・敷地面積の最低限度等を制限することができる",
    "memo": "市区町村が条例化している区域のみ適用。都市計画図または市区町村窓口で地区計画等の有無を確認。"
  },
  {
    "id": "law19",
    "law": "建築基準法",
    "number": "法19条",
    "title": "敷地の衛生及び安全",
    "category": "一般構造",
    "description": "建築物の敷地は道路境界より高くしなければならない。湿潤な土地・がけ崩れ等の危険のある土地に建築する場合は、盛土・地盤改良・擁壁の設置等、安全上・衛生上必要な措置を講じなければならない",
    "memo": "【第1項】敷地は接道より高くする原則。<br>【第2項】湿潤地・出水危険地は盛土等が必要。<br>【第4項】がけ崩れ等のおそれがある土地は擁壁等の措置が必要。"
  },
  {
    "id": "law25",
    "law": "建築基準法",
    "number": "法25条",
    "title": "大規模の木造建築物等の外壁等",
    "category": "防火規定",
    "description": "延べ面積が1000㎡を超える木造建築物等は、外壁・軒裏のうち延焼のおそれのある部分を防火構造とし、屋根は法22条第1項の構造としなければならない",
    "memo": "同一敷地内に複数の木造建築物等がある場合は延べ面積の合計で判定。"
  },
  {
    "id": "law30",
    "law": "建築基準法",
    "number": "法30条",
    "title": "長屋・共同住宅の界壁",
    "category": "一般構造",
    "description": "長屋・共同住宅の各戸の界壁は、小屋裏または天井裏に達するものとし、その構造は遮音性能に関して政令で定める技術的基準に適合しなければならない",
    "memo": "透過損失：125Hzで25dB以上・500Hzで45dB以上（令22条の3）。令114条第1項（準耐火構造・小屋裏到達）も同時に適用。"
  },
  {
    "id": "law32",
    "law": "建築基準法",
    "number": "法32条",
    "title": "電気設備",
    "category": "一般構造",
    "description": "建築物の電気設備は、電気事業法等の電気工作物に係る法令および建築基準法施行令で定める技術的基準に適合しなければならない",
    "memo": "令129条の14（電気設備の構造基準）による。電気設備の設計・施工は電気工事士法の有資格者が必要。"
  },
  {
    "id": "law37",
    "law": "建築基準法",
    "number": "法37条",
    "title": "建築材料の品質",
    "category": "一般構造",
    "description": "建築物の基礎・主要構造部その他安全上・防火上・衛生上重要な部分に使用する建築材料は、別表第三のJIS・JASに適合するもの、または大臣認定（指定建築材料）でなければならない",
    "memo": "JIS・JAS品以外を使用する場合は大臣認定が必要（別表第三）。施工時の材料証明書の保管が重要。"
  },
  {
    "id": "law62",
    "law": "建築基準法",
    "number": "法62条",
    "title": "防火・準防火地域内の屋根",
    "category": "集団規定",
    "description": "防火地域・準防火地域内の建築物の屋根の構造は、市街地の火災を想定した火の粉による火災発生を防止するために必要な政令の技術的基準（令136条の2の2）に適合するものとしなければならない",
    "memo": "防火・準防火地域内の全建築物が対象（令136条の2の2）。法22条の指定区域と重複する場合は本条が優先適用される。"
  },
  {
    "id": "rei23",
    "law": "建築基準法施行令",
    "number": "令23条",
    "title": "階段の幅・蹴上・踏面",
    "category": "一般構造",
    "description": "建築物の階段は、用途・規模に応じて幅・蹴上・踏面の寸法基準に適合しなければならない",
    "memo": "【住宅用】幅75cm以上・蹴上23cm以下・踏面15cm以上。<br>【共同住宅共用・特殊建築物等・3階以上・1000㎡超】幅120cm以上・蹴上22cm以下・踏面21cm以上。"
  },
  {
    "id": "rei24",
    "law": "建築基準法施行令",
    "number": "令24条",
    "title": "踊り場の位置・踏幅",
    "category": "一般構造",
    "description": "高さが4m（特殊建築物等の直通階段等は3m）を超える階段には踊り場を設けなければならない",
    "memo": "設置間隔：高さ3m以内ごと（令23条の表第1〜2号：特殊建築物等）、4m以内ごと（第3〜4号：住宅等）。踊り場の踏幅は階段の幅以上。"
  },
  {
    "id": "rei25",
    "law": "建築基準法施行令",
    "number": "令25条",
    "title": "階段の手すり等",
    "category": "一般構造",
    "description": "階段には手すりを設けなければならない。高さ1mを超える階段・踊り場の両側には壁または手すり壁等を設けなければならない",
    "memo": "手すり設置は2階以上の建築物の階段に適用（高さ1m以下の部分は除外）。階段幅が3mを超える場合は中間に手すり等が必要。"
  },
  {
    "id": "law64",
    "law": "建築基準法",
    "number": "法64条",
    "title": "看板等の防火措置",
    "category": "集団規定",
    "description": "防火地域内にある看板・広告塔・装飾塔等で、建築物の屋上に設けるものまたは高さ3mを超えるものは、その主要部分を不燃材料で造り、または覆わなければならない",
    "memo": "対象：防火地域のみ。屋上設置または高さ3m超の看板・広告塔が条件。高さ4m超の広告塔は確認申請が必要（法88条）。"
  }
];

function getInputs() {
  return {
    useType: document.getElementById('use-type').value,
    totalFloorArea: parseFloat(document.getElementById('total-floor-area').value) || 0,
    stories: parseInt(document.getElementById('stories').value) || 0,
    height: parseFloat(document.getElementById('height').value) || 0,
    structure: document.getElementById('structure').value,
    areaType: document.getElementById('area-type').value,
    fireZone: document.getElementById('fire-zone').value,
    fireResistance: document.getElementById('fire-resistance').value,
  };
}

function compare(actual, cond) {
  if (!cond) return false;
  const ops = { '>': (a, b) => a > b, '>=': (a, b) => a >= b, '<': (a, b) => a < b, '<=': (a, b) => a <= b, '=': (a, b) => a === b };
  return ops[cond.operator] ? ops[cond.operator](actual, cond.value) : false;
}

const URBAN_AREAS = [
  '都市計画区域', '準都市計画区域',
  '第一種低層住居専用地域', '第二種低層住居専用地域',
  '第一種中高層住居専用地域', '第二種中高層住居専用地域',
  '第一種住居地域', '第二種住居地域', '準住居地域', '田園住居地域',
  '近隣商業地域', '商業地域', '準工業地域', '工業地域', '工業専用地域',
  '市街化調整区域', '非線引き区域'
];

const ZONING_AREAS = [
  '第一種低層住居専用地域', '第二種低層住居専用地域',
  '第一種中高層住居専用地域', '第二種中高層住居専用地域',
  '第一種住居地域', '第二種住居地域', '準住居地域', '田園住居地域',
  '近隣商業地域', '商業地域', '準工業地域', '工業地域', '工業専用地域'
];

const LOW_RISE_ZONES = [
  '第一種低層住居専用地域', '第二種低層住居専用地域', '田園住居地域'
];

const NISSHI_AREAS = [
  '第一種低層住居専用地域', '第二種低層住居専用地域',
  '第一種中高層住居専用地域', '第二種中高層住居専用地域',
  '第一種住居地域', '第二種住居地域', '準住居地域', '田園住居地域',
  '近隣商業地域', '準工業地域'
];


const BETTEN1_1TO4 = [
  '劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
  '病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎', '児童福祉施設',
  '学校', '体育館', '博物館', '美術館', '図書館', 'ボウリング場', 'スキー場', 'スケート場', '水泳場',
  '百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
  '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'
];

// 令117条（5章2節の適用範囲）：法別表第1（い）欄(1)〜(4)項の特殊建築物・3階以上・延べ1000㎡超
function matchesLaw117(inp) {
  return BETTEN1_1TO4.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
}

const NON_WOOD = ['RC造', '鉄骨造', 'SRC造', '組積造'];

function matchesArticle(article, inp) {
  const id = article.id;
  const c = article.conditions;

  if (id === 'law20') return true;

  if (id === 'law28') {
    const targets = ['住宅', '長屋', '共同住宅', '寄宿舎', '下宿', '学校', '病院', '診療所', '児童福祉施設'];
    return targets.includes(inp.useType);
  }

  if (id === 'law28_2') {
    return true;
  }

  if (id === 'law35') {
    return BETTEN1_1TO4.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }

  if (id === 'law35_3') {
    return true;
  }


  if (id === 'law48') {
    return ZONING_AREAS.includes(inp.areaType);
  }

  if (id === 'law52' || id === 'law53' || id === 'law56') {
    return URBAN_AREAS.includes(inp.areaType);
  }

  if (id === 'law27') {
    const allSpecial = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎', '児童福祉施設',
      '学校', '体育館', '博物館', '美術館', '図書館', 'ボウリング場',
      '百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ', 'ナイトクラブ',
      'バー', 'ダンスホール', '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗',
      '倉庫', '自動車車庫', '危険物の貯蔵場'];
    return allSpecial.includes(inp.useType);
  }

  if (id === 'rei112_area') {
    const isFR = inp.fireResistance === '耐火建築物' || inp.fireResistance === '準耐火建築物';
    return isFR && inp.totalFloorArea > 500;
  }

  if (id === 'rei112_7') {
    const isFR = inp.fireResistance === '耐火建築物' || inp.fireResistance === '準耐火建築物';
    return isFR && inp.stories >= 3;
  }

  if (id === 'rei112_11') {
    return inp.stories >= 11;
  }

  if (id === 'rei112_18') {
    return true;
  }

  if (id === 'rei117_126') return matchesLaw117(inp);

  if (id === 'rei126_2') {
    if (BETTEN1_1TO4.includes(inp.useType) && inp.totalFloorArea > 500) return true;
    if (inp.stories >= 3 && inp.totalFloorArea > 500) return true;
    return false;
  }

  if (id === 'rei126_4') {
    return BETTEN1_1TO4.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }

  if (id === 'rei126_6') {
    return inp.stories >= 3;
  }

  if (id === 'rei128') {
    return BETTEN1_1TO4.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }


  if (id === 'law61') {
    return inp.fireZone === '防火地域' || inp.fireZone === '準防火地域';
  }

  if (id === 'law43') {
    return true;
  }

  if (id === 'law22') {
    return URBAN_AREAS.includes(inp.areaType) || inp.fireZone === '22条区域';
  }



  if (id === 'rei114') {
    const targets = ['長屋', '共同住宅', '寄宿舎', '下宿',
      '病院', '診療所', 'ホテル', '旅館', '児童福祉施設', '学校'];
    return targets.includes(inp.useType);
  }

  if (id === 'law23') {
    return inp.fireZone === '22条区域' && (inp.structure === '木造' || inp.structure === '混構造');
  }

  if (id === 'law21') {
    if (inp.structure !== '木造' && inp.structure !== '混構造') return false;
    const betten1_5_6 = ['倉庫', '自動車車庫'];
    return inp.stories >= 4 || inp.height > 16 || (betten1_5_6.includes(inp.useType) && inp.height > 13) || inp.totalFloorArea > 3000;
  }

  if (id === 'law26') {
    if (inp.fireResistance === '耐火建築物' || inp.fireResistance === '準耐火建築物') return false;
    return inp.totalFloorArea > 1000;
  }

  if (id === 'law29') {
    return true;
  }

  if (id === 'law54' || id === 'law55') {
    return LOW_RISE_ZONES.includes(inp.areaType);
  }

  if (id === 'law56_2') {
    return NISSHI_AREAS.includes(inp.areaType);
  }

  if (id === 'rei116_2') {
    return true;
  }

  if (id === 'law31') {
    return true;
  }

  if (id === 'law33') {
    return inp.height > 20;
  }

  if (id === 'law34') {
    return inp.stories >= 2;
  }

  if (id === 'rei77') {
    return true;
  }

  if (id === 'rei128_4') {
    return true;
  }

  if (id === 'rei_wood')     return inp.structure === '木造';
  if (id === 'rei_masonry')  return inp.structure === '組積造';
  if (id === 'rei_block')    return inp.structure === '補強コンクリートブロック造';
  if (id === 'rei_steel')    return inp.structure === '鉄骨造';
  if (id === 'rei_rc')       return inp.structure === '鉄筋コンクリート造';
  if (id === 'rei_src')      return inp.structure === '鉄骨鉄筋コンクリート造';

  if (id === 'law40') return true;

  if (id === 'law68_2') return true;

  if (id === 'law19') return true;

  if (id === 'law25') {
    if (inp.structure && inp.structure !== '木造' && inp.structure !== '混構造') return false;
    return inp.totalFloorArea > 1000;
  }

  if (id === 'law30') {
    return inp.useType === '長屋' || inp.useType === '共同住宅';
  }

  if (id === 'law32') return true;

  if (id === 'law37') return true;

  if (id === 'law62') {
    return inp.fireZone === '防火地域' || inp.fireZone === '準防火地域';
  }

  if (id === 'law64') return inp.fireZone === '防火地域';

  if (id === 'rei23') return inp.stories >= 2;
  if (id === 'rei24') return inp.stories >= 2;
  if (id === 'rei25') return inp.stories >= 2;

  if (id === 'rei21') return true;
  if (id === 'rei_ventilation') return true;
  if (id === 'rei129_2_3') return true;
  if (id === 'rei129_pipe') return true;

  return false;
}

const CATEGORY_ORDER = ['集団規定', '一般構造', '防火規定', '避難規定', '構造規定'];

let displayMode = 'grouped'; // 'grouped' | 'mixed'
let lastInp = null;
let activeCategory = null;

function toggleDisplayMode() {
  displayMode = displayMode === 'grouped' ? 'mixed' : 'grouped';
  const btn = document.getElementById('mode-btn');
  btn.textContent = displayMode === 'grouped' ? '混在表示に切替' : 'まとめて表示に切替';
  renderResults();
}

function filterCategory(cat) {
  activeCategory = activeCategory === cat ? null : cat;
  renderResults();
}

function searchArticles() {
  lastInp = getInputs();
  const resultSection = document.getElementById('result-section');
  resultSection.style.display = 'block';
  renderResults();
  resultSection.scrollIntoView({ behavior: 'smooth' });
}

function renderResults() {
  const inp = lastInp;
  if (!inp) return;

  const sortFn = (a, b) => {
    const lawRank = n => n.startsWith('法') ? 0 : 1;
    const lawDiff = lawRank(a.number) - lawRank(b.number);
    if (lawDiff !== 0) return lawDiff;
    const artNums = n => (n.match(/\d+/g) || []).map(Number);
    const na = artNums(a.number), nb = artNums(b.number);
    for (let i = 0; i < Math.max(na.length, nb.length); i++) {
      const diff = (na[i] || 0) - (nb[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  };

  const matched = articlesData.filter(a => matchesArticle(a, inp));
  const unmatched = articlesData.filter(a => !matchesArticle(a, inp));

  const resultsEl = document.getElementById('results');
  const summaryEl = document.getElementById('summary-bar');

  const allCategories = [...new Set(articlesData.map(a => a.category))];
  const categories = CATEGORY_ORDER.filter(c => allCategories.includes(c));
  const matchedIds = matched.map(a => a.id);
  window._lastMatchedIds = matchedIds;
  document.getElementById('map-link-bar').innerHTML =
    `<button class="mindmap-link" onclick="showMap()">法令関係マップ →</button>`;
  summaryEl.innerHTML = `<strong>全${articlesData.length}件のうち、${matched.length}件の条文が該当：</strong>` +
    categories.map(c => {
      const isActive = activeCategory === c;
      return `<span class="category-badge badge-${c}${isActive ? ' badge-active' : ''}" onclick="filterCategory('${c}')" style="cursor:pointer">${c} ${matched.filter(a => a.category === c).length}件</span>`;
    }).join('');

  const renderCard = (a, redacted) => {
    const hidden = activeCategory && a.category !== activeCategory;
    return `
    <div class="article-card card-${a.category}${redacted ? ' redacted' : ''}" ${hidden ? 'style="display:none"' : ''}>
      <div class="article-header">
        <span class="article-number">${a.number}</span>
        <span class="article-title">${a.title}</span>
        <span class="article-category category-badge badge-${a.category}">${a.category}</span>
      </div>
      <div class="article-description">${a.description}</div>
      ${a.memo ? `<div class="article-memo">📌 ${a.memo}</div>` : ''}
    </div>
  `;
  };

  let cards;
  if (displayMode === 'mixed') {
    const all = [
      ...matched.map(a => ({ a, redacted: false })),
      ...unmatched.map(a => ({ a, redacted: true })),
    ].sort((x, y) => sortFn(x.a, y.a));
    cards = all.map(({ a, redacted }) => renderCard(a, redacted)).join('');
  } else {
    matched.sort(sortFn);
    unmatched.sort(sortFn);
    cards = matched.map(a => renderCard(a, false)).join('') +
            unmatched.map(a => renderCard(a, true)).join('');
  }

  resultsEl.innerHTML = cards;
}

function switchTab(tabName) {
  document.getElementById('tab-search').style.display = tabName === 'search' ? '' : 'none';
  document.getElementById('tab-map').style.display = tabName === 'map' ? '' : 'none';
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
}

function showMap() {
  switchTab('map');
  const matched = new Set(window._lastMatchedIds || []);
  document.querySelectorAll('#tab-map [data-id]').forEach(function(el) {
    const ids = el.dataset.id.split(' ');
    el.classList.remove('highlight-item', 'dimmed-item');
    if (matched.size === 0) return;
    if (ids.some(function(id) { return matched.has(id); })) {
      el.classList.add('highlight-item');
    } else {
      el.classList.add('dimmed-item');
    }
  });
  const notice = document.getElementById('map-filter-notice');
  if (notice) notice.style.display = matched.size ? 'block' : 'none';
}
