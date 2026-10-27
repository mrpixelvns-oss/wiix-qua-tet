export interface GiftItem {
  name: string;
  origin: string;
  weight: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  budgetCategory: 'under-500' | '500-1000' | '1000-2000' | 'above-2000';
  category: string;
  shortDescription: string;
  fullDescription: string;
  items: GiftItem[];
  packaging: string;
  dimensions: string;
  suitableFor: string;
  artworkId: 'an-khang' | 'phu-quy' | 'thinh-vuong' | 'doi-tac-vip' | 'duong-tam' | 'sum-vay' | 'tinh-hoa' | 'long-phung';
  imageUrl?: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  itemCount: number;
  highlight: string;
  artworkId: string;
  targetBudget?: string;
  imageUrl?: string;
  features?: string[];
  filterTag?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  orderSize: string;
  giftBox: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'vu-mon-ca-chep',
    name: 'Hộp Quà Vũ Môn — Cá Chép Hóa Rồng',
    subtitle: 'Khởi sắc công danh, vạn sự hanh thông như ý',
    price: 980000,
    originalPrice: 1150000,
    badge: 'Chủ lực 2027',
    budgetCategory: '500-1000',
    category: 'Hộp Quà Tết Cao Cấp',
    imageUrl: '/assets/aistudio/bo-qua-ca-chep-hoa-rong_bd765ead.jpg',
    shortDescription: 'Trà Shan Tuyết, hạt điều Bình Phước, macca nứt vỏ, mứt sen trần & bộ túi xách Wiix Gift ép nhũ vàng sang trọng.',
    fullDescription: 'Tác phẩm quà Tết Vũ Môn Hóa Rồng của Wiix Việt Nam khắc họa tích cổ Cá Chép Vượt Vũ Môn với nét vẽ dập nổi dát vàng 24K rực rỡ dưới ánh trăng rằm. Sản phẩm đi kèm túi xách đồng bộ cao cấp có quai xách tơ tằm, là món quà biếu trang trọng nhất cho đối tác, gia đình và lãnh đạo.',
    items: [
      { name: 'Trà Shan Tuyết Cổ Thụ Hà Giang (Hũ kim loại cao cấp)', origin: 'Hà Giang', weight: '100g' },
      { name: 'Hạt Macca sấy nứt vỏ Đắk Lắk nguyên vị loại VIP', origin: 'Đắk Lắk', weight: '250g' },
      { name: 'Hạt điều Bình Phước rang củi vỏ lụa giòn thơm', origin: 'Bình Phước', weight: '200g' },
      { name: 'Hạt sen sấy giòn tự nhiên Đồng Tháp', origin: 'Đồng Tháp', weight: '150g' },
      { name: 'Xoài sấy dẻo tự nhiên Khánh Hòa', origin: 'Khánh Hòa', weight: '180g' }
    ],
    packaging: 'Hộp cứng cao cấp dập nổi ép kim 3D bức họa Vũ Môn Hóa Rồng, túi xách đỏ đồng bộ in thông tin Wiix Gift, kèm bộ phong bao lì xì & thiệp chúc độc quyền.',
    dimensions: '36 x 28 x 12 cm',
    suitableFor: 'Đối tác chiến lược, cấp trên, tri ân khách hàng VIP, quà tặng doanh nghiệp',
    artworkId: 'an-khang',
    isBestSeller: true
  },
  {
    id: 'xuan-an-khang',
    name: 'Hộp Quà Xuân An Khang',
    subtitle: 'Lời chúc khởi sắc, thanh tao và bình yên',
    price: 490000,
    originalPrice: 550000,
    badge: 'Bán chạy',
    budgetCategory: 'under-500',
    category: 'Hộp Quà Tết Cao Cấp',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Trà Shan Tuyết cổ thụ, hạt điều rang muối Bình Phước, mứt gừng Huế & xoài sấy dẻo Nha Trang.',
    fullDescription: 'Hộp quà Xuân An Khang gói trọn nét hương vị Tết truyền thống thanh tao của đất trời Việt Nam. Từng thành phần hạt dinh dưỡng và trà mạn được tuyển lựa kỹ lưỡng từ các vùng nông sản trứ danh, phù hợp gửi trao tri ân nhân viên, đồng nghiệp và người thân.',
    items: [
      { name: 'Trà Shan Tuyết Cổ Thụ Hà Giang (Hũ nhôm cao cấp)', origin: 'Hà Giang', weight: '100g' },
      { name: 'Hạt điều Bình Phước rang muối vỏ lụa loại 1', origin: 'Bình Phước', weight: '200g' },
      { name: 'Xoài cát sấy dẻo tự nhiên không đường hóa học', origin: 'Khánh Hòa', weight: '180g' },
      { name: 'Mứt gừng củ tiến vua cay nồng đậm vị Tết', origin: 'Huế', weight: '150g' }
    ],
    packaging: 'Hộp cứng định lượng 1200gsm ép kim họa tiết hoa mai vàng, khóa nam châm thanh lịch, kèm túi giấy quà tặng cao cấp & phong bao lì xì Wiix.',
    dimensions: '32 x 22 x 9 cm',
    suitableFor: 'Biếu tặng nhân viên, quà tặng gia đình, tri ân tập thể',
    artworkId: 'an-khang',
    isBestSeller: true
  },
  {
    id: 'phu-quy-cat-tuong',
    name: 'Hộp Quà Phú Quý Cát Tường',
    subtitle: 'Khơi nguồn may mắn, phúc lộc dồi dào',
    price: 980000,
    originalPrice: 1100000,
    badge: 'Được chuộng nhất',
    budgetCategory: '500-1000',
    category: 'Hộp Quà Tết Cao Cấp',
    imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Vang đỏ Cabernet Sauvignon, macca Tây Nguyên, hạnh nhân Mỹ rang bơ & trà ô long hảo hạng.',
    fullDescription: 'Hộp quà Phú Quý Cát Tường là sự kết hợp hài hòa giữa phong vị Tết cổ truyền và nét giao thoa phương Tây sang trọng. Vang đỏ đậm đà sóng sánh sánh bước cùng các loại hạt sấy thượng hạng giúp bữa tiệc giao thừa thêm phần ấm cúng.',
    items: [
      { name: 'Vang đỏ Montes Classic Cabernet Sauvignon', origin: 'Chile / Nhập chính ngạch', weight: '750ml' },
      { name: 'Hạt Macca sấy nứt vỏ tự nhiên Đắk Lắk kèm dụng cụ', origin: 'Đắk Lắk', weight: '250g' },
      { name: 'Hạnh nhân rang bơ nguyên vỏ giòn thơm', origin: 'California, Mỹ', weight: '200g' },
      { name: 'Trà Ô Long Kim Tuyên tứ quý sấy than củi', origin: 'Lâm Đồng', weight: '100g' },
      { name: 'Vỏ bưởi sấy dẻo thảo mộc thanh mát', origin: 'Bến Tre', weight: '150g' }
    ],
    packaging: 'Hộp quà nắp nam châm cánh bướm bọc vải vân lụa Navy trầm, ép kim vàng Champagne logo nhũ nổi, khay nhung nhồi lụa chống sốc.',
    dimensions: '36 x 26 x 11 cm',
    suitableFor: 'Khách hàng thân thiết, quản lý cấp trung, quà tặng đối tác',
    artworkId: 'phu-quy',
    isBestSeller: true
  },
  {
    id: 'thinh-vuong-nhu-y',
    name: 'Hộp Quà Thịnh Vượng Như Ý',
    subtitle: 'Nâng tầm đẳng cấp, kết nối tâm giao',
    price: 1550000,
    originalPrice: 1750000,
    badge: 'Quà biếu cao cấp',
    budgetCategory: '1000-2000',
    category: 'Quà Tết Doanh Nghiệp',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Vang Pháp Bordeaux Chateau, yến sào chưng đông trùng hạ thảo, hạt thông tuyết & trà sen Tây Hồ.',
    fullDescription: 'Hộp quà Thịnh Vượng Như Ý được ví như tác phẩm nghệ thuật thưởng thức mùa Tết. Quy tụ những thức quà bổ dưỡng quý giá như tổ yến chưng cao cấp cùng chai vang Bordeaux niên vụ xuất sắc, thay lời chúc một năm mới mã đáo thành công và thịnh vượng viên mãn.',
    items: [
      { name: 'Vang Bordeaux Chateau Haut-Mazières AOC', origin: 'Bordeaux, Pháp', weight: '750ml' },
      { name: 'Tổ yến đảo chưng đông trùng hạ thảo & đường phèn (Set 2 hũ)', origin: 'Khánh Hòa', weight: '2 x 70ml' },
      { name: 'Hạt thông tuyết Nga rang thơm nguyên vị', origin: 'Siberia, Nga', weight: '200g' },
      { name: 'Hạt dẻ cười Mỹ rang sấy không tẩy trắng', origin: 'California, Mỹ', weight: '200g' },
      { name: 'Trà sen Tây Hồ ướp hoa gạo sen tươi truyền thống', origin: 'Hà Nội', weight: '80g' },
      { name: 'Nho khô nguyên cành Muscat tự nhiên', origin: 'Australia', weight: '200g' }
    ],
    packaging: 'Cấu trúc hộp hai tầng ngăn kéo độc bản, bề mặt dập vân da lụa cao cấp, khóa kim loại mạ vàng chải xước, kèm bộ thiệp chúc khắc laser.',
    dimensions: '38 x 28 x 14 cm',
    suitableFor: 'Đối tác chiến lược, Ban Giám Đốc, khách hàng doanh nghiệp VIP',
    artworkId: 'thinh-vuong',
    isBestSeller: true
  },
  {
    id: 'doi-tac-hoang-kim-vip',
    name: 'Hộp Quà Đối Tác Hoàng Kim VIP',
    subtitle: 'Kiệt tác thượng hạng dành riêng bậc quý nhân',
    price: 2650000,
    originalPrice: 2950000,
    badge: 'Phiên bản giới hạn',
    budgetCategory: 'above-2000',
    category: 'Quà Tết Đối Tác VIP',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Vang Ý Primitivo di Manduria DOC, nấm đông trùng hạ thảo sấy thăng hoa, sâm lát tẩm mật ong & lộc nhung.',
    fullDescription: 'Phiên bản kiệt tác danh giá dành riêng cho những mối quan hệ trân quý nhất. Bộ quà kết hợp hoàn mỹ giữa dòng vang danh tiếng nước Ý và các dược liệu dưỡng sinh thượng phẩm, biểu trưng cho sự trường thọ, sức khỏe dồi dào và vị thế đỉnh cao.',
    items: [
      { name: 'Vang Ý Papale Primitivo di Manduria DOC (Huy chương Vàng)', origin: 'Puglia, Ý', weight: '750ml' },
      { name: 'Đông trùng hạ thảo Cordyceps Militaris sấy thăng hoa loại VIP', origin: 'Viện Công Nghệ Sinh Học', weight: '25g' },
      { name: 'Hồng sâm 6 năm tuổi xắt lát tẩm mật ong rừng hoa nhãn', origin: 'Geumsan, Hàn Quốc', weight: '120g' },
      { name: 'Tổ yến tinh chế rút lông định hình nguyên tổ xuất khẩu', origin: 'Nha Trang', weight: '50g' },
      { name: 'Trà Đinh Tân Cương thượng đỉnh sao suốt thủ công', origin: 'Thái Nguyên', weight: '100g' },
      { name: 'Hạt óc chó Hartley Mỹ nguyên vỏ tuyển chọn', origin: 'California, Mỹ', weight: '250g' }
    ],
    packaging: 'Rương gỗ sơn mài bọc da bò dập họa tiết rồng phượng đương đại, phụ kiện tay cầm đồng nguyên khối, lót nhung tơ tằm thượng hạng.',
    dimensions: '42 x 32 x 16 cm',
    suitableFor: 'Chủ tịch, Tổng Giám Đốc, Đối tác liên doanh trọng yếu, VIP cấp cao',
    artworkId: 'doi-tac-vip',
    isBestSeller: true
  },
  {
    id: 'duong-tam-an-loc',
    name: 'Hộp Quà Dưỡng Tâm An Lộc',
    subtitle: 'Dược liệu thảo mộc & nông sản hữu cơ vì sức khỏe',
    price: 850000,
    originalPrice: 950000,
    badge: 'Sức khỏe hữu cơ',
    budgetCategory: '500-1000',
    category: 'Quà Tết Sức Khỏe',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Hồng táo hữu cơ Tân Cương, kỷ tử đỏ Ninh Hạ, trà hoa cúc hoàng đế & mật ong hoa bạc hà.',
    fullDescription: 'Món quà thuần khiết trao gửi thông điệp yêu thương tới sức khỏe người nhận. Toàn bộ nguyên liệu đều đạt chứng nhận hữu cơ quốc tế và canh tác sạch.',
    items: [
      { name: 'Mật ong hoa bạc hà nguyên chất cao nguyên đá Đồng Văn', origin: 'Hà Giang', weight: '350ml' },
      { name: 'Hồng táo khô hữu cơ loại 1 quả to mọng', origin: 'Tân Cương', weight: '250g' },
      { name: 'Kỷ tử đỏ hữu cơ sấy khô tự nhiên giàu chất chống oxy hóa', origin: 'Ninh Hạ', weight: '180g' },
      { name: 'Trà hoa cúc tiến vua sấy lạnh giữ trọn tinh dầu', origin: 'Hưng Yên', weight: '70g' }
    ],
    packaging: 'Hộp nắp gập kraft nghệ thuật ép kim viền đỏ son, khay bột bã mía thân thiện môi trường cao cấp.',
    dimensions: '30 x 20 x 8 cm',
    suitableFor: 'Ông bà, cha mẹ, người yêu lối sống lành mạnh, chăm sóc gia đình',
    artworkId: 'duong-tam'
  },
  {
    id: 'doanh-nghiep-tinh-hoa',
    name: 'Hộp Quà Doanh Nghiệp Tinh Hoa',
    subtitle: 'Đồng bộ nhận diện, tối ưu ngân sách công ty',
    price: 1250000,
    originalPrice: 1450000,
    badge: 'Doanh nghiệp VIP',
    budgetCategory: '1000-2000',
    category: 'Quà Tết Doanh Nghiệp',
    imageUrl: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Vang Chile Gran Reserva, 4 hộp hạt cao cấp nắp nhôm & trà đen đặc sản, hỗ trợ in logo công ty.',
    fullDescription: 'Lựa chọn số 1 của hơn 300 tập đoàn và doanh nghiệp trong mùa Tết. Dễ dàng tùy biến thiệp chúc Tết công ty, ép kim logo doanh nghiệp mạ vàng trên nắp hộp và xuất hóa đơn đầy đủ.',
    items: [
      { name: 'Vang Chile San Jose de Apalta Gran Reserva', origin: 'Colchagua Valley, Chile', weight: '750ml' },
      { name: 'Hạt điều rang tỏi ớt lá chanh giòn rụm', origin: 'Bình Phước', weight: '180g' },
      { name: 'Hạt Macca nứt vỏ Đắk Lắk tuyển chọn', origin: 'Tây Nguyên', weight: '200g' },
      { name: 'Nho khô vàng Jumbo quả mọng tự nhiên', origin: 'Nam Phi', weight: '200g' },
      { name: 'Trà đen Ceylon hương dâu tây quý tộc', origin: 'Sri Lanka', weight: '80g' }
    ],
    packaging: 'Hộp nam châm ngang kèm diện tích trống thiết kế riêng để ép kim logo doanh nghiệp hoàn toàn miễn phí từ 30 set.',
    dimensions: '35 x 25 x 10 cm',
    suitableFor: 'Quà tặng cán bộ nhân viên, đối tác kinh doanh, tri ân khách hàng',
    artworkId: 'tinh-hoa',
    isBestSeller: true
  },
  {
    id: 'gio-qua-sum-vay',
    name: 'Giỏ Quà Tết Truyền Thống Sum Vầy',
    subtitle: 'Ấm cúng nghĩa tình, sắc xuân viên mãn',
    price: 780000,
    originalPrice: 880000,
    badge: 'Phong vị Tết Việt',
    budgetCategory: '500-1000',
    category: 'Giỏ Quà Tết Truyền Thống',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Rượu vang nổ Sparkling, bánh quy bơ Đan Mạch, kẹo socola hạt dẻ & trà mạn Tân Cương.',
    fullDescription: 'Mô phỏng hình tượng giỏ quà Tết cổ truyền nhưng được Wiix cách tân với khung mây tre đan thủ công mỹ nghệ tinh tế, loại bỏ hoàn toàn các loại màng bọc nilon thô ráp để hướng tới vẻ đẹp văn minh, trang nhã.',
    items: [
      { name: 'Vang sủi bọt Sparkling Duc de Paris Brut', origin: 'Pháp', weight: '750ml' },
      { name: 'Bánh quy bơ Hoàng Gia hộp thiếc cổ điển', origin: 'Đan Mạch', weight: '340g' },
      { name: 'Kẹo Socola nhân hạt dẻ Ferrero cao cấp', origin: 'Ý', weight: '16 viên' },
      { name: 'Trà búp móc câu Thái Nguyên hương cốm non', origin: 'Thái Nguyên', weight: '150g' },
      { name: 'Hạt sen sấy giòn ăn liền Đồng Tháp', origin: 'Đồng Tháp', weight: '150g' }
    ],
    packaging: 'Khay mây tre đan mỹ nghệ lót vải lụa tơ tằm, quai xách bọc da thật, nơ ruy băng nhung đỏ son.',
    dimensions: '36 x 28 x 20 cm',
    suitableFor: 'Bày ban thờ gia tiên, thăm hỏi họ hàng, đối tác thân quen',
    artworkId: 'sum-vay'
  },
  {
    id: 'hop-qua-loc-xuan',
    name: 'Hộp Quà Lộc Xuân Bình An',
    subtitle: 'Khởi đầu năm mới nhẹ nhàng, trọn vẹn yêu thương',
    price: 390000,
    originalPrice: 450000,
    badge: 'Tiết kiệm',
    budgetCategory: 'under-500',
    category: 'Hộp Quà Tết Cao Cấp',
    imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Trà búp Thái Nguyên, hạt dưa hoa đậu biếc, mứt sen trần & hạt điều Bình Phước rang muối.',
    fullDescription: 'Món quà gửi gắm nét thanh thuần ngày Tết với mức ngân sách tiết kiệm nhất nhưng vẫn giữ vẹn nguyên sự chỉn chu, bao bì trang nhã ép kim vàng.',
    items: [
      { name: 'Trà búp Tân Cương Thái Nguyên túi bạc', origin: 'Thái Nguyên', weight: '100g' },
      { name: 'Hạt điều rang muối vỏ lụa', origin: 'Bình Phước', weight: '150g' },
      { name: 'Mứt hạt sen trần truyền thống', origin: 'Huế', weight: '150g' },
      { name: 'Hạt dưa đỏ rang tay không phẩm màu', origin: 'Bình Thuận', weight: '150g' }
    ],
    packaging: 'Hộp nắp gập nơ đỏ son trang trọng kèm túi xách Wiix.',
    dimensions: '28 x 20 x 8 cm',
    suitableFor: 'Biếu tặng người thân, cán bộ công nhân viên, quà Tết số lượng lớn',
    artworkId: 'an-khang'
  },
  {
    id: 'long-phung-tri-ky-vip',
    name: 'Hộp Quà Long Phụng Tri Kỷ VIP',
    subtitle: 'Đẳng cấp dẫn đầu, vị thế hoàng gia trường tồn',
    price: 3600000,
    originalPrice: 3990000,
    badge: 'Đặc biệt',
    budgetCategory: 'above-2000',
    category: 'Quà Tết Đối Tác VIP',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Rượu Cognac VSOP danh tiếng, yến huyết tự nhiên, cao hồng sâm hoàng gia & đông trùng nguyên con.',
    fullDescription: 'Đỉnh cao của nghệ thuật tặng quà ngoại giao và tri ân cấp cao. Thiết kế hộp gỗ sơn mài truyền thống 7 lớp bóng bẩy, bên trong là những báu vật bổ dưỡng quý giá nhất thế giới.',
    items: [
      { name: 'Rượu Cognac Hennessy VSOP Privilège', origin: 'Cognac, Pháp', weight: '700ml' },
      { name: 'Tổ yến huyết đảo tự nhiên nguyên chất rút lông khô', origin: 'Vịnh Nha Trang', weight: '50g' },
      { name: 'Cao hồng sâm 6 năm tuổi Cheong Kwan Jang Hoàng Gia', origin: 'Chính Phủ Hàn Quốc', weight: '100g' },
      { name: 'Đông trùng hạ thảo nguyên con sấy thăng hoa nguyên sợi', origin: 'Tây Tạng', weight: '10g' },
      { name: 'Hộp gỗ đựng xì gà hoặc bộ dụng cụ thưởng thức mạ vàng', origin: 'Wiix Bespoke', weight: '1 bộ' }
    ],
    packaging: 'Rương gỗ sơn mài thủ công dát vàng lá 24k họa tiết Long Phụng, khóa đồng cẩn xà cừ, có chứng thư bảo hành chất lượng riêng biệt.',
    dimensions: '45 x 35 x 18 cm',
    suitableFor: 'Chính khách, Chủ tịch tập đoàn lớn, quà tặng ngoại giao tầm cỡ',
    artworkId: 'long-phung'
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'cat-hop-qua-cao-cap',
    title: 'Hộp Quà Tết Cao Cấp',
    subtitle: 'Thiết kế độc bản dập nổi dát vàng, bao bì tinh xảo định lượng cao',
    itemCount: 8,
    highlight: 'Từ 490.000đ',
    artworkId: 'an-khang',
    imageUrl: '/assets/aistudio/bo-qua-ca-chep-hoa-rong_bd765ead.jpg',
    targetBudget: 'Từ 490.000đ',
    features: ['Ép kim dát vàng 24K', 'Trà Shan Tuyết & Macca', 'Túi xách quai lụa'],
    filterTag: 'personal'
  },
  {
    id: 'cat-gio-qua-truyen-thong',
    title: 'Giỏ Quà Tết Truyền Thống',
    subtitle: 'Nét đẹp sum vầy, mây tre đan thủ công kết hợp bánh mứt & vang trứ danh',
    itemCount: 6,
    highlight: 'Từ 780.000đ',
    artworkId: 'sum-vay',
    imageUrl: '/assets/categories/cat_gio_truyen_thong.jpg',
    targetBudget: 'Từ 780.000đ',
    features: ['Mây tre đan thủ công', 'Vang sủi & Bánh quy Đan Mạch', 'Mứt sen trần & Trà tuyết'],
    filterTag: 'personal'
  },
  {
    id: 'cat-qua-tet-suc-khoe',
    title: 'Quà Tết Sức Khỏe',
    subtitle: 'Dược liệu hữu cơ thanh lọc, yến sào đảo thiên nhiên & đông trùng hạ thảo',
    itemCount: 6,
    highlight: 'Dưỡng Sinh Thanh Lọc',
    artworkId: 'duong-tam',
    imageUrl: '/assets/categories/cat_qua_suc_khoe.jpg',
    targetBudget: 'Từ 850.000đ',
    features: ['Yến sào đảo tự nhiên', 'Đông trùng hạ thảo & Hồng sâm', 'Mật ong rừng & Trà sen'],
    filterTag: 'personal'
  },
  {
    id: 'cat-qua-tet-doanh-nghiep',
    title: 'Quà Tết Doanh Nghiệp',
    subtitle: 'Đồng bộ nhận diện thương hiệu, chiết khấu lũy tiến tới 20% & xuất VAT 24h',
    itemCount: 10,
    highlight: 'In Logo Miễn Phí',
    artworkId: 'tinh-hoa',
    imageUrl: '/assets/categories/cat_qua_doanh_nghiep.jpg',
    targetBudget: 'Chiết khấu tới 20%',
    features: ['In ép kim logo công ty', 'Chiết khấu lũy tiến đến 20%', 'Xuất hóa đơn VAT trong 24h'],
    filterTag: 'corporate'
  },
  {
    id: 'cat-qua-tet-vip',
    title: 'Quà Tết Đối Tác VIP',
    subtitle: 'Vang ngoại danh tiếng, rương sơn mài dát vàng thượng phẩm ngoại giao',
    itemCount: 4,
    highlight: 'Bespoke Giới Hạn',
    artworkId: 'doi-tac-vip',
    imageUrl: '/assets/categories/cat_qua_doi_tac_vip.jpg',
    targetBudget: 'Từ 2.650.000đ',
    features: ['Vang Bordeaux & Cognac', 'Rương sơn mài khảm xà cừ', 'Thiết kế độc bản khắc tên VIP'],
    filterTag: 'corporate'
  },
  {
    id: 'cat-theo-ngan-sach',
    title: 'Quà Tết Theo Ngân Sách',
    subtitle: 'Linh hoạt mọi phân khúc ngân sách từ 350.000đ đến trên 3.500.000đ/set',
    itemCount: 16,
    highlight: 'Linh Hoạt Mọi Mức Giá',
    artworkId: 'phu-quy',
    imageUrl: '/assets/categories/cat_qua_theo_ngan_sach.jpg',
    targetBudget: '350.000đ — 3.500.000đ',
    features: ['4 Phân khúc định mức', 'Tối ưu ngân sách phúc lợi', 'Giao hàng đa điểm toàn quốc'],
    filterTag: 'corporate'
  }
];

