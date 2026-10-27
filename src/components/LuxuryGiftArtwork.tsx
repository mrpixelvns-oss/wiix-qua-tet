import React from 'react';

interface LuxuryGiftArtworkProps {
  id: string;
  className?: string;
  aspectRatio?: '4:5' | '16:9' | '4:3' | '1:1';
  viewMode?: 'box' | 'open';
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  showBrandTag?: boolean;
}

export const LuxuryGiftArtwork: React.FC<LuxuryGiftArtworkProps> = ({
  id,
  className = '',
  aspectRatio = '4:5',
  viewMode = 'box',
  imageUrl,
  title,
  subtitle,
  showBrandTag = false
}) => {
  const aspectClass = {
    '4:5': 'aspect-[4/5]',
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  }[aspectRatio];

  // If a real product photograph is provided, render clean image without unwanted overlay text
  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${aspectClass} ${className}`}>
        <img
          src={imageUrl}
          alt={title || 'Bộ quà Tết Wiix'}
          className="w-full h-full object-cover transform scale-[1.06] group-hover:scale-100 transition-transform duration-700 ease-out will-change-transform"
          loading="lazy"
        />
        {showBrandTag && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-amber-200 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 pointer-events-none">
            <span className="font-serif font-bold tracking-wide truncate pr-2">{title || 'Wiix Masterpiece'}</span>
            <span className="text-[10px] text-amber-300/80 font-mono shrink-0 uppercase tracking-wider">{subtitle || 'Chính Hãng'}</span>
          </div>
        )}
      </div>
    );
  }

  if (id === 'hero') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#020517] via-[#050a30] to-[#1a050d] shadow-[0_20px_50px_rgba(5,10,48,0.4)] border border-amber-400/30 ${aspectClass} ${className} group`}>
        {/* Modern decorative luxury ambient lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(221,51,51,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.15),transparent_50%)]" />
        
        {/* Fine gold mesh grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#e5c378_1px,transparent_1px),linear-gradient(to_bottom,#e5c378_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Floating golden dust particles */}
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-amber-300 blur-[0.5px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-amber-200 blur-[0.5px] animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-amber-400/80 blur-[1px]" />

        {/* Hero 3D Perspective Vector Showcase */}
        <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-8">
          <svg viewBox="0 0 640 460" className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Box metallic midnight navy gradients */}
              <linearGradient id="heroBoxTop" x1="160" y1="120" x2="480" y2="280" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0f1952" />
                <stop offset="0.4" stopColor="#070e38" />
                <stop offset="1" stopColor="#03061c" />
              </linearGradient>
              <linearGradient id="heroBoxFront" x1="160" y1="280" x2="320" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#091347" />
                <stop offset="1" stopColor="#020412" />
              </linearGradient>
              <linearGradient id="heroBoxRight" x1="320" y1="280" x2="480" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#04081e" />
                <stop offset="1" stopColor="#01020a" />
              </linearGradient>

              {/* 24K Gold foil gradient */}
              <linearGradient id="heroGoldFoil" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#FFF2A3" />
                <stop offset="0.25" stopColor="#E5C378" />
                <stop offset="0.5" stopColor="#B38728" />
                <stop offset="0.75" stopColor="#FBF5B7" />
                <stop offset="1" stopColor="#9C6B10" />
              </linearGradient>

              {/* Velvet red ribbon gradient */}
              <linearGradient id="heroRedVelvet" x1="0" y1="0" x2="1" y2="0.8">
                <stop stopColor="#FF4D4D" />
                <stop offset="0.3" stopColor="#DD3333" />
                <stop offset="0.7" stopColor="#991515" />
                <stop offset="1" stopColor="#600707" />
              </linearGradient>

              {/* Bordeaux Wine bottle gradient */}
              <linearGradient id="heroWineGlass" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#4A0E17" />
                <stop offset="0.3" stopColor="#2A060B" />
                <stop offset="0.8" stopColor="#140205" />
                <stop offset="1" stopColor="#30070D" />
              </linearGradient>

              {/* Shadow filter */}
              <filter id="heroShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="24" stdDeviation="30" floodColor="#000000" floodOpacity="0.85" />
              </filter>
            </defs>

            {/* Pedestal surface & reflective pool */}
            <ellipse cx="320" cy="400" rx="270" ry="36" fill="#000000" fillOpacity="0.6" />
            <ellipse cx="320" cy="396" rx="200" ry="24" fill="#0b1338" fillOpacity="0.25" />

            {/* Main Luxury Box Isometric Structure */}
            <g filter="url(#heroShadow)">
              {/* Box Top Diamond Face */}
              <polygon points="160,200 320,120 480,200 320,285" fill="url(#heroBoxTop)" stroke="url(#heroGoldFoil)" strokeWidth="1.8" />
              
              {/* Box Left Front Face */}
              <polygon points="160,200 320,285 320,385 160,295" fill="url(#heroBoxFront)" stroke="url(#heroGoldFoil)" strokeWidth="1.2" />
              
              {/* Box Right Front Face */}
              <polygon points="480,200 320,285 320,385 480,295" fill="url(#heroBoxRight)" stroke="url(#heroGoldFoil)" strokeWidth="1.2" />

              {/* Fine gold filigree border inner trim */}
              <polygon points="175,200 320,128 465,200 320,274" fill="none" stroke="url(#heroGoldFoil)" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.8" />

              {/* Vertical Silk Ribbon Cross */}
              <path d="M240,160 L240,245 L240,342" stroke="url(#heroRedVelvet)" strokeWidth="20" strokeLinecap="round" />
              <path d="M240,160 L240,245 L240,342" stroke="url(#heroGoldFoil)" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />

              <path d="M400,160 L400,245 L400,342" stroke="url(#heroRedVelvet)" strokeWidth="20" strokeLinecap="round" />
              <path d="M400,160 L400,245 L400,342" stroke="url(#heroGoldFoil)" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />

              {/* Diagonal 24K Gold Stamping Ribbon */}
              <polygon points="210,145 430,255 415,275 195,165" fill="url(#heroGoldFoil)" opacity="0.95" />

              {/* Central Seal Medallion with embossed Wiix emblem */}
              <circle cx="320" cy="210" r="34" fill="url(#heroGoldFoil)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="320" cy="210" r="28" fill="#050A30" />
              <circle cx="320" cy="210" r="25" fill="none" stroke="url(#heroGoldFoil)" strokeWidth="1" strokeDasharray="2 2" />
              <text x="320" y="215" fill="url(#heroGoldFoil)" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="serif" letterSpacing="2">WIIX</text>
              <text x="320" y="226" fill="#FDE68A" fontSize="7" textAnchor="middle" letterSpacing="1">2027</text>
            </g>

            {/* Left Item: Bordeaux Reserve Wine Bottle */}
            <g transform="translate(100, 110)">
              {/* Bottle Neck Foil */}
              <rect x="24" y="0" width="16" height="38" rx="2" fill="url(#heroGoldFoil)" />
              <rect x="22" y="38" width="20" height="4" fill="#DD3333" />
              {/* Bottle Body */}
              <path d="M20 42 C20 60, 6 85, 6 115 L6 250 L58 250 L58 115 C58 85, 44 60, 44 42 Z" fill="url(#heroWineGlass)" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
              {/* High-contrast Glass reflection */}
              <path d="M12 115 L12 240 C12 240, 16 230, 16 125 Z" fill="#FFFFFF" fillOpacity="0.25" />
              {/* Wine Label */}
              <rect x="14" y="130" width="36" height="70" rx="3" fill="#FDFBF7" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
              <rect x="18" y="138" width="28" height="3" fill="#DD3333" />
              <text x="32" y="156" fill="#050A30" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="serif">CHATEAU</text>
              <text x="32" y="167" fill="#050A30" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="serif">WIIX</text>
              <text x="32" y="180" fill="#AA7C11" fontSize="6" textAnchor="middle">BORDEAUX</text>
              <text x="32" y="190" fill="#666" fontSize="5" textAnchor="middle">GRAND VIN</text>
            </g>

            {/* Right Item: Metallic Shan Tuyet Tea Canister */}
            <g transform="translate(460, 165)">
              <rect x="10" y="0" width="70" height="16" rx="4" fill="url(#heroGoldFoil)" />
              <rect x="12" y="16" width="66" height="115" rx="5" fill="#070E38" stroke="url(#heroGoldFoil)" strokeWidth="1.2" />
              {/* Glossy vertical reflection line */}
              <rect x="20" y="20" width="8" height="105" rx="2" fill="#FFFFFF" fillOpacity="0.12" />
              {/* Tea Medallion */}
              <circle cx="45" cy="55" r="18" fill="#DD3333" stroke="url(#heroGoldFoil)" strokeWidth="1" />
              <text x="45" y="60" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="serif">TRÀ</text>
              <text x="45" y="88" fill="url(#heroGoldFoil)" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.8">SHAN TUYẾT</text>
              <text x="45" y="100" fill="#E5C378" fontSize="6" textAnchor="middle">CỔ THỤ 300 NĂM</text>
            </g>

            {/* Center-Right: Macadamia Nut Crystal Jar with Gold Cap */}
            <g transform="translate(390, 260)">
              <rect x="0" y="0" width="65" height="14" rx="3" fill="url(#heroGoldFoil)" />
              <rect x="3" y="14" width="59" height="70" rx="4" fill="#FFFFFF" fillOpacity="0.9" stroke="url(#heroGoldFoil)" strokeWidth="1" />
              {/* Delicious nuts within */}
              <circle cx="20" cy="34" r="8" fill="#E5C378" />
              <circle cx="42" cy="32" r="7" fill="#C9982E" />
              <circle cx="32" cy="50" r="9" fill="#996D08" />
              <rect x="10" y="66" width="45" height="12" rx="2" fill="#050A30" />
              <text x="32.5" y="75" fill="#FFF2A3" fontSize="7" fontWeight="bold" textAnchor="middle">MACCA ĐẮK LẮK</text>
            </g>

            {/* Poetic Golden Plum Branch & Drifting Petals */}
            <path d="M120 70 Q 240 20 340 75 T 480 60" stroke="url(#heroGoldFoil)" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
            <circle cx="160" cy="58" r="5" fill="#DD3333" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
            <circle cx="240" cy="42" r="6" fill="#EE4444" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
            <circle cx="310" cy="72" r="5" fill="#DD3333" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
            <circle cx="380" cy="55" r="7" fill="#F87171" stroke="url(#heroGoldFoil)" strokeWidth="0.8" />
            
            {/* Drifting Petals */}
            <ellipse cx="200" cy="110" rx="4" ry="2" fill="#DD3333" transform="rotate(-25 200 110)" />
            <ellipse cx="440" cy="120" rx="4" ry="2" fill="#F87171" transform="rotate(35 440 120)" />
          </svg>
        </div>

        {/* Modern Floating Editorial Badges */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#050a30]/80 backdrop-blur-md border border-amber-400/30 text-xs text-amber-200 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#dd3333] shadow-[0_0_8px_#dd3333]" />
          <span className="font-medium tracking-wide">Bản Giới Hạn Tết Đinh Mùi 2027</span>
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300 font-mono">
          Kiệt Tác Thiết Kế Độc Quyền
        </div>
      </div>
    );
  }

  // Modern styled product card artwork palettes
  const palettes: Record<string, { bg: string; border: string; accent: string; ribbon: string; tag: string; foilGrad: string }> = {
    'an-khang': { 
      bg: 'from-[#03071e] via-[#07113e] to-[#14061a]', 
      border: 'border-amber-400/25', 
      accent: '#dd3333', 
      ribbon: '#D4AF37', 
      tag: 'Xuân An Khang',
      foilGrad: 'goldGrad-ak'
    },
    'phu-quy': { 
      bg: 'from-[#170514] via-[#09103c] to-[#030617]', 
      border: 'border-amber-400/30', 
      accent: '#D4AF37', 
      ribbon: '#dd3333', 
      tag: 'Phú Quý Cát Tường',
      foilGrad: 'goldGrad-pq'
    },
    'thinh-vuong': { 
      bg: 'from-[#020517] via-[#0a184e] to-[#1c080d]', 
      border: 'border-amber-400/35', 
      accent: '#dd3333', 
      ribbon: '#F3D279', 
      tag: 'Thịnh Vượng Như Ý',
      foilGrad: 'goldGrad-tv'
    },
    'doi-tac-vip': { 
      bg: 'from-[#140a03] via-[#050a30] to-[#200508]', 
      border: 'border-amber-400/40', 
      accent: '#E5C378', 
      ribbon: '#D4AF37', 
      tag: 'Hoàng Kim VIP',
      foilGrad: 'goldGrad-vip'
    },
    'duong-tam': { 
      bg: 'from-[#051711] via-[#061238] to-[#0d1f18]', 
      border: 'border-emerald-500/30', 
      accent: '#10B981', 
      ribbon: '#D4AF37', 
      tag: 'Dưỡng Tâm Thảo Mộc',
      foilGrad: 'goldGrad-dt'
    },
    'sum-vay': { 
      bg: 'from-[#170d04] via-[#050a30] to-[#1f0f08]', 
      border: 'border-amber-400/25', 
      accent: '#dd3333', 
      ribbon: '#E6A23C', 
      tag: 'Sum Vầy Truyền Thống',
      foilGrad: 'goldGrad-sv'
    },
    'tinh-hoa': { 
      bg: 'from-[#030722] via-[#091552] to-[#010310]', 
      border: 'border-amber-400/30', 
      accent: '#D4AF37', 
      ribbon: '#dd3333', 
      tag: 'Doanh Nghiệp Tinh Hoa',
      foilGrad: 'goldGrad-th'
    },
    'long-phung': { 
      bg: 'from-[#220407] via-[#050a30] to-[#120204]', 
      border: 'border-amber-400/45', 
      accent: '#FDE68A', 
      ribbon: '#dd3333', 
      tag: 'Long Phụng Hoàng Gia',
      foilGrad: 'goldGrad-lp'
    },
  };

  const palette = palettes[id] || palettes['an-khang'];

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${palette.bg} shadow-md border ${palette.border} group-hover:border-amber-400/50 group-hover:shadow-[0_12px_30px_rgba(5,10,48,0.25)] transition-all duration-300 ${aspectClass} ${className}`}>
      {/* Texture mesh */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
      
      {/* Light sheen sweeping across card on hover */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* SVG Packaging composition */}
      <div className="relative h-full w-full flex items-center justify-center p-3 sm:p-5">
        <svg viewBox="0 0 340 400" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`boxGrad-${id}`} x1="50" y1="80" x2="290" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0d1854" />
              <stop offset="0.6" stopColor="#050a30" />
              <stop offset="1" stopColor="#02030f" />
            </linearGradient>
            <linearGradient id={`goldGrad-${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#FFF4B8" />
              <stop offset="0.3" stopColor="#E5C378" />
              <stop offset="0.7" stopColor="#B38728" />
              <stop offset="1" stopColor="#8C6207" />
            </linearGradient>
            <linearGradient id={`redRibbon-${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#F87171" />
              <stop offset="0.4" stopColor="#DD3333" />
              <stop offset="1" stopColor="#880E0E" />
            </linearGradient>
          </defs>

          {/* Pedestal drop shadow */}
          <ellipse cx="170" cy="355" rx="130" ry="20" fill="#000" fillOpacity="0.5" />

          {/* Box Geometry */}
          <polygon points="70,190 170,135 270,190 170,250" fill={`url(#boxGrad-${id})`} stroke={`url(#goldGrad-${id})`} strokeWidth="1.4" />
          <polygon points="70,190 170,250 170,330 70,265" fill="#050A30" stroke={`url(#goldGrad-${id})`} strokeWidth="0.9" strokeOpacity="0.7" />
          <polygon points="270,190 170,250 170,330 270,265" fill="#020414" stroke={`url(#goldGrad-${id})`} strokeWidth="0.9" strokeOpacity="0.7" />

          {/* Inner Lid Filigree */}
          <polygon points="80,186 170,142 260,186 170,238" fill="none" stroke={`url(#goldGrad-${id})`} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.65" />

          {/* Ribbons */}
          <path d="M120,165 L120,240 L120,305" stroke={`url(#goldGrad-${id})`} strokeWidth="12" strokeLinecap="round" />
          <path d="M220,165 L220,240 L220,305" stroke={`url(#goldGrad-${id})`} strokeWidth="12" strokeLinecap="round" />

          {/* Diagonal Red Velvet Ribbon */}
          <path d="M90,150 L250,235" stroke={`url(#redRibbon-${id})`} strokeWidth="9" strokeOpacity="0.9" />

          {/* Brand Seal Medallion */}
          <circle cx="170" cy="195" r="24" fill={`url(#goldGrad-${id})`} stroke="#FFF" strokeWidth="0.8" />
          <circle cx="170" cy="195" r="20" fill="#050A30" />
          <text x="170" y="199" fill="#FFF2A3" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="serif" letterSpacing="1">WIIX</text>

          {/* Luxury items inside / around the box */}
          {/* Wine Bottle */}
          <g transform="translate(205, 90)">
            <rect x="8" y="0" width="10" height="25" rx="1.5" fill={`url(#goldGrad-${id})`} />
            <path d="M7 25 C7 40, 0 52, 0 75 L0 135 L26 135 L26 75 C26 52, 19 40, 19 25 Z" fill="#200609" stroke={`url(#goldGrad-${id})`} strokeWidth="0.6" />
            <rect x="2" y="80" width="22" height="40" rx="1.5" fill="#FDFBF7" />
            <rect x="4" y="86" width="18" height="2" fill="#DD3333" />
            <text x="13" y="100" fill="#050A30" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="serif">WIIX</text>
            <text x="13" y="108" fill="#AA7C11" fontSize="3.8" textAnchor="middle">BORDEAUX</text>
          </g>

          {/* Tea Canister or Glass Jar */}
          <g transform="translate(60, 120)">
            <rect x="4" y="0" width="40" height="9" rx="2" fill={`url(#goldGrad-${id})`} />
            <rect x="5" y="9" width="38" height="65" rx="3" fill="#070E38" stroke={`url(#goldGrad-${id})`} strokeWidth="0.8" />
            <circle cx="24" cy="32" r="10" fill="#DD3333" />
            <text x="24" y="36" fill="#FFF" fontSize="7" fontWeight="bold" textAnchor="middle">XUÂN</text>
            <text x="24" y="56" fill="#FFF2A3" fontSize="5" textAnchor="middle" letterSpacing="0.5">TRÀ CỔ THỤ</text>
          </g>

          {/* Delicate spring blossoms */}
          <circle cx="90" cy="90" r="4.5" fill="#DD3333" stroke={`url(#goldGrad-${id})`} strokeWidth="0.5" />
          <circle cx="250" cy="75" r="5" fill="#F87171" stroke={`url(#goldGrad-${id})`} strokeWidth="0.5" />
          <circle cx="170" cy="70" r="3.5" fill="#FFF2A3" />
        </svg>
      </div>

      {/* Modern Card Bottom Bar */}
      {showBrandTag && (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-neutral-300 border-t border-white/10 pt-2 px-2 bg-black/20 backdrop-blur-xs rounded-b-lg">
          <span className="font-serif tracking-wide text-amber-200/90 font-medium">{palette.tag}</span>
          <span className="text-[10px] text-neutral-400 font-mono">BST 2027</span>
        </div>
      )}
    </div>
  );
};
