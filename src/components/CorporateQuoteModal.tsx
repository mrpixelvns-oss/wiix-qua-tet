import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, Sparkles, Phone, Download } from 'lucide-react';

interface CorporateQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CorporateQuoteModal: React.FC<CorporateQuoteModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    quantity: '50 - 100',
    budget: '500.000đ - 1.000.000đ'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(`Yêu cầu của quý doanh nghiệp ${formData.company} đã được gửi thành công!`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#050a30]/15 overflow-hidden z-10 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#050a30] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#050a30]">
              Tiếp Nhận Yêu Cầu Thành Công
            </h3>
            <p className="text-xs sm:text-sm text-[#050a30]/80 leading-relaxed">
              Wiix Việt Nam sẽ gửi Catalogue PDF & Bảng báo giá chiết khấu đặc quyền vào email hoặc liên hệ trực tiếp số điện thoại <strong>{formData.phone}</strong>.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#050a30] rounded-lg hover:bg-[#dd3333] transition-colors"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#dd3333] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dành Cho Khối Khách Hàng Doanh Nghiệp</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#050a30]">
              Nhận Báo Giá Quà Tết Doanh Nghiệp 2027
            </h3>

            <p className="text-xs text-[#050a30]/70 mt-1 mb-6">
              Hỗ trợ in logo mạ vàng, thiết kế thiệp Tết độc quyền và giao nhiều địa chỉ trên toàn quốc.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-medium text-[#050a30] mb-1">Họ tên người đại diện *</label>
                <input
                  type="text"
                  required
                  placeholder="VD: Lê Minh Tuấn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#050a30]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#050a30] mb-1">Số điện thoại / Zalo *</label>
                  <input
                    type="tel"
                    required
                    placeholder="VD: 0988 222 333"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#050a30]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[#050a30] mb-1">Tên công ty *</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Techcom Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#050a30]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#050a30] mb-1">Số lượng dự kiến</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 text-xs"
                  >
                    <option value="20 - 49">20 – 49 hộp</option>
                    <option value="50 - 100">50 – 100 hộp</option>
                    <option value="100 - 300">100 – 300 hộp</option>
                    <option value="300+">300+ hộp VIP</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-[#050a30] mb-1">Hạn mức ngân sách</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 text-xs"
                  >
                    <option value="Dưới 500k">Dưới 500.000đ</option>
                    <option value="500k - 1M">500k – 1.000.000đ</option>
                    <option value="1M - 2M">1.000.000đ – 2.000.000đ</option>
                    <option value="Trên 2M">Trên 2.000.000đ</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#dd3333] hover:bg-[#c22828] rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>NHẬN BÁO GIÁ QUA EMAIL & ZALO</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#050a30]/60 pt-2 border-t border-neutral-100">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#dd3333]" />
                  Hotline: 0988.228.899
                </span>
                <span className="text-emerald-700 font-medium">Bảo mật thông tin</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
