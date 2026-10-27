import React, { useState, useEffect } from 'react';
import { ShoppingBag, PhoneCall, Sparkles, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    handleScrollProgress();
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  return (
    <>
      {/* Top subtle luxury announcement bar */}
      <div className="bg-[#050a30] text-amber-200/90 text-[11px] sm:text-xs py-2 px-4 border-b border-amber-400/20 text-center tracking-wide font-medium relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dd3333] animate-ping" />
          <span>Đặc quyền đặt sớm Tết Đinh Mùi 2027: Miễn phí in ép kim logo doanh nghiệp & gửi mẫu hộp tận nơi trong 24h</span>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <header className="sticky top-0 z-40 bg-[#F9FAFB]/90 backdrop-blur-xl border-b border-[#050a30]/10 shadow-[0_4px_20px_rgba(5,10,48,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">

          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-[#050a30] transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#050a30] text-amber-300 flex items-center justify-center font-serif font-bold text-base shadow-sm border border-amber-400/30 group-hover:bg-[#dd3333] transition-colors">
              W
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#050a30] group-hover:text-[#dd3333] transition-colors block leading-none">
                Wiix Việt Nam
              </span>
              <span className="text-[10px] text-amber-800/80 uppercase tracking-widest font-semibold block mt-1">
                Luxury Tet Hamper 2027
              </span>
            </div>
          </a>

          {/* Zone 2: 6 clean single-line nav links with animated underline indicator */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#050a30]/80">
            <a
              href="#bo-suu-tap"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Bộ Sưu Tập</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#danh-muc"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Danh Mục</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#ngan-sach"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Theo Ngân Sách</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#doanh-nghiep"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group flex items-center gap-1.5"
            >
              <span>Quà Doanh Nghiệp</span>
              <span className="text-[10px] text-white bg-[#dd3333] px-1.5 py-0.2 rounded font-bold">VIP</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#danh-gia"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Hình Ảnh Thực Tế</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#quy-trinh"
              className="relative py-1 hover:text-[#dd3333] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Quy Trình &amp; FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dd3333] group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Zone 3: Primary Action & Cart Trigger */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Quick Hotline direct link */}
            <a
              href="tel:0383666888"
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#050a30] hover:text-[#dd3333] transition-colors py-2 px-3.5 rounded-lg border border-[#050a30]/15 bg-white/80 shadow-2xs hover:shadow-xs"
              title="Hotline tư vấn nhanh"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#dd3333]" />
              <span className="tabular-nums font-mono font-bold">0383.666.888</span>
            </a>

            {/* Corporate Quote CTA with golden rim glow */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden md:inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#050a30] to-[#0c185e] hover:from-[#dd3333] hover:to-[#c22828] active:scale-95 transition-all rounded-lg shadow-sm border border-amber-400/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Báo Giá Doanh Nghiệp</span>
            </button>

            {/* Cart Drawer Trigger with pulse count */}
            <button
              onClick={onOpenCart}
              aria-label="Xem giỏ quà"
              className="relative flex items-center justify-center p-2.5 sm:px-3 sm:py-2.5 text-[#050a30] hover:text-[#dd3333] bg-white rounded-lg border border-[#050a30]/15 hover:border-[#dd3333]/40 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-[#050a30]" />
              {cartCount > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold text-white bg-[#dd3333] rounded-full shadow-md tabular-nums ring-2 ring-white animate-bounce">
                  {cartCount}
                </span>
              ) : (
                <span className="hidden sm:inline-block text-xs font-semibold ml-1.5 text-[#050a30]/80">
                  Giỏ Quà
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#050a30] hover:bg-neutral-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9FAFB] border-b border-[#050a30]/10 px-4 py-4 space-y-2 animate-in slide-in-from-top-2">
            <a
              href="#bo-suu-tap"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Bộ Sưu Tập Quà Tết</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Danh Mục Theo Nhu Cầu</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#ngan-sach"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Chọn Theo Ngân Sách</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#doanh-nghiep"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Quà Doanh Nghiệp (Báo Giá B2B)</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#danh-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Hình Ảnh Thực Tế &amp; Đánh Giá</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-semibold text-[#050a30] hover:bg-white"
            >
              <span>Quy Trình &amp; Hỏi Đáp</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-semibold text-white bg-[#050a30] rounded-lg shadow-sm"
              >
                Nhận Báo Giá Doanh Nghiệp
              </button>
            </div>
          </div>
        )}

        {/* Subtle, fixed reading progress bar at the very top under navbar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-neutral-200/40 pointer-events-none overflow-hidden z-50"
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Tiến độ đọc trang"
        >
          <div
            className="h-full bg-gradient-to-r from-[#dd3333] via-[#ff4040] to-[#dd3333] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(221,51,51,0.7)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
    </>
  );
};
