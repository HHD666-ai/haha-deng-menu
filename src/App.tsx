import { useEffect, useMemo, useState } from 'react';
import { Dice5, Heart, Search, Share2, Sparkles, UtensilsCrossed, X } from 'lucide-react';
import { BUDGETS, CATEGORIES, MENU } from './constants';
import heroImage from './assets/northeast-feast-hero.png';
import type { BudgetLevel, FoodItem } from './menuTypes';

type BudgetFilter = BudgetLevel | '全部';
type CategoryFilter = FoodItem['category'] | '全部';

const budgetStyle: Record<BudgetLevel, string> = {
  平价: 'bg-emerald-400/15 text-emerald-200 ring-emerald-300/25',
  超值: 'bg-amber-400/15 text-amber-200 ring-amber-300/25',
  犒赏: 'bg-rose-400/15 text-rose-200 ring-rose-300/25',
};

export default function App() {
  const [budget, setBudget] = useState<BudgetFilter>('全部');
  const [category, setCategory] = useState<CategoryFilter>('全部');
  const [query, setQuery] = useState('');
  const [pick, setPick] = useState<FoodItem | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem('haha-deng-favorites') ?? '[]'));
  const [showFavorites, setShowFavorites] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => localStorage.setItem('haha-deng-favorites', JSON.stringify(favorites)), [favorites]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const dishes = useMemo(() => MENU.filter((dish) => {
    const matchBudget = budget === '全部' || dish.budget === budget;
    const matchCategory = category === '全部' || dish.category === category;
    const needle = query.trim().toLowerCase();
    const matchQuery = !needle || [dish.name, dish.description, dish.category, ...dish.tags].join(' ').toLowerCase().includes(needle);
    const matchFavorite = !showFavorites || favorites.includes(dish.id);
    return matchBudget && matchCategory && matchQuery && matchFavorite;
  }), [budget, category, favorites, query, showFavorites]);

  const chooseRandom = () => {
    if (!dishes.length) return setToast('当前筛选下没有菜品，换个条件试试吧。');
    setPick(dishes[Math.floor(Math.random() * dishes.length)]);
  };

  const toggleFavorite = (id: string) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const share = async () => {
    const text = pick ? `今天吃「${pick.name}」：${pick.description}` : '打开哈哈邓菜单，今天吃什么交给它。';
    try {
      if (navigator.share) await navigator.share({ title: '哈哈邓的菜单', text, url: window.location.href });
      else { await navigator.clipboard.writeText(`${text} ${window.location.href}`); setToast('菜单链接已复制，发给饭搭子吧。'); }
    } catch { /* 用户取消分享时无需提示 */ }
  };

  return <main className="min-h-screen paper bg-[#160f0d] text-stone-100">
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pt-10">
      <header className="mb-9 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[.28em] text-amber-300/80">NORTH CHINA COMFORT FOOD</p>
          <h1 className="font-serif text-4xl font-black tracking-tight text-[#fff6e9] sm:text-6xl">哈哈邓的菜单</h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-stone-300 sm:text-base">不纠结吃什么。按预算、口味和心情筛一筛，给今天这顿饭一个靠谱答案。</p>
        </div>
        <button onClick={share} aria-label="分享菜单" className="mt-1 rounded-full border border-amber-100/15 bg-white/5 p-3 text-amber-100 transition hover:bg-white/10"><Share2 size={19} /></button>
      </header>

      <section className="relative mb-7 min-h-64 overflow-hidden rounded-[2rem] border border-amber-100/15 bg-[#21130f] shadow-2xl shadow-black/30 sm:min-h-80">
        <img src={heroImage} alt="锅包肉和东北炖菜" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160f0d]/95 via-[#160f0d]/60 to-transparent" />
        <div className="relative flex min-h-64 max-w-sm flex-col justify-end p-6 sm:min-h-80 sm:p-9">
          <p className="mb-2 text-xs font-bold tracking-[.22em] text-amber-300">TODAY'S TABLE</p>
          <h2 className="font-serif text-3xl font-black leading-tight text-[#fff6e9] sm:text-4xl">今天这顿，<br />吃点好的。</h2>
          <p className="mt-3 text-sm leading-6 text-stone-200">锅包肉的酥香，铁锅炖菜的热乎。让好好吃饭，从今天开始。</p>
          <button onClick={chooseRandom} className="mt-5 w-fit rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-[#30190f] transition hover:bg-amber-200">来一份今日推荐</button>
        </div>
      </section>

      <section className="mb-7 rounded-3xl border border-amber-100/10 bg-[#241713]/90 p-4 shadow-2xl shadow-black/25 sm:p-6">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-stone-300 focus-within:border-amber-300/60">
          <Search size={18} className="text-amber-300" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜菜名、口味或标签，例如：麻辣、暖胃" className="w-full bg-transparent text-sm outline-none placeholder:text-stone-500" />
          {query && <button onClick={() => setQuery('')} aria-label="清除搜索"><X size={16} /></button>}
        </label>
        <FilterRow label="预算" values={BUDGETS} value={budget} onChange={setBudget} />
        <FilterRow label="分类" values={CATEGORIES} value={category} onChange={setCategory} />
      </section>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-400">为你找到 <strong className="text-amber-200">{dishes.length}</strong> 道合胃口的菜</p>
        <button onClick={() => setShowFavorites((value) => !value)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${showFavorites ? 'border-rose-300/50 bg-rose-400/15 text-rose-100' : 'border-white/10 bg-white/5 text-stone-300 hover:bg-white/10'}`}><Heart size={16} fill={showFavorites ? 'currentColor' : 'none'} /> 收藏 {favorites.length ? `(${favorites.length})` : ''}</button>
      </div>

      {dishes.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => <DishCard key={dish.id} dish={dish} favorite={favorites.includes(dish.id)} onFavorite={() => toggleFavorite(dish.id)} onSelect={() => setPick(dish)} />)}
      </div> : <div className="rounded-3xl border border-dashed border-amber-100/20 bg-black/15 px-6 py-20 text-center text-stone-400"><UtensilsCrossed className="mx-auto mb-4 text-amber-300/70" size={34} /><p className="font-semibold text-stone-200">这套筛选没有匹配的菜</p><button className="mt-4 text-sm text-amber-300 underline underline-offset-4" onClick={() => { setBudget('全部'); setCategory('全部'); setQuery(''); setShowFavorites(false); }}>清空筛选</button></div>}
    </section>

    <button onClick={chooseRandom} className="fixed bottom-5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-amber-300 px-5 py-3 text-sm font-black text-[#30190f] shadow-xl shadow-black/40 transition hover:bg-amber-200 active:scale-95"><Dice5 size={18} /> 今天吃什么？帮我选</button>
    {pick && <PickModal dish={pick} favorite={favorites.includes(pick.id)} onClose={() => setPick(null)} onFavorite={() => toggleFavorite(pick.id)} onAgain={chooseRandom} />}
    {toast && <div role="status" className="fixed bottom-20 left-1/2 z-30 -translate-x-1/2 rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-900 shadow-xl">{toast}</div>}
  </main>;
}

function FilterRow<T extends string>({ label, values, value, onChange }: { label: string; values: readonly T[]; value: T; onChange: (value: T) => void }) {
  return <div className="mt-5 flex flex-wrap items-center gap-2"><span className="mr-1 text-xs font-bold text-stone-500">{label}</span>{values.map((item) => <button key={item} onClick={() => onChange(item)} className={`rounded-full px-3 py-1.5 text-sm transition ${value === item ? 'bg-amber-300 text-[#321b0f] font-bold' : 'bg-white/5 text-stone-300 hover:bg-white/10'}`}>{item}</button>)}</div>;
}

function DishCard({ dish, favorite, onFavorite, onSelect }: { dish: FoodItem; favorite: boolean; onFavorite: () => void; onSelect: () => void }) {
  return <article className="dish-card relative overflow-hidden rounded-3xl border border-amber-100/10 bg-[#251914] p-5 shadow-lg shadow-black/15 hover:border-amber-200/30">
    <button onClick={onFavorite} aria-label={favorite ? `取消收藏 ${dish.name}` : `收藏 ${dish.name}`} className="absolute right-4 top-4 rounded-full p-2 text-stone-500 hover:bg-white/10 hover:text-rose-200"><Heart size={17} fill={favorite ? 'currentColor' : 'none'} className={favorite ? 'text-rose-300' : ''} /></button>
    <button onClick={onSelect} className="w-full text-left"><div className="mb-5 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100/10 text-2xl">{dish.emoji}</span><div><h2 className="font-serif text-xl font-black text-[#fff4e5]">{dish.name}</h2><p className="mt-1 text-xs text-stone-500">{dish.category}</p></div></div><p className="min-h-12 text-sm leading-6 text-stone-300">{dish.description}</p><div className="mt-5 flex items-center justify-between"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${budgetStyle[dish.budget]}`}>{dish.budget}</span><strong className="text-lg text-amber-200">¥{dish.price}</strong></div></button>
  </article>;
}

