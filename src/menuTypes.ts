export type BudgetLevel = '平价' | '超值' | '犒赏';

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  budget: BudgetLevel;
  emoji: string;
  description: string;
  category: '招牌硬菜' | '下饭热炒' | '主食汤面' | '凉菜小食';
  tags: string[];
}