export const BENEFITS = [
  {
    icon: 'gift',
    title: 'Mẫu Mã Sang Trọng',
    tag: 'Bao bì độc bản',
    highlight: 'Ép Kim 3D Tinh Xảo',
    description: 'Thiết kế bao bì độc bản theo phong cách tối giản, giấy mỹ thuật dập nổi & ép kim cao cấp.',
    subBenefit: 'Túi xách & phong bao lì xì đồng bộ'
  },
  {
    icon: 'shield-check',
    title: 'Cam Kết Chất Lượng',
    tag: 'Chuẩn nguồn gốc',
    highlight: '100% Nông Sản OCOP',
    description: '100% nông sản OCOP, hạt hữu cơ và vang nhập khẩu có tem phụ, giấy kiểm định an toàn thực phẩm.',
    subBenefit: 'Đầy đủ chứng nhận VSATTP'
  },
  {
    icon: 'truck',
    title: 'Giao Quà Đúng Hẹn',
    tag: 'Vận chuyển chuyên nghiệp',
    highlight: 'Bảo Hiểm 100% Đơn Hàng',
    description: 'Bảo hiểm hàng hóa toàn diện, giao hỏa tốc nội thành và điều phối vận chuyển toàn quốc an toàn.',
    subBenefit: 'Hỗ trợ giao đa điểm theo danh sách'
  },
  {
    icon: 'headphones',
    title: 'Tư Vấn Tận Tâm',
    tag: 'Dịch vụ chu đáo',
    highlight: 'Hỗ Trợ VAT Trong 24H',
    description: 'Đội ngũ chuyên viên hỗ trợ lựa chọn set quà phù hợp ngân sách, hỗ trợ xuất hóa đơn VAT trong ngày.',
    subBenefit: 'Tư vấn giải pháp B2B & cá nhân 24/7'
  }
];

