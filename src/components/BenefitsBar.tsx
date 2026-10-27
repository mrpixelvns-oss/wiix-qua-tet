import React from 'react';
import { Gift, ShieldCheck, Truck, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';
import { BENEFITS } from '../data/tetGifts';

export const BenefitsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gift':
        return <Gift className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />;
      case 'truck':
        return <Truck className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />;
      default:
        return <Gift className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#F9FAFB] via-[#FAF7F0] to-[#F9FAFB] relative border-b border-[#050a30]/10 overflow-hidden">
      {/* Subtle ambient luxury light orbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Editorial & Trust-Anchored */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-900 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#dd3333]" />
            <span>Cam Kết Thương Hiệu Wiix Việt Nam</span>
            <Sparkles className="w-3.5 h-3.5 text-[#dd3333]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#050a30] tracking-tight">
            Chuẩn Mực Trao Gửi — Vẹn Tròn Tâm Ý
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#050a30]/75 leading-relaxed font-normal">
            Mỗi món quà Tết là sự bảo chứng cho chữ tín và vị thế của người tặng. Wiix cam kết chỉn chu từ thẩm mỹ bao bì đến an toàn thực phẩm và dịch vụ giao nhận.
          </p>
        </div>

        {/* 4 Cards Bento Grid: Modern Editorial Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#050a30]/8 hover:border-amber-400/60 transition-all duration-500 ease-out flex flex-col justify-between shadow-[0_4px_20px_rgba(5,10,48,0.03)] hover:shadow-[0_20px_40px_rgba(5,10,48,0.08)] hover:-translate-y-1.5 overflow-hidden cursor-default"
            >
              {/* Subtle top-right golden corner aura on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-300/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header row: Icon & Editorial Numeric Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-50 via-[#FFF9F2] to-amber-100/60 border border-amber-300/40 text-[#dd3333] flex items-center justify-center shadow-xs group-hover:text-amber-300 group-hover:border-amber-400/50 group-hover:rotate-3 transition-all duration-500 shrink-0">
                    {getIcon(item.icon)}
                  </div>

                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900/20 group-hover:text-amber-600/60 transition-colors tabular-nums block leading-none">
                      0{idx + 1}
                    </span>
                    <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-900 border border-amber-500/20 font-mono">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg sm:text-l text-[#050a30] group-hover:text-[#dd3333] transition-colors tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dd3333] bg-[#dd3333]/8 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dd3333] animate-pulse" />
                    <span>{item.highlight}</span>
                  </div>

                  <p className="text-xs sm:text-[15px] text-[#050a30]/75 leading-relaxed font-normal pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Micro-perk & Gold Gradient Hover Bar */}
              <div className="mt-5 pt-3.5 border-t border-[#050a30]/6">
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#050a30]/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{item.subBenefit}</span>
                </div>

                {/* Animated gradient expander on hover */}
                <div className="w-8 group-hover:w-full h-[2px] bg-gradient-to-r from-[#dd3333] via-amber-400 to-[#dd3333] rounded-full transition-all duration-500 ease-out mt-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Assurance Ribbon */}
        <div className="mt-12 pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[16px] sm:text-sm text-[#050a30]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span><strong className="font-semibold text-[#050a30]">15.000+</strong> Hộp quà trao gửi mùa Tết trước</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span><strong className="font-semibold text-[#050a30]">100%</strong> Hài lòng về bao bì & quy cách đóng gói</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span><strong className="font-semibold text-[#050a30]">Showroom</strong> Trưng bày thực tế tại Hà Nội & TP. HCM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
