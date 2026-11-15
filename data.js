/* =====================================================================
   FILE INI SATU-SATUNYA YANG PERLU ANDA EDIT UNTUK MENGISI KONTEN.
   Ganti teks di dalam tanda kutip "..." dengan data Anda.
   Jangan hapus tanda kutip, koma, atau kurung.
   ===================================================================== */

const PROFILE = {
  name: "Raffy Reyhan Ramadhana",
  role: "Data Analyst · Data Scientist",
  tagline: "Electrical Engineer transitioning into Data Analysis and Machine Learning, turning industrial data into decisions.",
  photo: "files/B9.jpg",
  about:
    "Electrical Engineering graduate transitioning into data. I combine a background in industrial instrumentation and manufacturing with practical skills in Python, Data Analysis, and Machine Learning to turn data into actionable insights. ",

  // --- Kontak (kosongkan dengan "" jika tidak ingin ditampilkan) ---
  github:   "https://github.com/raffyreyhan",
  linkedin: "https:/www.linkedin.com/in/raffy-reyhan-ramadhana-724070364",
  email:    "raffyreyhan2902@gmail.com",
  phone:    "",

  // --- Lokasi repository GitHub tempat situs ini disimpan ---
  // Format: "USERNAME/NAMA_REPO". Dipakai untuk membuat tombol "Lihat di GitHub".
  repo: "raffyreyhan/Web-Portofolio",
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