function PickModal({ dish, favorite, onClose, onFavorite, onAgain }: { dish: FoodItem; favorite: boolean; onClose: () => void; onFavorite: () => void; onAgain: () => void }) {
  return <div role="dialog" aria-modal="true" aria-label="今日推荐" className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={onClose}><section className="w-full max-w-md rounded-[2rem] border border-amber-200/20 bg-[#2a1a14] p-7 text-center shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-3xl bg-amber-100/10 text-4xl">{dish.emoji}</div><p className="text-xs font-bold tracking-[.2em] text-amber-300">TODAY'S PICK</p><h2 className="mt-2 font-serif text-4xl font-black text-[#fff4e5]">{dish.name}</h2><p className="mt-4 leading-7 text-stone-300">{dish.description}</p><div className="mt-6 flex items-center justify-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${budgetStyle[dish.budget]}`}>{dish.budget}</span><strong className="text-xl text-amber-200">¥{dish.price}</strong></div><div className="mt-7 grid grid-cols-2 gap-3"><button onClick={onFavorite} className="rounded-2xl border border-white/10 py-3 text-sm font-bold text-stone-200 hover:bg-white/5"><Heart className="mr-1 inline" size={16} fill={favorite ? 'currentColor' : 'none'} /> {favorite ? '已收藏' : '收藏它'}</button><button onClick={onAgain} className="rounded-2xl bg-amber-300 py-3 text-sm font-black text-[#30190f] hover:bg-amber-200"><Sparkles className="mr-1 inline" size={16} /> 换一道</button></div><button onClick={onClose} className="mt-5 text-sm text-stone-500 hover:text-stone-300">回到菜单</button></section></div>;
}
