import React, { useState } from 'react';
import { Sparkles, Plus, Eye, Check, ArrowRight, Layers, ShieldCheck, HelpCircle } from 'lucide-react';
import { Product, BUDGET_SEGMENTS } from '../data/tetGifts';
import { LuxuryGiftArtwork } from './LuxuryGiftArtwork';

interface BudgetFilterSectionProps {
  products: Product[];
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const BudgetFilterSection: React.FC<BudgetFilterSectionProps> = ({
  products,
  onOpenProductDetail,
  onAddToCart,
  cartProductIds
}) => {
  const [activeSegment, setActiveSegment] = useState<string>('500-1000');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  const segments = BUDGET_SEGMENTS.filter(s => s.id !== 'all');
  const activeSegmentData = segments.find(s => s.id === activeSegment) || segments[1];

  const filteredProducts = activeSegment === 'all'
    ? products
    : products.filter(p => p.budgetCategory === activeSegment);

  const scrollToCorporate = () => {
    const el = document.getElementById('doanh-nghiep');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ngan-sach" className="py-16 md:py-20 lg:py-20 bg-[#F9FAFB] border-b border-[#050a30]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header: Magazine Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8C88B]/60 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#dd3333] animate-pulse" />
              <span className="text-xs font-semibold text-[#050a30] tracking-widest uppercase">
                Tối Ưu Ngân Sách Quà Biếu · Tết Đinh Mùi 2027
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-[#050a30] tracking-tight leading-[1.15]">
              Chọn Quà Theo <span className="text-[#dd3333]">Ngân Sách</span>
            </h2>

            <p className="text-sm sm:text-base text-[#050a30]/80 leading-relaxed font-normal">
              Dễ dàng cân đối bài toán tài chính cho cá nhân và quỹ phúc lợi công ty. Chọn hạn mức mong muốn để khám phá ngay danh sách các set quà phù hợp chuẩn mực với cam kết bao bì độc bản sang trọng.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-[#050a30]/10 text-xs text-[#050a30] font-medium shadow-2xs shrink-0">
            <Sparkles className="w-4 h-4 text-[#E8C88B]" />
            <span>Đầy Đủ Hóa Đơn VAT · Chiết Khấu Đến 25%</span>
          </div>
        </div>

        {/* 4 Interactive Budget Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {segments.map((segment) => {
            const isSelected = activeSegment === segment.id;
            const count = products.filter(p => p.budgetCategory === segment.id).length;

            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment.id)}
                className={`relative p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group ${isSelected
                  ? 'bg-[#050a30] text-white border-[#fff] shadow-[0_16px_35px_rgba(5,10,48,0.25)] ring-1 ring-[#fff] -translate-y-1.5'
                  : 'bg-white text-[#050a30] border-[#050a30]/10 hover:border-[#dd3333] hover:bg-neutral-50/80 shadow-2xs hover:-translate-y-0.5'
                  }`}
              >
                {/* Active glow accent */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#dd3333]/25 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#fff]' : 'text-[#dd3333]'
                      }`}>
                      {segment.range}
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-white/15 text-[#fff] border border-amber-400/30' : 'bg-[#050a30]/5 text-[#050a30]/75'
                      }`}>
                      {count} mẫu có sẵn
                    </span>
                  </div>

                  <div className={`font-serif text-lg sm:text-l font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#050a30] group-hover:text-[#dd3333]'
                    }`}>
                    {segment.label}
                  </div>
                </div>

                <div className={`relative z-10 mt-6 pt-3.5 border-t text-xs font-medium flex items-center justify-between w-full ${isSelected ? 'border-white/15 text-white' : 'border-[#050a30]/8 text-[#050a30]/65'
                  }`}>
                  <span className="flex items-center gap-1.5">
                    {isSelected ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fff] animate-pulse" />
                        <span>Đang lọc phân khúc này</span>
                      </>
                    ) : (
                      <span>Nhấn để xem quà</span>
                    )}
                  </span>
                  <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-[#fff]' : 'text-neutral-400 group-hover:text-amber-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Segment Feedback Ribbon */}
        <div className="mb-8 px-4 py-3 rounded-xl bg-white/70 border border-[#050a30]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[16px] text-[#050a30]/80">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#050a30]">Phân khúc đang chọn:</span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#050a30] text-amber-200 font-bold">
              {activeSegmentData.label}
            </span>
            <span className="text-neutral-400">·</span>
            <span>Hiển thị {filteredProducts.length} bộ quà thượng hạng</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Có thể điều chỉnh món theo định mức ngân sách của doanh nghiệp</span>
          </div>
        </div>

        {/* Filtered Products Showcase Grid: 2-Column Wide Layout to prevent text truncation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-5">
          {filteredProducts.map((product) => {
            const isInCart = cartProductIds.includes(product.id);
            const discountPercent = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <div
                key={product.id}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-[#050a30]/10 hover:border-amber-400/70 shadow-[0_4px_20px_rgba(5,10,48,0.04)] hover:shadow-[0_16px_36px_rgba(232,200,139,0.22)] transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                {/* 1. Product Image Column (Aspect 4:5 or 1:1 on desktop, full bleed) */}
                <div className="sm:w-[220px] md:w-[240px] shrink-0 relative aspect-[4/5] sm:aspect-auto overflow-hidden bg-neutral-100">
                  <LuxuryGiftArtwork
                    id={product.artworkId}
                    aspectRatio="4:5"
                    imageUrl={product.imageUrl}
                    className="w-full h-full object-cover transform scale-[1.05] group-hover:scale-100 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Status Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#050a30]/90 backdrop-blur-md text-amber-200 border border-amber-400/40 text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Discount Pill */}
                  {discountPercent && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-[#dd3333] text-white text-[13px] font-bold shadow-md">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  {/* Bottom Counter & Quick Look button */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-white text-[13px] font-medium border border-white/20">
                      <Layers className="w-3 h-3 text-[#E8C88B]" />
                      <span>{product.items.length} món</span>
                    </div>

                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="w-7 h-7 rounded-full bg-white/95 text-[#050a30] hover:bg-[#dd3333] hover:text-white shadow-md flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
                      title="Xem nhanh chi tiết"
                      aria-label="Xem nhanh"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Product Details Column: Spacious & Free of Text Truncation */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    {/* Category Label & ID */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#dd3333] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-[10px] font-medium text-[#050a30]/50 font-mono">
                        #{product.id.slice(0, 8)}
                      </span>
                    </div>

                    {/* Full Product Title: 2 lines allowed, NO truncation */}
                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="font-serif text-lg sm:text-l font-bold text-[#050a30] hover:text-[#dd3333] cursor-pointer transition-colors leading-snug line-clamp-2"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    {/* Short Description */}
                    <p className="sm:text-[14px] text-[#050a30]/70 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* 3. Pricing Row & Ergonomic Action Buttons */}
                  <div className="pt-0.5 border-t border-[#050a30]/8 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="font-serif text-xl sm:text-2xl font-bold text-[#dd3333] tabular-nums tracking-tight">
                          {formatCurrency(product.price)}
                        </div>
                        {product.originalPrice && (
                          <div className="text-xs text-[#050a30]/40 line-through tabular-nums mt-0.5">
                            Giá gốc: {formatCurrency(product.originalPrice)}
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                        <Check className="w-3 h-3 text-emerald-600" />
                        Đã gồm VAT
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => onOpenProductDetail(product)}
                        className="w-full py-2 px-2 text-[14px] font-semibold text-[#050a30] bg-[#F9FAFB] hover:bg-neutral-100 hover:text-[#dd3333] rounded-xl border border-[#050a30]/15 hover:border-[#E8C88B] transition-all text-center whitespace-nowrap cursor-pointer shadow-2xs"
                      >
                        Xem Chi Tiết
                      </button>

                      <button
                        onClick={() => onAddToCart(product)}
                        className={`w-full py-2 px-2 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs ${isInCart
                          ? 'bg-[#050a30] text-white hover:bg-[#050a30]'
                          : 'bg-[#dd3333] hover:bg-[#dd3333] text-white hover:shadow-[0_4px_16px_rgba(221,51,51,0.35)] active:scale-95'
                          }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Đã Chọn</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Chọn Quà</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate Bespoke Budget Customization Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#050a30]/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#dd3333] to-[#dd3333] flex items-center justify-center text-[#fff] shrink-0 shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#050a30]">
                Cần Thiết Kế Set Quà Theo Định Mức Ngân Sách Riêng Của Doanh Nghiệp?
              </h4>
              <p className="text-xs sm:text-sm text-[#050a30]/75 mt-1 leading-relaxed max-w-2xl">
                Wiix hỗ trợ may đo linh hoạt mọi định mức từ <strong>300.000đ – 5.000.000đ/set</strong>, tùy biến thành phần hạt dinh dưỡng, rượu vang và miễn phí in ép kim logo công ty từ 30 set.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToCorporate}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#050a30] hover:bg-[#dd3333] text-[#fff] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Nhận Báo Giá NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
