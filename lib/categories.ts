export interface Category {
  value: string;
  Elabel: string;
  label: string;
}

export const options: Category[] = [
  {
    value: "GUIDANCE",
    label: "Hướng dẫn nghề nghiệp",
    Elabel: "Career Guidance",
  },
  { value: "ACTING", label: "Diễn viên", Elabel: "Acting" },
  { value: "AGED_CARE", label: "Chăm sóc người già", Elabel: "AgedCare" },
  {
    value: "AGRIBUSINESS_MANAGEMENT",
    label: "Quản lý nông nghiệp",
    Elabel: "Agribusiness Management",
  },
  { value: "AI", label: "Trí tuệ nhân tạo", Elabel: "Artificial Intelligence" },
  { value: "ANIMATION_3D", label: "Hoạt hình & 3D", Elabel: "Animation 3D" },
  { value: "AUTOMOTIVE", label: "Máy móc", Elabel: "Automotive" },
  { value: "BAKING", label: "Bếp bánh", Elabel: "Baking" },
  {
    value: "BANKING_MANAGEMENT",
    label: "Ngân hàng",
    Elabel: "Banking Management",
  },
  { value: "BEAUTY", label: "Làm đẹp", Elabel: "Beauty" },
  {
    value: "BLOCKCHAIN_TECH",
    label: "Công nghệ tiền ảo",
    Elabel: "Blockchain Tech",
  },
  { value: "BLOG", label: "Blog", Elabel: "Blog" },
  {
    value: "BUSINESS_ANALYSIS",
    label: "Phân tích kinh doanh",
    Elabel: "Business Analysis",
  },
  {
    value: "BUSINESS_MANAGEMENT",
    label: "Quản trị kinh doanh",
    Elabel: "Business Management",
  },
  { value: "CARPENTRY", label: "Mộc", Elabel: "Carpentry" },
  {
    value: "CLOUD_COMPUTING",
    label: "Điện toán đám mây",
    Elabel: "Cloud_Computing",
  },
  { value: "COMMERCIAL_COOKING", label: "Bếp", Elabel: "Commercial Cooking" },
  {
    value: "COMPUTER_NETWORKING",
    label: "Mạng máy tính",
    Elabel: "Computer Networking",
  },
  {
    value: "CONSTRUCTION",
    label: "Công trình xây dựng",
    Elabel: "Construction",
  },
  {
    value: "DATA_MANAGEMENT",
    label: "Quản lý dữ liệu",
    Elabel: "Data Management",
  },
  { value: "DENTAL", label: "Nha khoa", Elabel: "Dental" },
  { value: "DESIGN", label: "Thiết kế", Elabel: "Design" },
  {
    value: "DIGITAL_MEDIA",
    label: "Truyền thông kỹ thuật số",
    Elabel: "Digital Media",
  },
  { value: "EDUCATION", label: "Giáo dục", Elabel: "Education" },
  { value: "EVENTS", label: "Sự kiện", Elabel: "Events" },
  {
    value: "FASHION_DESIGN",
    label: "Thiết kế thời trang",
    Elabel: "Fashion Design",
  },
  { value: "FILM_MEDIA", label: "Phim & Truyền thông", Elabel: "Film Media" },
  { value: "FITNESS", label: "Thể thao", Elabel: "Fitness" },
  {
    value: "GAME_PROGRAMMING",
    label: "Lập trình trò chơi",
    Elabel: "Game Programming",
  },
  {
    value: "GRAPHIC_DESIGN",
    label: "Thiết kế đồ họa",
    Elabel: "Graphic Design",
  },
  { value: "HARIDRESSING", label: "Làm tóc", Elabel: "Haridressing" },
  { value: "HEALTH", label: "Sức khỏe", Elabel: "Health" },
  {
    value: "HOPITALITY_MANAGEMENT",
    label: "Quản lý nhà hàng khách sạn",
    Elabel: "Hopitality Management",
  },
  { value: "HORTICULTURE", label: "Làm vườn", Elabel: "Horticulture" },
  { value: "HOSPITALITY", label: "Nhà hàng khách sạn", Elabel: "Hospitality" },
  {
    value: "HUMAN_RESOURCES",
    label: "Quản lý nhân sự",
    Elabel: "Human Resources",
  },
  {
    value: "INTERIOR_DESIGN",
    label: "Thiết kế nội thất",
    Elabel: "Interior Design",
  },
  {
    value: "INTERNATIONAL_BUSINESS",
    label: "Kinh doanh quốc tế",
    Elabel: "International Business",
  },
  {
    value: "INTL_HOTEL_MANAGEMENT",
    label: "Quản lý khách sạn quốc tế",
    Elabel: "Intl Hotel Management",
  },
  {
    value: "IT",
    label: "Công nghệ thông tin",
    Elabel: "Information Technology",
  },
  { value: "LANDSCAPE", label: "Kiến trúc môi trường", Elabel: "Landscape" },
  {
    value: "LEADERSHIP_MANAGEMENT",
    label: "Lãnh đạo & Quản lý",
    Elabel: "Leadership Management",
  },
  {
    value: "MACHINE_LEARNING",
    label: "Phương tiện máy móc",
    Elabel: "Machine Learning",
  },
  { value: "MASSAGE", label: "Massage", Elabel: "Massage" },
  { value: "MANAGEMENT", label: "Quản lý", Elabel: "Management" },
  { value: "MEDICINE", label: "Dược sĩ", Elabel: "Medicine" },
  { value: "MENTAL_HEALTH", label: "Tâm lý học", Elabel: "Mental Health" },
  { value: "MUSIC_AUDIO", label: "Âm nhạc & Âm thanh", Elabel: "Music Audio" },
  { value: "NURSING", label: "Y tá", Elabel: "Nursing" },
  { value: "NUTRITION", label: "Dinh dưỡng", Elabel: "Nutrition" },
  {
    value: "PROJECT_MANAGEMENT",
    label: "Quản lý dự án",
    Elabel: "Project Management",
  },
  {
    value: "PUBLIC_HEALTH",
    label: "Sức khỏe cộng đồng",
    Elabel: "Public Health",
  },
  {
    value: "SOCIALMEDIA_MARKETING",
    label: "Truyền thông xã hội & Tiếp thị",
    Elabel: "Socialmedia Marketing",
  },
  {
    value: "SOFTWARE_DEVELOPMENT",
    label: "Phát triển phần mềm",
    Elabel: "Software Development",
  },
  { value: "SPORT", label: "Giáo dục thể chất", Elabel: "Sport" },
  {
    value: "SUPPLYCHAIN_MANAGEMENT",
    label: "Quản lý chuỗi cung ứng",
    Elabel: "Supplychain Management",
  },
  {
    value: "TELECOMMUNICATION",
    label: "Viễn thông",
    Elabel: "Telecommunication",
  },
  {
    value: "TRAVEL_TOURISM",
    label: "Du lịch lữ hành",
    Elabel: "Travel & Tourism",
  },
  { value: "TRADES", label: "Thương mại & Thể thao", Elabel: "Trades" },
  { value: "VETENARY", label: "Thú ý", Elabel: "Veterinary" },
  {
    value: "WEB_DEVELOPMENT",
    label: "Phát triển Website",
    Elabel: "Web Development",
  },
  { value: "YOGA", label: "Yoga", Elabel: "Yoga" },
];
