# Deep-Tech Portfolio Implementation Plan

## Overview
Bu belge, "The Architectural Dark Mode" konseptine modern bir yazılım mühendisi portfolyosu için E2E (uçtan uula) tasarım ve uygulama stratejisini içerir.

## 🎨 Tasarım Konsepti: Deep-Tech Aestetiği
- **Zemin:** `#0B1120` (Derin Gece Mavisi)
- **Yüzeyler:** `#161F32` (%60 opaklık + 20px blur)
- **Enerji:** `#00F2FE` (Elektrik Turkuaz) & `#4FACFE` (Neon Mavi)
- **Font:** Inter (gövde) + JetBrains Mono (teknik detaylar)

- **Efektler:** Glassmorphism, neon glow, particle animations

---

## 📋 U Uygulama Aşamaları

### Aşam 1: Hero Bölümü (Yeniden Tasarım)
**Hedef:** Merkezi minimalist tipografi ve interaktif arka plan

**Değişikler:**
- [ ] HeroSection.tsx yeniden tasarlanacak
- [ ] "Welcome" yerine: "Uğur Terzioğlu // Architecting Scalable Systems" tagline
- [ ] Arka plan: Fare duyarlı parçacık (particle) ağı animasyonu
- [ ] CTA butonları: "Projeleri Gör" (solid) + "CV İndir" (outline)
- [ ] Sosyal linkler: LinkedIn, GitHub (neon hover efektleri)

- [ ] Animated background gradient

**Teknolojiler:**
- Framer Motion (giriş animasyonları)
- Canvas API veya Lottie (parçacık animasyonu)
- Tailwind CSS (styling)

---

### Aşam 2: Bento Grid Projeler Bölümü (Yeni Bileşen)
**Hedef:** Farklı boyutlarda kutulardan oluşan dinamik proje ızgarası

