import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#050a30] text-white p-4 rounded-xl shadow-2xl border border-amber-400/30 flex items-start gap-3 animate-in slide-in-from-bottom duration-200">
      <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
      <div className="text-xs sm:text-sm font-medium leading-relaxed pr-2">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-white/60 hover:text-white p-0.5 ml-auto cursor-pointer"
        aria-label="Đóng thông báo"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
