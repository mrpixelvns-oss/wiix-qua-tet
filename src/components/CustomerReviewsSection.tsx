import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Star,
  Quote,
  CheckCircle,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  ShieldCheck,
  Camera
} from 'lucide-react';
import { REVIEWS } from '../data/tetGifts';

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: 'packaging' | 'delivery' | 'branding' | 'showroom';
  location: string;
  imageUrl: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'vu-mon-real',
    title: 'Hộp Quà Vũ Môn — Cá Chép Hóa Rồng',
    location: 'Chi tiết ép kim 3D & quai lụa • Hà Nội',
    caption: 'Tác phẩm hoàn thiện thực tế tại xưởng với công nghệ ép nhũ vàng 24K, dập nổi 3D đa tầng tái hiện tích cổ Cá Chép Vượt Vũ Môn. Đi kèm túi xách cao cấp quai tơ tằm đỏ son đồng bộ Wiix Gift.',
    category: 'branding',
    imageUrl: '/assets/aistudio/bo-qua-ca-chep-hoa-rong_bd765ead.jpg'
  },
  {
    id: 'packaging-kcs',
    title: 'Đóng Khay Nhung & Chống Sốc KCS',
    location: 'Xưởng đóng gói trung tâm Wiix',
    caption: 'Mỗi sản phẩm đều được kiểm định KCS nghiêm ngặt. Chai rượu vang và các hũ hạt được đặt chuẩn trong khay nhung nhồi lụa chống sốc, bảo vệ an toàn tuyệt đối suốt hành trình vận chuyển.',
    category: 'packaging',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'b2b-delivery-pallets',
    title: 'Bàn Giao Lô Hàng 650+ Set Doanh Nghiệp',
    location: 'Kho vận & Pallet màng PE kháng ẩm',
    caption: 'Lô hàng quà Tết dành cho đối tác tập đoàn được phân loại theo mã chi nhánh, đóng pallet màng quấn PE kháng ẩm và bàn giao đúng tiến độ cam kết trong hợp đồng.',
    category: 'delivery',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'ribbon-finishing',
    title: 'Thắt Nơ Ruy Băng Lụa & Niêm Phong Tem',
    location: 'Hoàn thiện thủ công tinh xảo',
    caption: 'Đội ngũ nghệ nhân thủ công chăm chút từng nếp gấp nơ lụa satin đỏ son và dán tem niêm phong chống hàng nhái độc quyền Wiix, tạo nên vẻ ngoài hoàn mỹ và chỉn chu nhất.',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'wine-luxury-selection',
    title: 'Hộp Quà Thịnh Vượng & Tuyển Tập Vang',
    location: 'Phối mẫu bộ sưu tập vang & hạt VIP',
    caption: 'Hộp nắp gập nam châm bọc vải vân lụa Navy trầm, ép kim vàng Champagne. Sự kết hợp sang trọng giữa phong vị vang Pháp hảo hạng và yến chưng tự nhiên.',
    category: 'packaging',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'showroom-space',
    title: 'Không Gian Trải Nghiệm Showroom Wiix',
    location: 'Showroom Hà Nội & TP. Hồ Chí Minh',
    caption: 'Showroom hiện đại với đầy đủ các mẫu hộp thực tế, bảng màu ép kim logo doanh nghiệp, cùng khu vực thưởng trà và vang trước khi chốt số lượng lớn.',
    category: 'showroom',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=85'
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'branding', label: 'Bao Bì & Ép Kim' },
  { id: 'packaging', label: 'Xưởng Đóng Gói' },
  { id: 'delivery', label: 'Bàn Giao Doanh Nghiệp' },
  { id: 'showroom', label: 'Showroom' },
];