export const BUDGET_SEGMENTS = [
  { id: 'all', label: 'Tất cả ngân sách', range: 'Mọi mức giá' },
  { id: 'under-500', label: 'Dưới 500.000đ', range: 'Từ 350k – 499k' },
  { id: '500-1000', label: '500.000đ – 1.000.000đ', range: 'Phân khúc thịnh hành' },
  { id: '1000-2000', label: '1.000.000đ – 2.000.000đ', range: 'Quà biếu cao cấp' },
  { id: 'above-2000', label: 'Trên 2.000.000đ', range: 'Kiệt tác thượng hạng' }
];

export const CORPORATE_PERKS = [
  { title: 'Tư vấn giải pháp theo ngân sách', desc: 'Linh hoạt thiết kế set quà theo định mức từ 300.000đ/phần trở lên.' },
  { title: 'In ép kim logo công ty miễn phí', desc: 'Tặng kèm khuôn ép kim nhũ vàng/bạc trên nắp hộp với đơn hàng từ 30 set.' },
  { title: 'Hỗ trợ thiết kế thiệp chúc Tết riêng', desc: 'Thiết kế thiệp mang đậm văn hóa và lời tri ân của ban lãnh đạo doanh nghiệp.' },
  { title: 'Xuất hóa đơn GTGT (VAT) hợp lệ', desc: 'Cung cấp đầy đủ hợp đồng kinh tế, biên bản giao nhận và hóa đơn điện tử trong 24h.' },
  { title: 'Giao hàng tận nơi theo danh sách', desc: 'Hỗ trợ phân bổ đơn hàng giao trực tiếp đến từng chi nhánh hoặc địa chỉ người nhận.' }
];

