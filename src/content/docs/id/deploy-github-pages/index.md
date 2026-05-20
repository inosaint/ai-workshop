---
title: Deploy ke GitHub Pages
description: Publikasikan proyek Anda secara gratis di internet
sidebar:
  order: 8
---

Inilah momen kebenaran! Mari publikasikan proyek Anda di internet agar siapa saja bisa melihatnya.

### Langkah 1: Verifikasi Kode Anda Ada di GitHub

Mari pastikan semuanya siap:

1. Buka **GitHub Desktop**
2. Klik '**Fetch Origin**'
3. Periksa bahwa **tab Changes** kosong (semua perubahan sudah di-commit)

Jika semuanya sudah siap, Anda siap untuk menggabungkan perubahan ke kode utama.

### Langkah 2: Buat Pull Request

Sekarang mari pindahkan kode lokal Anda ke branch utama.
![](../../deploy-github-pages/preview-pr.png)

1. Buka **GitHub Desktop**
2. Seharusnya ada tombol '**Preview Pull Request**'
3. Klik tombol itu dan Anda akan dibawa ke Github.com
4. Isi deskripsi Pull Request lalu klik '**Create Pull Request**'
5. Github akan menjalankan beberapa pemeriksaan dan setelah selesai, Anda bisa klik '**Merge Branch**' untuk menyelesaikan penggabungan.

<div class="tip-box">
  Jika Anda menemui error di sini, tempel error tersebut ke Claude agar bisa di-debug.
</div>

### Langkah 3: Kunjungi Situs Live Anda!

GitHub biasanya membutuhkan satu atau dua menit untuk membangun dan men-deploy situs Anda. Ketik di browser Anda:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **Selamat! Proyek Anda sudah live di internet!**

## Memperbarui Situs Anda

Setelah melihat situs live di internet, Anda mungkin perlu membuat perubahan.

Disarankan untuk memulai chat baru di Claude Code untuk setiap perubahan baru karena Claude cenderung membuat branch baru untuk dikerjakan. Jika Anda membuat branch di **Github Desktop**, Claude Code tidak akan bisa mengaksesnya.

Untuk membuat perubahan, Anda bisa mengulangi langkah-langkah yang disebutkan di [Membuat Perubahan dengan Claude Code](/id/making-changes/).

## Pemecahan Masalah

Untuk lebih banyak solusi, lihat [panduan Pemecahan Masalah](/id/troubleshooting/) lengkap kami.

#### Keterlambatan deployment

![Deployment telah selesai](../../deploy-github-pages/git-actions.png)

Ini adalah langkah opsional jika Anda perlu melakukan debug.

1. **Periksa tab Actions** — Lihat apakah deployment masih berjalan
2. Periksa apakah ada error yang ditunjukkan.

### Error 404 / Halaman Tidak Ditemukan

- **Periksa URL** — Pastikan Anda menggunakan nama repository yang benar
- **Periksa file Anda** — Pastikan Anda memiliki file `index.html` di root repository
- **Tunggu sebentar** — Deployment pertama bisa memakan waktu hingga 10 menit

### Halaman Kosong

- **Periksa console browser** untuk error (F12 → tab Console)
- **Periksa path file** — Link ke CSS/JS mungkin perlu diperbarui
- **Sensitivitas huruf besar-kecil** — `Styles.css` berbeda dari `styles.css`

### Perubahan Tidak Muncul

- **Tunggu 2-5 menit** — GitHub Pages melakukan caching secara agresif
- **Hard refresh** — `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
- **Periksa tab Actions** — Lihat apakah deployment masih berjalan


<div class="tip-box">
  <strong>💡 Tips Pro:</strong> Anda bisa menggunakan domain kustom (seperti "namaanda.com") sebagai pengganti alamat github.io. Itu sedikit lebih lanjut, tapi GitHub memiliki <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">dokumentasi yang bagus</a> jika Anda tertarik!
</div>


<div class="checkpoint">
  <div class="checkpoint-title">✅ Pos Pemeriksaan</div>
  <p>Proyek Anda sudah LIVE di internet! Anda baru saja men-deploy website nyata. 🎉</p>
</div>

## Apa Selanjutnya?

Anda telah menyelesaikan sesuatu yang luar biasa — dari nol hingga website yang ter-deploy!

Luangkan waktu untuk menghargai sejauh apa yang telah Anda capai:

- ✅ Membuat akun GitHub
- ✅ Menginstal Claude Code
- ✅ Mempelajari dasar-dasar Git
- ✅ Membangun proyek nyata dengan AI
- ✅ Mengujinya secara lokal
- ✅ Men-deploy ke internet

Di bagian berikutnya, kita akan meningkatkan kemampuan Anda dengan:
- [Mempelajari cara menggunakan Claude API secara langsung](/id/claude-api/)
- [Menambahkan analitik untuk melacak pengunjung dengan PostHog](/id/analytics-posthog/)
