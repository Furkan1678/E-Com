# 🛒 E-Ticaret Projesi | E-Commerce Project

Modern ve kullanıcı dostu bir e-ticaret uygulaması. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

A modern and user-friendly e-commerce application. Developed using Next.js, TypeScript, and Tailwind CSS.

---

## 📅 Proje Güncellemeleri | Project Updates

### 26 Ekim 2025 | October 26, 2025

#### ✨ Eklenen Özellikler | Added Features

**🏠 Ana Sayfa Yapısı | Homepage Structure**

🇹🇷 
- Banner bileşeni ile görsel çekicilik sağlandı
- Kategori navigasyonu eklendi (8 kategori ile responsive tasarım)
- Ürün kartları için grid düzeni oluşturuldu
- Tüm ürünler listesi dinamik olarak görüntüleniyor

🇬🇧
- Banner component for visual appeal
- Category navigation added (responsive design with 8 categories)
- Grid layout created for product cards
- All products list displayed dynamically

---

**🎨 Navbar Bileşeni | Navbar Component**

🇹🇷
- Logo tasarımı (Burada.com)
- Arama çubuğu (desktop için)
- Sepet sayacı placeholder'ı
- Kullanıcı profili alanı
- Mobil hamburger menü
- Responsive tasarım (mobil ve desktop uyumlu)

🇬🇧
- Logo design (Burada.com)
- Search bar (for desktop)
- Cart counter placeholder
- User profile area
- Mobile hamburger menu
- Responsive design (mobile and desktop compatible)

---

**📦 Ürün Kartı Özellikleri | Product Card Features**

🇹🇷
- Ürün görseli (240x250px boyutunda)
- Ürün adı (20 karakterden uzunsa kısaltma)
- Yıldız değerlendirme sistemi (Material-UI Rating)
- Fiyat gösterimi (TL formatında)
- Tıklanabilir kart yapısı (detay sayfasına yönlendirme)
- Dinamik rating hesaplama (ürün yorumlarına göre)

🇬🇧
- Product image (240x250px size)
- Product name (truncated if longer than 20 characters)
- Star rating system (Material-UI Rating)
- Price display (in TL format)
- Clickable card structure (redirects to detail page)
- Dynamic rating calculation (based on product reviews)

---

**🔍 Ürün Detay Sayfası | Product Detail Page**

🇹🇷
- Büyük ürün görseli (200x200 mobil, 400x400 desktop)
- Ürün bilgileri (isim, açıklama, fiyat)
- Stok durumu göstergesi (yeşil/kırmızı)
- Yıldız değerlendirme gösterimi
- Miktar artırma/azaltma sayacı (1-10 arası)
- "Sepete Ekle" butonu
- Yorumlar bölümü (kullanıcı avatarı ve yorumları ile)

🇬🇧
- Large product image (200x200 mobile, 400x400 desktop)
- Product information (name, description, price)
- Stock status indicator (green/red)
- Star rating display
- Quantity increase/decrease counter (between 1-10)
- "Add to Cart" button
- Reviews section (with user avatar and comments)

---

**🧩 Genel Bileşenler | General Components**

🇹🇷
- **Button**: Özelleştirilebilir buton (small, outline varyantları)
- **Counter**: Ürün miktarı kontrolü (+/- butonları)
- **Heading**: Sayfa başlıkları için reusable bileşen
- **Avatar**: Kullanıcı profil resmi gösterimi
- **Comment**: Yorum kartı (kullanıcı bilgisi ve yorum metni)
- **PageContainer**: Responsive padding wrapper

🇬🇧
- **Button**: Customizable button (small, outline variants)
- **Counter**: Product quantity control (+/- buttons)
- **Heading**: Reusable component for page titles
- **Avatar**: User profile picture display
- **Comment**: Comment card (user info and comment text)
- **PageContainer**: Responsive padding wrapper

---

**📱 Footer**

🇹🇷
- Basit footer yapısı (turuncu arkaplan)
- Responsive yükseklik ayarı