export const DISCOUNT_TIERS = [
  { quantity: 'Từ 20 – 49 hộp', discount: 'Chiết khấu 5%', tag: 'Gói Tiêu Chuẩn' },
  { quantity: 'Từ 50 – 99 hộp', discount: 'Chiết khấu 10%', tag: 'Gói Phổ Biến' },
  { quantity: 'Từ 100 – 299 hộp', discount: 'Chiết khấu 15%', tag: 'Gói Doanh Nghiệp' },
  { quantity: 'Từ 300 hộp trở lên', discount: 'Chiết khấu tới 20%+', tag: 'Gói Đối Tác Lớn' }
];

export const WHY_CHOOSE_US = [
  {
    step: '01',
    title: 'Tuyển Chọn Sản Phẩm Minh Bạch',
    description: 'Từng hũ hạt, búp trà và chai vang đều được Wiix kiểm định khắt khe từ nhà sản xuất uy tín. Không pha trộn hàng trôi nổi, thành phần và xuất xứ được in rõ ràng trên bao bì.'
  },
  {
    step: '02',
    title: 'Thiết Kế Độc Bản Tinh Tế',
    description: 'Nói không với các mẫu hộp đại trà sặc sỡ. Wiix ứng dụng ngôn ngữ thiết kế tối giản, bảng màu nhã nhặn phối hợp các hoa văn văn hóa Việt để món quà toát lên khí chất quý phái.'
  },
  {
    step: '03',
    title: 'Linh Hoạt Ngân Sách Cá Nhân & B2B',
    description: 'Từ mức giá 490k đến các bộ quà hoàng gia tiền triệu, quý khách luôn tìm được giải pháp xứng tầm với ngân sách đã định sẵn mà không phải băn khoăn về chất lượng đóng gói.'
  },
  {
    step: '04',
    title: 'Dịch Vụ Chu Đáo & Cam Kết Đúng Hẹn',
    description: 'Wiix xây dựng quy trình đóng gói thủ công chuẩn 6 bước và hệ thống vận tải chuyên nghiệp, đảm bảo hàng ngàn set quà đến tay khách hàng trước Tết nguyên vẹn, chỉn chu.'
  }
];

