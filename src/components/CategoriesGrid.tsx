import React from 'react';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { CATEGORIES } from '../data/tetGifts';
import { LuxuryGiftArtwork } from './LuxuryGiftArtwork';

interface CategoriesGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="danh-muc" className="py-[60px] border-b border-[#050a30]/10 bg-white relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#dd3333]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Clean Centered Style */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8C88B]/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#dd3333] animate-pulse" />
            <span className="text-xs font-semibold text-[#050a30] tracking-widest uppercase">
              Wiix Việt Nam - Tết Đinh Mùi 2027
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#050a30] tracking-tight leading-[1.15]">
            Bộ Quà Tết <span className="text-[#dd3333] inline-block">Mới Nhất</span>
          </h2>

          <p className="text-sm sm:text-base text-[#050a30]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Mỗi bộ sưu tập là một tác phẩm được Wiix tinh chỉnh chuyên biệt: từ chăm sóc sức khỏe gia đình, tôn vinh nét đẹp sum vầy truyền thống đến khẳng định vị thế ngoại giao với đối tác chiến lược.
          </p>
        </div>

        {/* 6 Category Cards Grid: Modern Luxury Magazine Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative cursor-pointer bg-white rounded-2xl border border-[#050a30]/10 hover:border-[#E8C88B] shadow-[0_4px_25px_rgba(5,10,48,0.04)] hover:shadow-[0_20px_45px_rgba(5,10,48,0.12)] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Image Container: Clean Edge-to-Edge Framing */}
              <div className="relative overflow-hidden aspect-[16/9] bg-[#050a30]">
                <LuxuryGiftArtwork
                  id={cat.artworkId}
                  aspectRatio="16:9"
                  imageUrl={cat.imageUrl}
                  title={cat.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text & Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  {/* Category Index & Mini Brand Tag */}
                  <div className="flex items-center justify-between text-xs text-[#050a30]/60 font-medium">
                    <span className="text-[#dd3333] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dd3333]" />
                      <span>BST WIIX 2027</span>
                    </span>
                    <span className="font-serif text-sm font-bold text-amber-800/40 group-hover:text-amber-600 transition-colors tabular-nums">
                      0{CATEGORIES.findIndex(c => c.id === cat.id) + 1}
                    </span>
                  </div>

                  {/* Main Category Title */}
                  <h3 className="font-serif text-[16px] sm:text-[18px] font-bold text-[#050a30] group-hover:text-[#dd3333] transition-colors leading-snug">
                    {cat.title}
                  </h3>

                  {/* Editorial Subtitle */}
                  <p className="text-xs sm:text-[15px] text-[#050a30]/75 leading-relaxed font-normal">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Footer Action Bar: Prominently Highlighted Budget / Price */}
                <div className="pt-4 mt-5 border-t border-[#050a30]/8 flex items-end justify-between gap-2">
                  <div>
                    <span className="text-[10px] block text-[#050a30]/50 font-semibold uppercase tracking-wider mb-0.5">
                      Định mức
                    </span>
                    <div className="text-lg sm:text-xl font-bold text-[#dd3333] font-serif tracking-tight leading-none">
                      {cat.targetBudget || cat.highlight}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#050a30] group-hover:text-[#dd3333] transition-colors pb-0.5">
                    <span className="group-hover:translate-x-0.5 transition-transform">Khám phá</span>
                    <div className="w-8 h-8 rounded-full bg-[#050a30]/5 group-hover:bg-[#dd3333] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Flush bottom luxury accent line on hover */}
              <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#dd3333] via-[#E8C88B] to-[#dd3333] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Editorial Bottom Reassurance & Consultation Ribbon */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#050a30] via-[#0b1754] to-[#050a30] p-6 sm:p-8 text-white border border-amber-400/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center lg:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5252]" />
              <span>Dịch Vụ Thiết Kế Quà Doanh Nghiệp Theo Yêu Cầu</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
              Cần Giải Pháp Quà Tết Tùy Biến Theo Định Mức Ngân Sách?
            </h4>
            <p className="text-xs sm:text-[14px] text-neutral-300 leading-relaxed">
              Wiix hỗ trợ in ấn ép kim logo thương hiệu, may túi lụa khắc tên độc bản, tùy biến thiệp chúc Tết công ty và phối trộn thành phần quà tặng linh hoạt từ 30 set trở lên.
            </p>
            {/* 3 Quick highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 sm:text-[14px] text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>In ép kim logo miễn phí</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Chiết khấu tới 20%</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Hóa đơn VAT trong 24h</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto relative z-10">
            <a
              href="#doanh-nghiep"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#dd3333] to-[#b81d1d] hover:from-[#c52525] hover:to-[#9a1515] text-white text-xs font-semibold tracking-wide shadow-md transition-all cursor-pointer border border-amber-400/30 hover:scale-[1.02]"
            >
              <span>NHẬN BÁO GIÁ DOANH NGHIỆP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#ngan-sach"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-amber-200 hover:text-white text-xs font-semibold tracking-wide border border-amber-400/25 transition-all cursor-pointer"
            >
              <span>CHỌN THEO NGÂN SÁCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
