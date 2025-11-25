// src/services/geminiService.ts

// 移除 import { GoogleGenerativeAI } ... 这一行，彻底解决找不到模块的报错

/**
 * 纯本地模拟评论，不再请求 API
 */
export const getHardenCommentary = async (foodName: string, price: number): Promise<string> => {
  // 假装思考一下 (延迟 0.5秒)
  await new Promise(resolve => setTimeout(resolve, 500));

  // 直接返回固定的骚话
  return `（模拟数据）哈登摸了摸胡子说：${foodName}？只要 ${price} 块？这比我在夜店撒的钱少多了，买它！`;
};