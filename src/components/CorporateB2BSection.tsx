import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Calculator, Building2, Phone, User, ShieldCheck, Award, FileText, Gift, ArrowRight, Mail, Check } from 'lucide-react';

interface CorporateB2BSectionProps {
  onShowToast: (message: string) => void;
}

export const CorporateB2BSection: React.FC<CorporateB2BSectionProps> = ({ onShowToast }) => {
  // Calculator state
  const [quantity, setQuantity] = useState<number>(80);
  const [budgetPerBox, setBudgetPerBox] = useState<number>(1000000);

  // Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedPerks, setSelectedPerks] = useState<string[]>(['In logo ép kim', 'Hộp mẫu tận nơi']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const togglePerk = (perk: string) => {
    setSelectedPerks(prev =>
      prev.includes(perk) ? prev.filter(p => p !== perk) : [...prev, perk]
    );
  };

  // Discount calculation
  let discountRate = 0.05;
  let discountLabel = '5%';
  if (quantity >= 300) {
    discountRate = 0.20;
    discountLabel = '20%+';
  } else if (quantity >= 100) {
    discountRate = 0.15;
    discountLabel = '15%';
  } else if (quantity >= 50) {
    discountRate = 0.10;
    discountLabel = '10%';
  }

  const rawTotal = quantity * budgetPerBox;
  const discountAmount = rawTotal * discountRate;
  const finalTotal = rawTotal - discountAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(amount)) + 'đ';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !company.trim()) {
      setErrorMsg('Vui lòng điền đủ Họ tên, Số điện thoại và Tên doanh nghiệp.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
    const perkSummary = selectedPerks.length > 0 ? ` [Kèm yêu cầu: ${selectedPerks.join(', ')}]` : '';
    onShowToast(`Đã nhận dự toán ${quantity} hộp từ ${company}! Chuyên viên B2B Wiix sẽ gửi báo giá chi tiết qua Zalo/SĐT trong 15 phút.${perkSummary}`);
  };

  return (
    <section id="doanh-nghiep" className="py-[60px] bg-[#050a30] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background ambient luxury lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#dd3333]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Compact & High Prestige */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#fff]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#dd3333] animate-pulse" />
            <span className="text-xs font-semibold text-amber-200 tracking-widest uppercase">
              Giải Pháp Quà Tết Doanh Nghiệp 2027
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
            Quà Tết Doanh Nghiệp — <span className="text-amber-200">Gắn Kết Đối Tác</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Đồng hành cùng hơn <strong className="text-white font-semibold">300+ tập đoàn lớn</strong>. Wiix mang đến giải pháp quà tặng độc bản, thiết kế may đo theo định mức ngân sách, miễn phí ép kim logo và dịch vụ giao hàng tận nơi chuẩn xác.
          </p>
        </div>

        {/* Unified 2-Column Bento: Value Showcase (Left) + Integrated Calculator & Quote Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-5 items-stretch">

          {/* Left Column: Visual Showcase & 4 B2B Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            {/* Featured Corporate Presentation Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl group flex-1 min-h-[260px] flex flex-col justify-end p-6">
              <img
                src="/assets/aistudio/bo-qua-ca-chep-hoa-rong_bd765ead.jpg"
                alt="Quà Tết Doanh Nghiệp Wiix"
                className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a30] via-[#050a30]/60 to-black/20 pointer-events-none" />

              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 border border-[#fff]/40 text-[11px] font-bold tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5 text-[#fff]" />
                  <span>Wiix Bespoke Enterprise</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Đồng Bộ Nhận Diện Thương Hiệu
                </h3>
                <p className="text-[14px] text-neutral-300 leading-relaxed line-clamp-2">
                  Ép kim logo doanh nghiệp mạ vàng 24K, thiệp chúc Tết thiết kế độc bản theo lời tri ân của Ban Lãnh Đạo.
                </p>
              </div>
            </div>

            {/* 4 Core B2B Perks (Compact 2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#fff]/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white">In Logo Miễn Phí</h4>
                  <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">Áp dụng từ 30 hộp</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-red-400/20 text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white">Chiết Khấu Đến 20%+</h4>
                  <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">Lũy tiến theo số lượng</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white">Hóa Đơn VAT 24H</h4>
                  <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">Đầy đủ hợp đồng B2B</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-400/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-white">Giao Mẫu Tận Nơi</h4>
                  <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">Xem hộp mẫu trước khi đặt</p>
                </div>
              </div>
            </div>

            {/* Step Milestones Banner */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 flex items-center justify-between text-[14px] text-neutral-300">
              <span className="text-amber-200 font-semibold">Bậc chiết khấu:</span>
              <span className="text-[14px]">20 hộp (5%)</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[14px]">50 hộp (10%)</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[14px]">100 hộp (15%)</span>
              <span className="text-neutral-500">·</span>
              <span className="text-amber-300 font-bold text-[14px]">300+ (20%+)</span>
            </div>

          </div>

          {/* Right Column: Unified Calculator & Fast Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">

            {/* Top: Interactive Smart Calculator */}
            <div className="space-y-4 pb-5 border-b border-white/15">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#dd3333] flex items-center justify-center text-white">
                    <Calculator className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Dự Toán Chi Phí &amp; Chiết Khấu Trực Tuyến
                  </h3>
                </div>
                <span className="text-[13px] text-amber-200/90 font-medium bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                  Tự động tính chiết khấu
                </span>
              </div>

              {/* Slider for Quantity */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-neutral-300">Số lượng hộp dự kiến:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl font-bold text-amber-300 tabular-nums">
                      {quantity} <span className="text-xs text-neutral-300 font-normal">hộp</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#dd3333] text-white text-[10px] font-bold">
                      Chiết khấu {discountLabel}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#dd3333]"
                />

                <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                  <span>20 hộp</span>
                  <span>100 hộp</span>
                  <span>200 hộp</span>
                  <span>300 hộp</span>
                  <span>500+ hộp</span>
                </div>
              </div>

              {/* Budget Chips */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Hạn mức ngân sách / hộp:</span>
                  <span className="font-serif font-bold text-white">{formatCurrency(budgetPerBox)}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[500000, 1000000, 1500000, 2500000].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudgetPerBox(b)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${budgetPerBox === b
                        ? 'bg-[#dd3333] text-white shadow-md ring-1 ring-white/30'
                        : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                        }`}
                    >
                      {formatCurrency(b)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Calculation Output Badge */}
              <div className="p-3.5 rounded-xl bg-[#03061c]/80 border border-[#fff]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <div className="text-neutral-400 text-[11px]">Tổng sau chiết khấu:</div>
                  <div className="font-serif text-2xl font-bold text-[#fff] tabular-nums leading-tight">
                    {formatCurrency(finalTotal)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-neutral-400 text-[11px]">Tiết kiệm dự kiến:</div>
                  <div className="font-mono text-sm font-bold text-[#fff] tabular-nums">
                    -{formatCurrency(discountAmount)} ({discountLabel})
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Fast Quote Request Form */}
            {isSubmitted ? (
              <div className="mt-5 p-6 rounded-2xl bg-[#03061c]/80 border border-emerald-400/30 text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Đã Gửi Dự Toán Thành Công!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong className="text-amber-200">{fullName}</strong> ({company}). Chuyên viên phụ trách B2B của Wiix sẽ liên hệ qua SĐT/Zalo <strong className="text-amber-200">{phone}</strong> trong vòng 15 phút kèm theo bảng báo giá chiết khấu và đăng ký gửi hộp mẫu tận nơi.
                  </p>
                </div>

                {/* Recap summary box */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between text-neutral-300">
                    <span>Số lượng hộp dự kiến:</span>
                    <span className="text-amber-300 font-bold font-mono">{quantity} hộp</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Tổng ngân sách dự toán:</span>
                    <span className="text-white font-bold">{formatCurrency(finalTotal)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Mức chiết khấu:</span>
                    <span className="text-emerald-400 font-bold">{discountLabel}</span>
                  </div>
                  {selectedPerks.length > 0 && (
                    <div className="pt-2 border-t border-white/10 text-[13px] text-neutral-400">
                      Yêu cầu đi kèm: <span className="text-amber-200">{selectedPerks.join(', ')}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer border border-white/15"
                >
                  Điều chỉnh hoặc gửi lại
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                {/* Form Header with Contextual Badge & Dynamic Estimate */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#fff]/20 border border-[#fff]/30 flex items-center justify-center text-[#fff]">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#fff] uppercase tracking-wide">
                        Đăng Ký Nhận Báo Giá &amp; Hộp Mẫu Tận Nơi
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        Đính kèm dự toán: <span className="text-[#fff] font-semibold">{quantity} hộp</span> (~<span className="text-[#fff] font-semibold">{formatCurrency(finalTotal)}</span>)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Phản hồi 15 phút</span>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* 2-Column Responsive Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-neutral-300 flex items-center gap-1">
                      <span>Họ và tên người đại diện</span>
                      <span className="text-[#dd3333] font-bold">*</span>
                    </label>
                    <div className="relative group">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#fff] transition-colors" />
                      <input
                        type="text"
                        required
                        placeholder="VD: Nguyễn Văn An"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#03061c]/60 hover:bg-[#03061c]/80 focus:bg-[#03061c] border border-white/15 focus:border-[#fff] rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#fff]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone / Zalo */}
                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-neutral-300 flex items-center gap-1">
                      <span>Số điện thoại / Zalo</span>
                      <span className="text-[#dd3333] font-bold">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#fff] transition-colors" />
                      <input
                        type="tel"
                        required
                        placeholder="VD: 0988 123 456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#03061c]/60 hover:bg-[#03061c]/80 focus:bg-[#03061c] border border-white/15 focus:border-[#fff] rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#fff]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-neutral-300 flex items-center gap-1">
                      <span>Tên doanh nghiệp / Đơn vị</span>
                      <span className="text-[#dd3333] font-bold">*</span>
                    </label>
                    <div className="relative group">
                      <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#fff] transition-colors" />
                      <input
                        type="text"
                        required
                        placeholder="VD: Tập đoàn VinGroup, Vietcombank..."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#03061c]/60 hover:bg-[#03061c]/80 focus:bg-[#03061c] border border-white/15 focus:border-[#fff] rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#fff]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[14px] font-medium text-neutral-300 flex items-center justify-between">
                      <span>Email nhận Báo Giá &amp; Catalogue</span>
                      <span className="text-[10px] text-neutral-400 font-normal">Tùy chọn</span>
                    </label>
                    <div className="relative group">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#fff] transition-colors" />
                      <input
                        type="email"
                        placeholder="b2b@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#03061c]/60 hover:bg-[#03061c]/80 focus:bg-[#03061c] border border-white/15 focus:border-[#fff] rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#fff]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Requirement Chips */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center justify-between text-[14px]">
                    <span className="text-[14px] font-medium text-neutral-300">Dịch vụ &amp; Yêu cầu doanh nghiệp cần:</span>
                    <span className="text-[14px] text-neutral-400">Chọn nhanh</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'In logo ép kim', label: '✨ In logo ép kim' },
                      { id: 'Hộp mẫu tận nơi', label: '📦 Xem hộp mẫu tận nơi' },
                      { id: 'Hóa đơn VAT 24h', label: '🧾 Hóa đơn VAT 24h' },
                      { id: 'Giao nhiều điểm', label: '🚚 Giao nhiều địa điểm' },
                    ].map((item) => {
                      const isSelected = selectedPerks.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => togglePerk(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer border flex items-center gap-1.5 ${isSelected
                            ? 'bg-[#fff]/20 border-[#fff]/50 text-amber-200 shadow-xs'
                            : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10 hover:text-neutral-200'
                            }`}
                        >
                          <span>{item.label}</span>
                          {isSelected && <Check className="w-3 h-3 text-amber-300" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Ghi chú thêm: địa chỉ nhận hộp mẫu, ngày cần giao quà, số lượng cụ thể..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#03061c]/60 hover:bg-[#03061c]/80 focus:bg-[#03061c] border border-white/15 focus:border-[#fff] rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#fff]/20 transition-all"
                  />
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  className="w-full relative group overflow-hidden py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#dd3333] via-[#e63946] to-[#b81d1d] hover:brightness-110 active:scale-[0.99] transition-all rounded-xl shadow-lg hover:shadow-[0_4px_25px_rgba(221,51,51,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Gửi Dự Toán &amp; Đăng Ký Nhận Hộp Mẫu</span>
                  <ArrowRight className="w-4 h-4 opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[14px] text-neutral-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Bảo mật thông tin B2B
                  </span>
                  <span className="text-neutral-600 hidden sm:inline">·</span>
                  <span className="flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5 text-[#fff] shrink-0" />
                    Gửi hộp mẫu trực tiếp tận văn phòng
                  </span>
                  <span className="text-neutral-600 hidden sm:inline">·</span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Hợp đồng &amp; Hóa đơn VAT
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
