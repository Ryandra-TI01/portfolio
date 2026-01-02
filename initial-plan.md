# Portfolio Web Application Specification (PRS/SRS)

## 1. Overview

### 1.1 Purpose

Dokumen ini mendefinisikan spesifikasi fungsional dan non-fungsional untuk **Web Portfolio Pribadi** sebagai alat profesional untuk melamar posisi **Intern / Junior Fullstack Web Developer (Laravel + React)**.

Aplikasi ini **bukan produk komersial**, melainkan artefak evaluasi teknis untuk recruiter dan technical reviewer.

### 1.2 Target Audience

- Technical Recruiter
- Hiring Manager
- Software Engineer (Technical Reviewer)

### 1.3 Goals (Outcome-Oriented)

- Recruiter memahami value kandidat dalam kurang dari 30 detik
- Menunjukkan kompetensi React frontend secara nyata
- Menunjukkan konsistensi dengan stack Laravel + React
- Menyediakan akses cepat ke project nyata dan repository

---

## 2. Scope

### 2.1 In Scope

- Static frontend web application
- Project showcase (real-world projects)
- Responsive design (desktop & mobile)
- Public deployment (cloud hosting)

### 2.2 Out of Scope

- Backend API khusus portfolio
- Database
- User authentication
- CMS / Admin panel

---

## 3. Technology Stack

### 3.1 Frontend

- React (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion (penggunaan terbatas)
- Shadcn (based component)

### 3.2 Tooling

- ESLint
- Prettier
- Git (GitHub)

### 3.3 Deployment

- Hosting: Vercel
- CI/CD: GitHub → Vercel Auto Deploy

---

## 4. Application Architecture

### 4.1 High-Level Architecture

- Client-side rendered React SPA
- Static asset delivery via CDN
- No server-side rendering

### 4.2 Directory Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── layout/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js
│   ├── assets/
│   └── App.jsx
├── public/
└── README.md

```

---

## 5. Functional Requirements

### FR-01 Home Page

**Description:** Landing page yang menyampaikan value proposition.

**Requirements:**

- Menampilkan headline profesional (non-generik)
- Menampilkan deskripsi singkat role
- Menyediakan CTA ke halaman Projects

---

### FR-02 About Page

**Description:** Menjelaskan latar belakang teknis kandidat.

**Requirements:**

- Ringkasan skill dan pengalaman
- Daftar teknologi utama
- Tidak memuat informasi personal yang tidak relevan

---

### FR-03 Projects Page

**Description:** Halaman showcase project utama.

**Requirements:**

- Menampilkan daftar project dalam bentuk card
- Setiap project memiliki:
    - Nama project
    - Deskripsi singkat
    - Tech stack
    - Link Live Demo
    - Link GitHub repository

---

### FR-04 Project Detail View

**Description:** Detail teknis setiap project.

**Requirements:**

- Problem statement
- Solution overview
- Key features
- Technical challenges & decisions
- Screenshot atau visual demo

---

### FR-05 Contact Page

**Description:** Menyediakan channel komunikasi profesional.

**Requirements:**

- Email link (mailto)
- LinkedIn profile link
- GitHub profile link

---

## 6. Non-Functional Requirements

### NFR-01 Performance

- Lighthouse performance score ≥ 80
- Static assets yang dioptimasi

### NFR-02 Responsiveness

- Mobile-first responsive design
- Kompatibilitas cross-browser (Chrome, Edge, Firefox)

### NFR-03 Usability

- Navigasi yang jelas dan konsisten
- Maksimal 2 klik ke project detail

### NFR-04 Code Quality

- Struktur folder yang rapi
- Penamaan komponen yang mudah dibaca
- Tanpa dependencies yang tidak digunakan

---

## 7. UX & Design Guidelines

- Desain minimalis
- Tipografi yang konsisten
- Palet warna netral
- Animasi sebagai enhancement, bukan distraksi

---

## 8. Content Guidelines

### 8.1 Tone

- Profesional
- Teknis
- Ringkas dan objektif

### 8.2 Prohibited Content

- Motivational quotes
- Cerita personal yang tidak relevan
- Klaim skill tanpa bukti

---

## 9. Deployment Specification

### 9.1 Build Process

- Command: `npm run build`
- Output directory: `dist`

### 9.2 Hosting

- Platform: Vercel
- Domain: Opsional custom domain

---

## 10. Acceptance Criteria

Aplikasi dianggap **selesai dan layak digunakan** apabila:

- Semua halaman dapat diakses tanpa error
- Semua link project valid
- Tidak ada console error
- Konten konsisten dengan CV dan LinkedIn

---

## 11. Future Enhancement (Optional)

- Blog teknis
- Analytics sederhana
- Dukungan multilingual

---

## 12. Final Note

Dokumen ini merupakan **baseline final**. Setiap perubahan scope atau stack harus memiliki justifikasi strategis, bukan preferensi pribadi.