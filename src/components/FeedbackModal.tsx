import React, { useState } from 'react';
import { X, Send, MessageSquare } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
        setSent(false);
        setText('');
        onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-gray-700 rounded-xl max-w-sm w-full p-6 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
           <MessageSquare size={20} className="text-rockets-red"/> 给哈登提意见
        </h3>

        {sent ? (
             <div className="text-center py-8">
                 <div className="text-4xl mb-2">🤝</div>
                 <div className="text-green-400 font-bold">收到！</div>
                 <p className="text-gray-500 text-sm mt-2">哈登正在看你的建议...</p>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-gray-400">发现bug了？还是想加新菜？直接说！</p>
            <textarea
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-rockets-red min-h-[120px] resize-none"
                placeholder="带我打瓦？还是加个麻辣烫？"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button 
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
            >
                <Send size={18} /> 发送反馈
            </button>
            </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;