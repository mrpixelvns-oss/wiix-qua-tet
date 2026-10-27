import React, { useState, useEffect } from 'react';
import { HeroBanner } from './components/HeroBanner';
import { BenefitsBar } from './components/BenefitsBar';
import { CategoriesGrid } from './components/CategoriesGrid';
import { BestSellersSection } from './components/BestSellersSection';
import { BudgetFilterSection } from './components/BudgetFilterSection';
import { CorporateB2BSection } from './components/CorporateB2BSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { OrderTimelineSection } from './components/OrderTimelineSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { FaqAndFinalCtaSection } from './components/FaqAndFinalCtaSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CorporateQuoteModal } from './components/CorporateQuoteModal';
import { Toast } from './components/Toast';
import { FadeInUp } from './components/FadeInUp';
import { PRODUCTS, Product } from './data/tetGifts';
import { ShoppingBag, Sparkles, PhoneCall } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('wiix_tet_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wiix_tet_cart', JSON.stringify(cart));
    } catch {
      // Ignore localStorage errors
    }
  }, [cart]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        showToast(`Đã tăng số lượng ${product.name} trong giỏ quà.`);
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        showToast(`Đã thêm ${product.name} vào giỏ quà Tết.`);
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Đã xóa sản phẩm khỏi giỏ quà.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartProductIds = cart.map((item) => item.product.id);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#050a30] selection:bg-[#dd3333] selection:text-white">
      {/* Header (Navbar) hidden as requested */}

      {/* Main 10-Section Editorial Flow */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Section 1: Hero Banner */}
        <HeroBanner
          onExploreGifts={() => scrollToSection('bo-suu-tap')}
          onConsultCorporate={() => scrollToSection('doanh-nghiep')}
        />

        {/* Section 2: Thanh lợi ích nổi bật (4 cam kết) */}
        <FadeInUp>
          <BenefitsBar />
        </FadeInUp>

        {/* Section 3: Bộ sưu tập quà Tết bán chạy (Top 6 tuyệt phẩm chủ lực) */}
        <FadeInUp>
          <BestSellersSection
            products={PRODUCTS}
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            cartProductIds={cartProductIds}
          />
        </FadeInUp>

        {/* Section 4: Danh mục quà Tết theo nhu cầu (6 nhóm phân loại chuyên biệt) */}
        <FadeInUp>
          <CategoriesGrid
            onSelectCategory={(categoryId) => {
              if (categoryId === 'cat-qua-tet-doanh-nghiep') {
                scrollToSection('doanh-nghiep');
              } else if (categoryId === 'cat-theo-ngan-sach') {
                scrollToSection('ngan-sach');
              } else {
                scrollToSection('bo-suu-tap');
              }
            }}
          />
        </FadeInUp>

        {/* Section 5: Chọn quà theo ngân sách (4 nấc ngân sách tương tác) */}
        <FadeInUp>
          <BudgetFilterSection
            products={PRODUCTS}
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            cartProductIds={cartProductIds}
          />
        </FadeInUp>

        {/* Section 6: Quà Tết doanh nghiệp — Đơn hàng số lượng lớn (Bộ tính chiết khấu & form báo giá) */}
        <FadeInUp>
          <CorporateB2BSection onShowToast={showToast} />
        </FadeInUp>

        {/* Section 7: Vì sao nên chọn quà Tết Wiix Việt Nam? (4 tiêu chuẩn chất lượng) */}
        <FadeInUp>
          <WhyChooseUsSection />
        </FadeInUp>

        {/* Section 8: Đánh giá khách hàng & Hình ảnh thực tế (Social Proof & Lightbox Gallery) */}
        <FadeInUp>
          <CustomerReviewsSection />
        </FadeInUp>

        {/* Section 9: Quy trình đặt quà Tết 4 bước */}
        <FadeInUp>
          <OrderTimelineSection />
        </FadeInUp>

        {/* Section 10: FAQ & CTA cuối trang */}
        <FadeInUp>
          <FaqAndFinalCtaSection
            onOpenConsultation={() => setIsQuoteModalOpen(true)}
          />
        </FadeInUp>
      </main>

      {/* Footer hidden as requested */}

      {/* Floating Desktop Cart Button when Header is hidden */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-2.5 px-5 py-3 rounded-full bg-[#dd3333] hover:bg-[#c22828] text-white font-semibold text-sm shadow-[0_10px_30px_rgba(221,51,51,0.4)] border border-amber-300/40 transition-transform active:scale-95 cursor-pointer animate-fade-in"
          aria-label="Xem giỏ quà"
        >
          <ShoppingBag className="w-5 h-5 text-white" />
          <span>Giỏ quà ({totalCartCount})</span>
        </button>
      )}

      {/* Mobile Sticky Quick Action Bar (under 15% mobile viewport cap) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#050a30]/95 backdrop-blur-xl border-t border-amber-400/25 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:0988228899"
          className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white px-2 py-1.5"
        >
          <PhoneCall className="w-4 h-4 text-[#dd3333]" />
          <span className="font-mono">0988.228.899</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-3 py-2 text-xs font-semibold text-amber-200 bg-white/10 hover:bg-white/20 rounded-lg border border-amber-400/30 flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Báo Giá VIP</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#dd3333] hover:bg-[#c22828] rounded-lg shadow-sm flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Giỏ Quà {totalCartCount > 0 ? `(${totalCartCount})` : ''}</span>
          </button>
        </div>
      </div>

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod) => {
          handleAddToCart(prod);
        }}
        isInCart={selectedProduct ? cartProductIds.includes(selectedProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      <CorporateQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onShowToast={showToast}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
