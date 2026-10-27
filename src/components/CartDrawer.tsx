import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Truck, FileText } from 'lucide-react';
import { Product } from '../data/tetGifts';
import { LuxuryGiftArtwork } from './LuxuryGiftArtwork';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onShowToast: (message: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToast
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    requestVat: false,
    companyName: '',
    taxId: '',
    paymentMethod: 'cod' as 'cod' | 'banking'
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [lastOrderId, setLastOrderId] = useState('');

  if (!isOpen) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 1000000 || totalQuantity >= 2 ? 0 : 35000;
  const grandTotal = subtotal + shippingFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim() || !customerInfo.phone.trim() || !customerInfo.address.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng.');
      return;
    }

    if (customerInfo.requestVat && (!customerInfo.companyName.trim() || !customerInfo.taxId.trim())) {
      setErrorMsg('Vui lòng nhập Tên công ty và Mã số thuế để xuất hóa đơn VAT.');
      return;
    }

    const orderId = 'WX-' + Math.floor(100000 + Math.random() * 900000);
    setLastOrderId(orderId);
    setErrorMsg('');
    setStep('success');
    onShowToast(`Đơn hàng #${orderId} đã được đặt thành công!`);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">

      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Slide Drawer Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#F9FAFB] shadow-2xl h-full flex flex-col z-10 border-l border-[#050a30]/10 animate-in slide-in-from-right duration-300">

        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#050a30]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#050a30] text-amber-300 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#050a30]">
                {step === 'cart' && 'Giỏ Quà Tết Của Bạn'}
                {step === 'checkout' && 'Thông Tin Đặt Quà'}
                {step === 'success' && 'Đặt Hàng Thành Công'}
              </h2>
              <span className="text-xs text-[#050a30]/60 tabular-nums">
                {step === 'cart' && `${totalQuantity} sản phẩm đã chọn`}
                {step === 'checkout' && 'Điền thông tin giao nhận tận nơi'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-neutral-100 text-[#050a30] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng giỏ quà"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">

          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#050a30]">
                    Giỏ quà đang trống
                  </h3>
                  <p className="text-xs text-[#050a30]/60 max-w-xs mx-auto">
                    Hãy lựa chọn những set quà Tết tinh tế để gửi gắm lời chúc may mắn đến người thân và đối tác.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#050a30] rounded-lg hover:bg-[#dd3333] transition-colors cursor-pointer"
                  >
                    Khám phá bộ sưu tập
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 sm:p-4 rounded-xl bg-white border border-[#050a30]/10 flex gap-3.5 shadow-xs"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                        <LuxuryGiftArtwork
                          id={item.product.artworkId}
                          aspectRatio="1:1"
                          imageUrl={item.product.imageUrl}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Content & Steppers */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-serif text-sm font-bold text-[#050a30] leading-snug">
                              {item.product.name}
                            </h4>
                            <div className="text-[11px] text-[#050a30]/60 mt-0.5">
                              {item.product.category}
                            </div>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-neutral-400 hover:text-[#dd3333] p-1 transition-colors"
                            title="Xóa món này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="font-serif text-sm font-bold text-[#dd3333] tabular-nums">
                            {formatCurrency(item.product.price)}
                          </span>

                          {/* Stepper buttons */}
                          <div className="flex items-center gap-2 border border-[#050a30]/15 rounded-lg bg-neutral-50 px-2 py-0.5 text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="text-[#050a30] hover:text-[#dd3333] p-0.5"
                              disabled={item.quantity <= 1}
                              aria-label="Giảm số lượng"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-semibold px-1 min-w-[20px] text-center tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="text-[#050a30] hover:text-[#dd3333] p-0.5"
                              aria-label="Tăng số lượng"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Free shipping banner */}
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/60 text-xs text-amber-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      {shippingFee === 0
                        ? 'Đơn hàng được MIỄN PHÍ giao hàng tiêu chuẩn toàn quốc!'
                        : 'Mua thêm 1 hộp quà hoặc đạt 1.000.000đ để được miễn phí vận chuyển.'}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 text-[#dd3333] text-xs border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="bg-white p-4 rounded-xl border border-[#050a30]/10 space-y-3">
                <h3 className="font-semibold text-xs text-[#050a30] uppercase tracking-wider">
                  1. Người Nhận Hàng
                </h3>
                <div>
                  <label className="block text-xs font-medium text-[#050a30] mb-1">
                    Họ và tên người nhận <span className="text-[#dd3333]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Trần Hoàng Anh"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#050a30] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#050a30] mb-1">
                    Số điện thoại liên hệ <span className="text-[#dd3333]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="VD: 0912 345 678"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#050a30] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#050a30] mb-1">
                    Địa chỉ nhận hàng chi tiết <span className="text-[#dd3333]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/TP"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#050a30] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#050a30] mb-1">
                    Lời chúc trên thiệp / Ghi chú đặc biệt
                  </label>
                  <textarea
                    rows={2}
                    placeholder="VD: Gửi lời chúc mừng năm mới từ gia đình anh An..."
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#050a30] focus:bg-white"
                  />
                </div>
              </div>

              {/* VAT Invoice Options */}
              <div className="bg-white p-4 rounded-xl border border-[#050a30]/10 space-y-3">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customerInfo.requestVat}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, requestVat: e.target.checked })}
                    className="w-4 h-4 rounded text-[#dd3333] focus:ring-[#dd3333]"
                  />
                  <span className="text-xs font-semibold text-[#050a30] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#dd3333]" />
                    Yêu cầu xuất hóa đơn điện tử GTGT (VAT)
                  </span>
                </label>

                {customerInfo.requestVat && (
                  <div className="pt-2 space-y-2.5 text-xs animate-in fade-in">
                    <div>
                      <label className="block font-medium text-[#050a30] mb-1">
                        Tên đầy đủ công ty / cơ quan <span className="text-[#dd3333]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="VD: Công ty Cổ phần Công nghệ Wiix"
                        value={customerInfo.companyName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, companyName: e.target.value })}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-[#050a30] mb-1">
                        Mã số thuế doanh nghiệp <span className="text-[#dd3333]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="VD: 0108998877"
                        value={customerInfo.taxId}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, taxId: e.target.value })}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-4 rounded-xl border border-[#050a30]/10 space-y-2">
                <h3 className="font-semibold text-xs text-[#050a30] uppercase tracking-wider mb-2">
                  2. Phương Thức Thanh Toán
                </h3>
                <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer text-xs ${customerInfo.paymentMethod === 'cod' ? 'border-[#050a30] bg-neutral-50' : 'border-neutral-200'
                  }`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={customerInfo.paymentMethod === 'cod'}
                      onChange={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'cod' })}
                    />
                    <span className="font-medium text-[#050a30]">Thanh toán khi nhận hàng (COD)</span>
                  </div>
                  <span className="text-[11px] text-[#050a30]/60">Kiểm tra quà trước khi thanh toán</span>
                </label>

                <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer text-xs ${customerInfo.paymentMethod === 'banking' ? 'border-[#050a30] bg-neutral-50' : 'border-neutral-200'
                  }`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={customerInfo.paymentMethod === 'banking'}
                      onChange={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'banking' })}
                    />
                    <span className="font-medium text-[#050a30]">Chuyển khoản ngân hàng (QR Code)</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold">Xác nhận tự động</span>
                </label>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="py-3 px-4 text-xs font-semibold text-[#050a30] bg-white border border-[#050a30]/15 rounded-lg hover:bg-neutral-50"
                >
                  Quay lại
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-[#dd3333] hover:bg-[#c22828] rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Xác Nhận Đặt Quà ({formatCurrency(grandTotal)})</span>
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-semibold text-[#dd3333] tracking-widest uppercase">
                  Đã Ghi Nhận Thành Công
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#050a30] mt-1">
                  Đơn Hàng #{lastOrderId}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#050a30]/75 max-w-sm mx-auto leading-relaxed">
                Cảm ơn <strong>{customerInfo.name}</strong> đã tin tưởng Wiix Việt Nam. Nhân viên điều phối sẽ liên hệ số <strong>{customerInfo.phone}</strong> để xác nhận thời gian giao quà sớm nhất.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#050a30]/10 text-left text-xs space-y-2 text-[#050a30]/85">
                <div className="flex justify-between border-b border-neutral-100 pb-1.5 font-semibold text-[#050a30]">
                  <span>Địa chỉ giao quà:</span>
                  <span className="text-right max-w-[200px] truncate">{customerInfo.address}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                  <span>Phương thức:</span>
                  <span>{customerInfo.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận' : 'Chuyển khoản QR'}</span>
                </div>
                {customerInfo.requestVat && (
                  <div className="flex justify-between border-b border-neutral-100 pb-1.5 text-emerald-800">
                    <span>Hóa đơn VAT:</span>
                    <span>MST {customerInfo.taxId}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-sm text-[#050a30] pt-1">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="font-serif text-[#dd3333] tabular-nums">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setStep('cart');
                  onClose();
                }}
                className="w-full py-3 text-xs font-semibold text-white bg-[#050a30] hover:bg-[#dd3333] rounded-lg transition-colors cursor-pointer"
              >
                Tiếp tục xem quà Tết
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer with Calculation */}
        {step === 'cart' && items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#050a30]/10 space-y-3">
            <div className="space-y-1.5 text-xs text-[#050a30]/80">
              <div className="flex justify-between">
                <span>Tạm tính ({totalQuantity} hộp):</span>
                <span className="font-medium text-[#050a30] tabular-nums">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển an toàn:</span>
                <span className="font-medium tabular-nums text-emerald-700">
                  {shippingFee === 0 ? 'Miễn phí' : formatCurrency(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#050a30] pt-2 border-t border-[#050a30]/8">
                <span>Tổng thanh toán:</span>
                <span className="font-serif text-[#dd3333] tabular-nums">{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={() => setStep('checkout')}
              className="w-full py-3.5 px-4 text-sm font-semibold tracking-wide text-white bg-[#dd3333] hover:bg-[#c22828] active:scale-98 transition-all rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>TIẾN HÀNH ĐẶT QUÀ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
