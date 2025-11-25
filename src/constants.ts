import type { FoodItem } from './menuTypes';

export const HARDEN_QUOTES = [
  "后撤步是我的生活态度。",
  "我是基石，不仅是球队的，也是菜单的。",
  "有时候你需要慢下来，才能看清那个空位（或者那道菜）。",
  "这不是犯规，这是艺术。",
  "欧洲步过掉你的饥饿感。"
];

export const NORTHERN_FOOD_MENU: FoodItem[] = [
  {
    id: '1',
    name: '煎饼果子 (加十个蛋)',
    price: 25,
    budget: '性价比',
    emoji: '🥞',
    description: '来自东方的神秘力量，比我的胡子还蓬松。'
  },
  {
    id: '2',
    name: '咸豆腐脑 (甜党异端)',
    price: 5,
    budget: '穷鬼套餐',
    emoji: '🥣',
    description: '只有咸的才是正义，就像我的罚球一样稳。'
  },
  {
    id: '3',
    name: '烤冷面 (尊享版)',
    price: 18,
    budget: '性价比',
    emoji: '🍜',
    description: 'Q弹劲道，像极了我在内线的欧洲步。'
  },
  {
    id: '4',
    name: '全聚德烤鸭 (MVP独享)',
    price: 298,
    budget: '有钱任性',
    emoji: '🦆',
    description: '奢华的口感，就像拿了MVP之后的庆功宴。'
  },
  {
    id: '5',
    name: '老北京炸酱面',
    price: 22,
    budget: '性价比',
    emoji: '🍝',
    description: '地道的老味道，拌开的一瞬间就是助攻的快感。'
  },
  {
    id: '6',
    name: '馒头配咸菜',
    price: 2,
    budget: '穷鬼套餐',
    emoji: '🥯',
    description: '月底吃土首选，为了下个月的球鞋省钱。'
  }
];