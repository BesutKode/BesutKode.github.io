---
layout: main
---

# Contoh tugas 1

## Tugas

Berikan kontribusi 20 terjemahan bahasa Indonesia baru ke berkas
https://github.com/phpmyadmin/localized_docs/blob/master/po/id.po .

Tugas ini dinilai dengan meninjau *commit* dengan nama pengguna GitHub Anda
ke berkas tersebut, dan menghitung banyaknya terjemahan baru yang ditambahkan.

Catatan: *commit* tersebut saat ini tidak memenuhi kriteria Besut Kode untuk
[tugas registrasi](http://wikimedia-id.github.io/besutkode/university-modules-id.html),
karena proyek `localized_docs` belum memiliki 50 bintang
(hanya 10 bintang terhitung 29 September).

## Latar belakang

*Read The Docs* (RTD) adalah layanan yang umum digunakan untuk *hosting* dokumentasi.

Layanan RTD gratis untuk [perangkat lunak terbuka](https://readthedocs.org/),
dan juga memiliki layanan [komersial](https://readthedocs.com/).

Layanan RTD mendukung [beberapa bahasa](http://read-the-docs.readthedocs.io/en/latest/localization.html).

Contoh terjemahan yang disediakan dalam dokumentasi mereka adalah [phpMyAdmin](http://docs.phpmyadmin.net/en/latest/).

Mengklik pada "v: latest" di bagian bawah [phpMyAdmin](http://docs.phpmyadmin.net/en/latest/)
menunjukkan dokumentasi phpMyAdmin telah diterjemahkan ke bahasa-bahasa berikut:

- en : Inggris
- cs: Ceko
- de: Jerman
- el: Yunani
- es: Spanyol
- et: Esti
- fr: Perancis
- hu: Hongaria
- id: bahasa Indonesia
- ja: Jepang
- nl: Belanda
- pt_BR: Portugis (Brasil)
- tr: Turki
- uk: Ukraina
- zh_CN: Cina (disederhanakan)

Dokumentasi phpMyAdmin dalam bahasa Inggris ada di repositori GitHub
[`phpmyadmin/phpmyadmin`](https://github.com/phpmyadmin/phpmyadmin)
dalam subdirektori [/doc](https://github.com/phpmyadmin/phpmyadmin/tree/master/doc),
dan terjemahannya disimpan di repositori GitHub
[`phpmyadmin/localized_docs`](https://github.com/phpmyadmin/localized_docs).

Terjemahan tersebut disimpan dalam berkas [`.po gettext`](https://en.wikipedia.org/wiki/gettext)
dalam subdirektori [/po](https://github.com/phpmyadmin/localized_docs/tree/master/po).

Tersedia terjemahan dalam bahasa Indonesia dalam berkas
[/po/id.po](https://github.com/phpmyadmin/localized_docs/blob/master/po/id.po),
namun sebagian besarnya belum diterjemahkan, jadi phpMyAdmin tidak menyertakan bahasa Indonesia
pada situs Read The Docs mereka.

Berkas `id.po` ini dapat disunting menggunakan editor teks biasa, atau dengan aplikasi khusus.
Ada beberapa aplikasi lintas-*platform* yang disebutkan dalam artikel Wikipedia bahasa Inggris
mengenai [`gettext`](https://en.wikipedia.org/wiki/gettext).
Sintaks yang digunakan di seluruh format berkas `.po` sangatlah ketat dan langka.
Tugas ini mengharuskan Anda memperoleh pemahaman dasar dari format berkas `.po`.

Ada juga *library* khusus untuk memanipulasi berkas `.po`, tersedia untuk sebagian besar
bahasa pemrograman populer, yang bisa digunakan untuk melakukan penerjemahan secara pemrograman.

Terdapat juga layanan-layanan GitHub untuk penerjemahan berkas `.po`, yang menyediakan aplikasi web
untuk menambah dan memperbarui terjemahan.

Proyek `localized_docs` phpMyAdmin terhubung dengan layanan [Weblate](https://en.wikipedia.org/wiki/Weblate),
di mana [halaman terjemahan bahasa Indonesia](https://hosted.weblate.org/projects/phpmyadmin/documentation/id/)
menunjukkan bahwa dokumentasinya telah 68.2% diterjemahkan.

Jika Anda *log in* ke Weblate menggunakan akun GitHub Anda, ketika Anda menyumbangkan terjemahan di Weblate maka
perubahan Anda akan di-[lazy-commit](https://docs.weblate.org/en/latest/admin/continuous.html#lazy-commit)-kan
ke repositori GitHub, misalnya ketika orang lain melakukan penerjemahan, dan muncul di profil GitHub Anda.

Agar terjemahan muncul di profil github anda, 
In order for translations to appear in your GitHub profile, [kamu harus](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/#commits) meberikan _Star_ repository tersebut.

Proyek phpMyAdmin lebih menyukai terjemahan yang disediakan menggunakan Weblate, karena mengurangi
beban kerja untuk para *committers* karena Weblate otomatis melakukan *commit* untuk setiap perubahan.
Kecuali ada alasan yang sangat baik untuk memberikan kontribusi langsung ke repositori, jangan ajukan
Pull Request untuk menyelesaikan tugas ini. Contoh alasan untuk menggunakan Pull Request adalah
menerjemahkan kelompok pesan yang sangat besar secara pemrograman menggunakan salah satu *library* `gettext`.
Meskipun dengan alasan yang baik, tidak dianjurkan untuk melakukan ini ketika ada banyak kontributor
pada berkas yang sama, seperti tugas kelompok semacam Besut Kode, karena konflik penggabungan mungkin terjadi.

Untuk menggunakan weblate, pastikan kamu memiliki alamat email di profile github anda.

1. Masuk ke https://hosted.weblate.org/ menggunakan GitHub.
2. https://hosted.weblate.org/projects/phpmyadmin/master/id/
3. Mulai terjemahkan
4. Berikan _Star_ pada `phpmyadmin/localized_docs`](https://github.com/phpmyadmin/localized_docs)

Setiap kesalahan terjemahan akan di publikasikan ke repositori github, kecuali seseorang memperbaikinya sebelum terjadinya _lazy_commit_.

Terjemahan dengan error yang terpublikasikan di github, dapat menyebabkan anda tereliminasi.

Tag StackOverflow terkait:

- [read-the-docs](http://stackoverflow.com/questions/tagged/read-the-docs)
- [gettext](http://stackoverflow.com/questions/tagged/gettext)
- [weblate](http://stackoverflow.com/questions/tagged/weblate)
- [phpmyadmin](http://stackoverflow.com/questions/tagged/phpmyadmin)
