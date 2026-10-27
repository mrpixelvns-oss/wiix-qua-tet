import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { FAQS } from '../data/tetGifts';

interface FaqAndFinalCtaSectionProps {
  onOpenConsultation: () => void;
}

export const FaqAndFinalCtaSection: React.FC<FaqAndFinalCtaSectionProps> = ({
  onOpenConsultation
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-[60px] bg-[#F9FAFB] border-b border-[#050a30]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#050a30]/80 tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#dd3333]" />
            <span>Minh Bạch Mọi Thắc Mắc</span>
            <span className="w-6 h-[2px] bg-[#dd3333]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#050a30] tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-[16px] text-[#050a30]/75">
            Mọi thông tin về ngân sách, tiến độ sản xuất, xuất hóa đơn VAT và dịch vụ in ấn logo doanh nghiệp.
          </p>
        </div>

        {/* 6 FAQ Accordion items */}
        <div className="space-y-3.5 mb-12 sm:mb-14">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? 'border-amber-400/50 bg-white shadow-md'
                  : 'border-[#050a30]/10 bg-white/70 hover:border-[#050a30]/25 hover:bg-white'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#050a30] hover:text-[#dd3333] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-[#dd3333]' : 'bg-[#050a30]/30'}`} />
                    <span className="font-serif font-bold text-base sm:text-[16px]">{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#dd3333] text-white rotate-180' : 'bg-[#050a30]/5 text-[#050a30]/70'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-[15px] text-[#050a30]/80 leading-relaxed border-t border-[#050a30]/5 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Grand Finale High-Impact Modern CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#030617] via-[#050a30] to-[#1a050d] text-white p-7 sm:p-6 md:p-6 shadow-[0_20px_50px_rgba(5,10,48,0.25)] border border-amber-400/35">
          {/* Soft ambient lighting without harsh wireframe grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(221,51,51,0.2),transparent_55%)] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#dd3333]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (7 cols on desktop) */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-[11px] text-amber-200 tracking-wider font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Đặc Quyền Tư Vấn Quà Tết 2027</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Sẵn Sàng Trao Gửi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-[#dd3333] italic font-normal">
                  Món Quà Tết Xứng Tầm?
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Để mỗi hộp quà trở thành lời chúc may mắn và gắn kết thâm giao. Đội ngũ chuyên gia Wiix sẵn sàng hỗ trợ may đo ngân sách, in ấn logo thương hiệu và gửi mẫu hộp thực tế tận nơi trong 24 giờ.
              </p>

              {/* 3 Trust points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-neutral-300">
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-[11px]">Gửi mẫu hộp tận nơi</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5252] shrink-0" />
                  <span className="text-[11px]">In ép kim logo miễn phí</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-[11px]">Đầy đủ hóa đơn VAT</span>
                </div>
              </div>
            </div>

            {/* Right Action Card (5 cols on desktop) */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-amber-400/30 flex flex-col justify-center space-y-3.5 shadow-xl text-center">
              <div className="space-y-1">
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  Đăng Ký Tư Vấn Nhanh
                </h4>
                <p className="text-[12px] text-neutral-300">
                  Nhận catalogue PDF &amp; bảng chiết khấu ưu đãi trong 15 phút
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#dd3333] to-[#b81d1d] hover:from-[#c22828] hover:to-[#9e1616] active:scale-98 transition-all rounded-xl shadow-[0_8px_25px_rgba(221,51,51,0.4)] flex items-center justify-center gap-2 cursor-pointer border border-amber-400/30"
              >
                <span>YÊU CẦU BÁO GIÁ &amp; TƯ VẤN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0383666888"
                className="w-full py-3 px-4 text-xs font-semibold text-amber-200 hover:text-white bg-white/10 hover:bg-white/15 border border-amber-400/25 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span className="font-mono">Hotline: 0383.666.888 (Zalo 24/7)</span>
              </a>

              <p className="text-[10px] text-neutral-400 flex items-center justify-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Chuyên viên B2B đang trực tuyến hỗ trợ</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