**Değişikler:**
- [ ] Yeni Bileşen: `BentoGrid.tsx` oluştur
- [ ] PathCards.tsx güncelle veya yerine geçecek
- [ ] Büyük kutu: En iyi proje (interaktif mockup)
- [ ] Orta kutu: GitHub contribution graph (canlı görsel)
- [ ] Alt kutular: Tech stack logoları (parlayan chip'ler)
- [ ] Farklı kart boyutları: 2x2, 1x2, 1x1, 2x2 grid düzeni
- [ ] Hover efektleri: Glow, scale, reveal details
- [ ] Responsive tasarım (mobil uyumlu)

**Teknolojiler:**
- CSS Grid Layout
- Framer Motion (hover animasyonları)
- Lucide React Icons

---

### Aşam 3: Tech Stack Geliştirmesi (Mevcut Sayfa Güncelle)
**Hedef:** Progress bar'lar ile derinlik göstergesi

**Değişikler:**
- [ ] TechStack.tsx güncelle
- [ ] Her teknoloji için proficiency level (1-5 veya %)
- [ ] Progress bar: Gradient dolgu, glow efekti
- [ ] Hover efekti: İlgili projenin göster
- [ ] Kategoriler aynı kalacak
- [ ] İkonlar: Lucide React Icons veya custom SVG
- [ ] Animasyon: Framer Motion stagger effect

**Veri Yapılandırma:**
```typescript
interface TechItem {
  name: string;
  icon: LucideIcon;
  proficiency: number; // 1-5
  category: string;
  relatedProject?: string;
}
 ```

---

### Aşam 4: Experience Timeline Dönüşümü (Mevcut Sayfa Güncelle)
**Hedef:** Yatay kaydırılabilir "DevOps Pipeline" görünümü
**Değişikler:**
- [ ] Experience.tsx yeniden tasarlanacak
- [ ] Dikey timeline → Yatay scrollable pipeline
- [ ] Her iş yeri bir "deployment" noktası gibi işaretlenmeli
- [ ] Pipeline bağlantı çizgileri (animated)
- [ ] Duraklar arası geçiş animasyonları
- [ ] Scroll snap behavior
- [ ] Mobil: yatay kaydırma (touch swipe)
**Teknolojiler:**
- CSS Scroll Snap
- Framer Motion (animasyonlar)
- Horizontal scroll container
- Lucide React Icons (pipeline ikonları)
**Veri Yapılandırma:**
```typescript
interface ExperienceStop {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tools: string[];
  status: 'completed' | 'in-progress';
}
 ```

---

### Aşam 5: Contact Form (Yeni Bileşen)
**Hedef:** Terminal-style input ile minimalist iletişim formu
**Değişikler:**
- [ ] Yeni Bileşen: `ContactForm.tsx` veya ContactSection.tsx güncelle
- [ ] Input alanları: Name, Email, Message
- [ ] Terminal cursor animasyonu
- [ ] Kod editörü görünümü (koyu renkli syntax highlighting)
- [ ] Submit butonu: Gradient, glow efekti
- [ ] Form validasyonu
**Teknolojiler:**
- React Hook Form (validasyon)
- Framer Motion (animasyonlar)
- Tailwind CSS (styling)
- Zod (schema validation - opsiyonel)
**Veri Yapılandırma:**
```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
 ```

---

### Aşam 6: Footer & Social Links (Güncelleme)
**Hedef:** Neon hover efektli sosyal linkler
**Değişikler:**
- [ ] Footer component güncelleme veya yeni oluştur
- [ ] LinkedIn, GitHub linkleri
- [ ] Neon glow hover efektleri
- [ ] Copyright bilgisi
- [ ] Responsive tasarım
**Teknolojiler:**
- Lucide React Icons
- Tailwind CSS
- Framer Motion (hover animasyonları)

---

### Aşam 7: Genel İyileştirmeler
**Hedef:** Tutarlı genel UX ve performance
**Değişikler:**
- [ ] Loading states (skeleton loading)
- [ ] Error boundaries
- [ ] SEO meta tags güncelleme
- [ ] Responsive breakpoints kontrolü
- [ ] Performance optimization (lazy loading)
- [ ] Accessibility improvements (ARIA labels)
**Teknolojiler:**
- React Suspense veya skeleton components
- React Error Boundary
- React Helmet (SEO)

---

## 📁 Dosya Yapısı

``src/
├── components/
│   ├── ui/                    # Mevcut shadcn/ui bileşenleri
│   ├── HeroSection.tsx        # Aşam 1: Güncelle
│   ├── BentoGrid.tsx          # Aşam 2: Yeni
│   ├── TechStackSection.tsx   # Aşam 3| Yeni (veya TechStack.tsx güncelle)
│   ├── ExperiencePipeline.tsx # Aşam 4| Yeni (veya Experience.tsx güncelle)
│   ├── ContactForm.tsx        # Aşam 5| Yeni
│   ├── Footer.tsx             # Aşam 6| Yeni
│   ├── Header.tsx             # Mevcut - güncelleme gerekebilir
│   └── PathCards.tsx           # Kaldırılacak veya BentoGrid ile değiştirile
├── pages/
│   ├── Index.tsx              # Ana sayfa - güncelleme
│   ├── Experience.tsx        # Aşam 4| Güncelle
│   ├── TechStack.tsx          # Aşam 3| Güncelle
│   ├── CorporateProjects.tsx  # Mevcut
│   ├── PrivateProjects.tsx    # Mevcut
│   ├── AboutMe.tsx            # Mevcut
│   └── MyCv.tsx                # Mevcut
├── hooks/
│   ├── use-scroll-snap.ts    # Yeni - horizontal scroll için
│   └── use-media-query.ts      # Mevcut
├── lib/
│   └── utils.ts               # Mevcut
└── index.css                 # Mevcut - ek animasyonlar eklenebilir
```

---

## 🔗 Bağımlılıklar

Mevcut bağımlılıklar yeterli. Yeni bağımlılık gerekmiyor:
- `framer-motion` ✅ (zaten installed)
- `lucide-react` ✅ (zaten installed)
- `@tanstack/react-query` ✅ (zaten installed)
- `react-router-dom` ✅ (zeten installed)
- `tailwindcss` ✅ (zeten installed)

- `shadcn/ui` ✅ (zaten installed)

---

## ⚡ Animasyon Özellikleri

### Giriş Animasyonları
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
 ```

### Hover Efektleri
```css
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.4), 0 0 40px rgba(79, 172, 254, 0.2);
  transform: translateY(-2px);
}

.hover-scale:hover {
  transform: scale(1.02);
}
 ```

### Scroll Animasyonları
```typescript
const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};
 ```

---

## 🎯 Öncelik Sırası

1. **Yüksek Öncelik:** Hero Section + Bento Grid (Ana sayfa için kritik)
2. **Orta Öncelik:** Tech Stack Progress Bars
3. **Orta Öncelik:** Experience Pipeline
4. **Düşük Öncelik:** Contact Form + Footer

5. **En Düşük:** Genel İyileştirmeler (SEO, Loading States)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Mobil */
md: 768px   /* Tablet */
lg: 1024px  /* Laptop */
xl: 1280px /* Desktop */
2xl: 1536px /* Large Desktop */
```

---

## ✅ Test Stratejisi

### Unit Tests
- [ ] Hero Section render test
- [ ] Bento Grid responsive test
- [ ] Tech Stack progress bar test
- [ ] Contact form validation test

### Integration Tests
- [ ] Page navigation test
- [ ] Form submission test
- [ ] Responsive layout test

### E2E Tests (Playwright)
- [ ] Full page load test
- [ ] Navigation flow test
- [ ] Contact form submission test

---

## 🚀 Deployment Checklist
- [ ] Build optimization
- [ ] Environment variables setup
- [ ] SEO meta tags
- [ ] Favicon ve assets
- [ ] Error tracking (Sentry veya benzeri)
- [ ] Performance monitoring

---

## 📝 Notlar
- Mevcut `index.css` dosyasındaki CSS değişkenleri ve utility class'lar korunacak
- `tailwind.config.ts` dosyasındaki tema yapılandırması korunacak
- shadcn/ui bileşenleri yeniden kullanılacak
- Framer Motion animasyonları tutarlıca kullanılacak

- Mobil öncelikli tasarım yaklaşımı benimsenecek
