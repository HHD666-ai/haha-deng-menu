// 定义具体的值（给 App.tsx 用的）
export const BudgetLevel = {
  POOR: '穷鬼套餐',
  VALUE: '性价比',
  RICH: '有钱任性',
  ALL: 'ALL'
} as const;

// 从上面的值自动生成类型（给 constants.ts 用的）
export type BudgetLevel = typeof BudgetLevel[keyof typeof BudgetLevel];

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  budget: BudgetLevel;
  emoji: string;
  description: string;
  category?: string;
}