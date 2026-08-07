import type { FoodItem } from './menuTypes';

export const MENU: FoodItem[] = [
  { id: '01', name: '铁锅炖大鹅', price: 128, budget: '犒赏', emoji: '🪿', category: '招牌硬菜', tags: ['多人', '东北'], description: '一锅热乎的排面担当，适合三五好友围坐开炫。' },
  { id: '02', name: '锅包肉', price: 48, budget: '犒赏', emoji: '🥩', category: '招牌硬菜', tags: ['酸甜', '经典'], description: '外酥里嫩、酸甜开胃，第一筷子就能点燃全场。' },
  { id: '03', name: '小鸡炖蘑菇', price: 58, budget: '犒赏', emoji: '🍗', category: '招牌硬菜', tags: ['炖菜', '暖胃'], description: '榛蘑的香和鸡肉的鲜，稳稳当当的一锅温暖。' },
  { id: '04', name: '鱼头泡饼', price: 88, budget: '犒赏', emoji: '🐟', category: '招牌硬菜', tags: ['分享', '浓香'], description: '汤汁浸入饼里，适合把一顿饭吃得有仪式感。' },
  { id: '05', name: '葱爆羊肉', price: 48, budget: '犒赏', emoji: '🥘', category: '招牌硬菜', tags: ['爆炒', '下饭'], description: '大火快炒，葱香扑鼻，肉香直接上强度。' },
  { id: '06', name: '水煮肉片', price: 45, budget: '犒赏', emoji: '🌶️', category: '招牌硬菜', tags: ['麻辣', '重口'], description: '红油滚烫、麻辣够劲，配两碗饭才算尊重它。' },
  { id: '07', name: '地三鲜', price: 22, budget: '超值', emoji: '🍆', category: '下饭热炒', tags: ['素菜', '东北'], description: '茄子、土豆、青椒默契配合，朴实但极其下饭。' },
  { id: '08', name: '宫保鸡丁', price: 26, budget: '超值', emoji: '🥜', category: '下饭热炒', tags: ['微辣', '经典'], description: '甜、酸、辣、香恰到好处，永不出错的选择。' },
  { id: '09', name: '猪肉炖粉条', price: 32, budget: '超值', emoji: '🍲', category: '下饭热炒', tags: ['炖菜', '下饭'], description: '粉条吸饱肉汁，每一口都是踏实的幸福。' },
  { id: '10', name: '回锅肉', price: 32, budget: '超值', emoji: '🥓', category: '下饭热炒', tags: ['川味', '下饭'], description: '肥而不腻、香辣有锅气，米饭的最佳拍档。' },
  { id: '11', name: '松仁玉米', price: 22, budget: '超值', emoji: '🌽', category: '下饭热炒', tags: ['清甜', '素菜'], description: '清甜爽口，给整桌重口菜来一次温柔暂停。' },
  { id: '12', name: '木须肉', price: 24, budget: '超值', emoji: '🍳', category: '下饭热炒', tags: ['家常', '均衡'], description: '肉、蛋、木耳、黄瓜，一盘很会照顾人的家常菜。' },
  { id: '13', name: '尖椒干豆腐', price: 18, budget: '平价', emoji: '🫑', category: '下饭热炒', tags: ['东北', '快手'], description: '豆香十足，简单直接，北方胃会懂。' },
  { id: '14', name: '麻婆豆腐', price: 16, budget: '平价', emoji: '🥘', category: '下饭热炒', tags: ['麻辣', '素菜'], description: '麻、辣、鲜、烫，低预算也能吃出高满足感。' },
  { id: '15', name: '酸辣土豆丝', price: 12, budget: '平价', emoji: '🥔', category: '下饭热炒', tags: ['爽脆', '素菜'], description: '脆爽开胃，是每一桌都值得拥有的基本功。' },
  { id: '16', name: '拍黄瓜', price: 8, budget: '平价', emoji: '🥒', category: '凉菜小食', tags: ['清爽', '凉菜'], description: '清脆解腻，热菜之间最可靠的节奏调节器。' },
  { id: '17', name: '凉拌木耳', price: 12, budget: '平价', emoji: '🫛', category: '凉菜小食', tags: ['清爽', '凉菜'], description: '酸爽脆嫩，适合在夏天给味蕾降温。' },
  { id: '18', name: '韭菜盒子', price: 15, budget: '平价', emoji: '🥟', category: '凉菜小食', tags: ['小食', '素食'], description: '外皮焦香、馅料鲜嫩，饿的时候格外有说服力。' },
  { id: '19', name: '炸酱面', price: 18, budget: '平价', emoji: '🍜', category: '主食汤面', tags: ['面食', '北京'], description: '酱香浓郁、菜码丰富，一碗就能把胃安顿好。' },
  { id: '20', name: '扬州炒饭', price: 25, budget: '超值', emoji: '🍚', category: '主食汤面', tags: ['主食', '快手'], description: '粒粒分明、配料丰富，单点也能独当一面。' },
  { id: '21', name: '酸汤肥牛', price: 48, budget: '犒赏', emoji: '🍋', category: '招牌硬菜', tags: ['酸辣', '开胃'], description: '金黄酸汤鲜亮开胃，肥牛嫩滑，一口醒胃。' },
  { id: '22', name: '疙瘩汤', price: 15, budget: '平价', emoji: '🥣', category: '主食汤面', tags: ['汤品', '暖胃'], description: '热乎软和，适合想吃点舒服的那一刻。' },
  { id: '23', name: '烤羊肉串', price: 6, budget: '平价', emoji: '🍢', category: '凉菜小食', tags: ['烧烤', '夜宵'], description: '孜然一撒，夜晚的快乐就有了具体形状。' },
  { id: '24', name: '红烧排骨', price: 58, budget: '犒赏', emoji: '🍖', category: '招牌硬菜', tags: ['浓香', '家常'], description: '色泽红亮、酥烂入味，是好好吃饭的奖励。' },
];

export const BUDGETS = ['全部', '平价', '超值', '犒赏'] as const;
export const CATEGORIES = ['全部', '招牌硬菜', '下饭热炒', '主食汤面', '凉菜小食'] as const;
