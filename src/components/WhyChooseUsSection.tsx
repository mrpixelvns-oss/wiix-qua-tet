import React from 'react';
import { Sparkles, CheckCheck, ShieldCheck, HeartHandshake, PackageCheck, Layers } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/tetGifts';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Layers className="w-5 h-5 text-[#dd3333]" />;
      case 2:
        return <PackageCheck className="w-5 h-5 text-amber-500" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-[#dd3333]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#dd3333]" />;
    }
  };

  return (
    <section id="ly-do" className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#050a30]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#050a30]/80 tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#dd3333]" />
            <span>Tiêu Chuẩn Đẳng Cấp</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#050a30] tracking-tight">
            Vì Sao Nên Chọn Quà Tết Wiix Việt Nam?
          </h2>
          <p className="text-sm sm:text-base text-[#050a30]/75 leading-relaxed">
            Chúng tôi định nghĩa lại văn hóa tặng quà Tết bằng sự chỉn chu tuyệt đối từ hình thức bao bì đến nguồn gốc thành phần bên trong.
          </p>
        </div>

        {/* 4 Clean Editorial Feature Cards (Grid 2x2 with modern styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-5">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-7 sm:p-9 bg-[#F9FAFB] rounded-2xl border border-[#050a30]/10 hover:border-[#dd3333] hover:bg-white shadow-xs hover:shadow-[0_16px_35px_rgba(5,10,48,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle gold watermarked number in corner */}
              <div className="absolute top-4 right-6 font-serif text-5xl font-bold text-[#050a30]/5 group-hover:text-amber-500/10 transition-colors pointer-events-none tabular-nums">
                {item.step}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold text-[#dd3333] tracking-widest uppercase font-mono">
                    Trụ Cột {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#050a30] group-hover:text-[#dd3333] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[16px] text-[#050a30]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#050a30]/8 flex items-center gap-2 sm:text-[14px] text-[#050a30]/65 font-medium relative z-10">
                <CheckCheck className="w-4 h-4 text-[#dd3333]" />
                <span>Cam kết đồng bộ trên từng hộp quà bàn giao</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
