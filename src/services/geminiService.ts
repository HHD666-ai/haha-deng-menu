import { GoogleGenAI } from "@google/genai";
import type { FoodItem } from '../menuTypes';

export const getHardenCommentary = async (food: FoodItem): Promise<string> => {
  // 1. 获取我们刚才存的钥匙
  const apiKey = import.meta.env.VITE_GOOGLE_AI_KEY;

  // 2. 如果没有钥匙，就让他休息
  if (!apiKey) {
    return "API Key 缺失，哈登正在休息... (请检查 .env 文件)";
  }

  try {
    // 3. 初始化 AI (这里是用新版 SDK 的正确写法)
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // 使用更快的模型
    const modelId = 'gemini-1.5-flash';

    const prompt = `
      角色扮演: 你是NBA球星詹姆斯·哈登 (James Harden)，现在你也是一位美食评论家。
      你的语言风格: 幽默、带点篮球术语 (如后撤步、造犯规、欧洲步、MVP、三分球)、年轻化、稍微有点逗比。

      任务: 请用简短的一句话 (不超过50字) 点评这道菜: ${food.name}。
      这道菜属于${food.budget}档次。

      点评方向: 这道菜能不能给人能量? 是不是性价比MVP? 或者是奢华的享受?
      请直接输出点评内容，不要加引号。
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "这顿饭，看着就想来个后撤步三分！ ";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "哈登正在训练，暂无点评... (请检查网络或Key)";
  }
};