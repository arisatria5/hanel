# Portal Berita - News Website

Portal berita modern yang menampilkan berita terkini dengan foto, judul, dan link ke artikel lengkap.

## Fitur

- **Tampilan Modern**: Desain responsif dengan UI yang clean dan modern
- **Kategori Berita**: Filter berita berdasarkan kategori (Teknologi, Olahraga, Politik, Ekonomi)
- **Pencarian**: Fitur pencarian berita berdasarkan judul dan konten
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Loading Animation**: Animasi loading yang smooth
- **Hover Effects**: Efek hover yang menarik pada card berita
- **External Links**: Link ke artikel lengkap yang terbuka di tab baru

## Struktur File

```
├── index.html          # File HTML utama
├── style.css           # Styling CSS
├── script.js           # JavaScript functionality
└── README.md           # Dokumentasi project
```

## Cara Menjalankan

### Metode 1: Langsung di Browser
1. Download semua file
2. Buka `index.html` di browser

### Metode 2: Menggunakan Local Server
1. Buka terminal di folder project
2. Jalankan perintah:
   ```bash
   python3 -m http.server 8000
   ```
3. Buka browser dan akses `http://localhost:8000`

## Struktur Data Berita

Setiap berita memiliki struktur sebagai berikut:

```javascript
{
    id: 1,
    title: "Judul Berita",
    summary: "Ringkasan berita...",
    category: "teknologi", // teknologi, olahraga, politik, ekonomi
    image: "https://example.com/image.jpg",
    link: "https://example.com/full-article",
    date: "2024-01-15",
    author: "Nama Penulis"
}
```

## Fitur JavaScript

- **Dynamic Content**: Berita dimuat secara dinamis menggunakan JavaScript
- **Category Filtering**: Filter berita berdasarkan kategori yang dipilih
- **Search Functionality**: Pencarian real-time di judul dan ringkasan berita
- **Smooth Animations**: Animasi fade-in dan hover effects
- **Date Formatting**: Format tanggal dalam bahasa Indonesia
- **Error Handling**: Fallback untuk gambar yang gagal dimuat

## Kustomisasi

### Menambah Berita Baru
Edit array `newsData` di file `script.js`:

```javascript
const newsData = [
    // Tambahkan objek berita baru di sini
    {
        id: 9,
        title: "Judul Berita Baru",
        summary: "Ringkasan berita baru...",
        category: "teknologi",
        image: "https://example.com/image.jpg",
        link: "https://example.com/article",
        date: "2024-01-16",
        author: "Penulis"
    }
];
```

### Menambah Kategori Baru
1. Update navigasi di `index.html`
2. Update fungsi `getCategoryName()` di `script.js`
3. Tambahkan styling di `style.css` jika diperlukan

### Mengubah Warna Theme
Edit variabel CSS di file `style.css` untuk mengubah warna utama:

```css
/* Gradient utama */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Warna aksen */
color: #fbbf24;
```

## Dependencies

- **Font Awesome**: Icons (loaded via CDN)
- **Google Fonts**: Inter font family (loaded via CDN)
- **Unsplash**: Sample images (via CDN)

## Browser Support

- Chrome (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Edge (terbaru)

## Screenshot

Website ini menampilkan:
- Header dengan logo dan navigasi kategori
- Hero section dengan judul dan deskripsi
- Grid berita dengan foto, judul, ringkasan, dan link
- Footer dengan informasi tambahan
- Search bar untuk pencarian berita
- Responsive design untuk semua ukuran layar

## Pengembangan Selanjutnya

Beberapa fitur yang bisa ditambahkan:
- Integrasi dengan API berita real-time
- Sistem komentar
- Social sharing buttons
- Dark mode toggle
- Infinite scrolling
- Bookmark functionality
- Push notifications

## Lisensi

Open source - bebas digunakan dan dimodifikasi sesuai kebutuhan.