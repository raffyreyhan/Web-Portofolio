/* =====================================================================
   FILE INI SATU-SATUNYA YANG PERLU ANDA EDIT UNTUK MENGISI KONTEN.
   Ganti teks di dalam tanda kutip "..." dengan data Anda.
   Jangan hapus tanda kutip, koma, atau kurung.
   ===================================================================== */

const PROFILE = {
  name: "Nama Lengkap Anda",
  role: "Calon Data Analyst · Data Scientist",
  tagline: "Saya belajar mengubah data menjadi insight dan model yang berguna.",
  about:
    "Halo! Saya sedang membangun karier di bidang data. Saya telah menyelesaikan " +
    "tiga modul pembelajaran: Python Fundamental, Data Analysis, dan Machine Learning. " +
    "Di halaman ini saya mengumpulkan kode, notebook, dan presentasi dari proses belajar tersebut.",

  // --- Kontak (kosongkan dengan "" jika tidak ingin ditampilkan) ---
  github:   "https://github.com/USERNAME_GITHUB_ANDA",
  linkedin: "https://www.linkedin.com/in/USERNAME_LINKEDIN_ANDA",
  email:    "emailanda@gmail.com",
  phone:    "0812-3456-7890",
  whatsapp: "6281234567890",   // nomor tanpa +, tanpa spasi, diawali 62 (untuk tombol WhatsApp)

  // --- Lokasi repository GitHub tempat situs ini disimpan ---
  // Format: "USERNAME/NAMA_REPO". Dipakai untuk membuat tombol "Lihat di GitHub".
  repo: "USERNAME_GITHUB_ANDA/portfolio",
  branch: "main"
};

/* =====================================================================
   MODUL & PROYEK
   Setiap file diberi "path" = lokasi file di dalam folder situs ini.
   Jenis file dikenali otomatis dari akhiran:
     .py    -> tombol "Lihat Kode"
     .ipynb -> tombol "Buka Notebook"
     .pptx  -> tombol "Lihat Slide" + "Unduh"
   ===================================================================== */
const MODULES = [
  {
    id: "python",
    title: "Modul 1 · Python Fundamental",
    desc: "Dasar pemrograman Python: tipe data, percabangan, perulangan, fungsi, dan struktur data.",
    skills: ["Python", "Fungsi", "OOP Dasar", "File Handling"],
    projects: [
      {
        title: "Contoh Proyek Python",
        desc: "Ganti dengan deskripsi proyek Anda: apa yang dibuat dan apa yang dipelajari.",
        tags: ["Python", "Fungsi"],
        files: [
          { label: "Kode utama", path: "files/python/contoh.py" }
        ]
      }
    ]
  },
  {
    id: "analysis",
    title: "Modul 2 · Data Analysis",
    desc: "Membersihkan, mengeksplorasi, dan memvisualisasikan data untuk menemukan insight.",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
    projects: [
      {
        title: "Contoh Analisis Data",
        desc: "Ganti dengan deskripsi analisis Anda: dataset, pertanyaan bisnis, dan temuan utama.",
        tags: ["Pandas", "Visualisasi", "EDA"],
        files: [
          { label: "Notebook analisis", path: "files/notebooks/contoh-analisis.ipynb" }
          // Contoh menambah presentasi (hapus tanda // di depan baris di bawah setelah file diunggah):
          // , { label: "Slide presentasi", path: "files/slides/analisis.pptx" }
        ]
      }
    ]
  },
  {
    id: "ml",
    title: "Modul 3 · Machine Learning",
    desc: "Membangun dan mengevaluasi model prediktif: regresi, klasifikasi, dan clustering.",
    skills: ["Scikit-learn", "Regresi", "Klasifikasi", "Clustering", "Evaluasi Model"],
    projects: [
      {
        title: "Contoh Proyek Machine Learning",
        desc: "Ganti dengan deskripsi proyek ML Anda: masalah, model yang dipakai, dan hasil metrik.",
        tags: ["Scikit-learn", "Klasifikasi"],
        files: [
          { label: "Notebook model", path: "files/notebooks/contoh-ml.ipynb" }
        ]
      }
    ]
  }
];
