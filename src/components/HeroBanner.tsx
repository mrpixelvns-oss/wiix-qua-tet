import React from 'react';
import {
  Heart,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HeroBannerProps {
  onExploreGifts: () => void;
  onConsultCorporate: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreGifts,
  onConsultCorporate,
}) => {
  return (
    <section className="relative w-full overflow-hidden min-h-screen lg:h-screen flex flex-col justify-between bg-[#060709] text-white select-none">
      {/* 1. Full-bleed Royal Palace Showroom Background (img_login_c5ef68d6.webp) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/img_login_c5ef68d6.webp"
          alt="Không Gian Hoàng Gia & Dòng Quà Tết Thượng Hạng Wiix"
          className="w-full h-full object-cover object-center scale-100 brightness-[0.90] contrast-[1.05]"
        />

        {/* Moderate Scrim: Just enough darkness for high text legibility while keeping the background image clearly visible */}
        <div className="absolute inset-0 bg-[#060709]/40 pointer-events-none" />

        {/* Soft center backlight to boost contrast behind text without hiding showroom details */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,7,9,0.55)_0%,_rgba(6,7,9,0.30)_55%,_rgba(6,7,9,0.1)_100%)] pointer-events-none" />

        {/* Gentle Directional Vignettes for navbar and bottom bar integration */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#060709]/80 via-[#060709]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060709]/90 via-[#060709]/40 to-transparent pointer-events-none" />

        {/* Warm Golden Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. Main Content Container: Perfectly Center-Aligned Box Banner */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5 flex flex-col items-center">

          {/* Upper Category Kicker & Highlight Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-amber-200 font-sans">
              Bộ Sưu Tập Quà Tết 2027
            </span>
            <span className="hidden sm:inline-block w-3.5 h-[1px] bg-amber-400/40" />
            <span className="hidden sm:inline-block text-[13px] font-medium text-amber-300">
              Tuyệt Phẩm Tri Ân
            </span>
          </div>

          {/* Massive Serif Title: Dual-tone White + Warm Metallic Gold with drop-shadow */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.05] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            <span className="text-white font-normal drop-shadow-md">
              Wiix{' '}
            </span>
            <span className="text-[#E5C384] font-normal tracking-normal drop-shadow-[0_4px_25px_rgba(229,195,132,0.4)]">
              Quà Tết
            </span>
          </h1>

          {/* Concise Editorial Description - Exactly 16px as requested */}
          <p className="text-[16px] text-white/95 leading-relaxed font-normal max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Quà tặng cao cấp được tuyển chọn tinh tế, thay lời tri ân sâu sắc, tôn vinh mối quan hệ hợp tác và kiến tạo kết nối bền vững.
          </p>

          {/* Action Buttons Row - Center Aligned */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-2">
            {/* Primary Glassmorphic Pill Button */}
            <button
              onClick={onExploreGifts}
              className="group px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 active:scale-98 text-white text-xs sm:text-[14px] font-semibold tracking-wide border border-white/35 hover:border-white/70 backdrop-blur-md transition-all inline-flex items-center gap-2.5 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            >
              <span>Khám phá bộ sưu tập</span>
              <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Secondary Corporate B2B Action */}
            <button
              onClick={onConsultCorporate}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#dd3333] hover:bg-[#c52525] active:scale-98 text-white text-xs sm:text-sm font-semibold tracking-wide border border-amber-400/30 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-red-900/40"
            >
              <Building2 className="w-4 h-4 text-amber-300" />
              <span>Báo giá doanh nghiệp</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Floating Capsule Bar at bottom matching exact icons & text from reference */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 sm:pb-8">
        <div className="bg-[#101216]/92 backdrop-blur-xl border border-white/12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] px-5 sm:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-0 lg:divide-x divide-white/10 text-left">

            {/* Item 1: Tặng thiệp miễn phí */}
            <div className="flex items-center gap-4 lg:px-5 first:lg:pl-0 group">
              <div className="text-[#C5A265] group-hover:scale-105 group-hover:text-amber-300 transition-transform duration-300 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-white tracking-normal leading-snug group-hover:text-amber-100 transition-colors">
                  Tặng thiệp miễn phí
                </h4>
                <p className="text-[12px] sm:text-[13px] text-neutral-300 mt-0.5 truncate font-normal">
                  Cho đơn hàng quà tặng
                </p>
              </div>
            </div>

            {/* Item 2: Hộp & túi cao cấp */}
            <div className="flex items-center gap-4 lg:px-5 group">
              <div className="text-[#C5A265] group-hover:scale-105 group-hover:text-amber-300 transition-transform duration-300 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
                  <rect x="3" y="8" width="18" height="13" rx="2" />
                  <path d="M12 8v13" />
                  <path d="M3 14.5h18" />
                </svg>
              </div>
              <div className="min-w-0">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-white tracking-normal leading-snug group-hover:text-amber-100 transition-colors">
                  Hộp &amp; túi cao cấp
                </h4>
                <p className="text-[12px] sm:text-[13px] text-neutral-300 mt-0.5 truncate font-normal">
                  Tặng kèm miễn phí
                </p>
              </div>
            </div>

            {/* Item 3: Gói quà miễn phí */}
            <div className="flex items-center gap-4 lg:px-5 group">
              <div className="text-[#C5A265] group-hover:scale-105 group-hover:text-amber-300 transition-transform duration-300 shrink-0">
                <Heart className="w-8 h-8 text-[#C5A265]" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-white tracking-normal leading-snug group-hover:text-amber-100 transition-colors">
                  Gói quà miễn phí
                </h4>
                <p className="text-[12px] sm:text-[13px] text-neutral-300 mt-0.5 truncate font-normal">
                  Giấy nến, giấy thơm &amp; thắt nơ
                </p>
              </div>
            </div>

            {/* Item 4: Thêu & khắc tên */}
            <div className="flex items-center gap-4 lg:px-5 last:lg:pr-0 group">
              <div className="text-[#C5A265] group-hover:scale-105 group-hover:text-amber-300 transition-transform duration-300 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="M15 21h6" />
                </svg>
              </div>
              <div className="min-w-0">
                <h4 className="text-[15px] sm:text-[16px] font-bold text-white tracking-normal leading-snug group-hover:text-amber-100 transition-colors">
                  Thêu &amp; khắc tên
                </h4>
                <p className="text-[12px] sm:text-[13px] text-neutral-300 mt-0.5 truncate font-normal">
                  Miễn phí lên sản phẩm
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