export const CustomerReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredPhotos = activeTab === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="danh-gia" className="py-[60px] bg-[#F9FAFB] border-b border-[#050a30]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header: Reviews & Social Proof */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#050a30]/80 tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#dd3333]" />
              <span>Thước Đo Niềm Tin & Thực Tế Trao Gửi</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#050a30] tracking-tight">
              Đánh Giá Khách Hàng & Thực Tế Trao Gửi
            </h2>
            <p className="text-[16px] sm:text-base text-[#050a30]/75 leading-relaxed">
              Trải nghiệm thực tế từ các nhà quản lý doanh nghiệp và khách hàng cá nhân đã tin tưởng lựa chọn Wiix Việt Nam trong các mùa Tết vừa qua.
            </p>
          </div>

          {/* Social Proof Metric counters with modern glass pill */}
          <div className="flex items-center gap-6 bg-[#F9FAFB] p-5 rounded-2xl border border-[#050a30]/10 shadow-xs">
            <div>
              <div className="font-serif text-3xl font-bold text-[#050a30] tabular-nums">
                15.000+
              </div>
              <div className="text-[11px] text-[#050a30]/65 uppercase tracking-wide font-medium">
                Hộp quà trao gửi 2026
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#050a30]/15" />
            <div>
              <div className="font-serif text-3xl font-bold text-[#dd3333] tabular-nums">
                99.2%
              </div>
              <div className="text-[11px] text-[#050a30]/65 uppercase tracking-wide font-medium">
                Hài lòng đúng tiến độ
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-5 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="group p-7 rounded-2xl bg-[#F9FAFB] hover:bg-white border border-[#050a30]/10 hover:border-amber-400/40 shadow-xs hover:shadow-[0_14px_30px_rgba(5,10,48,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#050a30]/10 group-hover:text-[#dd3333]/20 transition-colors" />
                </div>

                <p className="text-xs sm:text-[16px] text-[#050a30]/85 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#050a30]/8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#050a30] text-amber-200 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {rev.author.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[18px] text-[#050a30]">
                      {rev.author}
                    </div>
                    <div className="text-xs text-[#050a30]/70 w">
                      {rev.role}
                    </div>
                  </div>
                </div>

                <div className="text-[14px] w-fit text-amber-900 font-medium mt-2 flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  <Building2 className="w-3.5 h-3.5 text-[#dd3333]" />
                  <span className="truncate">{rev.company}</span>
                </div>

                <div className="mt-2 text-[13px] text-[#050a30]/60 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Đã nhận: {rev.giftBox} ({rev.orderSize})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Packaging & Handover Gallery Showcase */}
        <div className="rounded-3xl bg-[#F9FAFB] p-6 sm:p-8 md:p-10 border border-[#050a30]/10 shadow-xs">

          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#050a30]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#dd3333] uppercase tracking-wider mb-1.5">
                <Camera className="w-4 h-4 text-[#dd3333]" />
                <span>Thực Tế Showroom & Xưởng Đóng Gói</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#050a30] tracking-tight">
                Hình Ảnh Thực Tế Đóng Gói & Bàn Giao
              </h3>
              <p className="text-xs sm:text-sm text-[#050a30]/70 mt-1 max-w-xl">
                100% hình ảnh chụp thực tế tại showroom và xưởng đóng gói Wiix Việt Nam.
              </p>
            </div>

            {/* Quality Badges */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#050a30]/80 border border-[#050a30]/10 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Kiểm định KCS 5 Lớp
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#050a30]/80 border border-[#050a30]/10 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#dd3333]" />
                Hà Nội & TP.HCM
              </span>
            </div>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const count = tab.id === 'all'
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter(p => p.category === tab.id).length;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${isActive
                    ? 'bg-[#050a30] text-amber-200 shadow-sm'
                    : 'bg-white hover:bg-[#050a30]/5 text-[#050a30]/75 border border-[#050a30]/10'
                    }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-amber-400/25 text-amber-200' : 'bg-[#050a30]/8 text-[#050a30]/60'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Balanced 3-Column Symmetrical Grid (3 cards / row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#050a30]/10 p-3 hover:border-amber-400/50 hover:shadow-[0_12px_28px_rgba(5,10,48,0.08)] transition-all duration-300 flex flex-col"
              >
                {/* Clean, unobstructed image with luxury aspect ratio */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gentle hover overlay with centered zoom icon */}
                  <div className="absolute inset-0 bg-[#050a30]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full bg-white/95 text-[#050a30] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#050a30]" />
                    </span>
                  </div>
                </div>

                {/* Clean typography underneath */}
                <div className="pt-3 pb-1 px-1">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#050a30] group-hover:text-[#dd3333] transition-colors truncate">
                    {photo.title}
                  </h4>
                  <p className="sm:text-[13px] text-[#050a30]/65 truncate mt-2">
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtitle Hint */}
          <div className="mt-8 pt-5 border-t border-[#050a30]/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:text-[16px] text-[#050a30]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Click vào ảnh để phóng to xem chi tiết chất liệu và bao bì đóng gói.</span>
            </div>
            <div className="font-medium text-[#050a30]">
              Hotline tư vấn & gửi mẫu tận nơi:{' '}
              <a href="tel:0824263789" className="font-bold text-[#dd3333] hover:underline font-mono">
                0824.263.789
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Modern High-End Lightbox Modal teleported to document.body */}
      {isMounted && lightboxIndex !== null && activePhoto && createPortal(
        <div
          className="fixed inset-0 z-[99999] w-screen h-screen bg-[#020517]/95 backdrop-blur-2xl flex flex-col justify-between overflow-hidden select-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Header Bar */}
          <div className="shrink-0 h-14 sm:h-16 px-4 sm:px-8 border-b border-white/10 flex items-center justify-between z-20 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-serif font-bold text-amber-300 truncate max-w-[200px] sm:max-w-md">
                {activePhoto.title}
              </span>
              <span className="text-xs text-white/50 font-mono shrink-0">
                ({lightboxIndex + 1} / {filteredPhotos.length})
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden md:inline-block text-[11px] text-white/40 font-mono">
                Nhấn ESC để đóng • Phím ← → để chuyển ảnh
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Đóng lightbox"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-[#dd3333] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area: Image + Nav Arrows (Click outside closes popup) */}
          <div
            className="flex-1 min-h-0 relative flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
              }}
              aria-label="Ảnh trước"
              className="absolute left-2 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#dd3333] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image Container */}
            <div
              className="relative max-h-full max-w-5xl flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[50vh] sm:max-h-[56vh] md:max-h-[60vh] max-w-[88vw] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/15 ring-1 ring-amber-400/20"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Ảnh kế tiếp"
              className="absolute right-2 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#dd3333] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xl cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Bar: Details & Thumbnails */}
          <div className="shrink-0 max-w-4xl mx-auto w-full px-4 pb-3 sm:pb-5 space-y-2.5 z-20">

            {/* Caption & Location Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-0.5 max-w-2xl">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#dd3333]" />
                  <span>{activePhoto.location}</span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-amber-200">
                  {activePhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="tel:0988228899"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#dd3333] to-[#b32424] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <span>Tư Vấn Mẫu Hộp Này</span>
                </a>
              </div>
            </div>

            {/* Thumbnail Ribbon Strip */}
            <div className="hidden sm:flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none">
              {filteredPhotos.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${idx === lightboxIndex
                    ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/30 ring-2 ring-amber-400/50'
                    : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                    }`}
                >
                  <img
                    src={thumb.imageUrl}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