🇬🇧
- Simple footer structure (orange background)
- Responsive height adjustment

---

#### 🔧 Teknik Altyapı | Technical Infrastructure

**Veri Yönetimi | Data Management**

🇹🇷
- 5 ürün verisi (iPhone 14, Logitech MX, iPhone 12, Logitech MX Master, Smart Watch)
- Her ürün için reviews array'i
- Ürün özellikleri: id, name, description, price, brand, category, inStock, image

🇬🇧
- 5 product data (iPhone 14, Logitech MX, iPhone 12, Logitech MX Master, Smart Watch)
- Reviews array for each product
- Product properties: id, name, description, price, brand, category, inStock, image

---

**Yardımcı Fonksiyonlar | Helper Functions**

🇹🇷
- `textClip`: Uzun metinleri kısaltma (20 karakterden sonra "..." ekleme)

🇬🇧
- `textClip`: Truncate long texts (adds "..." after 20 characters)

---

**State Yönetimi | State Management**

🇹🇷
- `useState` ile ürün miktarı kontrolü
- Sepet ürünü için CardProductProps interface'i

🇬🇧
- Product quantity control with `useState`
- CardProductProps interface for cart products

---

**Routing**

🇹🇷
- Dynamic routing: `/product/[productId]`
- useRouter ile programmatik navigasyon

🇬🇧
- Dynamic routing: `/product/[productId]`
- Programmatic navigation with useRouter

---

#### 🎯 UI/UX İyileştirmeleri | UI/UX Improvements

🇹🇷
- Responsive tasarım (mobil ve desktop uyumlu)
- Tailwind CSS ile modern stil
- Material-UI Rating bileşeni entegrasyonu
- React Icons kullanımı (RxAvatar, RxHamburgerMenu)
- Next.js Image optimizasyonu
- Hover ve click etkileşimleri
- Overflow-x-auto ile yatay scroll

🇬🇧
- Responsive design (mobile and desktop compatible)
- Modern styling with Tailwind CSS
- Material-UI Rating component integration
- React Icons usage (RxAvatar, RxHamburgerMenu)
- Next.js Image optimization
- Hover and click interactions
- Horizontal scroll with overflow-x-auto

---

#### 🔄 Yapılacaklar | To-Do List

⚠️ **Not | Note**: 

🇹🇷 Bu bir eğitim projesidir ve aşağıdaki özellikler henüz eklenmemiştir:

🇬🇧 This is an educational project and the following features have not been implemented yet:

- 🇹🇷 Gerçek arama fonksiyonalitesi | 🇬🇧 Real search functionality
- 🇹🇷 Sepet işlevselliği (sepete ekleme, görüntüleme) | 🇬🇧 Cart functionality (add to cart, view)
- 🇹🇷 Kullanıcı giriş/kayıt sistemi | 🇬🇧 User login/registration system
- 🇹🇷 Kategori filtreleme | 🇬🇧 Category filtering
- 🇹🇷 Ürün sepete ekleme API entegrasyonu | 🇬🇧 Add to cart API integration
- 🇹🇷 Footer içerik geliştirme | 🇬🇧 Footer content development
- 🇹🇷 Backend entegrasyonu | 🇬🇧 Backend integration

---

## 🚀 Teknolojiler | Technologies

- **Next.js 14+** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Material-UI** - Rating Component
- **React Icons** - Icon Library

---

## 📦 Kurulum | Installation

```bash
# Bağımlılıkları yükle | Install dependencies
npm install

# Geliştirme sunucusunu başlat | Start development server
npm run dev
```

---

## 📝 Notlar | Notes

🇹🇷 Proje halen geliştirilme aşamasındadır. Her gün yeni özellikler eklenmektedir. Temel e-ticaret yapısı kurulmuş olup, backend entegrasyonu ve sepet işlevselliği yakında eklenecektir.

🇬🇧 The project is still under development. New features are being added every day. The basic e-commerce structure has been established, and backend integration and cart functionality will be added soon.

---

**Son Güncelleme | Last Update**: 26 Ekim 2025 | October 26, 2025