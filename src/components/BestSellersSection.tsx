import React, { useState } from 'react';
import { Eye, Plus, Check, Sparkles, Layers, ShieldCheck, Truck, FileText, Gift, Crown, Building2 } from 'lucide-react';
import { Product } from '../data/tetGifts';
import { LuxuryGiftArtwork } from './LuxuryGiftArtwork';

interface BestSellersSectionProps {
  products: Product[];
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  products,
  onOpenProductDetail,
  onAddToCart,
  cartProductIds
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'flagship' | 'corporate'>('all');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  // Get best sellers in exact curated order
  const bestSellerOrder = [
    'vu-mon-ca-chep',
    'xuan-an-khang',
    'phu-quy-cat-tuong',
    'doanh-nghiep-tinh-hoa',
    'thinh-vuong-nhu-y',
    'doi-tac-hoang-kim-vip'
  ];

  const sortedBestSellers = [...products]
    .filter(p => p.isBestSeller)
    .sort((a, b) => {
      const idxA = bestSellerOrder.indexOf(a.id);
      const idxB = bestSellerOrder.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });

  // Filter based on selected pill
  const filteredProducts = activeTab === 'all'
    ? sortedBestSellers.slice(0, 6)
    : activeTab === 'flagship'
      ? sortedBestSellers.filter(p => p.budgetCategory === 'under-500' || p.budgetCategory === '500-1000')
      : sortedBestSellers.filter(p => p.budgetCategory === '1000-2000' || p.budgetCategory === 'above-2000' || p.category.includes('Doanh Nghiệp'));

  const displayedProducts = filteredProducts.length > 0 ? filteredProducts : sortedBestSellers.slice(0, 6);

  return (
    <section id="bo-suu-tap" className="py-16 md:py-20 lg:py-20 bg-[#F9FAFB] border-b border-[#050a30]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 space-y-4">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8C88B]/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#dd3333]" />
            <span className="text-xs font-semibold text-[#050a30] tracking-widest uppercase">
              Tuyển Tập 6 Tuyệt Phẩm · Tết Đinh Mùi 2027
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#050a30] tracking-tight leading-[1.15]">
            Bộ Sưu Tập Quà Tết <span className="text-[#dd3333]">Bán Chạy</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#050a30]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Sáu phân tầng giá chủ đạo được hơn <strong className="text-[#050a30] font-semibold">1.200 doanh nghiệp &amp; cá nhân</strong> tin chọn nhiều nhất.<br className="hidden sm:inline" />{' '}
            Mỗi tác phẩm hòa quyện giữa nông sản trứ danh và bao bì mỹ nghệ dập nổi dát vàng tinh xảo.
          </p>

          {/* Filter Tabs */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-2xl border border-[#050a30]/10 shadow-2xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'all'
                  ? 'bg-[#050a30] text-white shadow-xs'
                  : 'text-[#050a30]/75 hover:text-[#050a30] hover:bg-[#F9FAFB]'
                  }`}
              >
                Tất Cả 6 Mẫu Chủ Lực
              </button>
              <button
                onClick={() => setActiveTab('flagship')}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'flagship'
                  ? 'bg-[#050a30] text-white shadow-xs'
                  : 'text-[#050a30]/75 hover:text-[#050a30] hover:bg-[#F9FAFB]'
                  }`}
              >
                Phổ Thông &amp; Cao Cấp (490k - 980k)
              </button>
              <button
                onClick={() => setActiveTab('corporate')}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'corporate'
                  ? 'bg-[#050a30] text-white shadow-xs'
                  : 'text-[#050a30]/75 hover:text-[#050a30] hover:bg-[#F9FAFB]'
                  }`}
              >
                Doanh Nghiệp &amp; VIP (1.25 Tr - 2.65 Tr)
              </button>
            </div>
          </div>
        </div>

        {/* 6 Product Boxes: 3 Columns per Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {displayedProducts.map((product) => {
            const isInCart = cartProductIds.includes(product.id);
            const discountPercent = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#050a30]/10 hover:border-[#E8C88B] shadow-[0_4px_24px_rgba(5,10,48,0.04)] hover:shadow-[0_20px_45px_rgba(232,200,139,0.25)] transition-all duration-500 overflow-hidden hover:-translate-y-1.5"
              >
                {/* 1. Flush Top Image with 16:9 Aspect Ratio (matching CategoriesGrid) */}
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <LuxuryGiftArtwork
                    id={product.artworkId}
                    aspectRatio="16:9"
                    imageUrl={product.imageUrl}
                    className="w-full h-full object-cover transform scale-[1.06] group-hover:scale-100 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Top-Left Status Badge */}
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <div className="px-3 py-1 rounded-full bg-[#050a30]/90 backdrop-blur-md text-amber-200 border border-amber-400/40 text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{product.badge}</span>
                      </div>
                    </div>
                  )}

                  {/* Top-Right Discount Pill */}
                  {discountPercent && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#dd3333] text-white text-[11px] font-bold shadow-md">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  {/* Bottom Image Overlay: Components count & Quick Look button */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                      <Layers className="w-3.5 h-3.5 text-[#E8C88B]" />
                      <span>{product.items.length} món thượng hạng</span>
                    </div>

                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="w-8 h-8 rounded-full bg-white/95 text-[#050a30] hover:bg-[#dd3333] hover:text-white shadow-lg flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
                      title="Xem nhanh chi tiết"
                      aria-label="Xem nhanh"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category Label */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#dd3333] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#050a30]/50">
                        Mã: #{product.id.slice(0, 8)}
                      </span>
                    </div>

                    {/* Product Name (Full visibility with 2-line wrap, no truncation) */}
                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="font-serif text-lg sm:text-l font-bold text-[#050a30] group-hover:text-[#dd3333] cursor-pointer transition-colors leading-snug line-clamp-2 min-h-[2.85rem]"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* 3. Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-[#050a30]/8 space-y-3.5">
                    {/* Price Row */}
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
                        className="w-full py-2.5 px-2 text-[14px] font-semibold text-[#050a30] bg-[#F9FAFB] hover:bg-neutral-100 hover:text-[#dd3333] rounded-xl border border-[#050a30]/15 hover:border-[#E8C88B] transition-all text-center whitespace-nowrap cursor-pointer shadow-2xs"
                      >
                        Xem Chi Tiết
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`w-full py-2.5 px-2 text-[14px] font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs ${isInCart
                          ? 'bg-[#050a30] text-white hover:bg-[#050a30]'
                          : 'bg-[#dd3333] hover:bg-[#c22828] text-white hover:shadow-[0_4px_16px_rgba(221,51,51,0.35)] active:scale-95'
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

        {/* Luxury Value & Commitment Ribbon */}
      </div>
    </section>
  );
};