export const ORDER_TIMELINE = [
  {
    step: '01',
    title: 'Chọn Quà & Nhận Tư Vấn',
    desc: 'Lựa chọn bộ sưu tập trên website hoặc gửi yêu cầu để chuyên viên Wiix tư vấn mẫu hộp và ngân sách tối ưu.'
  },
  {
    step: '02',
    title: 'Xác Nhận & Duyệt Thiết Kế',
    desc: 'Doanh nghiệp chốt số lượng, duyệt maquette in logo, thiệp chúc Tết và ký kết hợp đồng xuất hóa đơn VAT.'
  },
  {
    step: '03',
    title: 'Đóng Gói Thủ Công Chỉn Chu',
    desc: 'Từng set quà được gia công tỉ mỉ, kiểm tra niêm phong kỹ càng và bọc đệm khí chống sốc tiêu chuẩn quà biếu.'
  },
  {
    step: '04',
    title: 'Giao Quà Đúng Hẹn Toàn Quốc',
    desc: 'Vận chuyển an toàn tới văn phòng doanh nghiệp hoặc giao trực tiếp từng địa chỉ người nhận theo tiến độ cam kết.'
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Nguyễn Thanh Tùng',
    role: 'Giám đốc Nhân sự & Vận hành',
    company: 'Công ty Cổ phần Vận tải & Logistics V-Ship',
    quote: 'Mùa Tết năm ngoái công ty tôi đặt 250 set Hộp Quà Thịnh Vượng từ Wiix. Mẫu mã bao bì màu Navy viền đỏ rất sang, nhân viên và đối tác đều khen ngợi nồng nhiệt. Giao hàng chuẩn từng hộp, xuất hóa đơn VAT nhanh chóng.',
    orderSize: '250 set quà',
    giftBox: 'Hộp Quà Thịnh Vượng',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Phan Thị Mai Lan',
    role: 'Trưởng phòng Mua hàng (Procurement)',
    company: 'Tập đoàn Bất động sản Hoàng Gia',
    quote: 'Điều tôi đánh giá cao nhất ở Wiix là sự trung thực trong thành phần. Hạt macca và hạnh nhân rất giòn béo, vang nhập khẩu nguyên chai, không độn mứt ngọt rẻ tiền như các giỏ quà mua ngoài phố.',
    orderSize: '120 set VIP',
    giftBox: 'Đối Tác Hoàng Kim VIP',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Trần Đình Khang',
    role: 'Khách hàng cá nhân',
    company: 'Biếu tặng gia đình & Đối tác',
    quote: 'Tôi mua 4 hộp Phú Quý để biếu bố mẹ hai bên và cấp trên. Hộp quà mở ra rất thơm mùi trà Shan Tuyết, thiệp chúc viết tay nắn nót. Bố mẹ tôi rất quý vì vừa sang trọng vừa dùng được hằng ngày.',
    orderSize: '4 set biếu tặng',
    giftBox: 'Hộp Quà Phú Quý',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Wiix Việt Nam có những phân khúc giá quà Tết nào?',
    answer: 'Wiix cung cấp dải sản phẩm hoàn chỉnh từ 490.000đ đến hơn 3.600.000đ, chia thành 4 nấc ngân sách rõ ràng: dưới 500k, 500k – 1 triệu, 1 triệu – 2 triệu và dòng thượng hạng VIP trên 2 triệu. Doanh nghiệp cũng có thể đặt tùy biến thành phần theo định mức ngân sách riêng.'
  },
  {
    id: 'faq-2',
    question: 'Doanh nghiệp có thể thay đổi hoặc tùy chọn thành phần trong hộp quà không?',
    answer: 'Hoàn toàn được! Đối với các đơn hàng doanh nghiệp từ 30 set trở lên, Wiix hỗ trợ linh hoạt hoán đổi thành phần (thay loại rượu, nâng hạng hạt dinh dưỡng, bổ sung tổ yến hoặc trà cổ thụ) để phù hợp chính xác với văn hóa và sở thích người nhận.'
  },
  {
    id: 'faq-3',
    question: 'Điều kiện để được miễn phí in logo doanh nghiệp lên hộp quà là gì?',
    answer: 'Wiix miễn phí hoàn toàn chi phí làm khuôn đồng và ép kim logo nhũ vàng/bạc trên bề mặt hộp cho đơn hàng từ 30 set quà trở lên. Ngoài ra, chúng tôi hỗ trợ thiết kế thiệp chúc Tết mang thương hiệu riêng của quý công ty.'
  },
  {
    id: 'faq-4',
    question: 'Thời gian sản xuất và tiến độ giao hàng cho đơn hàng lớn mất bao lâu?',
    answer: 'Với các đơn hàng từ 30 – 100 hộp có in logo, thời gian hoàn thiện trung bình từ 3 – 5 ngày làm việc. Đơn hàng từ 300 hộp trở lên cần 7 – 10 ngày. Chúng tôi khuyến khích quý khách chốt đơn trước 20 tháng Chạp để đảm bảo tiến độ điều phối xe tốt nhất.'
  },
  {
    id: 'faq-5',
    question: 'Wiix có hỗ trợ phân loại và giao quà tới nhiều địa chỉ khác nhau không?',
    answer: 'Có. Chúng tôi sở hữu đội ngũ điều phối riêng hỗ trợ nhận danh sách người nhận qua file Excel, dán mã barcode từng người nhận, đóng thùng chống sốc và gửi hàng tận tay đối tác tại khắp 63 tỉnh thành kèm tin nhắn thông báo tiến độ.'
  },
  {
    id: 'faq-6',
    question: 'Chính sách xuất hóa đơn GTGT (VAT) và bảo hành đổi trả ra sao?',
    answer: '100% sản phẩm tại Wiix được xuất hóa đơn VAT điện tử hợp lệ theo đúng quy định nhà nước. Trong trường hợp hộp quà bị móp méo trong quá trình vận chuyển hoặc không đúng quy cách cam kết, Wiix đổi mới 1-đổi-1 ngay lập tức trong vòng 24 giờ.'
  }
];
