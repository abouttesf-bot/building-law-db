const articlesData = [
  {
    "id": "law20_1",
    "law": "建築基準法",
    "number": "法20条第1項第1号",
    "title": "構造耐力（超高層建築物）",
    "category": "構造規定",
    "description": "高さが60mを超える建築物：大臣認定が必要",
    "note": "時刻歴応答解析による大臣認定が必要"
  },
  {
    "id": "law20_1_2",
    "law": "建築基準法",
    "number": "法20条第1項第2号",
    "title": "構造耐力（高層建築物）",
    "category": "構造規定",
    "description": "高さ60m以下で一定規模以上の建築物：許容応力度等計算または大臣認定",
    "note": "許容応力度等計算（ルート2）または保有水平耐力計算（ルート3）が必要"
  },
  {
    "id": "law28",
    "law": "建築基準法",
    "number": "法28条",
    "title": "居室の採光・換気",
    "category": "一般構造",
    "description": "住宅等の居室には採光のための窓等が必要（床面積の1/7以上）、換気設備も必要",
    "note": "採光：居室床面積の1/7以上（住宅等）、換気：1/20以上"
  },
  {
    "id": "law28_2",
    "law": "建築基準法",
    "number": "法28条の2",
    "title": "シックハウス対策",
    "category": "一般構造",
    "description": "クロルピリホス・ホルムアルデヒドを発散する建材の使用制限、換気設備の設置義務",
    "note": "すべての建築物に適用。居室には0.5回/h以上の換気設備が必要"
  },
  {
    "id": "law35",
    "law": "建築基準法",
    "number": "法35条",
    "title": "避難施設等",
    "category": "避難規定",
    "description": "特殊建築物・3階以上の建築物・採光無窓居室を有する建築物・延べ面積1000㎡超の建築物の廊下・階段・出入口等の避難施設",
    "note": "施行令第117条以降の避難規定（令119条廊下幅・令120条直通階段・令121条2直・令126条の2排煙等）が連動して適用される"
  },
  {
    "id": "law35_2",
    "law": "建築基準法",
    "number": "法35条の2",
    "title": "内装制限",
    "category": "防火規定",
    "description": "特殊建築物・大規模建築物・無窓居室等の内装（壁・天井）の仕上げ制限",
    "note": "施行令第128条の3の2以降の内装制限が適用。火気使用室（コンロ等を設ける調理室等）も対象となる（令128条の4第4項）。住宅の調理室・浴室等も含まれるため、用途・規模を問わず確認が必要"
  },
  {
    "id": "law48",
    "law": "建築基準法",
    "number": "法48条",
    "title": "用途地域による用途制限",
    "category": "集団規定",
    "description": "用途地域内における建築物の用途の制限（別表第二）",
    "note": "用途地域ごとに建築可能な用途が別表第二で規定されている"
  },
  {
    "id": "law52",
    "law": "建築基準法",
    "number": "法52条",
    "title": "容積率",
    "category": "集団規定",
    "description": "建築物の延べ面積の敷地面積に対する割合の最高限度",
    "note": "用途地域・前面道路幅員により容積率が制限される"
  },
  {
    "id": "law53",
    "law": "建築基準法",
    "number": "法53条",
    "title": "建蔽率",
    "category": "集団規定",
    "description": "建築物の建築面積の敷地面積に対する割合の最高限度",
    "note": "用途地域・防火地域等により建蔽率が制限される"
  },
  {
    "id": "law56",
    "law": "建築基準法",
    "number": "法56条",
    "title": "建築物の各部分の高さ制限",
    "category": "集団規定",
    "description": "道路斜線・隣地斜線・北側斜線による高さ制限",
    "note": "道路斜線は全用途地域、北側斜線は住居系地域に適用"
  },
  {
    "id": "law27_1",
    "law": "建築基準法",
    "number": "法27条第1項",
    "title": "耐火建築物等としなければならない特殊建築物（3階以上）",
    "category": "防火規定",
    "description": "別表第一(い)欄(1)〜(4)項の特殊建築物で、3階以上にその用途に供する居室を有するものは耐火建築物等としなければならない",
    "note": "対象用途：劇場・病院・ホテル・共同住宅・学校・物販店舗等。3階以上に用途部分の居室があれば適用"
  },
  {
    "id": "law27_2",
    "law": "建築基準法",
    "number": "法27条第2項",
    "title": "準耐火建築物等としなければならない特殊建築物（規模）",
    "category": "防火規定",
    "description": "別表第一(い)欄(2)項の用途（病院・ホテル・旅館・共同住宅・寄宿舎・児童福祉施設等）または(4)項（物販・飲食等）は、用途部分の規模により準耐火建築物等としなければならない",
    "note": "【適用規模】(2)項用途：用途部分の床面積300㎡以上 / (4)項用途：用途部分の床面積1000㎡以上。耐火建築物等でも可"
  },
  {
    "id": "law27_3",
    "law": "建築基準法",
    "number": "法27条第3項",
    "title": "耐火・準耐火建築物等としなければならない特殊建築物（大規模）",
    "category": "防火規定",
    "description": "別表第一(い)欄の特殊建築物で(に)欄に規定する規模（延べ面積）以上のものは耐火建築物等又は準耐火建築物等としなければならない",
    "note": "倉庫は延べ面積200㎡以上、自動車車庫は150㎡以上で耐火建築物等が必要"
  },
  {
    "id": "rei112_1",
    "law": "建築基準法施行令",
    "number": "令112条第1項",
    "title": "面積区画（1500㎡）",
    "category": "防火規定",
    "description": "耐火建築物・準耐火建築物で延べ面積が1500㎡を超えるものは、1500㎡以内ごとに防火区画しなければならない",
    "note": "【適用ケース】任意の耐火・準耐火建築物、法61条（防火地域）による耐火建築物。1時間準耐火構造の床壁または特定防火設備で区画。※法21条・法27条・法61条（準防火地域）による建築物は第4項または第5項の区画も確認すること"
  },
  {
    "id": "rei112_2",
    "law": "建築基準法施行令",
    "number": "令112条第5項",
    "title": "面積区画（1000㎡）",
    "category": "防火規定",
    "description": "耐火建築物・準耐火建築物で延べ面積が1000㎡を超えるものは、法規制の根拠によっては1000㎡以内ごとに防火区画しなければならない",
    "note": "【適用ケース】①法21条による建築物（通常火災終了時間1時間以上）②法27条・法61条（準防火地域）による準耐火建築物のうちイ-1・ロ-2系（1時間準耐火基準適合）。1時間準耐火構造の床壁または特定防火設備で区画"
  },
  {
    "id": "rei112_3",
    "law": "建築基準法施行令",
    "number": "令112条第4項",
    "title": "面積区画（500㎡）",
    "category": "防火規定",
    "description": "耐火建築物・準耐火建築物で延べ面積が500㎡を超えるものは、法規制の根拠によっては500㎡以内ごとに防火区画しなければならない",
    "note": "【適用ケース】①法21条による建築物（通常火災終了時間1時間未満）②法27条・法61条（準防火地域）による準耐火建築物のうちイ-2・ロ-1系（45分準耐火基準適合）。防火設備で区画"
  },
  {
    "id": "rei112_7",
    "law": "建築基準法施行令",
    "number": "令112条第7項",
    "title": "竪穴区画",
    "category": "防火規定",
    "description": "準耐火建築物等の地階または3階以上の部分に存する竪穴部分（階段・EV昇降路・吹き抜け・メゾネット・ダクトスペース等）は防火区画しなければならない",
    "note": "階段・EV昇降路は竪穴部分に含まれるため、準耐火建築物以上で3階以上の建築物にはほぼ必ず適用される。吹き抜けがない場合も要確認"
  },
  {
    "id": "rei112_11",
    "law": "建築基準法施行令",
    "number": "令112条第11項",
    "title": "高層区画（11階以上）",
    "category": "防火規定",
    "description": "建築物の11階以上の部分は100㎡以内（内装不燃の場合200㎡・500㎡）ごとに防火区画",
    "note": "11階以上の部分が対象。内装仕上げの仕様により区画面積が変わる"
  },
  {
    "id": "rei112_18",
    "law": "建築基準法施行令",
    "number": "令112条第18項",
    "title": "異種用途区画",
    "category": "防火規定",
    "description": "自動車車庫・倉庫・物品販売店舗等の特定用途と他の用途が同一建築物内にある場合、用途間を防火区画しなければならない",
    "note": "主用途にかかわらず附属の自動車車庫等がある建築物は確認が必要。特定用途の例：自動車車庫（令2条1項三号）・倉庫・物品販売店舗・児童福祉施設等。特定用途の床面積が一定規模以上の場合に適用"
  },
  {
    "id": "rei117_126",
    "law": "建築基準法施行令",
    "number": "令117条〜令126条",
    "title": "廊下・避難階段・出入口",
    "category": "避難規定",
    "description": "法別表第1（い）欄(1)〜(4)項の特殊建築物・3階以上・延べ面積1000㎡超・令116条の2の無窓居室を有する建築物に適用される廊下幅・直通階段・避難階段・出入口等の基準（令117条〜令126条）",
    "note": "【令117条：適用範囲】特殊建築物（法別表第1(1)〜(4)項）・3階以上・延べ1000㎡超・無窓居室（令116条の2）のいずれか一つ該当で全条文が適用。無窓居室は規模不問で適用となるため要注意。<br><br>【令118条：客席からの出口幅】劇場等のみ対象。定員100人以下は1.5m以上、100人超は定員×1.5cm以上。<br><br>【令119条：廊下幅】両側居室の中廊下1.6m以上・その他1.2m以上（学校の生徒用廊下は1.8m以上）。<br><br>【令120条：直通階段の歩行距離】耐火建築物50m以下・準耐火40m以下・その他30m以下（用途・構造により異なる）。<br><br>【令121条：2以上の直通階段】5階以上は用途不問で2以上必要。劇場・共同住宅等は3・4階でも用途・面積により必要。<br><br>【令122条：避難階段の設置】5階以上または地下2階以下の居室に通じる直通階段は避難階段以上とする。<br><br>【令123条：構造】避難階段は耐火構造で区画し出入口は防火設備。特別避難階段（15階以上・地下3階以下）は付室を設け特定防火設備とする。<br><br>【令124条：物品販売店舗の出口幅】延べ1500㎡超の物品販売店舗：各階の通路幅合計は床面積3000㎡以下で240cm以上（3000㎡超は加算）。<br><br>【令125条：避難階の出口】出口幅は廊下幅の規定を準用し、直通階段の数以上の出口を確保。<br><br>【令126条：手すり壁・屋上広場等】▶第1項（全建築物に適用）：2階以上の階にあるバルコニー・廊下等の周囲、および屋上広場の周囲には、高さ1.1m以上の手すり壁・さく・金網を設けなければならない。令117条の適用有無にかかわらず2階以上の建築物に広く適用されるため要注意。▶第2項：5階以上の階に物品販売店舗がある延べ1500㎡超の建築物は、屋上に避難広場（当該用途床面積合計の1/4以上）を設ける。"
  },
  {
    "id": "rei126_2",
    "law": "建築基準法施行令",
    "number": "令126条の2",
    "title": "排煙設備",
    "category": "避難規定",
    "description": "①法別表第一(1)〜(4)項の特殊建築物で延べ面積500㎡超、②3階以上で延べ面積500㎡超、③採光無窓居室を有する建築物には排煙設備が必要",
    "note": "採光無窓居室（令116条の2第1項第2号）は規模に関わらず適用。床面積100㎡以内で準不燃材料仕上げ等の免除規定（同条第1項各号）に該当する場合は不要"
  },
  {
    "id": "rei126_4",
    "law": "建築基準法施行令",
    "number": "令126条の4",
    "title": "非常用照明装置",
    "category": "避難規定",
    "description": "法35条が適用される建築物の居室・廊下・階段等に非常用照明が必要",
    "note": "停電時に30分以上点灯できる照明（1lx以上）が必要"
  },
  {
    "id": "rei129_13_3",
    "law": "建築基準法施行令",
    "number": "令129条の13の3",
    "title": "非常用エレベーター",
    "category": "避難規定",
    "description": "高さ31mを超える建築物には非常用エレベーターを設けなければならない",
    "note": "消防活動用。1台以上設置が必要（床面積により追加台数あり）"
  },
  {
    "id": "law61",
    "law": "建築基準法",
    "number": "法61条",
    "title": "防火地域・準防火地域内の建築物",
    "category": "集団規定",
    "description": "防火地域・準防火地域内における建築物の構造制限",
    "note": "防火地域：原則耐火建築物。準防火地域：規模により耐火・準耐火建築物"
  },
  {
    "id": "rei128",
    "law": "建築基準法施行令",
    "number": "令128条",
    "title": "敷地内の通路",
    "category": "避難規定",
    "description": "避難階段の出口・建築物の出口から道路・公園等に通じる幅員1.5m以上の通路を敷地内に設けなければならない（3階以下かつ延べ面積200㎡未満は90cm以上）",
    "note": "法35条が適用される建築物が対象。通路幅は原則1.5m以上。3階以下かつ延べ面積200㎡未満の建築物は90cm以上で可"
  },
  {
    "id": "law43",
    "law": "建築基準法",
    "number": "法43条",
    "title": "敷地等と道路との関係（接道規制）",
    "category": "集団規定",
    "description": "建築物の敷地は幅員4m以上の道路に2m以上接しなければならない",
    "note": "全ての建築物に適用。4m未満の道路（2項道路）は道路中心線から2mのセットバックが必要。特定行政庁による緩和・強化規定あり（法43条第2項）"
  },
  {
    "id": "law22",
    "law": "建築基準法",
    "number": "法22条",
    "title": "屋根の延焼防止",
    "category": "集団規定",
    "description": "指定区域（市街地等）内の建築物の屋根は、市街地における火災の延焼を防止するために必要な不燃性等の性能を有する構造としなければならない",
    "note": "都市計画区域・準都市計画区域等の指定区域内に適用。防火・準防火地域は法61条が優先。屋根の仕様は告示（平12建告1361号等）で規定"
  },
  {
    "id": "law20_1_4",
    "law": "建築基準法",
    "number": "法20条第1項第4号",
    "title": "構造耐力（仕様規定・小規模建築物）",
    "category": "構造規定",
    "description": "前三号に該当しない建築物（木造：2階以下かつ延べ300㎡以下が主な対象）は、構造計算によらず仕様規定（壁量計算等）で構造耐力上の安全性を確保することができる",
    "note": "【2025年4月改正後】旧・4号建築物区分は廃止。木造の場合、2階以下かつ延べ面積300㎡以下の建築物が対象。3階以上または延べ300㎡超の木造建築物は第3号（ルート1以上）の適用となり、仕様規定のみでは不可。令3章3節の仕様規定（令46条壁量計算等）を満たす必要あり"
  },
  {
    "id": "rei126_3",
    "law": "建築基準法施行令",
    "number": "令126条の3",
    "title": "排煙設備の構造",
    "category": "避難規定",
    "description": "令126条の2により排煙設備が必要な建築物は、自然排煙または機械排煙の構造としなければならない",
    "note": "自然排煙：排煙口は天井から80cm以内・有効開口面積は床面積の1/50以上。機械排煙：防煙区画ごとに1㎡当たり毎分1㎥以上の排煙量が必要"
  },
  {
    "id": "rei114",
    "law": "建築基準法施行令",
    "number": "令114条",
    "title": "界壁・間仕切壁の防火",
    "category": "防火規定",
    "description": "共同住宅・長屋・寄宿舎等の各戸の界壁は準耐火構造以上とし、天井裏または屋根裏に達するものとしなければならない。学校・病院・ホテル等の間仕切壁も一定の防火性能が必要",
    "note": "【第1項】共同住宅・長屋・寄宿舎・下宿：各戸の界壁を準耐火構造以上で小屋裏・天井裏まで到達させる。【第2項】学校・病院・ホテル・児童福祉施設等：防火上主要な間仕切壁を準耐火構造以上とし天井裏まで到達させる"
  },
  {
    "id": "law23",
    "law": "建築基準法",
    "number": "法23条",
    "title": "外壁の延焼防止",
    "category": "集団規定",
    "description": "法22条の指定区域内の建築物は、延焼のおそれのある部分の外壁を準防火性能のある構造としなければならない",
    "note": "【延焼のおそれのある部分】隣地境界線・道路中心線・同一敷地内の2棟間の中心線から、1階は3m以内・2階以上は5m以内の外壁部分。木造・非耐火構造の建築物で特に確認が必要"
  },
  {
    "id": "law21",
    "law": "建築基準法",
    "number": "法21条",
    "title": "大規模建築物の主要構造部の防耐火性能",
    "category": "防火規定",
    "description": "高さ16mを超える、地階を除く階数が4以上、または延べ面積が3000㎡を超える建築物の主要構造部は、通常火災が終了するまで耐えられる防耐火性能が必要",
    "note": "令和4年法改正により規定が再編。延べ面積3000㎡超は通常火災終了時間（1時間以上）に対応した耐火建築物相当等の構造が必要。法27条（特殊建築物）・法61条（防火地域）とは別に大規模建築物全般に適用。令112条の面積区画（第4項・第5項）の根拠法令の一つ"
  },
  {
    "id": "law26",
    "law": "建築基準法",
    "number": "法26条",
    "title": "防火壁・防火床",
    "category": "防火規定",
    "description": "延べ面積が1000㎡を超える建築物は、防火壁または防火床によって1000㎡以内ごとに区画しなければならない",
    "note": "【適用除外】耐火建築物・準耐火建築物（令113条），法21条の通火終了時間対応建築物等。木造等の一般建築物で延べ1000㎡超の場合に特に確認が必要。防火壁の構造は令113条：自立する耐火構造・両端および上端が外壁・屋根から50cm以上突出させること等"
  },
  {
    "id": "law29",
    "law": "建築基準法",
    "number": "法29条",
    "title": "地階の居室の防湿・換気",
    "category": "一般構造",
    "description": "住宅・学校・病院等に地階を設けて居室を設ける場合は、防湿・換気・採光・排水等の衛生上必要な措置を講じなければならない",
    "note": "地階に居室がある場合に適用。令20条の2（機械換気設備の設置義務）・令22条の2（防湿の措置）等の技術的基準あり。採光の確保が困難なケースが多く、換気設備（0.5回/h以上）の設置が必要になる場合が多い"
  },
  {
    "id": "law54",
    "law": "建築基準法",
    "number": "法54条",
    "title": "外壁の後退距離",
    "category": "集団規定",
    "description": "第一種・第二種低層住居専用地域・田園住居地域内では、特定行政庁が都市計画で指定する外壁の後退距離（1m又は1.5m）に適合しなければならない",
    "note": "全低層住居専用地域で自動適用ではなく、特定行政庁が都市計画で指定した場合のみ適用。適用除外：①外壁後退距離以内に外壁・柱が来ない部分の延長が3m以下、②物置等の床面積5㎡以内（令135条の20）"
  },
  {
    "id": "law55",
    "law": "建築基準法",
    "number": "法55条",
    "title": "低層住居専用地域等の絶対高さ制限",
    "category": "集団規定",
    "description": "第一種・第二種低層住居専用地域・田園住居地域内の建築物の高さは、都市計画で定める10m又は12mを超えてはならない",
    "note": "10m・12mのどちらが適用されるかは特定行政庁が都市計画で指定。法56条（道路斜線・北側斜線等）も別途適用される。高さの算定は令2条第1項六号（平均地盤面からの高さ）による"
  },
  {
    "id": "law56_2",
    "law": "建築基準法",
    "number": "法56条の2",
    "title": "日影規制",
    "category": "集団規定",
    "description": "住居系・近隣商業・準工業地域等において、一定の高さ以上の建築物は別表第四に規定する日影時間を超えてはならない",
    "note": "対象地域：住居系全地域・近隣商業・準工業地域（工業・工業専用地域は除外）。対象の高さ：軒高7m超または地階を除く階数3以上（別表第四）。日影の計測面：平均地盤面から1.5m（低層）または4m（中高層等）の水平面。規制内容は自治体の条例等で異なる場合あり"
  },
  {
    "id": "rei116_2",
    "law": "建築基準法施行令",
    "number": "令116条の2",
    "title": "無窓居室の判定基準",
    "category": "一般構造",
    "description": "採光無窓居室・排煙無窓居室の定義。これに該当すると規模条件に関わらず法35条・令126条の2の避難規定・排煙設備が適用される",
    "note": "【採光無窓居室（第1項第1号）】採光有効面積が床面積の1/20未満の居室 → 法35条が規模不問で適用（非常照明・廊下幅等）。【排煙無窓居室（第1項第2号）】排煙上有効な開口面積が床面積の1/50未満かつ1㎡未満の居室 → 令126条の2の排煙設備が規模不問で必要。天窓・ハイサイドライトの有効面積算定に注意"
  },
  {
    "id": "law20_1_3",
    "law": "建築基準法",
    "number": "法20条第1項第3号",
    "title": "構造耐力（中規模建築物・許容応力度計算）",
    "category": "構造規定",
    "description": "高さ60m以下の建築物のうち第2号以外のもの：木造は3階以上または延べ面積300㎡超が対象。令81条・令82条の許容応力度計算（ルート1）により構造の安全性を確認しなければならない",
    "note": "木造建築物では3階以上または延べ面積300㎡超のものが主な対象。第2号（ルート2・3）に該当しない場合はルート1（許容応力度計算）が必要。令81条第3項の大臣認定プログラムの使用も可"
  },
  {
    "id": "law31",
    "law": "建築基準法",
    "number": "法31条",
    "title": "便所",
    "category": "一般構造",
    "description": "建築物の便所は衛生上支障のない位置・構造としなければならない。下水道処理区域内の建築物は水洗便所としなければならない",
    "note": "下水道処理区域内は水洗便所が義務（令35条）。くみ取り式は臭気・害虫等に配慮した構造（令29条〜令34条）。建設地が下水道処理区域内かどうかは自治体に確認が必要"
  },
  {
    "id": "law33",
    "law": "建築基準法",
    "number": "法33条",
    "title": "避雷設備",
    "category": "一般構造",
    "description": "高さ20mを超える建築物には避雷設備（避雷針等）を設けなければならない",
    "note": "令129条の14（設置基準）・令129条の15（構造）による。平均地盤面から高さ20mを超える部分を雷撃から保護。政令で定める建築物（危険物貯蔵場等）は一部適用外。受雷部・引下げ導線・接地極の構成が必要"
  },
  {
    "id": "law34",
    "law": "建築基準法",
    "number": "法34条",
    "title": "昇降機（エレベーター）の安全基準",
    "category": "一般構造",
    "description": "建築物にエレベーターを設ける場合は、安全装置・構造等の技術的基準（令129条の3以降）に適合しなければならない。高さ31mを超える建築物は非常用エレベーターの設置が義務（第2項）",
    "note": "一般EV：令129条の3〜令129条の12の安全装置・かご・昇降路等の基準に適合が必要。EV設置は建築基準法上の義務ではないが、バリアフリー法・条例等で求められる場合あり。非常用EV（高さ31m超）は法34条第2項・令129条の13の3による"
  },
  {
    "id": "rei77",
    "law": "建築基準法施行令",
    "number": "令77条・令93条",
    "title": "基礎の構造・地盤調査",
    "category": "構造規定",
    "description": "建築物の基礎は地盤の長期許容応力度に応じた種類・構造としなければならない。令93条により地盤の許容応力度を調査・確認する",
    "note": "令93条の地盤調査により長期許容応力度を確認後、基礎形式を選定（直接基礎・杭基礎等）。地耐力の目安：長期許容応力度20kN/㎡未満は原則杭基礎等。令38条（基礎の構造種類）も参照。地盤沈下・液状化リスクは別途検討が必要"
  },
  {
    "id": "rei128_4",
    "law": "建築基準法施行令",
    "number": "令128条の4・128条の5",
    "title": "内装制限の適用建築物と仕様",
    "category": "防火規定",
    "description": "法35条の2（内装制限）の施行令。特殊建築物の用途部分・大規模建築物・無窓居室・火気使用室の内装仕上げを不燃・準不燃・難燃材料で制限する",
    "note": "【令128条の4】対象：(1)特殊建築物の一定規模以上の用途部分、(2)延べ1000㎡超の大規模建築物、(3)無窓居室、(4)火気使用室（キッチン等）。【令128条の5】仕上材料：主要構造部が耐火・準耐火かどうか、および室の種類により不燃・準不燃・難燃材料の別が異なる"
  },
  {
    "id": "rei_wood",
    "law": "建築基準法施行令",
    "number": "令40条〜令50条（第三章第三節）",
    "title": "木造の構造基準・壁量計算",
    "category": "構造規定",
    "description": "木造建築物の各部材（柱・梁・筋かい・仕口・継手等）の品質・構造・接合に関する技術的基準。令46条により各階・各方向の耐力壁（筋かい・構造用面材等）は、床面積・見付面積から算定した必要壁量以上としなければならない",
    "note": "主要規定：令40条（木材の品質・含水率）・令41条（柱の小径：建物高さの1/33等）・令44条（筋かいの設置）・令47条（仕口・継手：ドリフトピン・ボルト等）・令49条（外壁・床下の防腐措置）。【令46条壁量計算】令46条第4項の表により必要壁量（cm/㎡）を算定。存在壁量が必要壁量以上であることを確認。筋かいの種類・角度により有効倍率が異なる。【2025年4月改正後】旧・4号特例廃止により、3階以上または延べ300㎡超の木造建築物も仕様規定の審査対象となった"
  },
  {
    "id": "rei_masonry",
    "law": "建築基準法施行令",
    "number": "令51条〜令62条（第三章第四節）",
    "title": "組積造の構造基準",
    "category": "構造規定",
    "description": "れんが造・石造・無筋コンクリート造等の組積造建築物の壁・開口部・臥梁・床・屋根等の構造基準",
    "note": "令52条（組積材の品質）・令55条（壁の長さと開口幅：壁長さは開口幅の3倍以上等）・令56条（壁の厚さ：最小20cm以上）・令57条（臥梁の設置）・令60条（間仕切壁）。組積造は耐震性が低いため現在はほとんど新築に用いられず、既存建築物の増改築が主な適用場面"
  },
  {
    "id": "rei_block",
    "law": "建築基準法施行令",
    "number": "令62条の2〜令62条の8（第三章第五節）",
    "title": "補強コンクリートブロック造の構造基準",
    "category": "構造規定",
    "description": "補強コンクリートブロック造の耐力壁・配置・壁量・臥梁・補強材等の構造基準",
    "note": "令62条の3（耐力壁の厚さ・配筋：縦横共に径9mm以上等）・令62条の4（耐力壁の配置：直交壁を設ける等）・令62条の5（壁量：15cm/㎡以上）・令62条の6（臥梁：各階の耐力壁の上部に設置）。高さ制限：高さ11m以下・軒高9m以下（令62条の3第6項）"
  },
  {
    "id": "rei_steel",
    "law": "建築基準法施行令",
    "number": "令63条〜令70条（第三章第六節）",
    "title": "鉄骨造の構造基準",
    "category": "構造規定",
    "description": "鉄骨造の材料・圧縮材の有効細長比・柱脚・接合（溶接・高力ボルト）・通し柱等の構造基準",
    "note": "令63条（鋼材の品質：JIS規格等）・令64条（圧縮材の有効細長比：200以下）・令65条（柱脚部：アンカーボルト・ベースプレート等）・令66条（接合部の強度確保）・令67条（高力ボルト・溶接の施工基準）・令68条（通し柱の設置）。耐火・防耐火被覆（耐火建築物等の場合）も合わせて確認"
  },
  {
    "id": "rei_rc",
    "law": "建築基準法施行令",
    "number": "令71条〜令79条の3（第三章第七節）",
    "title": "鉄筋コンクリート造の構造基準",
    "category": "構造規定",
    "description": "RC造のコンクリート強度・養生・打込み・鉄筋の継手・定着・かぶり厚さ・帯筋・あばら筋等の構造基準",
    "note": "令71条（コンクリートの強度：設計基準強度の確認）・令73条（鉄筋の継手・定着長さ）・令77条（柱の帯筋：径6mm以上・間隔150mm以下等）・令78条の2（梁のあばら筋）・令79条（かぶり厚さ：屋外部分2cm以上・基礎6cm以上等）。中性化・塩害対策も設計上の重要事項"
  },
  {
    "id": "rei_src",
    "law": "建築基準法施行令",
    "number": "令79条の4（第三章第七節の二）",
    "title": "鉄骨鉄筋コンクリート造の構造基準",
    "category": "構造規定",
    "description": "SRC造の骨組・コンクリート・鉄筋に関する技術的基準（RC造・鉄骨造の規定を準用）",
    "note": "令79条の4によりRC造の規定（令71条〜令79条の3）と鉄骨造の規定（令64条〜令68条）を準用。鉄骨とコンクリートの一体性確保・かぶり厚さ・鉄骨のサイズとRC断面の整合性に注意。超高層建築物で多用される複合構造"
  },
  {
    "id": "law40",
    "law": "建築基準法",
    "number": "法40条",
    "title": "地方公共団体の条例による付加制限",
    "category": "一般構造",
    "description": "地方公共団体は、その地方の気候・風土の特殊性または特殊建築物の用途・規模から必要な場合、建築物の敷地・構造・建築設備に関して安全上・防火上・衛生上必要な制限を条例で付加することができる",
    "note": "法39条（災害危険区域）・法40条は全国一律の基準に上乗せして地方独自の制限を設ける根拠規定。例：豪雪地域の積雪荷重の割増・沖縄の防風規定・東京都の単体規定条例等。適用される自治体の条例を個別に確認する必要がある。法6条1項の確認申請では条例制限も審査対象となる"
  },
  {
    "id": "law68_2",
    "law": "建築基準法",
    "number": "法68条の2",
    "title": "地区計画等の区域内における建築物の制限",
    "category": "集団規定",
    "description": "地区計画・特定街区・景観地区・風致地区等が定められた区域内において、市区町村は条例で建築物の用途・形態・高さ・壁面の位置・敷地面積の最低限度等を制限することができる",
    "note": "地区計画・特定街区・景観地区・風致地区等が定められた区域において市区町村が条例化している場合に適用される。条例化されていない場合は制限なし。対象かどうかは都市計画図・市区町村窓口で地区計画等の有無を確認して判断すること。条例化されている場合は用途・容積率・建蔽率・高さ・壁面位置・外壁後退距離等の独自制限が課される。法68条の3〜9（地区計画等の区域内の特例）も合わせて参照"
  },
  {
    "id": "law19",
    "law": "建築基準法",
    "number": "法19条",
    "title": "敷地の衛生及び安全",
    "category": "一般構造",
    "description": "建築物の敷地は道路境界より高くしなければならない。湿潤な土地・がけ崩れ等の危険のある土地に建築する場合は、盛土・地盤改良・擁壁の設置等、安全上・衛生上必要な措置を講じなければならない",
    "note": "第1項：敷地は接道より高く（やむを得ない場合は排水・防水措置）。第2項：湿潤地・出水危険地は盛土等が必要。第4項：がけ崩れ・地すべりのおそれのある土地は擁壁設置等の措置。令80条の3（がけに近接する建築物の制限）も参照"
  },
  {
    "id": "law25",
    "law": "建築基準法",
    "number": "法25条",
    "title": "大規模の木造建築物等の外壁等",
    "category": "防火規定",
    "description": "法22条の指定区域内で延べ面積が1000㎡を超える木造建築物等は、外壁・軒裏のうち延焼のおそれのある部分を防火構造としなければならない",
    "note": "対象：法22条指定区域（都市計画区域等）内の木造・組積造等で延べ面積1000㎡超。耐火建築物・準耐火建築物は適用除外。防火構造の仕様は令108条・告示による。法22条〜法25条は指定区域内の延焼防止に関する一連の規定"
  },
  {
    "id": "law30",
    "law": "建築基準法",
    "number": "法30条",
    "title": "長屋・共同住宅の界壁",
    "category": "一般構造",
    "description": "長屋・共同住宅の各戸の界壁は、小屋裏または天井裏に達するものとし、その構造は遮音性能に関して政令で定める技術的基準に適合しなければならない",
    "note": "遮音性能の基準：令22条の3・告示1827号による透過損失（125Hzで25dB以上・500Hzで45dB以上）。令114条第1項（準耐火構造・小屋裏到達）も同時に適用される。リノベーション時も既存界壁の確認が必要"
  },
  {
    "id": "law32",
    "law": "建築基準法",
    "number": "法32条",
    "title": "電気設備",
    "category": "一般構造",
    "description": "建築物の電気設備は、電気事業法等の電気工作物に係る法令および建築基準法施行令で定める技術的基準に適合しなければならない",
    "note": "令129条の14（電気設備の構造基準）等による。避雷設備（法33条）・非常用照明（令126条の4）・非常用エレベーターの電源設備等も関連。電気設備の設計・施工は電気工事士法の有資格者が行うこと"
  },
  {
    "id": "law37",
    "law": "建築基準法",
    "number": "法37条",
    "title": "建築材料の品質",
    "category": "一般構造",
    "description": "建築物の基礎・主要構造部その他安全上・防火上・衛生上重要な部分に使用する建築材料は、別表第三のJIS・JASに適合するもの、または大臣認定（指定建築材料）でなければならない",
    "note": "対象材料（別表第三）：木材・鋼材・コンクリート・骨材・混和材料・高力ボルト・アンカーボルト等。JIS・JAS品以外を使用する場合は大臣認定が必要。施工時の品質管理・材料証明書の保管が重要"
  },
  {
    "id": "law62",
    "law": "建築基準法",
    "number": "法62条",
    "title": "防火・準防火地域内の屋根",
    "category": "集団規定",
    "description": "防火地域・準防火地域内の建築物の屋根の構造は、市街地の火災を想定した火の粉による火災発生を防止するために必要な政令の技術的基準（令136条の2の2）に適合するものとしなければならない",
    "note": "防火・準防火地域内の全建築物が対象。不燃材料（瓦・スレート・金属板等）またはこれに準ずる性能のものを使用する必要がある。法22条の指定区域と重複する場合は本条（法62条）が優先適用される"
  },
  {
    "id": "rei23",
    "law": "建築基準法施行令",
    "number": "令23条",
    "title": "階段の幅・蹴上・踏面",
    "category": "一般構造",
    "description": "建築物の階段は、用途・規模に応じて幅・蹴上・踏面の寸法基準に適合しなければならない",
    "note": "【住宅用】幅75cm以上・蹴上23cm以下・踏面15cm以上。【共同住宅の共用・特殊建築物等・3階以上・1000㎡超】幅120cm以上・蹴上22cm以下・踏面21cm以上。【小中学校（生徒用）】幅140cm以上。屋外階段は所定の緩和あり（共用等：90cm、住宅等：60cm）。2階以上の建築物に適用"
  },
  {
    "id": "rei24",
    "law": "建築基準法施行令",
    "number": "令24条",
    "title": "踊り場の位置・踏幅",
    "category": "一般構造",
    "description": "高さが4m（特殊建築物等の直通階段等は3m）を超える階段には踊り場を設けなければならない",
    "note": "設置間隔：高さ3m以内ごと（令23条の表第1〜2号：特殊建築物等）、4m以内ごと（第3〜4号：住宅等）。踊り場の踏幅は階段の幅以上。2階以上の建築物の階段に適用"
  },
  {
    "id": "rei25",
    "law": "建築基準法施行令",
    "number": "令25条",
    "title": "階段の手すり等",
    "category": "一般構造",
    "description": "階段には手すりを設けなければならない。高さ1mを超える階段・踊り場の両側には壁または手すり壁等を設けなければならない",
    "note": "手すり設置は2階以上の建築物の階段に適用（高さ1m以下の部分は除外）。階段の幅が3mを超える場合は中間に手すり等が必要。令26条（傾斜路）にも準用される"
  },
  {
    "id": "law64",
    "law": "建築基準法",
    "number": "法64条",
    "title": "看板等の防火措置",
    "category": "集団規定",
    "description": "防火地域内にある看板・広告塔・装飾塔等で、建築物の屋上に設けるものまたは高さ3mを超えるものは、その主要部分を不燃材料で造り、または覆わなければならない",
    "note": "対象：防火地域のみ（準防火地域は本条の対象外）。屋上設置の看板または高さ3m超の看板・広告塔が条件。高さ4mを超える広告塔は法88条により確認申請が必要（令138条第1項第3号）。主要部分（骨組・枠組等）を不燃材料（鉄・アルミ等）で造ることが必要"
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
  '都市計画区域（用途地域なし）'
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

function isSpecialBuilding(useType) {
  const special = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
    '病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎',
    '児童福祉施設', '学校', '体育館', '博物館', '美術館', '図書館',
    'ボウリング場', 'スキー場', 'スケート場', '水泳場',
    '百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ',
    'ナイトクラブ', 'バー', 'ダンスホール', '遊技場', '公衆浴場',
    '待合', '料理店', '飲食店', '物品販売業を営む店舗',
    '倉庫', '自動車車庫', '危険物の貯蔵場', 'と畜場', '火葬場', '汚物処理場'];
  return special.includes(useType);
}

// 令117条（5章2節の適用範囲）：法別表第1（い）欄(1)〜(4)項の特殊建築物・3階以上・延べ1000㎡超
function matchesLaw117(inp) {
  const targets = [
    '劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
    '病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎', '児童福祉施設',
    '学校', '体育館', '博物館', '美術館', '図書館',
    '百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
    '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'
  ];
  return targets.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
}

const NON_WOOD = ['RC造', '鉄骨造', 'SRC造', '組積造'];

function matchesArticle(article, inp) {
  const id = article.id;
  const c = article.conditions;

  if (id === 'law20_1') {
    return inp.height > 60;
  }

  if (id === 'law20_1_2') {
    if (inp.height > 60) return false;
    return inp.stories >= 4 || inp.height > 13;
  }

  if (id === 'law28') {
    const targets = ['住宅', '長屋', '共同住宅', '寄宿舎', '下宿', '学校', '病院', '診療所', '児童福祉施設'];
    return targets.includes(inp.useType);
  }

  if (id === 'law28_2') {
    return true;
  }

  if (id === 'law35') {
    const targets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿',
      '学校', '体育館', '百貨店', 'マーケット', '展示場',
      'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
      '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }

  if (id === 'law35_2') {
    const targets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿',
      '学校', '体育館', '百貨店', 'マーケット', '展示場',
      'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
      '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets.includes(inp.useType) || inp.totalFloorArea > 1000;
  }

  if (id === 'law48') {
    return ZONING_AREAS.includes(inp.areaType);
  }

  if (id === 'law52' || id === 'law53' || id === 'law56') {
    return URBAN_AREAS.includes(inp.areaType);
  }

  if (id === 'law27_1') {
    const targets1to4 = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎', '児童福祉施設',
      '学校', '体育館', '博物館', '美術館', '図書館', 'ボウリング場',
      '百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ', 'ナイトクラブ',
      'バー', 'ダンスホール', '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets1to4.includes(inp.useType) && inp.stories >= 3;
  }

  if (id === 'law27_2') {
    const targets2 = ['病院', '診療所', 'ホテル', '旅館', '下宿', '共同住宅', '寄宿舎', '児童福祉施設'];
    const targets4 = ['百貨店', 'マーケット', '展示場', 'キャバレー', 'カフェ', 'ナイトクラブ',
      'バー', 'ダンスホール', '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets2.includes(inp.useType) || targets4.includes(inp.useType);
  }

  if (id === 'law27_3') {
    if (inp.useType === '倉庫' && inp.totalFloorArea >= 200) return true;
    if (inp.useType === '自動車車庫' && inp.totalFloorArea >= 150) return true;
    return false;
  }

  if (id === 'rei112_1') {
    const isFR = inp.fireResistance === '耐火建築物' || inp.fireResistance === '準耐火建築物';
    return isFR && inp.totalFloorArea > 1500;
  }

  if (id === 'rei112_2') {
    const isFR = inp.fireResistance === '耐火建築物' || inp.fireResistance === '準耐火建築物';
    return isFR && inp.totalFloorArea > 1000;
  }

  if (id === 'rei112_3') {
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
    const specialTargets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿', '児童福祉施設',
      '学校', '体育館', '百貨店', 'マーケット', '展示場', '物品販売業を営む店舗',
      '遊技場', '公衆浴場', '飲食店', '料理店'];
    if (specialTargets.includes(inp.useType) && inp.totalFloorArea > 500) return true;
    if (inp.stories >= 3 && inp.totalFloorArea > 500) return true;
    return false;
  }

  if (id === 'rei126_4') {
    const targets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿',
      '学校', '体育館', '百貨店', 'マーケット', '展示場', '物品販売業を営む店舗',
      '遊技場', '公衆浴場', '飲食店', '料理店'];
    return targets.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }

  if (id === 'rei128') {
    const targets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿',
      '学校', '体育館', '百貨店', 'マーケット', '展示場',
      'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
      '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets.includes(inp.useType) || inp.stories >= 3 || inp.totalFloorArea > 1000;
  }

  if (id === 'rei129_13_3') {
    return inp.height > 31;
  }

  if (id === 'law61') {
    return inp.fireZone === '防火地域' || inp.fireZone === '準防火地域';
  }

  if (id === 'law43') {
    return true;
  }

  if (id === 'law22') {
    return URBAN_AREAS.includes(inp.areaType);
  }

  if (id === 'law20_1_4') {
    if (inp.height > 60) return false;
    if (inp.stories >= 4 || inp.height > 13) return false;
    return inp.stories <= 2 && inp.totalFloorArea <= 300;
  }

  if (id === 'rei126_3') {
    const specialTargets = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿', '児童福祉施設',
      '学校', '体育館', '百貨店', 'マーケット', '展示場', '物品販売業を営む店舗',
      '遊技場', '公衆浴場', '飲食店', '料理店'];
    if (specialTargets.includes(inp.useType) && inp.totalFloorArea > 500) return true;
    if (inp.stories >= 3 && inp.totalFloorArea > 500) return true;
    return false;
  }

  if (id === 'rei114') {
    const targets = ['長屋', '共同住宅', '寄宿舎', '下宿',
      '病院', '診療所', 'ホテル', '旅館', '児童福祉施設', '学校'];
    return targets.includes(inp.useType);
  }

  if (id === 'law23') {
    if (inp.structure && inp.structure !== '木造') return false;
    return URBAN_AREAS.includes(inp.areaType);
  }

  if (id === 'law21') {
    return inp.totalFloorArea > 3000 || inp.stories >= 4 || inp.height > 16;
  }

  if (id === 'law26') {
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

  if (id === 'law20_1_3') {
    if (inp.height > 60) return false;
    if (inp.stories >= 4 || inp.height > 13) return false;
    if (inp.structure === '木造' || !inp.structure) {
      return inp.stories >= 3 || inp.totalFloorArea > 300;
    }
    return true;
  }

  if (id === 'law31') {
    return true;
  }

  if (id === 'law33') {
    return inp.height > 20;
  }

  if (id === 'law34') {
    return inp.stories >= 6 || inp.height > 20;
  }

  if (id === 'rei77') {
    return true;
  }

  if (id === 'rei128_4') {
    const targets128 = ['劇場', '映画館', '演芸場', '観覧場', '公会堂', '集会場',
      '病院', '診療所', 'ホテル', '旅館', '共同住宅', '寄宿舎', '下宿',
      '学校', '体育館', '百貨店', 'マーケット', '展示場',
      'キャバレー', 'カフェ', 'ナイトクラブ', 'バー', 'ダンスホール',
      '遊技場', '公衆浴場', '待合', '料理店', '飲食店', '物品販売業を営む店舗'];
    return targets128.includes(inp.useType) || inp.totalFloorArea > 1000;
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
    if (inp.structure && inp.structure !== '木造') return false;
    return URBAN_AREAS.includes(inp.areaType) && inp.totalFloorArea > 1000;
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
      <div class="article-note">📌 ${a.note}</div>
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
