import React from 'react';
import { ArrowRight, Building, CheckCircle, Clock } from 'lucide-react';
import { ORDER_TIMELINE } from '../data/tetGifts';

export const OrderTimelineSection: React.FC = () => {
  return (
    <section id="quy-trinh" className="py-[60px] bg-white border-b border-[#050a30]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#050a30]/80 tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#dd3333]" />
            <span>Tiến Độ Chuẩn Xác</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#050a30] tracking-tight">
            Quy Trình Đặt Quà Tết 4 Bước
          </h2>
          <p className="text-sm sm:text-base text-[#050a30]/75 leading-relaxed">
            Quy trình chuẩn hóa từ khâu chọn mẫu, xác nhận maquette in ấn đến vận chuyển an toàn giúp quý khách hoàn toàn an tâm trong những ngày giáp Tết bận rộn.
          </p>
        </div>

        {/* Desktop 4-step horizontal timeline / Mobile vertical timeline */}
        <div className="relative">
          {/* Connector line for desktop with gradient */}
          <div className="hidden lg:block absolute top-10 left-16 right-16 h-[2px] bg-gradient-to-r from-amber-400 via-[#dd3333] to-[#050a30] z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {ORDER_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-5 rounded-2xl bg-white border border-[#050a30]/10 hover:border-amber-400/50 shadow-xs hover:shadow-[0_12px_25px_rgba(5,10,48,0.06)] transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step badge with ring */}
                  <div className="w-14 h-14 rounded-2xl bg-[#050a30] group-hover:bg-[#dd3333] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md ring-4 ring-white transition-all duration-300 mb-6">
                    <span className="text-[#fff] group-hover:text-white tabular-nums">{item.step}</span>
                  </div>

                  <h3 className="font-serif text-[16px] font-bold text-[#050a30] group-hover:text-[#dd3333] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[14px] text-[#050a30]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#050a30]/8 flex items-center justify-between text-[14px] text-[#dd3333] font-semibold">
                  <span>Giai đoạn 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B2B Specific Note Card with glass design */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-amber-400/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#050a30] text-[#fff] flex items-center justify-center shrink-0 shadow-sm">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#050a30]">
                Quy trình riêng biệt dành cho đơn hàng Doanh Nghiệp
              </h4>
              <p className="text-xs sm:text-sm text-[#050a30]/75 mt-0.5">
                Bổ sung bước gửi mẫu hộp thực tế tận nơi trong 24h, duyệt bản ép kim logo 3D và đối soát danh sách giao nhận chi tiết theo file Excel.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[14px] font-semibold text-emerald-800 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 shrink-0">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Cam kết đúng tiến độ 100%</span>
          </div>
        </div>

      </div>
    </section>
  );
};
