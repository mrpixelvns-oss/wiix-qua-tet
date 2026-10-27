import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050a30] text-white/80 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Wiix Việt Nam
              </span>
              <span className="text-[10px] text-amber-300 border-l border-white/20 pl-2 uppercase tracking-widest">
                Tết Tinh Hoa 2027
              </span>
            </div>

            <p className="text-white/70 text-xs leading-relaxed max-w-sm">
              Thương hiệu quà Tết cao cấp dành cho doanh nghiệp và gia đình Việt. Tôn vinh nét đẹp văn hóa truyền thống qua ngôn ngữ bao bì tối giản, sang trọng và những tặng phẩm nông sản tinh hoa.
            </p>

            <div className="flex items-center gap-2 text-neutral-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Sản phẩm kiểm định an toàn vệ sinh thực phẩm</span>
            </div>
          </div>

          {/* Showroom Addresses (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Hệ Thống Trưng Bày & Trải Nghiệm
            </h4>

            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dd3333] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Showroom Hà Nội:</strong>
                  <p className="text-[11px] text-white/60">Tầng 2, Tòa nhà Heritage, 18 Phố Huế, Q. Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dd3333] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Showroom TP. Hồ Chí Minh:</strong>
                  <p className="text-[11px] text-white/60">Lầu 3, Wiix Pavilion, 86 Nguyễn Huệ, P. Bến Nghé, Quận 1, TP. HCM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Support (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Liên Hệ Đặt Quà
            </h4>

            <div className="space-y-2.5 text-white/70">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#dd3333]" />
                <span>Hotline: <strong className="text-white font-mono">0383.666.888</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#dd3333]" />
                <span>Tư vấn B2B: <strong className="text-white font-mono">0777.222.535 | 0777.444.666</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#dd3333]" />
                <span>sale@wiix.vn</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © 2027 Công ty Cổ phần Quà tặng Cao cấp Wiix Việt Nam. Mã số thuế: 0108992211.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Chính sách bảo mật</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Quy chế đổi trả</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Hóa đơn điện tử</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
