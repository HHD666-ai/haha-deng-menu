import { BudgetLevel, type FoodItem } from './menuTypes';

export const HARDEN_QUOTES = [
  "后撤步是我的生活态度，但这道菜让我不想后退。",
  "我是基石，不仅是球队的，也是菜单的。",
  "有时候你需要慢下来，才能看清那个空位（或者那道菜）。",
  "这不是犯规，这是艺术。",
  "欧洲步过掉你的饥饿感。",
  "只有吃饱了，胡子才能长得更好。",
  "这菜单比我的技能包还要丰富。"
];

export const NORTHERN_FOOD_MENU: FoodItem[] = [
  // --- 经典北方 ---
  {
    id: '1',
    name: '煎饼果子 (加十个蛋)',
    price: 25,
    budget: BudgetLevel.VALUE,
    emoji: '🥞',
    description: '来自东方的神秘力量，比我的胡子还蓬松。'
  },
  {
    id: '2',
    name: '咸豆腐脑 (甜党异端)',
    price: 5,
    budget: BudgetLevel.POOR,
    emoji: '🥣',
    description: '只有咸的才是正义，就像我的罚球一样稳。'
  },
  {
    id: '3',
    name: '烤冷面 (尊享版)',
    price: 18,
    budget: BudgetLevel.VALUE,
    emoji: '🍜',
    description: 'Q弹劲道，像极了我在内线的欧洲步。'
  },
  {
    id: '4',
    name: '全聚德烤鸭 (MVP独享)',
    price: 298,
    budget: BudgetLevel.RICH,
    emoji: '🦆',
    description: '奢华的口感，就像拿了MVP之后的庆功宴。'
  },
  {
    id: '5',
    name: '老北京炸酱面',
    price: 22,
    budget: BudgetLevel.VALUE,
    emoji: '🍝',
    description: '地道的老味道，拌开的一瞬间就是助攻的快感。'
  },
  // --- 西北硬汉 ---
  {
    id: '6',
    name: '羊肉泡馍 (自己掰)',
    price: 38,
    budget: BudgetLevel.VALUE,
    emoji: '🍲',
    description: '掰馍的时间比罚球准备动作还长，但这汤头值得等待。'
  },
  {
    id: '7',
    name: '兰州牛肉面 (一清二白)',
    price: 15,
    budget: BudgetLevel.POOR,
    emoji: '🍜',
    description: '拉面师傅的手速比我的运球还快，辣油是绝杀。'
  },
  {
    id: '8',
    name: '肉夹馍 (纯瘦)',
    price: 12,
    budget: BudgetLevel.POOR,
    emoji: '🍔',
    description: '中国的汉堡，肉给的实在，就像我的造犯规一样稳。'
  },
  {
    id: '9',
    name: '大盘鸡 (加宽面)',
    price: 88,
    budget: BudgetLevel.RICH,
    emoji: '🐔',
    description: '分量大得惊人，就像我在火箭队时的球权占有率。'
  },
  {
    id: '10',
    name: '新疆羊肉串 (10串)',
    price: 60,
    budget: BudgetLevel.VALUE,
    emoji: '🍢',
    description: '撸串是男人的浪漫，稍微带点肥油才香。'
  },
  // --- 川渝火辣 ---
  {
    id: '11',
    name: '四川火锅 (九宫格)',
    price: 128,
    budget: BudgetLevel.RICH,
    emoji: '🥘',
    description: '防守强度很大，辣得你根本突不进去。'
  },
  {
    id: '12',
    name: '麻婆豆腐',
    price: 18,
    budget: BudgetLevel.POOR,
    emoji: '🍛',
    description: '麻辣鲜香，口感比我的控球还要丝滑。'
  },
  {
    id: '13',
    name: '重庆小面',
    price: 10,
    budget: BudgetLevel.POOR,
    emoji: '🍜',
    description: '早餐吃这个，一整天都像打了鸡血一样兴奋。'
  },
  // --- 粤式精致 ---
  {
    id: '14',
    name: '广东早茶 (一盅两件)',
    price: 88,
    budget: BudgetLevel.RICH,
    emoji: '🥟',
    description: '细腻的技术流，讲究的就是一个战术配合。'
  },
  {
    id: '15',
    name: '干炒牛河',
    price: 28,
    budget: BudgetLevel.VALUE,
    emoji: '🥡',
    description: '必须要有镬气，就像比赛必须要有火药味。'
  },
  {
    id: '16',
    name: '煲仔饭 (双拼)',
    price: 35,
    budget: BudgetLevel.VALUE,
    emoji: '🍲',
    description: '底下的锅巴是精华，就像最后时刻的绝杀球。'
  },
  // --- 华东鲜甜 ---
  {
    id: '17',
    name: '上海小笼包',
    price: 20,
    budget: BudgetLevel.VALUE,
    emoji: '🥟',
    description: '皮薄馅大，小心烫嘴，比防守陷阱还危险。'
  },
  {
    id: '18',
    name: '西湖醋鱼',
    price: 168,
    budget: BudgetLevel.RICH,
    emoji: '🐟',
    description: '这酸爽，就像输了球之后看录像一样难受又上头。'
  },
  {
    id: '19',
    name: '红烧肉 (本帮菜)',
    price: 58,
    budget: BudgetLevel.VALUE,
    emoji: '🥓',
    description: '浓油赤酱，肥而不腻，就像我有肉但很灵活。'
  },
  // --- 湘鄂重口 ---
  {
    id: '20',
    name: '长沙臭豆腐',
    price: 10,
    budget: BudgetLevel.POOR,
    emoji: '⬛',
    description: '闻着臭吃着香，就像我的打法，有人黑但就是能赢。'
  },
  {
    id: '21',
    name: '武汉热干面',
    price: 6,
    budget: BudgetLevel.POOR,
    emoji: '🍜',
    description: '芝麻酱拌匀，干干的口感，像极了没有空调的球馆。'
  },
  {
    id: '22',
    name: '剁椒鱼头',
    price: 68,
    budget: BudgetLevel.VALUE,
    emoji: '🌶️',
    description: '红红火火，吃完感觉能立刻上场打满48分钟。'
  },
  // --- 黑暗/特色 ---
  {
    id: '23',
    name: '螺蛳粉 (加臭加辣)',
    price: 18,
    budget: BudgetLevel.VALUE,
    emoji: '🍜',
    description: '这味道能统治整个球场，对手闻风丧胆。'
  },
  {
    id: '24',
    name: '折耳根 (鱼腥草)',
    price: 8,
    budget: BudgetLevel.POOR,
    emoji: '🌿',
    description: '爱的人很爱，恨的人很恨，就像对我的评价一样两极分化。'
  },
  {
    id: '25',
    name: '佛跳墙 (顶配)',
    price: 888,
    budget: BudgetLevel.RICH,
    emoji: '🍲',
    description: '顶薪合同才配吃的菜，全是海参鲍鱼，太奢侈了！'
  },
  // --- 甜点饮料 ---
  {
    id: '26',
    name: '珍珠奶茶 (全糖去冰)',
    price: 18,
    budget: BudgetLevel.POOR,
    emoji: '🧋',
    description: '虽然热量爆炸，但甜度让我心情愉悦，休赛期最爱。'
  },
  {
    id: '27',
    name: '驴打滚',
    price: 12,
    budget: BudgetLevel.POOR,
    emoji: '🍡',
    description: '粘粘糯糯，就像沾在身上的防守人甩都甩不掉。'
  },
  {
    id: '28',
    name: '东北锅包肉 (酸甜口)',
    price: 48,
    budget: BudgetLevel.VALUE,
    emoji: '🥓',
    description: '外酥里嫩，咬一口咔滋脆，这声音比刷网声还悦耳。'
  }
];