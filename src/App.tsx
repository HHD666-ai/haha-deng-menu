import React, { useState, useEffect } from 'react';
import { 
  Menu, Utensils, Zap, Crown, RefreshCw, 
  Share2, ArrowRight, Gamepad2, Info, MessageSquare, Flame 
} from 'lucide-react';
import { BudgetLevel, type FoodItem } from './menuTypes';
import { NORTHERN_FOOD_MENU, HARDEN_QUOTES } from './constants';
import { getHardenCommentary } from './services/geminiService';
import InstallationGuide from './components/InstallationGuide';
import FeedbackModal from './components/FeedbackModal';

const QQ_NUMBER = "1056115760";

// --- Components ---

const FilterButton: React.FC<{ children: React.ReactNode, active: boolean, onClick: () => void, emoji: string }> = ({ children, active, onClick, emoji }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-2 px-1 rounded-lg text-sm font-bold transition-all border ${
      active 
        ? 'bg-rockets-red border-rockets-red text-white shadow-lg shadow-red-900/40 transform scale-105' 
        : 'bg-zinc-800 border-zinc-700 text-gray-400 hover:border-gray-500 hover:text-white'
    }`}
  >
    <div className="text-lg mb-1">{emoji}</div>
    {children}
  </button>
);

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<BudgetLevel | 'ALL'>('ALL');
  const [generatedFood, setGeneratedFood] = useState<FoodItem | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hardenComment, setHardenComment] = useState<string>("");
  const [isInstallModalOpen, setInstallModalOpen] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("复制");

  // Rotating quote
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % HARDEN_QUOTES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRandomize = async () => {
    setIsSpinning(true);
    setHardenComment("");
    
    // Filter
    const filteredList = selectedBudget === 'ALL' 
      ? NORTHERN_FOOD_MENU 
      : NORTHERN_FOOD_MENU.filter(item => item.budget === selectedBudget);

    // Roulette Animation
    let count = 0;
    const maxCount = 12;
    const spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * filteredList.length);
      setGeneratedFood(filteredList[randomIndex]);
      count++;
      if (count >= maxCount) {
        clearInterval(spinInterval);
        setIsSpinning(false);
        const finalFood = filteredList[randomIndex];
        // Fetch AI comment
        // ✅ 修改后的写法 (传入 name 和 price)
// 注意：确保 finalFood 对象里有 price 属性，如果没有可以用 || 0 兜底
getHardenCommentary(finalFood.name, finalFood.price).then((comment: string) => setHardenComment(comment));
      }
    }, 100);
  };

  const handleShare = async () => {
    const text = `哈登大厨推荐我今天吃：${generatedFood?.name || '空气'}！快来试试：[网页链接]`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: '哈哈登的菜单',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(text + " " + window.location.href);
      alert("链接已复制，发给兄弟们！");
    }
  };

  const copyQQ = () => {
    navigator.clipboard.writeText(QQ_NUMBER);
    setCopyFeedback("已复制!");
    setTimeout(() => setCopyFeedback("复制"), 2000);
  };

  // --- Landing Screen (Home Page) ---
  if (!hasEntered) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        {/* Background FX */}
        <div className="absolute inset-0 basketball-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rockets-red rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>

        <div className="z-10 text-center space-y-6 p-6 max-w-md w-full animate-in fade-in zoom-in duration-500">
          <div className="relative inline-block mb-4">
             <div className="w-24 h-24 bg-gradient-to-tr from-rockets-red to-black rounded-full flex items-center justify-center border-4 border-white shadow-[0_0_30px_rgba(206,17,65,0.6)] mx-auto">
                <span className="font-display italic text-4xl font-bold">13</span>
             </div>
             <div className="absolute -top-2 -right-4 rotate-12 bg-yellow-400 text-black font-bold px-2 py-0.5 rounded text-xs">MVP</div>
          </div>
          
          <div>
            <h1 className="text-6xl font-black italic tracking-tighter font-display mb-2">
              <span className="text-white">HAHA</span>
              <span className="text-rockets-red"> DENG</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium tracking-wide uppercase">Northern Food Menu</p>
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-sm italic text-gray-500">"{HARDEN_QUOTES[quoteIndex]}"</p>
          </div>

          <button 
            onClick={() => setHasEntered(true)}
            className="group w-full bg-rockets-red hover:bg-red-600 text-white text-xl font-bold py-5 rounded-none skew-x-[-10deg] shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 mt-8 border border-red-500"
          >
            <span className="skew-x-[10deg] flex items-center gap-2">
               进入球场 <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
            </span>
          </button>
          
          <div className="pt-8 text-xs text-gray-600 font-mono">
             DESIGNED FOR NORTHERN STOMACHS
          </div>
        </div>
      </div>
    );
  }

  // --- Main App Screen ---
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col md:flex-row relative">
      
      {/* --- Left Sidebar (Desktop) --- */}
      <div className="hidden md:flex flex-col justify-between w-80 bg-zinc-950 border-r border-zinc-900 p-8 sticky top-0 h-screen z-10">
        <div>
          <h2 className="text-5xl font-display font-black italic text-zinc-800 mb-8 select-none">H-TOWN</h2>
          <div className="space-y-6">
            <div className="p-4 bg-zinc-900/50 border-l-4 border-rockets-red rounded-r">
              <h3 className="font-bold text-rockets-red mb-1">吃饭战术</h3>
              <p className="text-sm text-gray-400">就像后撤步一样，吃饭也要找准节奏。如果不知道吃什么，就让哈登帮你造个犯规。</p>
            </div>
            <div className="p-4 bg-zinc-900/50 border-l-4 border-white rounded-r">
               <h3 className="font-bold text-white mb-1">北方胃</h3>
               <p className="text-sm text-gray-400">拒绝精致过头，主要就是碳水+硬菜。量大管饱才是硬道理。</p>
            </div>
          </div>
        </div>
        <div className="opacity-10 pointer-events-none select-none">
           <Crown size={200} />
        </div>
      </div>

      {/* --- Center Content (Mobile & Desktop) --- */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full relative min-h-screen">
        
        {/* Header */}
        <header className="px-4 py-3 flex items-center justify-between bg-zinc-950/80 backdrop-blur-md sticky top-0 z-30 border-b border-zinc-900">
          <div className="flex items-center gap-3" onClick={() => setHasEntered(false)}>
            <div className="w-8 h-8 bg-rockets-red flex items-center justify-center font-display font-bold italic text-white skew-x-[-10deg] cursor-pointer">
               <span className="skew-x-[10deg]">13</span>
            </div>
            <span className="font-bold text-lg tracking-tight">哈哈登的菜单</span>
          </div>
          <button onClick={handleShare} className="p-2 text-gray-400 hover:text-white transition-colors bg-zinc-900 rounded-full">
            <Share2 size={18}/>
          </button>
        </header>

        <main className="flex-1 p-4 pb-40 space-y-6 flex flex-col">
          
          {/* Filters */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline px-1">
               <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Cap Space (预算)</span>
            </div>
            <div className="flex gap-2 w-full">
              <FilterButton active={selectedBudget === 'ALL'} onClick={() => setSelectedBudget('ALL')} emoji="🏀">全部</FilterButton>
              <FilterButton active={selectedBudget === BudgetLevel.POOR} onClick={() => setSelectedBudget(BudgetLevel.POOR)} emoji="💸">穷鬼</FilterButton>
              <FilterButton active={selectedBudget === BudgetLevel.VALUE} onClick={() => setSelectedBudget(BudgetLevel.VALUE)} emoji="⚖️">性价比</FilterButton>
              <FilterButton active={selectedBudget === BudgetLevel.RICH} onClick={() => setSelectedBudget(BudgetLevel.RICH)} emoji="💎">有钱</FilterButton>
            </div>
          </div>

          {/* Main Card Area */}
          <div className="flex-1 flex flex-col justify-center min-h-[360px]">
            {generatedFood ? (
              <div className="animate-in zoom-in duration-300">
                <div className={`w-full bg-zinc-900 border-2 ${isSpinning ? 'border-yellow-500' : 'border-rockets-red'} rounded-2xl p-6 shadow-2xl relative overflow-hidden group`}>
                  
                  {/* Decorative stripe */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rockets-red/20 to-transparent rounded-bl-full -mr-8 -mt-8"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded font-mono uppercase border border-zinc-700">
                        {generatedFood.category}
                      </span>
                      <span className="text-yellow-500 font-bold text-xs flex items-center gap-1">
                        <Flame size={12} className="fill-yellow-500" /> {generatedFood.budget}
                      </span>
                    </div>

                    <h2 className="text-4xl font-black mb-4 text-white tracking-tight leading-tight min-h-[80px] flex items-center">
                      {generatedFood.name}
                    </h2>

                    <p className="text-gray-400 mb-8 text-lg border-l-2 border-zinc-700 pl-4">
                      {generatedFood.description}
                    </p>

                    {/* AI Commentary */}
                    {!isSpinning && (
                      <div className="mt-4 p-4 bg-black rounded-lg border border-zinc-800 relative">
                        <div className="absolute -top-3 left-4 bg-rockets-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          Harden Analysis
                        </div>
                        <p className="text-gray-300 italic text-sm pt-2 leading-relaxed">
                          "{hardenComment || "哈登正在思考战术..."}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-600 py-12 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30 flex flex-col items-center justify-center h-full">
                <Utensils size={48} className="mb-4 opacity-20" />
                <p className="font-bold text-lg text-gray-500">还不知道吃啥？</p>
                <p className="text-sm">点击下方按钮，让哈登帮你选</p>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleRandomize}
            disabled={isSpinning}
            className="w-full bg-white text-black text-xl font-black py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-tighter"
          >
            {isSpinning ? (
              <><RefreshCw className="animate-spin" /> 战术跑位中...</>
            ) : (
              <><Zap className="text-rockets-red fill-current" /> 随机生成饭单</>
            )}
          </button>

          {/* Quick Select Grid (Manual) */}
          <div className="pt-4">
            <h3 className="text-gray-600 font-bold mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
               <Menu size={12}/> 替补席 (自己选)
            </h3>
            <div className="grid grid-cols-2 gap-2">
               {NORTHERN_FOOD_MENU.slice(0, 4).map(food => (
                 <button 
                   key={food.id} 
                   onClick={() => { setGeneratedFood(food); setHardenComment("自己选的菜，含着泪也要吃完！"); window.scrollTo({top:0, behavior:'smooth'}); }} 
                   className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-left text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-colors truncate"
                 >
                   {food.name}
                 </button>
               ))}
               <button onClick={() => alert("更多菜品还在开发中，先随机吧！")} className="p-3 bg-zinc-900 border border-dashed border-zinc-800 rounded-lg text-center text-sm text-gray-600 hover:text-white transition-colors">
                  + 更多
               </button>
            </div>
          </div>

        </main>

        {/* --- Footer Sticky Area (Valorant + Tools) --- */}
        <div className="bg-zinc-950 border-t border-zinc-900 p-4 sticky bottom-0 z-40 pb-safe">
           <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-xl relative overflow-hidden">
              
              {/* Valorant Section */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="bg-red-500/10 p-2 rounded-lg">
                        <Gamepad2 className="text-rockets-red" size={24} />
                    </div>
                    <div>
                        <div className="font-bold text-white text-base">带我打瓦</div>
                        <div className="text-xs text-gray-500">国服/国际服均可</div>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg border border-zinc-700">
                    <span className="text-gray-300 font-mono text-sm tracking-wide select-all">{QQ_NUMBER}</span>
                    <div className="w-px h-4 bg-gray-700 mx-1"></div>
                    <button 
                      onClick={copyQQ}
                      className="text-rockets-red hover:text-white transition-colors text-xs font-bold uppercase"
                    >
                      {copyFeedback}
                    </button>
                 </div>
              </div>

              {/* Tools Section */}
              <div className="grid grid-cols-2 gap-3 relative z-10">
                <button onClick={() => setInstallModalOpen(true)} className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium">
                   <Info size={14} /> 如何安装到手机
                </button>
                <button onClick={() => setFeedbackModalOpen(true)} className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium">
                   <MessageSquare size={14} /> 意见反馈
                </button>
              </div>

           </div>
        </div>

      </div>

      {/* --- Right Sidebar (Desktop) --- */}
      <div className="hidden md:flex flex-col justify-end w-80 bg-zinc-950 border-l border-zinc-900 p-8 sticky top-0 h-screen text-right z-10">
         <div className="opacity-10 mb-auto mt-12 flex justify-end select-none pointer-events-none">
           <Utensils size={180} />
         </div>
         <div>
          <h2 className="text-4xl font-display font-black italic text-white mb-1">FEAR THE</h2>
          <h2 className="text-6xl font-display font-black italic text-rockets-red mb-8">BEARD</h2>
          <div className="space-y-4 text-gray-500 text-sm font-medium">
            <p>不要在吃饭的时候犹豫</p>
            <p>就像不要在空位的时候传球</p>
            <p className="pt-4 text-xs text-zinc-700">© HAHA DENG KITCHEN v1.0</p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <InstallationGuide isOpen={isInstallModalOpen} onClose={() => setInstallModalOpen(false)} />
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setFeedbackModalOpen(false)} />

    </div>
  );
}