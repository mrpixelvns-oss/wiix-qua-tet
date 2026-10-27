import React, { useState } from 'react';
import { X, Plus, Check, Package, Sparkles, MapPin, Users, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '../data/tetGifts';
import { LuxuryGiftArtwork } from './LuxuryGiftArtwork';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  isInCart: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart
}) => {
  const [modalQuantity, setModalQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'items' | 'packaging'>('items');

  if (!product) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  const handleAdd = () => {
    for (let i = 0; i < modalQuantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">

      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#050a30]/15 overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#dd3333] text-[#050a30] hover:text-white shadow-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Artwork Showcase (42%) */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#020517] via-[#050a30] to-[#14061a] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-white border-r border-[#050a30]/10">

          {/* Subtle gold mesh & ambient glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#dd3333]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{product.badge || 'Wiix Collection'}</span>
            </div>
            <div className="text-white/60 text-xs">
              Mã sản phẩm: <span className="font-mono text-white/90 font-bold">{product.id.toUpperCase()}</span>
            </div>
          </div>

          <div className="my-auto py-6">
            <LuxuryGiftArtwork
              id={product.artworkId}
              aspectRatio="4:5"
              imageUrl={product.imageUrl}
              className="w-full max-w-[280px] mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 text-[11px] text-neutral-300 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-amber-300" />
              <span>{product.dimensions}</span>
            </span>
            <span className="text-amber-300 font-serif font-bold">Wiix Vietnam 2027</span>
          </div>
        </div>

        {/* Right Side: Details, Ingredients & Action (58%) */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">

            {/* Category & Title */}
            <div>
              <div className="text-xs font-semibold text-[#dd3333] uppercase tracking-wider mb-1">
                {product.category}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#050a30] leading-tight">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#050a30]/70 italic mt-1 font-normal">
                "{product.subtitle}"
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 py-3 border-y border-[#050a30]/8">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#050a30] tabular-nums">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#050a30]/40 line-through tabular-nums">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              <span className="text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium ml-auto flex items-center gap-1 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Đã gồm thuế VAT
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#050a30]/80 leading-relaxed font-normal">
              {product.fullDescription}
            </p>

            {/* Tabs: Thành phần vs Quy cách bao bì */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#050a30]/10 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('items')}
                  className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors cursor-pointer ${activeTab === 'items'
                    ? 'text-[#dd3333] border-b-2 border-[#dd3333]'
                    : 'text-[#050a30]/60 hover:text-[#050a30]'
                    }`}
                >
                  Thành phần chi tiết ({product.items.length} món)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('packaging')}
                  className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors cursor-pointer ml-4 ${activeTab === 'packaging'
                    ? 'text-[#dd3333] border-b-2 border-[#dd3333]'
                    : 'text-[#050a30]/60 hover:text-[#050a30]'
                    }`}
                >
                  Quy cách & Bao bì
                </button>
              </div>

              {activeTab === 'items' ? (
                <div className="rounded-xl border border-[#050a30]/10 overflow-hidden bg-neutral-50/70 divide-y divide-[#050a30]/5 text-xs">
                  {product.items.map((item, idx) => (
                    <div key={idx} className="p-3 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 font-medium text-[#050a30]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#dd3333]" />
                        <span>{item.name}</span>
                      </div>
                      <div className="text-[#050a30]/65 flex items-center gap-2.5 shrink-0 text-[11px]">
                        <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3 text-neutral-400" />{item.origin}</span>
                        <span className="font-mono tabular-nums bg-white px-2 py-0.5 rounded border border-[#050a30]/10 font-bold">{item.weight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-[#050a30]/10 bg-neutral-50 space-y-3 text-xs text-[#050a30]/85">
                  <div className="flex items-start gap-2.5">
                    <Package className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Chất liệu hộp quà:</strong> {product.packaging}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#dd3333] shrink-0 mt-0.5" />
                    <div>
                      <strong>Khuyến nghị biếu tặng:</strong> {product.suitableFor}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#050a30]/10 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${isInCart
                  ? 'bg-[#050a30] hover:bg-[#050a30] text-white'
                  : 'bg-[#dd3333] hover:bg-[#dd3333] text-white active:scale-98'
                  }`}
              >
                {isInCart ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Thêm Hộp Nữa Vào Giỏ ({formatCurrency(product.price)})</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Thêm Vào Giỏ Quà — {formatCurrency(product.price)}</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#050a30]/60 text-center">
              Cam kết giao hàng đúng hẹn · Đổi trả 1-đổi-1 trong 24h nếu có lỗi vận chuyển.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
