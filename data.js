/* 英语二六件套 · 卡片数据（速查 + 挖空 + 例题共用）
   全部卡片 plain:true —— 英文纯文本模式，跳过 KaTeX 渲染
   freq: 考频 2-5（★越多越常考）  tier: 难度档 1低 2中 3高
   依据 2010-2025 年英语二真题词频、写作与阅读题型考频整理 */
window.MATH2_DATA = {
  title: "英语二六件套",
  subtitle: "考研英语二 · 高频抓分记忆",
  skip: "听力、口语（初试不考）；英一专属的排序题、七选五、选句填空",
  modules: [
    {
      id: "vocab",
      no: "一",
      name: "核心词汇",
      blurb: "真题高频词 · 熟词僻义 · 辨析 · 词根",
      exam: "阅读地基",
      cards: [
        {
          id: "voc-freq-econ",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "真题高频词 · 经济类",
          hint: "2010-2025 阅读几乎年年出现经济话题，先混脸熟。",
          reveal: [
            { tex: "economy n. 经济；节约　　inflation n. 通货膨胀" },
            { tex: "recession n. （经济）衰退　　prosperity n. 繁荣" },
            { tex: "budget n. 预算　　deficit n. 赤字；不足" }
          ],
          holes: ["经济；节约", "通货膨胀", "（经济）衰退", "繁荣", "预算", "赤字；不足"],
          mask: [
            "economy {{1}}　inflation {{2}}",
            "recession {{3}}　prosperity {{4}}",
            "budget {{5}}　deficit {{6}}"
          ],
          notes: [
            "recession 常搭配 economic / financial：economic recession 经济衰退。",
            "deficit 的反义词 surplus（盈余），贸易话题常成对出现。"
          ]
        },
        {
          id: "voc-freq-tech",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "真题高频词 · 科技类",
          hint: "AI、自动化、隐私是近年阅读热题。",
          reveal: [
            { tex: "innovation n. 创新　　artificial adj. 人工的；人造的" },
            { tex: "digital adj. 数字的　　automation n. 自动化" },
            { tex: "privacy n. 隐私　　database n. 数据库" }
          ],
          holes: ["创新", "人工的；人造的", "数字的", "自动化", "隐私", "数据库"],
          mask: [
            "innovation {{1}}　artificial {{2}}",
            "digital {{3}}　automation {{4}}",
            "privacy {{5}}　database {{6}}"
          ],
          notes: ["artificial intelligence = AI；artificial 单独考时常取「人工的、假的」义。"]
        },
        {
          id: "voc-freq-social",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "真题高频词 · 社会类",
          hint: "社会话题词偏正式，认识即可，不用会拼。",
          reveal: [
            { tex: "community n. 社区；群体；界　　inequality n. 不平等" },
            { tex: "welfare n. 福利；幸福　　urban adj. 城市的" },
            { tex: "migration n. 迁移；移民　　demographic adj. 人口（统计）的" }
          ],
          holes: ["社区；群体；界", "不平等", "福利；幸福", "城市的", "迁移；移民", "人口（统计）的"],
          mask: [
            "community {{1}}　inequality {{2}}",
            "welfare {{3}}　urban {{4}}",
            "migration {{5}}　demographic {{6}}"
          ]
        },
        {
          id: "voc-freq-env",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "真题高频词 · 环境类",
          hint: "环境话题常与政策、企业责任一起考。",
          reveal: [
            { tex: "sustainable adj. 可持续的　　emission n. 排放（物）" },
            { tex: "conservation n. 保护；节约　　resource n. 资源" },
            { tex: "climate n. 气候　　ecosystem n. 生态系统" }
          ],
          holes: ["可持续的", "排放（物）", "保护；节约", "资源", "气候", "生态系统"],
          mask: [
            "sustainable {{1}}　emission {{2}}",
            "conservation {{3}}　resource {{4}}",
            "climate {{5}}　ecosystem {{6}}"
          ],
          notes: ["sustainable development 可持续发展，写作结尾段万能词。"]
        },
        {
          id: "voc-freq-edu",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "真题高频词 · 教育类",
          hint: "教育类文章是英二阅读的常客。",
          reveal: [
            { tex: "curriculum n. （全部）课程　　literacy n. 读写能力" },
            { tex: "tuition n. 学费；教学　　academic adj. 学术的；学业的" },
            { tex: "compulsory adj. 义务的；强制的　　dropout n. 辍学者" }
          ],
          holes: ["（全部）课程", "读写能力", "学费；教学", "学术的；学业的", "义务的；强制的", "辍学者"],
          mask: [
            "curriculum {{1}}　literacy {{2}}",
            "tuition {{3}}　academic {{4}}",
            "compulsory {{5}}　dropout {{6}}"
          ],
          notes: ["course 是一门课，curriculum 是全部课程体系；compulsory education 义务教育。"]
        },
        {
          id: "voc-freq-verb",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "真题高频动词",
          hint: "选项动词常和原文动词做同义替换，这 6 个最活跃。",
          reveal: [
            { tex: "advocate v. 提倡；主张　　undermine v. 逐渐削弱；损害" },
            { tex: "facilitate v. 促进；使便利　　implement v. 实施；执行" },
            { tex: "acknowledge v. 承认；致谢　　eliminate v. 消除；淘汰" }
          ],
          holes: ["提倡；主张", "逐渐削弱；损害", "促进；使便利", "实施；执行", "承认；致谢", "消除；淘汰"],
          mask: [
            "advocate {{1}}　undermine {{2}}",
            "facilitate {{3}}　implement {{4}}",
            "acknowledge {{5}}　eliminate {{6}}"
          ]
        },
        {
          id: "voc-freq-adj",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "真题高频形容词",
          hint: "判断作者态度、给文章定调的词。",
          reveal: [
            { tex: "significant adj. 显著的；重要的　　essential adj. 必不可少的" },
            { tex: "controversial adj. 有争议的　　inevitable adj. 不可避免的" },
            { tex: "potential adj. 潜在的 n. 潜力　　appropriate adj. 恰当的" }
          ],
          holes: ["显著的；重要的", "必不可少的", "有争议的", "不可避免的", "潜在的；潜力", "恰当的"],
          mask: [
            "significant {{1}}　essential {{2}}",
            "controversial {{3}}　inevitable {{4}}",
            "potential {{5}}　appropriate {{6}}"
          ]
        },
        {
          id: "voc-piyi-1",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "熟词僻义 · address / course / fine / game",
          hint: "阅读里 90% 不是「地址」的意思。",
          reveal: [
            { tex: "address 僻义：v. 处理、应对（=deal with）；v. 向……发表讲话" },
            { tex: "course 僻义：n. 进程；航向；（一道）菜" },
            { tex: "fine 僻义：adj. 细微的；v. / n. 罚款" },
            { tex: "game 僻义：n. 猎物；博弈" }
          ],
          holes: ["处理、应对", "向……发表讲话", "进程；航向", "细微的", "罚款", "猎物；博弈"],
          mask: [
            "address：①地址 ②v. {{1}} ③v. {{2}}",
            "course：①课程 ②n. {{3}}（一道菜）",
            "fine：①好的 ②adj. {{4}} ③v./n. {{5}}",
            "game：①游戏 ②n. {{6}}"
          ],
          notes: ["address a problem / issue = deal with，真题反复出现。"]
        },
        {
          id: "voc-piyi-2",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "熟词僻义 · novel / policy / school / plant",
          hint: "四个名词，僻义都是名词或形容词。",
          reveal: [
            { tex: "novel 僻义：adj. 新颖的；新奇的" },
            { tex: "policy 僻义：n. 保险单" },
            { tex: "school 僻义：n. 学派；（鱼等的）群" },
            { tex: "plant 僻义：n. 工厂；v. 栽（赃）" }
          ],
          holes: ["新颖的；新奇的", "保险单", "学派；（鱼等的）群", "工厂", "栽（赃）"],
          mask: [
            "novel：①小说 ②adj. {{1}}",
            "policy：①政策 ②n. {{2}}",
            "school：①学校 ②n. {{3}}",
            "plant：①植物 ②n. {{4}} ③v. {{5}}"
          ]
        },
        {
          id: "voc-piyi-3",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "熟词僻义 · coin / mean / bill / firm",
          hint: "词性转换是僻义题的惯用手法。",
          reveal: [
            { tex: "coin 僻义：v. 杜撰、创造（新词）" },
            { tex: "mean 僻义：adj. 吝啬的；平均的" },
            { tex: "bill 僻义：n. 法案；议案" },
            { tex: "firm 僻义：adj. 坚定的；稳固的" }
          ],
          holes: ["杜撰、创造（新词）", "吝啬的；平均的", "法案；议案", "坚定的；稳固的"],
          mask: [
            "coin：①硬币 ②v. {{1}}",
            "mean：①意思是 ②adj. {{2}}",
            "bill：①账单 ②n. {{3}}",
            "firm：①公司 ②adj. {{4}}"
          ]
        },
        {
          id: "voc-piyi-4",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 3,
          title: "熟词僻义 · doctor / weather / buy / pool",
          hint: "名词动用，僻义全靠语境猜。",
          reveal: [
            { tex: "doctor 僻义：v. 篡改；伪造" },
            { tex: "weather 僻义：v. 经受住（风雨、危机）" },
            { tex: "buy 僻义：v. 相信、接受（说法）" },
            { tex: "pool 僻义：v. 集中（资源）共用" }
          ],
          holes: ["篡改；伪造", "经受住", "相信、接受", "集中（资源）共用"],
          mask: [
            "doctor：①医生 ②v. {{1}}",
            "weather：①天气 ②v. {{2}}",
            "buy：①买 ②v. {{3}}（说法、观点）",
            "pool：①水池 ②v. {{4}}"
          ],
          notes: ["weather the crisis 经受住危机；pool resources 集中资源，均为真题原搭配。"]
        },
        {
          id: "voc-confuse-1",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "辨析 · affect / effect",
          hint: "一动一名，再各带一个形容词。",
          reveal: [
            { tex: "affect v. 影响；（疾病）侵袭　　effect n. 影响；效果" },
            { tex: "effective adj. 有效的　　efficient adj. 效率高的" }
          ],
          holes: ["影响；（疾病）侵袭", "影响；效果", "有效的", "效率高的"],
          mask: [
            "affect v. {{1}}　effect n. {{2}}",
            "effective adj. {{3}}　efficient adj. {{4}}"
          ],
          notes: ["have an effect on = affect；effective 强调「管用」，efficient 强调「省时不浪费」。"]
        },
        {
          id: "voc-confuse-2",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "辨析 · rise / raise / arise / arouse",
          hint: "先看及物不及物，再分意思。",
          reveal: [
            { tex: "rise vi. 上升；上涨（rose, risen）" },
            { tex: "raise vt. 举起；筹集；抚养；提出" },
            { tex: "arise vi. （问题、情况）出现；产生" },
            { tex: "arouse vt. 唤起（兴趣、怀疑）" }
          ],
          holes: ["上升；上涨", "举起；筹集；抚养", "出现；产生", "唤起"],
          mask: [
            "rise vi. {{1}}（rose, risen）",
            "raise vt. {{2}}；提出",
            "arise vi. {{3}}（问题、情况）",
            "arouse vt. {{4}}（兴趣、怀疑）"
          ],
          notes: ["不及物：rise / arise；及物：raise / arouse。完形填空常考这组。"]
        },
        {
          id: "voc-confuse-3",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "辨析 · economic / economical 与 historic / historical",
          hint: "-ic 与 -ical 结尾，意思常常分家。",
          reveal: [
            { tex: "economic adj. 经济的；与经济有关的　　economical adj. 节约的；实惠的" },
            { tex: "historic adj. 有历史意义的；历史性的　　historical adj. （有关）历史的" }
          ],
          holes: ["经济的；与经济有关的", "节约的；实惠的", "有历史意义的；历史性的", "（有关）历史的"],
          mask: [
            "economic {{1}}　economical {{2}}",
            "historic {{3}}　historical {{4}}"
          ],
          notes: ["an economic crisis 经济危机；a historic moment 历史性时刻。"]
        },
        {
          id: "voc-confuse-4",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "辨析 · sensible / sensitive 与 complement / compliment",
          hint: "形近词，意思差很远。",
          reveal: [
            { tex: "sensible adj. 明智的；可察觉的　　sensitive adj. 敏感的；灵敏的" },
            { tex: "complement n./v. 补充；补足物　　compliment n./v. 赞美；恭维" }
          ],
          holes: ["明智的；可察觉的", "敏感的；灵敏的", "补充；补足物", "赞美；恭维"],
          mask: [
            "sensible {{1}}　sensitive {{2}}",
            "complement {{3}}　compliment {{4}}"
          ]
        },
        {
          id: "voc-confuse-5",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 3,
          title: "辨析 · continuous / continual 与 disinterested / uninterested",
          hint: "态度题里 disinterested 是坑王。",
          reveal: [
            { tex: "continuous adj. 连续不断的（无间断）　　continual adj. 反复发生的（有间断）" },
            { tex: "disinterested adj. 公正的；无私的　　uninterested adj. 不感兴趣的" }
          ],
          holes: ["连续不断的（无间断）", "反复发生的（有间断）", "公正的；无私的", "不感兴趣的"],
          mask: [
            "continuous {{1}}　continual {{2}}",
            "disinterested {{3}}　uninterested {{4}}"
          ],
          warning: "态度题选项里 disinterested 常被误当「不感兴趣」排除，其实它是「公正客观」，可能是正确答案。"
        },
        {
          id: "voc-root-spect",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "词根 · spect = 看",
          hint: "一个词根串 5 个高频词。",
          reveal: [
            { tex: "inspect v. 检查；视察（往里看）　　respect v./n. 尊重；方面（反复看）" },
            { tex: "prospect n. 前景；展望（向前看）　　perspective n. 视角；观点（看透）" },
            { tex: "suspect v. 怀疑 n. 嫌疑犯（由下往上看）" }
          ],
          holes: ["检查；视察", "尊重；方面", "前景；展望", "视角；观点", "怀疑；嫌疑犯"],
          mask: [
            "inspect {{1}}　respect {{2}}",
            "prospect {{3}}　perspective {{4}}",
            "suspect {{5}}"
          ]
        },
        {
          id: "voc-root-port",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "词根 · port = 拿、运",
          hint: "ex- 出、im- 入、trans- 横穿、sup- 在下。",
          reveal: [
            { tex: "export v./n. 出口（运出去）　　import v./n. 进口（运进来）" },
            { tex: "transport v./n. 运输（来回运）　　support v./n. 支持（在下面扛）" },
            { tex: "portable adj. 便携的（可拿的）" }
          ],
          holes: ["出口", "进口", "运输", "支持", "便携的"],
          mask: [
            "export {{1}}　import {{2}}",
            "transport {{3}}　support {{4}}",
            "portable {{5}}"
          ]
        },
        {
          id: "voc-root-dict",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "词根 · dict = 说 / duc(t) = 引",
          hint: "两个词根放一组，都是阅读高频。",
          reveal: [
            { tex: "predict v. 预测（提前说）　　contradict v. 反驳；矛盾（反着说）" },
            { tex: "indicate v. 表明；指示　　conduct v. 实施；指挥 n. 行为（引着走）" },
            { tex: "introduce v. 引进；介绍（引进来）" }
          ],
          holes: ["预测", "反驳；矛盾", "表明；指示", "实施；指挥；行为", "引进；介绍"],
          mask: [
            "predict {{1}}　contradict {{2}}",
            "indicate {{3}}　conduct {{4}}",
            "introduce {{5}}"
          ],
          notes: ["conduct a survey / experiment 做调查 / 实验，真题高频搭配。"]
        },
        {
          id: "voc-root-ject",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "词根 · ject = 投掷",
          hint: "前缀定方向：re- 回、ob- 对、sub- 下、pro- 前、in- 入。",
          reveal: [
            { tex: "reject v. 拒绝；驳回（扔回去）　　object v. 反对 n. 物体；对象（扔到对面）" },
            { tex: "subject n. 主题；学科 v. 使服从（扔在下面）　　project n. 项目 v. 投射；预测（向前扔）" },
            { tex: "inject v. 注射；注入（扔进去）" }
          ],
          holes: ["拒绝；驳回", "反对；物体", "主题；使服从", "项目；投射；预测", "注射；注入"],
          mask: [
            "reject {{1}}　object {{2}}",
            "subject {{3}}　project {{4}}",
            "inject {{5}}"
          ],
          notes: ["be subjected to 遭受；be projected to 据预测，都是真题原搭配。"]
        }
      ]
    },
    {
      id: "phrase",
      no: "二",
      name: "高频搭配",
      blurb: "动词短语 · 介词搭配 · 逻辑连接词",
      exam: "完形10分",
      cards: [
        {
          id: "phr-verb-take",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "动词搭配 · take / make 系",
          hint: "完形和阅读都高频，先记意思再记搭配介词。",
          reveal: [
            { tex: "take into account 考虑到　　take advantage of 利用" },
            { tex: "take...for granted 认为……理所当然　　make up for 弥补" },
            { tex: "make sense 讲得通；有意义　　make up 组成；编造" }
          ],
          holes: ["考虑到", "利用", "理所当然", "弥补", "讲得通；有意义", "组成；编造"],
          mask: [
            "take into account {{1}}　take advantage of {{2}}",
            "take...for granted 认为……{{3}}　make up for {{4}}",
            "make sense {{5}}　make up {{6}}"
          ]
        },
        {
          id: "phr-verb-action",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "动词短语 · 高频动作",
          hint: "account for 还是大作文图表占比的标配。",
          reveal: [
            { tex: "bring about 导致；引起　　come up with 提出；想出" },
            { tex: "go through 经历；仔细检查　　carry out 执行；实施" },
            { tex: "put forward 提出　　account for 解释；占（比例）" }
          ],
          holes: ["导致；引起", "提出；想出", "经历；仔细检查", "执行；实施", "提出", "解释；占（比例）"],
          mask: [
            "bring about {{1}}　come up with {{2}}",
            "go through {{3}}　carry out {{4}}",
            "put forward {{5}}　account for {{6}}"
          ],
          notes: ["account for 30% = 占 30%，图表作文必用；put forward = come up with 可互替。"]
        },
        {
          id: "phr-prep-in",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "介词搭配 · in 系",
          hint: "in turn 常考「反过来」，别只记「依次」。",
          reveal: [
            { tex: "in terms of 就……而言　　in contrast 相比之下" },
            { tex: "in turn 反过来；依次　　in particular 尤其；特别" },
            { tex: "in practice 实际上　　in charge of 负责" }
          ],
          holes: ["就……而言", "相比之下", "反过来；依次", "尤其；特别", "实际上", "负责"],
          mask: [
            "in terms of {{1}}　in contrast {{2}}",
            "in turn {{3}}　in particular {{4}}",
            "in practice {{5}}　in charge of {{6}}"
          ]
        },
        {
          id: "phr-prep-on",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "介词搭配 · on / at / by 系",
          hint: "at stake 是阅读态度题的氛围词。",
          reveal: [
            { tex: "on average 平均而言　　at the expense of 以……为代价" },
            { tex: "by contrast 相比之下　　on behalf of 代表" },
            { tex: "at stake 处于危险中；利害攸关　　by means of 借助于" }
          ],
          holes: ["平均而言", "以……为代价", "相比之下", "代表", "处于危险中；利害攸关", "借助于"],
          mask: [
            "on average {{1}}　at the expense of {{2}}",
            "by contrast {{3}}　on behalf of {{4}}",
            "at stake {{5}}　by means of {{6}}"
          ]
        },
        {
          id: "phr-logic-turn",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "完形逻辑词 · 转折对比",
          hint: "逻辑词题占完形 2-4 分，先判前后句关系再选词。",
          reveal: [
            { tex: "however 然而（句首句中均可，常加逗号）　　nevertheless 尽管如此" },
            { tex: "whereas 然而；鉴于（后接句子）　　on the contrary 相反" },
            { tex: "yet 然而；还（尚）　　conversely 相反地" }
          ],
          holes: ["然而", "尽管如此", "然而；鉴于", "相反", "然而；还", "相反地"],
          mask: [
            "however {{1}}　nevertheless {{2}}",
            "whereas {{3}}（后接句子）　on the contrary {{4}}",
            "yet {{5}}　conversely {{6}}"
          ],
          warning: "whereas 后面必须接完整句子；however 可独立成句，用逗号隔开。"
        },
        {
          id: "phr-logic-cause",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "完形逻辑词 · 因果递进",
          hint: "因果看前后谁推谁，递进看是否同向叠加。",
          reveal: [
            { tex: "therefore 因此　　consequently 因此；结果" },
            { tex: "moreover 此外　　furthermore 而且；此外" },
            { tex: "accordingly 相应地；因此　　similarly 同样地" }
          ],
          holes: ["因此", "因此；结果", "此外", "而且；此外", "相应地；因此", "同样地"],
          mask: [
            "therefore {{1}}　consequently {{2}}",
            "moreover {{3}}　furthermore {{4}}",
            "accordingly {{5}}　similarly {{6}}"
          ]
        },
        {
          id: "phr-logic-ex",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "完形逻辑词 · 举例让步",
          hint: "despite 接名词、although 接句子，混用必错。",
          reveal: [
            { tex: "for instance / for example 例如　　in particular 特别是" },
            { tex: "even if / even though 即使　　despite / in spite of 尽管（接名词）" },
            { tex: "although / though 尽管（接句子）　　unless 除非" }
          ],
          holes: ["例如", "特别是", "即使", "尽管（接名词）", "尽管（接句子）", "除非"],
          mask: [
            "for instance / for example {{1}}　in particular {{2}}",
            "even if / even though {{3}}　despite / in spite of {{4}}",
            "although / though {{5}}　unless {{6}}"
          ],
          warning: "despite 后接名词或动名词；although 后接完整句子，两者不能混用。"
        },
        {
          id: "phr-pattern",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "固定句型骨架",
          hint: "写作与翻译的通用骨架，挖的是句型本身。",
          reveal: [
            { tex: "It is + adj. + for sb. to do sth. 对某人来说做某事是……的" },
            { tex: "There is no doubt that... 毫无疑问……" },
            { tex: "not only... but (also)... 不但……而且……" },
            { tex: "so + adj. + that... 如此……以至于……" },
            { tex: "the + 比较级..., the + 比较级... 越……越……" }
          ],
          holes: [
            "It is + adj. + for sb. to do",
            "There is no doubt that",
            "not only... but (also)",
            "so... that",
            "the + 比较级，the + 比较级"
          ],
          mask: [
            "{{1}} sth. 对某人来说做某事是……的",
            "{{2}}... 毫无疑问……",
            "{{3}}... 不但……而且……",
            "{{4}}... 如此……以至于……",
            "{{5}}... 越……越……"
          ]
        }
      ]
    },
    {
      id: "syntax",
      no: "三",
      name: "长难句拆解",
      blurb: "从句 · 非谓语 · 倒装强调 · 真题拆解",
      exam: "阅读+翻译",
      cards: [
        {
          id: "syn-attr",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "定语从句",
          hint: "先找先行词，再看从句缺不缺成分：缺成分用代词，不缺用副词。",
          reveal: [
            { tex: "关系代词：that / which（物）、who / whom（人）、whose（……的）" },
            { tex: "关系副词：where（地点）、when（时间）、why（原因）= 介词 + which" },
            { tex: "只用 that：先行词被最高级 / 序数词 / the only 修饰，或是 all / something 等不定代词" }
          ],
          holes: ["that / which", "who / whom", "whose", "where", "when", "介词 + which", "that"],
          mask: [
            "物用 {{1}}，人用 {{2}}，「……的」用 {{3}}",
            "地点用 {{4}}，时间用 {{5}}，都 = {{6}}",
            "最高级 / 序数词 / 不定代词修饰时只用 {{7}}"
          ]
        },
        {
          id: "syn-noun",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "名词性从句",
          hint: "主宾表同位语四类从句，共用一套引导词。",
          reveal: [
            { tex: "引导词：that（不缺成分）、whether / if（是否）、what / who / which（缺成分）" },
            { tex: "同位语从句：that 不可省略，解释 news / fact / idea / belief 的内容" },
            { tex: "介词后、句首的「是否」只用 whether，不用 if" },
            { tex: "what = the thing(s) that，自带先行词" }
          ],
          holes: ["that", "whether / if", "what", "不可省略", "whether", "the thing(s) that"],
          mask: [
            "不缺成分用 {{1}}，「是否」用 {{2}}，缺成分用 {{3}}",
            "同位语从句的 that {{4}}",
            "介词后、句首的「是否」只用 {{5}}",
            "what = {{6}}，自带先行词"
          ]
        },
        {
          id: "syn-adv",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "状语从句引导词",
          hint: "while 可表时间、对比、让步，真题常考「对比」义。",
          reveal: [
            { tex: "时间：when / while / as / until / since / the moment" },
            { tex: "条件：if / unless / as long as / in case" },
            { tex: "让步：although / though / even if / no matter how" },
            { tex: "原因：because / since / as / now that；结果：so... that / such... that" }
          ],
          holes: ["while", "unless", "as long as", "even if", "now that", "so... that"],
          mask: [
            "时间：when / {{1}} / as / until / since",
            "条件：if / {{2}} / {{3}} / in case",
            "让步：although / though / {{4}} / no matter how",
            "原因：because / since / as / {{5}}；结果：{{6}}"
          ],
          notes: ["now that = 既然（表原因）；as long as = 只要（表条件）。"]
        },
        {
          id: "syn-nonfinite",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "非谓语动词",
          hint: "看非谓语与逻辑主语的主被动关系，一步到位。",
          reveal: [
            { tex: "doing 表主动 / 进行；done 表被动 / 完成；to do 表目的 / 将来" },
            { tex: "作定语：a developing country（发展中的）vs. a developed country（发达的）" },
            { tex: "作状语：Seen from the top, the city looks small.（城市被看）" },
            { tex: "独立主格：Weather permitting = If weather permits" }
          ],
          holes: ["主动 / 进行", "被动 / 完成", "目的 / 将来", "developing", "developed", "Seen", "Weather permitting"],
          mask: [
            "doing 表 {{1}}，done 表 {{2}}，to do 表 {{3}}",
            "a {{4}} country 发展中国家　a {{5}} country 发达国家",
            "{{6}} from the top, the city looks small. 从山顶看（被看）",
            "独立主格：{{7}} = If weather permits"
          ]
        },
        {
          id: "syn-invert",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 3,
          title: "倒装与强调",
          hint: "半倒装 = 助动词 / 情态动词 / be 提到主语前，实义动词不动。",
          reveal: [
            { tex: "否定词提前半倒装：Never / Seldom / Rarely / Not until + 助动词 + 主语 + 动词" },
            { tex: "Only + 状语提前半倒装：Only in this way can we succeed." },
            { tex: "强调句：It is / was + 被强调部分 + that / who + 其余部分" },
            { tex: "检验强调句：去掉 It is... that 框架，句子仍然完整" }
          ],
          holes: ["半倒装", "can we", "that / who", "仍然完整"],
          mask: [
            "否定词 / only + 状语提前 → {{1}}（助动词提到主语前）",
            "Only in this way {{2}} succeed. 只有这样我们才能成功",
            "强调句：It is / was + 被强调部分 + {{3}} + 其余",
            "检验：去掉 It is... that 框架，句子 {{4}}"
          ]
        },
        {
          id: "syn-compare",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "as / than 比较结构",
          hint: "more A than B 是「肯 A 否 B」，别当成程度比较。",
          reveal: [
            { tex: "as + 原级 + as：和……一样；not so / as... as：不如" },
            { tex: "more A than B：与其说是 B，不如说是 A" },
            { tex: "no more... than：同……一样不；no less... than：和……同样" },
            { tex: "倍数：twice / three times as... as，或 比较级 + than" }
          ],
          holes: ["原级", "不如", "与其说是 B，不如说是 A", "同……一样不", "倍数"],
          mask: [
            "as + {{1}} + as 和……一样　not so / as... as {{2}}",
            "more A than B {{3}}",
            "no more... than {{4}}",
            "twice / three times as... as 表 {{5}}"
          ]
        },
        {
          id: "syn-ex-1",
          kind: "example",
          plain: true,
          freq: 5,
          tier: 2,
          title: "真题长难句拆解 · 社交媒体",
          problem: "The researchers found that people who spend more time on social media are more likely to report feelings of loneliness, even when the time they spend with friends and family remains unchanged.",
          idea: "先找谓语动词分层：found 是主句谓语；that 宾语从句里 are 是谓语；who 定语从句修饰 people；even when 是让步状语从句。",
          steps: [
            { tex: "① 主干：The researchers found that... 研究者们发现……" },
            { tex: "② 宾语从句主干：people are more likely to report feelings of loneliness 人们更容易感到孤独" },
            { tex: "③ 定语从句 who spend more time on social media 修饰 people：花更多时间刷社交媒体的人" },
            { tex: "④ 让步从句 even when... remains unchanged：即使……保持不变" },
            { tex: "⑤ the time (that) they spend with friends and family：省略关系词的定语从句，他们与亲友相处的时间" }
          ],
          answerLabel: "译文",
          answer: "研究发现，花更多时间刷社交媒体的人更容易感到孤独——即使他们与亲友相处的时间并未减少。"
        },
        {
          id: "syn-ex-2",
          kind: "example",
          plain: true,
          freq: 4,
          tier: 3,
          title: "真题长难句拆解 · 新经济技能",
          problem: "It is not that the skills required for the new economy have changed so much, but that the speed at which they are expected to be acquired has left many workers, particularly those without a college degree, struggling to keep up.",
          idea: "It is not that... but that... 是并列表语从句「不是……而是……」；at which 引导定语从句修饰 speed；两个逗号之间的 particularly those... 是插入成分。",
          steps: [
            { tex: "① 框架：It is not that A, but that B = 不是 A，而是 B" },
            { tex: "② A = the skills (required for the new economy) have changed so much：过去分词作后置定语，新经济所需技能变化那么大" },
            { tex: "③ B = the speed... has left many workers struggling：速度之快让许多工人疲于应对" },
            { tex: "④ at which they are expected to be acquired：定语从句修饰 speed，人们被期望掌握技能的速度" },
            { tex: "⑤ particularly those without a college degree：插入语补充 workers；leave sb. doing 使某人处于……状态" }
          ],
          answerLabel: "译文",
          answer: "问题不在于新经济所需的技能变了多少，而在于人们被期望掌握这些技能的速度，让许多劳动者——尤其是没有大学学历的人——疲于追赶。"
        }
      ]
    },
    {
      id: "writing",
      no: "四",
      name: "写作句式库",
      blurb: "小作文框架 · 图表描述 · 加分替换",
      exam: "写作25分",
      cards: [
        {
          id: "wri-letter-open",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "小作文 · 书信开头",
          hint: "英二常考：感谢、道歉、邀请、建议、投诉、推荐。",
          reveal: [
            { tex: "万能首句：I am writing to express my sincere gratitude / apology / suggestions..." },
            { tex: "邀请：I am writing to invite you to...　　投诉：I am writing to complain about..." },
            { tex: "自我介绍：As a senior student / a regular customer, I am writing to..." },
            { tex: "称呼：Dear Sir or Madam,（陌生）/ Dear Professor Smith,（熟人）顶格写" }
          ],
          holes: ["express my sincere", "invite you to", "complain about", "As a senior student", "Dear Sir or Madam"],
          mask: [
            "万能首句：I am writing to {{1}} gratitude / apology / suggestions...",
            "邀请：I am writing to {{2}}...　投诉：I am writing to {{3}}...",
            "自我介绍：{{4}}, I am writing to...",
            "陌生收信人称呼：{{5}},"
          ]
        },
        {
          id: "wri-letter-close",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "小作文 · 书信结尾与落款",
          hint: "结尾两句 + 落款，背下来就是 2 分。",
          reveal: [
            { tex: "期待回复：I am looking forward to your prompt reply." },
            { tex: "感谢关注：Thank you for your time and consideration." },
            { tex: "请求行动：I would appreciate it if you could take my suggestions into account." },
            { tex: "落款：Yours sincerely, 换行写 Li Ming" }
          ],
          holes: ["looking forward to", "time and consideration", "would appreciate it if", "Yours sincerely", "Li Ming"],
          mask: [
            "I am {{1}} your prompt reply. 期待您尽快回复",
            "Thank you for your {{2}}. 感谢您的时间与考虑",
            "I {{3}} you could take it into account. 若能考虑不胜感激",
            "落款：{{4}}, 换行署名 {{5}}"
          ],
          warning: "署名按题目要求写，英二惯例是 Li Ming；千万别写真名。"
        },
        {
          id: "wri-notice",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "小作文 · 通知框架",
          hint: "2010 年英二考过通知（Notice），格式分不能丢。",
          reveal: [
            { tex: "标题：NOTICE 居中；落款写组织名（如 the Students' Union）" },
            { tex: "开头：A volunteer activity will be held at 9 a.m. this Saturday in the hall." },
            { tex: "主体：All students are encouraged to participate. Those interested please sign up at the office." },
            { tex: "结尾：For more information, please contact us at 12345." }
          ],
          holes: ["NOTICE", "will be held", "are encouraged to participate", "Those interested", "contact"],
          mask: [
            "标题居中写 {{1}}，落款写组织名",
            "A volunteer activity {{2}} at 9 a.m. this Saturday in the hall.",
            "All students {{3}}. 鼓励全体参加",
            "{{4}} please sign up at the office. 有意者请报名",
            "For more information, please {{5}} us at 12345."
          ]
        },
        {
          id: "wri-chart-open",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "大作文 · 图表开头段",
          hint: "柱状图、饼图、线状图、表格轮着考，开头段 2-3 句即可。",
          reveal: [
            { tex: "As is clearly shown in the chart, ... 如图清晰所示" },
            { tex: "The chart illustrates the changes in... 该图展示了……的变化" },
            { tex: "According to the figures, the number of... rose from... to... 从……升至……" },
            { tex: "It is obvious that... has witnessed a dramatic increase. ……经历了显著增长" }
          ],
          holes: ["As is clearly shown", "illustrates the changes in", "According to the figures", "rose from... to", "witnessed a dramatic increase"],
          mask: [
            "{{1}} in the chart, ... 如图清晰所示",
            "The chart {{2}}... 该图展示了……的变化",
            "{{3}}, the number of... {{4}}... 据统计数字，……从……升至……",
            "It is obvious that... has {{5}}. ……显著增长"
          ]
        },
        {
          id: "wri-chart-trend",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "大作文 · 趋势词与占比",
          hint: "上升下降各记一对「普通 + 剧烈」，平稳波动各记一个。",
          reveal: [
            { tex: "上升：soar / surge（激增）、rise / climb（上升）" },
            { tex: "下降：plummet / plunge（骤降）、decline / drop（下降）" },
            { tex: "平稳：level off / remain stable；波动：fluctuate" },
            { tex: "占比：account for / make up / constitute（account for 30% 占 30%）" }
          ],
          holes: ["soar / surge", "rise / climb", "plummet / plunge", "decline / drop", "level off", "fluctuate", "account for"],
          mask: [
            "激增 {{1}}　上升 {{2}}",
            "骤降 {{3}}　下降 {{4}}",
            "趋于平稳 {{5}}　波动 {{6}}",
            "占（比例）{{7}}"
          ]
        },
        {
          id: "wri-chart-mid",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "大作文 · 中间段分析",
          hint: "原因段 = 总起句 + 2-3 个原因，用连接词串起来。",
          reveal: [
            { tex: "There are several reasons behind this trend. 这一趋势背后有几个原因" },
            { tex: "To begin with,... What's more,... Last but not least,... 首先……此外……最后" },
            { tex: "This phenomenon can be attributed to... 这可归因于……" },
            { tex: "With the development of economy / technology,... 随着……的发展" },
            { tex: "play an increasingly important role in... 扮演越来越重要的角色" }
          ],
          holes: ["several reasons behind", "To begin with", "What's more", "be attributed to", "With the development of", "an increasingly important role"],
          mask: [
            "There are {{1}} this trend. 这一趋势背后有几个原因",
            "{{2}},... {{3}},... Last but not least,... 首先……此外……最后",
            "This phenomenon can {{4}}... 这可归因于……",
            "{{5}} economy / technology,... 随着经济 / 科技的发展",
            "play {{6}} in... 扮演越来越重要的角色"
          ]
        },
        {
          id: "wri-chart-end",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "大作文 · 结尾段",
          hint: "总结 + 预测 / 建议，三句收尾，倒装句收尾加分。",
          reveal: [
            { tex: "In conclusion / To sum up,... 总之" },
            { tex: "It is predictable that this trend will continue. 可预见趋势将延续" },
            { tex: "Measures should be taken to address this issue. 应采取措施解决" },
            { tex: "Only in this way can we achieve sustainable development. 只有这样才能实现可持续发展" }
          ],
          holes: ["In conclusion", "It is predictable that", "Measures should be taken", "Only in this way can we"],
          mask: [
            "{{1}} / To sum up,... 总之",
            "{{2}} this trend will continue. 可预见趋势将延续",
            "{{3}} to address this issue. 应采取措施解决",
            "{{4}} achieve sustainable development. 只有这样才能实现可持续发展（倒装加分）"
          ]
        },
        {
          id: "wri-upgrade",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "写作加分替换",
          hint: "每句只升级 1-2 个词；硬堆大词反而扣分。",
          reveal: [
            { tex: "very → remarkably　　important → crucial / vital" },
            { tex: "think → hold the view that　　more and more → an increasing number of" },
            { tex: "good → beneficial　　bad → harmful / detrimental" },
            { tex: "help → contribute to / facilitate　　many → numerous" }
          ],
          holes: ["remarkably", "crucial / vital", "hold the view that", "an increasing number of", "beneficial", "harmful / detrimental", "contribute to", "numerous"],
          mask: [
            "very → {{1}}　important → {{2}}",
            "think → {{3}}　more and more → {{4}}",
            "good → {{5}}　bad → {{6}}",
            "help → {{7}}　many → {{8}}"
          ]
        }
      ]
    },
    {
      id: "reading",
      no: "五",
      name: "阅读同义替换",
      blurb: "同义替换 · 题型信号 · 干扰项套路",
      exam: "阅读50分",
      cards: [
        {
          id: "rea-syn-verb1",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "同义替换 · 动词组一",
          hint: "细节题正确项几乎不照抄原文动词，而是同义改写。",
          reveal: [
            { tex: "abandon = give up 放弃　　accelerate = speed up 加速" },
            { tex: "obtain / acquire = get 获得　　decline = refuse 拒绝 / decrease 下降" },
            { tex: "sustain = maintain 维持　　tackle / address = deal with 处理" }
          ],
          holes: ["give up", "speed up", "get", "refuse", "maintain", "deal with"],
          mask: [
            "abandon = {{1}}　accelerate = {{2}}",
            "obtain / acquire = {{3}}　decline = {{4}} / decrease",
            "sustain = {{5}}　tackle / address = {{6}}"
          ]
        },
        {
          id: "rea-syn-verb2",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "同义替换 · 动词组二",
          hint: "pose a threat = 造成威胁，阅读高频。",
          reveal: [
            { tex: "undermine = weaken / damage 削弱　　advocate = support / call for 提倡" },
            { tex: "trigger = cause / lead to 引发　　hinder = prevent / hamper 阻碍" },
            { tex: "eliminate = remove / get rid of 消除　　pose = present / create 造成（威胁）" }
          ],
          holes: ["weaken / damage", "support / call for", "cause / lead to", "prevent / hamper", "remove / get rid of", "present / create"],
          mask: [
            "undermine = {{1}}　advocate = {{2}}",
            "trigger = {{3}}　hinder = {{4}}",
            "eliminate = {{5}}　pose = {{6}}"
          ]
        },
        {
          id: "rea-syn-adj",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 1,
          title: "同义替换 · 形名副",
          hint: "形容词决定态度方向，名词锁定话题。",
          reveal: [
            { tex: "crucial = essential / vital 关键的　　inevitable = unavoidable 不可避免的" },
            { tex: "prosperity = boom 繁荣　　drawback = disadvantage / shortcoming 缺点" },
            { tex: "consequence = result / outcome 结果　　approximately = about / around 大约" }
          ],
          holes: ["essential / vital", "unavoidable", "boom", "disadvantage / shortcoming", "result / outcome", "about / around"],
          mask: [
            "crucial = {{1}}　inevitable = {{2}}",
            "prosperity = {{3}}　drawback = {{4}}",
            "consequence = {{5}}　approximately = {{6}}"
          ]
        },
        {
          id: "rea-type-main",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "主旨题信号与套路",
          hint: "主旨题放最后做，先做细节题顺手摸清全文。",
          reveal: [
            { tex: "题干信号：mainly discuss / the best title / the main idea / the purpose" },
            { tex: "方法：读首末段 + 各段首句，找反复出现的主题词" },
            { tex: "正确项：覆盖全篇、含主题词；干扰项：只覆盖某段细节（以偏概全）" },
            { tex: "标题题：主题词 + 态度方向，太大太小都不选" }
          ],
          holes: ["mainly discuss", "首末段 + 各段首句", "主题词", "以偏概全"],
          mask: [
            "信号词：{{1}} / the best title / the main idea",
            "方法：读 {{2}}，找反复出现的 {{3}}",
            "干扰项套路：只讲某段细节，{{4}}"
          ],
          notes: ["英二阅读 A 节 20 题 40 分，主旨题一般 1-2 题。"]
        },
        {
          id: "rea-type-example",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 2,
          title: "例证题套路",
          hint: "例子本身不是答案，它证明的观点才是答案。",
          reveal: [
            { tex: "题干信号：The example / case of... is mentioned to show..." },
            { tex: "套路：找例子证明的观点，不选例子本身" },
            { tex: "观点位置：80% 在例子前一句，20% 在例子后一句" },
            { tex: "干扰项：复述例子细节（就例论例）" }
          ],
          holes: ["is mentioned to show", "观点", "前一句", "就例论例"],
          mask: [
            "信号：The example of... {{1}}... 提到例子是为了说明",
            "答案找 {{2}}，不是例子本身",
            "观点 80% 在例子 {{3}}",
            "干扰项特征：复述例子细节，{{4}}"
          ]
        },
        {
          id: "rea-type-attitude",
          kind: "cloze",
          plain: true,
          freq: 5,
          tier: 2,
          title: "态度题信号词",
          hint: "找转折词和感情色彩词（unfortunately、wrongly）判断正负。",
          reveal: [
            { tex: "正面：supportive / optimistic / approving / favorable" },
            { tex: "负面：critical / skeptical / pessimistic / disapproving" },
            { tex: "客观：objective / impartial / neutral" },
            { tex: "永陪跑：indifferent（冷漠）、biased（偏见）、ambiguous（含糊）" }
          ],
          holes: ["supportive / optimistic", "critical / skeptical", "objective / impartial", "indifferent", "biased"],
          mask: [
            "正面：{{1}} / approving / favorable",
            "负面：{{2}} / pessimistic / disapproving",
            "客观：{{3}} / neutral",
            "永陪跑不选：{{4}}（冷漠）、{{5}}（偏见）、ambiguous（含糊）"
          ],
          warning: "作者写文章必有态度，indifferent / biased / ambiguous 几乎从不当选。"
        },
        {
          id: "rea-type-detail",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 1,
          title: "细节题定位法",
          hint: "题序 ≈ 原文顺序，定位可顺藤摸瓜。",
          reveal: [
            { tex: "步骤：题干划关键词（人名、数字、专有名词）→ 回原文定位 → 比对选项" },
            { tex: "正确项特征：原文的同义改写（换词不换意）" },
            { tex: "干扰项：偷换概念、无中生有、张冠李戴、正话反说" },
            { tex: "顺序原则：题目顺序与原文行文顺序基本一致" }
          ],
          holes: ["关键词", "定位", "同义改写", "无中生有", "顺序"],
          mask: [
            "题干划 {{1}} → 回原文 {{2}} → 比对选项",
            "正确项 = 原文的 {{3}}",
            "干扰项：偷换概念、{{4}}、张冠李戴、正话反说",
            "题序 ≈ 原文 {{5}}"
          ]
        },
        {
          id: "rea-type-infer",
          kind: "cloze",
          plain: true,
          freq: 4,
          tier: 3,
          title: "推理题套路",
          hint: "只推一步，推多了就是过度推理。",
          reveal: [
            { tex: "题干信号：infer / imply / suggest / conclude / learn from" },
            { tex: "原则：从原文「推一步」即可，推多了就是过度推理" },
            { tex: "不选：原文原句照抄（那是细节不是推理）；常识正确但原文没提" },
            { tex: "答案常在：转折处、比较处、段末总结处" }
          ],
          holes: ["infer / imply", "推一步", "过度推理", "原句照抄", "转折处"],
          mask: [
            "信号词：{{1}} / suggest / conclude / learn from",
            "只 {{2}}，推多了是 {{3}}",
            "不选：原文 {{4}}；常识对但原文没提",
            "答案常在：{{5}}、比较处、段末总结处"
          ]
        }
      ]
    },
    {
      id: "master",
      no: "六",
      name: "考点全表",
      blurb: "全部考点 · 按档位过一遍",
      exam: "考前必过",
      virtual: true,
      cards: []
    }
  ]
};
