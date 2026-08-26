# Riki Adrian — Portfolio Website

Portfolio pribadi **Riki Adrian** — Fresh Graduate D4 Keamanan Siber (Politeknik Negeri Cilacap) dengan fokus pada cybersecurity, network security, dan security monitoring.

Website ini dibuat untuk melamar posisi seperti: Cybersecurity, Network Security, IT Support, Network Engineer, System Administrator, Junior Cybersecurity Analyst, dan SOC / Security Monitoring.

## Deskripsi

Website portfolio statis dengan tema gelap bergaya profesional/cybersecurity, menampilkan:

- Profil & headline
- Riwayat pendidikan (timeline)
- Pengalaman (magang Diskominfo Cilacap, dll.)
- Technical skills
- Featured project: **Security Infrastructure Monitoring using Zabbix**
- Sertifikasi & pelatihan
- Achievement & contact

## Teknologi

- **HTML5** (semantic)
- **CSS3** (custom properties, responsive, animasi ringan)
- **JavaScript Vanilla** (mobile menu, smooth scrolling, active nav, reveal animation, scroll-to-top)
- Google Fonts via CDN (Inter + JetBrains Mono)

Tanpa backend, tanpa framework, tanpa database. 100% kompatibel dengan GitHub Pages.

## Struktur Folder

```
portfolio/
│
├── index.html                          # Halaman utama
├── style.css                           # Semua styling (dark theme)
├── script.js                           # Interaksi JavaScript
├── favicon.svg                         # Favicon placeholder
├── README.md
│
├── assets/
│   ├── profile/
│   │   └── profile.jpg                 # ← GANTI: foto profil Anda
│   ├── certificates/
│   │   ├── linux-unhatched.pdf         # Sertifikat NDG Linux Unhatched
│   │   ├── it-essentials.pdf           # Sertifikat IT Essentials
│   │   ├── ccnav7.pdf                  # Sertifikat CCNAv7
│   │   ├── learn-a-thon.pdf            # Sertifikat Learn-A-Thon
│   │   └── mikrotik.pdf                # Sertifikat MikroTik / MTCNA
│   └── documents/
│       └── CV-Riki-Adrian.pdf          # ← GANTI: CV Anda (PDF)
│
└── projects/
    └── zabbix-monitoring/
        └── index.html                  # Detail halaman project Zabbix
```

> **Catatan:** File media seperti foto profil, sertifikat, dan CV perlu Anda masukkan sendiri ke folder yang sesuai. Template sudah menyediakan fallback agar gambar yang belum tersedia tidak membuat layout rusak.

## Cara Menjalankan Secara Lokal

Cara termudah: buka langsung file `index.html` di browser.

Atau gunakan local server (opsional):

```bash
# Python 3
python3 -m http.server 8000

# lalu buka http://localhost:8000
```

## Cara Upload ke GitHub

1. Buat repository baru di GitHub, misalnya bernama `portfolio`.
2. Buka terminal di dalam folder project ini, lalu jalankan:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

> Ganti `USERNAME` dengan username GitHub Anda.

## Cara Mengaktifkan GitHub Pages

Setelah kode ter-push:

1. Buka **GitHub Repository**
2. Masuk ke **Settings**
3. Pilih **Pages** (di menu samping)
4. Pada *Source*, pilih **Deploy from branch**
5. Branch: **main** → Folder: **/ (root)**
6. Klik **Save**

Website akan tersedia di:

- `https://USERNAME.github.io/portfolio/`

atau `https://USERNAME.github.io/` jika menggunakan repository `USERNAME.github.io`.

> Setelah online, disarankan mengganti `og:url` dan `og:image` di `<head>` `index.html` dengan URL absolut agar preview link (Open Graph) berfungsi optimal.

---

© Riki Adrian — Dibuat dengan HTML, CSS, dan JavaScript murni.
GitHub Pages deployment test.
