# 🛒 E-Ticaret Projesi | E-Commerce Project

Modern ve kullanıcı dostu bir e-ticaret uygulaması. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

A modern and user-friendly e-commerce application. Developed using Next.js, TypeScript, and Tailwind CSS.

---

## 📅 Proje Güncellemeleri | Project Updates

### 28 Ekim 2025 | October 28, 2025

#### ✨ Eklenen Özellikler | Added Features

**🔐 Kimlik Doğrulama Sistemi (Authentication System)**

🇹🇷
- NextAuth.js entegrasyonu
- Google OAuth ile giriş desteği
- Credentials Provider ile email/şifre girişi
- Kayıt olma (Register) sayfası
- Giriş yapma (Login) sayfası
- JWT tabanlı session yönetimi
- Şifre hashleme (bcrypt)

🇬🇧
- NextAuth.js integration
- Google OAuth login support
- Email/password login with Credentials Provider
- Register page
- Login page
- JWT-based session management
- Password hashing (bcrypt)

---

**💾 MongoDB & Prisma Entegrasyonu | MongoDB & Prisma Integration**

🇹🇷
- MongoDB Atlas veritabanı bağlantısı
- Prisma ORM kurulumu
- User modeli (id, name, email, hashedPassword, role)
- Product modeli (id, name, description, price, brand, category, inStock, image)
- Review modeli (userId, productId, rating, comment)
- Account modeli (NextAuth için)
- Role enum (USER, ADMIN)
- İlişkisel veritabanı yapısı

🇬🇧
- MongoDB Atlas database connection
- Prisma ORM setup
- User model (id, name, email, hashedPassword, role)
- Product model (id, name, description, price, brand, category, inStock, image)
- Review model (userId, productId, rating, comment)
- Account model (for NextAuth)
- Role enum (USER, ADMIN)
- Relational database structure

---

**📝 Kayıt & Giriş Sayfaları | Register & Login Pages**

🇹🇷
- React Hook Form ile form yönetimi
- Input validasyonu (required fields)
- Email ve şifre input alanları
- "Google ile Giriş Yap/Üye Ol" butonları
- Sayfa geçişleri için Link'ler
- AuthContainer wrapper bileşeni
- Başarılı/başarısız işlem bildirimleri (toast)
- Otomatik yönlendirme (başarılı girişten sonra /cart)

🇬🇧
- Form management with React Hook Form
- Input validation (required fields)
- Email and password input fields
- "Sign in/up with Google" buttons
- Links for page transitions
- AuthContainer wrapper component
- Success/error notifications (toast)
- Auto redirect (to /cart after successful login)

---

**🔧 API Routes**

🇹🇷
- `/api/auth/[...nextauth]` - NextAuth API route
- `/api/register` - Kullanıcı kayıt endpoint'i
- POST request ile yeni kullanıcı oluşturma
- Şifre hashleme (bcrypt, 10 salt rounds)
- Prisma ile veritabanı işlemleri

🇬🇧
- `/api/auth/[...nextauth]` - NextAuth API route
- `/api/register` - User registration endpoint
- Create new user with POST request
- Password hashing (bcrypt, 10 salt rounds)
- Database operations with Prisma

---

**🎨 Yeni Bileşenler | New Components**

🇹🇷
- **LoginClient**: Giriş yapma formu
- **RegisterClient**: Kayıt olma formu
- **Input**: Reusable input bileşeni (register, errors, required props)
- **AuthContainer**: Auth sayfaları için container
- **Button Güncelleme**: Icon desteği eklendi (FaGoogle)

🇬🇧
- **LoginClient**: Login form component
- **RegisterClient**: Register form component
- **Input**: Reusable input component (register, errors, required props)
- **AuthContainer**: Container for auth pages
- **Button Update**: Icon support added (FaGoogle)

---

#### 🔧 Teknik Altyapı | Technical Infrastructure

**Backend & Database**

🇹🇷
- Prisma Client global instance
- PrismaAdapter ile NextAuth entegrasyonu
- bcrypt ile şifre güvenliği
- MongoDB ObjectId kullanımı
- Cascade delete ilişkileri
- Environment variables (.env)

🇬🇧
- Prisma Client global instance
- NextAuth integration with PrismaAdapter
- Password security with bcrypt
- MongoDB ObjectId usage
- Cascade delete relations
- Environment variables (.env)

---

**Authentication Flow**

🇹🇷
- Kullanıcı kayıt → şifre hashleme → veritabanına kaydet
- Otomatik giriş (kayıt sonrası)
- Şifre doğrulama (bcrypt.compare)
- JWT token oluşturma
- Session yönetimi
- Error handling (geçersiz email/şifre)

🇬🇧
- User registration → password hashing → save to database
- Auto login (after registration)
- Password verification (bcrypt.compare)
- JWT token generation
- Session management
- Error handling (invalid email/password)

---

**Dependencies**

🇹🇷
- `next-auth` - Authentication
- `@prisma/client` - Database ORM
- `@next-auth/prisma-adapter` - Prisma adapter
- `bcrypt` - Password hashing
- `react-hook-form` - Form management
- `axios` - HTTP client

🇬🇧
- `next-auth` - Authentication
- `@prisma/client` - Database ORM
- `@next-auth/prisma-adapter` - Prisma adapter
- `bcrypt` - Password hashing
- `react-hook-form` - Form management
- `axios` - HTTP client

---

## 🚀 Teknolojiler | Technologies

- **Next.js 14+** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Material-UI** - Rating Component
- **React Icons** - Icon Library
- **React Hot Toast** - Notification System
- **NextAuth.js** - Authentication
- **MongoDB** - Database
- **Prisma** - ORM
- **bcrypt** - Password Hashing

---

## 📦 Kurulum | Installation

```bash
# Bağımlılıkları yükle | Install dependencies
npm install

# Prisma setup
npx prisma generate
npx prisma db push

# Geliştirme sunucusunu başlat | Start development server
npm run dev
```

---

## 📝 Notlar | Notes

🇹🇷 Proje halen geliştirilme aşamasındadır. Authentication sistemi ve sepet özellikleri tamamlanmıştır. Veritabanı entegrasyonu ile kullanıcı yönetimi aktif edilmiştir.

🇬🇧 The project is still under development. Authentication system and cart features have been completed. User management has been activated with database integration.

---

**Son Güncelleme | Last Update**: 28 Ekim 2025 | October 28, 2025