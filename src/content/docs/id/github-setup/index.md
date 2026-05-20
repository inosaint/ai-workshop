---
title: Akun GitHub
description: Buat akun GitHub Anda langkah demi langkah
sidebar:
  order: 2
---
<div class="tip-box">
  Anda bisa melewati bagian ini jika Anda sudah familiar dengan Github dan memiliki akun.

</div>

GitHub adalah tempat para developer menyimpan kode mereka. Bayangkan seperti **Google Drive untuk kode**.

Di bagian ini, Anda akan membuat akun GitHub gratis yang akan digunakan sepanjang workshop.

### Apa itu Git?

**Git adalah mesin waktu untuk kode Anda.**

Ingat ketika Anda menyimpan file seperti:
- `desain_final.psd`
- `poster_final_v2.ai`
- `desain_FINAL_FINAL.sketch`
- `desain_FINAL_FINAL_benar_benar_final.fig`

Git memecahkan masalah ini dengan elegan. Alih-alih membuat salinan, Git melacak setiap perubahan yang Anda buat. Anda bisa:
- Kembali ke versi sebelumnya kapan saja
- Melihat apa yang berubah dan kapan
- Bekerja dengan orang lain tanpa menimpa pekerjaan masing-masing

## Git vs GitHub: Apa Bedanya?

| Git                          | GitHub                          |
| ---------------------------- | ------------------------------- |
| Perangkat lunak di komputer  | Situs web di internet           |
| Melacak perubahan secara lokal | Menyimpan kode Anda di cloud  |
| Gratis dan open source       | Gratis untuk proyek publik      |
| Bekerja offline              | Memerlukan internet             |

## Kursus Singkat Istilah

Sebelum kita mulai, mari pahami beberapa istilah yang perlu Anda kenali.

| Konsep | Analogi Sehari-hari |
|--------|---------------------|
| **GitHub** | Seperti Google Drive (Cloud), tapi dirancang khusus untuk proyek kode |
| **Repository** (repo) | Folder yang berisi file proyek Anda |
| **Commit** | Menyimpan versi pekerjaan Anda (seperti "Simpan Sebagai" dengan catatan) |
| **Push** | Mengunggah pekerjaan tersimpan ke cloud |
| **Pull** | Mengunduh versi terbaru dari cloud |

Anda tidak perlu menghafalnya sekarang — semuanya akan lebih masuk akal setelah kita menggunakannya!

## Menyiapkan Akun GitHub Anda

### Langkah 1:

Kunjungi **[github.com](https://github.com/)** dan buat akun Anda sendiri. Pilih username yang baik saat membuat akun. Username yang Anda pilih akan menjadi nama default yang digunakan untuk GitHub Pages, jadi pilih yang profesional (tidak seperti saya).

### Langkah 2:

Unduh [Github Desktop](https://desktop.github.com) dan masuk dengan kredensial yang baru Anda buat.

### Langkah 3:

[Buat repository baru](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop#creating-a-new-repository) (repo) menggunakan Github Desktop.

![Dialog Buat Repository Baru](../../github-setup/new-repo-dialog.png)


Beri nama dengan format berikut: [username].github.io, di mana *username* adalah username GitHub Anda. Ini yang akan digunakan sebagai domain GitHub gratis Anda. Harap jangan membuat kesalahan, nama repository harus identik dalam ejaan dan huruf besar-kecil dengan username GitHub Anda.

![Buat Repository Baru menggunakan Github Desktop](../../github-setup/new-repo.png)



Anda bisa mengunjungi [artikel bantuan Github](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop) untuk mempelajari lebih lanjut tentang Github Desktop dan antarmukanya.

### Langkah 4:

Publikasikan repo. Saat mempublikasikan, ingat untuk menghapus centang 'Keep this code private'.

![Dialog Publikasi Repository](../../github-setup/publish-repo.png)



### Langkah 5:

Kunjungi Github.com dan navigasikan ke repository yang baru dibuat, lalu klik Settings.

### Langkah 6:

![Mengonfigurasi pengaturan Publish repo](../../github-setup/gh-pages.png)

Navigasikan ke pages di nav kiri dan pilih '**Deploy from a Branch**', pilih **main / root** dan klik '**Save**'

Jika Anda tidak menghapus centang 'Keep this code private' saat mempublikasikan repository, Anda perlu mengikuti langkah tambahan. Anda perlu masuk ke Setting > General lalu gulir ke bawah halaman ke 'Danger Zone' untuk menemukan 'Change repository visibility' dari Private ke Public.


## Langkah Selanjutnya

Akun GitHub Anda sudah siap. Di bagian berikutnya, kita akan menginstal Claude Code di komputer Anda.

<div class="tip-box">
  <strong>💡 Tips:</strong> Biarkan tab GitHub tetap terbuka — kita akan kembali ke sana segera!
</div>
