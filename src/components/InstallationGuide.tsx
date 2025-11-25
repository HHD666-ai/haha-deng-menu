import React from 'react';
import { X, Share, Smartphone, MoreVertical } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const InstallationGuide: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-rockets-red rounded-xl max-w-md w-full p-6 relative shadow-[0_0_30px_rgba(206,17,65,0.3)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-bold text-rockets-red mb-4 flex items-center gap-2 font-display uppercase italic">
          <Smartphone /> 安装到手机桌面
        </h3>

        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <span className="bg-gray-800 p-1 rounded">🍏</span> 苹果 (Safari)
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-400">
              <li>点击浏览器底部的分享按钮 <Share size={14} className="inline"/></li>
              <li>向下滑动，找到并点击 "添加到主屏幕"</li>
              <li>点击右上角的 "添加"</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <span className="bg-gray-800 p-1 rounded">🤖</span> 安卓 (Chrome)
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-400">
              <li>点击右上角的三个点菜单 <MoreVertical size={14} className="inline"/></li>
              <li>选择 "添加到主屏幕" 或 "安装应用"</li>
              <li>确认添加，图标就会出现在桌面啦</li>
            </ol>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 w-full bg-rockets-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider"
        >
          OK，懂了
        </button>
      </div>
    </div>
  );
};

export default InstallationGuide;