---
title: Menginstal Claude Code
description: Jalankan Claude Code di komputer Anda
sidebar:
  order: 3
---


Selanjutnya — mari instal Claude Code di komputer Anda. Kita akan menggunakan aplikasi desktop Claude Code, yang mencakup semua yang Anda butuhkan untuk mulai membangun.

## Unduh Claude Code

### Windows/Mac

1. Kunjungi **[claude.ai/download](https://claude.ai/download)** (atau halaman unduhan resmi Claude Code)
2. Klik **"Download for Windows/Mac"**
3. Installer akan diunduh (biasanya ke folder Downloads Anda)

## Instal Claude Code

### Windows

1. Buka file yang diunduh dari folder Downloads Anda
2. Ikuti wizard instalasi
3. Klik **"Install"** dan tunggu hingga instalasi selesai
4. Klik **"Finish"** setelah selesai

### Mac

1. Buka file `.dmg` yang diunduh dari folder Downloads Anda
2. Seret aplikasi **Claude Code** ke folder **Applications** Anda
3. Buka **Applications** dan klik dua kali **Claude Code**
4. Jika Anda melihat peringatan keamanan, klik **"Open"** untuk mengonfirmasi


<div class="checkpoint">
  <div class="checkpoint-title">✅ Pos Pemeriksaan</div>
  <p>Claude Code kini terinstal di komputer Anda!</p>
</div>

### Hubungkan Github ke Claude Code
![](../../install-claude-code/github-claude-settings.png)

Sebelum kita mulai, kita perlu menghubungkan Claude Code ke Github. Navigasikan ke pengaturan Claude dan hubungkan Github.

Anda perlu mengautentikasi login GitHub Anda, lalu Anda akan dibawa ke halaman **Integrations > Applications > Claude**. Di sini Anda bisa memilih untuk memberikan akses ke semua repository atau hanya repository yang sedang Anda kerjakan saat ini.

Jika Anda memilih '**Select repository**', Anda bisa memilih yang baru saja Anda buat.

![](../../install-claude-code/repo-claude.png)


## Pemecahan Masalah

<div class="tip-box"> Anda dapat menemukan informasi lebih lanjut tentang Integrasi Github di <a href="https://support.claude.com/en/articles/10167454-using-the-github-integration">situs bantuan Claude<a>.
</div>

### Tidak dapat menemukan Claude Code setelah instalasi (Mac)
Periksa folder **Applications** Anda. Jika Claude Code ada di sana tapi tidak bisa dibuka, klik kanan dan pilih **"Open"** untuk melewati peringatan keamanan.

### Instalasi macet atau tidak selesai (Windows)

Coba jalankan installer sebagai Administrator:
1. Klik kanan file installer
2. Pilih **"Run as administrator"**
3. Ikuti langkah instalasi lagi

### Pesan "App is damaged" (Mac)

Ini bisa terjadi dengan aplikasi yang diunduh. Coba:
1. Buka **Terminal**
2. Jalankan: `xattr -cr /Applications/Claude\ Code.app`
3. Coba buka Claude Code lagi

### "npm is not recognized" (Windows)

Tutup Command Prompt sepenuhnya dan buka kembali. Instalasi memerlukan jendela baru agar berfungsi.


## Langkah Selanjutnya

Claude Code sudah terinstal dan Github sudah disiapkan, jadi Anda siap untuk memulai! Selanjutnya, Anda akan memilih proyek yang akan dibangun dengan Claude Code.
