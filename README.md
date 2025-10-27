# 🛒 E-Ticaret Projesi | E-Commerce Project

Modern ve kullanıcı dostu bir e-ticaret uygulaması. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

A modern and user-friendly e-commerce application. Developed using Next.js, TypeScript, and Tailwind CSS.

---

## 📅 Proje Güncellemeleri | Project Updates

### 27 Ekim 2025 | October 27, 2025

#### ✨ Eklenen Özellikler | Added Features

**🛒 Sepet Sistemi (Cart System)**

🇹🇷
- Context API ile global sepet yönetimi (CartContext)
- localStorage entegrasyonu - sepet verileri tarayıcıda saklanıyor
- Sepete ürün ekleme fonksiyonu
- Sepetten ürün silme fonksiyonu
- Tüm sepeti temizleme özelliği
- Sepetteki ürün miktarını artırma/azaltma
- React Hot Toast ile bildirim sistemi
- Sepet sayfası oluşturuldu

🇬🇧
- Global cart management with Context API (CartContext)
- localStorage integration - cart data persists in browser
- Add product to cart function
- Remove product from cart function
- Clear entire cart feature
- Increase/decrease product quantity in cart
- Notification system with React Hot Toast
- Cart page created

---

**🎯 Sepet Sayfası Özellikleri | Cart Page Features**

🇹🇷
- Responsive tablo tasarımı (5 sütun: Resim, Ad, Miktar, Fiyat, Sil)
- Ürün görselleri (100x100px)
- Her ürün için Counter bileşeni ile miktar kontrolü
- Ürün silme butonu
- Toplam sepet tutarı hesaplama
- "Sepeti Sil" butonu
- Boş sepet kontrolü ve mesajı
- Özel tasarlanmış amber temalı başlık satırı

🇬🇧
- Responsive table design (5 columns: Image, Name, Quantity, Price, Delete)
- Product images (100x100px)
- Counter component for quantity control per product
- Delete product button
- Total cart amount calculation
- "Clear Cart" button
- Empty cart check and message
- Custom designed amber-themed header row

---

**🎨 Navbar Güncellemeleri | Navbar Updates**

🇹🇷
- Sepet ikonu eklendi (MdShoppingBasket)
- Sepetteki ürün sayısı badge'i (turuncu rozetli)
- Arama çubuğu tasarımı tamamlandı (amber border, rounded)
- "Ara" butonu eklendi

🇬🇧
- Cart icon added (MdShoppingBasket)
- Cart items count badge (orange badge)
- Search bar design completed (amber border, rounded)
- "Search" button added

---

**⚙️ Context & Provider Yapısı | Context & Provider Structure**

🇹🇷
- CartContext oluşturuldu
- CartContextProvider ile global state yönetimi
- useCart custom hook'u
- CartProvider wrapper component
- Layout.tsx'e provider entegrasyonu

🇬🇧
- CartContext created
- Global state management with CartContextProvider
- useCart custom hook
- CartProvider wrapper component
- Provider integration to Layout.tsx

---

**🔧 Sepet Fonksiyonları | Cart Functions**

🇹🇷
- `addToBasket`: Sepete ürün ekleme
- `removeFromCart`: Sepetten ürün silme
- `removeCart`: Tüm sepeti temizleme
- `addToBasketIncrease`: Sepetteki ürün miktarını artırma (max 10)
- `addToBasketDecrease`: Sepetteki ürün miktarını azaltma (min 1)
- localStorage senkronizasyonu

🇬🇧
- `addToBasket`: Add product to cart
- `removeFromCart`: Remove product from cart
- `removeCart`: Clear entire cart
- `addToBasketIncrease`: Increase product quantity in cart (max 10)
- `addToBasketDecrease`: Decrease product quantity in cart (min 1)
- localStorage synchronization

---

**📱 Detay Sayfası Güncellemeleri | Detail Page Updates**

🇹🇷
- "Sepete Ekle" butonu fonksiyonel hale getirildi
- Sepette olan ürünler için "Sepete Ekli" butonu gösterimi
- useEffect ile sepet kontrolü
- displayButton state'i ile dinamik buton gösterimi
- Ürün zaten sepetteyse Counter ve Sepete Ekle butonu gizleniyor

🇬🇧
- "Add to Cart" button made functional
- "Added to Cart" button display for products in cart
- Cart check with useEffect
- Dynamic button display with displayButton state
- Counter and Add to Cart button hidden if product already in cart

---

**🎨 UI İyileştirmeleri | UI Improvements**

🇹🇷
- Sepet sayfası için özel tablo tasarımı (amber temalı, shadow, border)
- Toast bildirimleri için sağ üst pozisyon
- Responsive grid düzeni (her sütun w-1/5)
- Flex-grow ile dinamik sayfa yüksekliği (min-h-screen)
- Turuncu tema renkleri güncellendi

🇬🇧
- Custom table design for cart page (amber themed, shadow, border)
- Top-right position for toast notifications
- Responsive grid layout (each column w-1/5)
- Dynamic page height with flex-grow (min-h-screen)
- Orange theme colors updated

---

#### 🔧 Teknik Değişikler | Technical Changes

🇹🇷
- React Hot Toast kütüphanesi eklendi
- Context API implementasyonu
- localStorage kullanımı
- useCallback ile performans optimizasyonu
- TypeScript interface'leri (CartContextProps)
- Custom hook pattern (useCart)
- Provider pattern implementasyonu

🇬🇧
- React Hot Toast library added
- Context API implementation
- localStorage usage
- Performance optimization with useCallback
- TypeScript interfaces (CartContextProps)
- Custom hook pattern (useCart)
- Provider pattern implementation

---

## 🚀 Teknolojiler | Technologies

- **Next.js 14+** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Material-UI** - Rating Component
- **React Icons** - Icon Library
- **React Hot Toast** - Notification System

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

🇹🇷 Proje halen geliştirilme aşamasındadır. Her gün yeni özellikler eklenmektedir. Sepet sistemi ve temel e-ticaret yapısı tamamlanmış olup, backend entegrasyonu yakında eklenecektir.

🇬🇧 The project is still under development. New features are being added every day. Cart system and basic e-commerce structure have been completed, and backend integration will be added soon.

---

**Son Güncelleme | Last Update**: 27 Ekim 2025 | October 27, 2025