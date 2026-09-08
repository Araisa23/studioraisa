/**
 * ============================================================================
 *  PORTFOLIO CONTENT CONFIG
 * ----------------------------------------------------------------------------
 *  Seluruh konten website ada di file ini. Ganti nilai di bawah dengan data
 *  asli Anda (nama, link, project, skill, pengalaman, galeri, kontak).
 *  Tidak perlu menyentuh file komponen lain untuk memperbarui isi.
 * ============================================================================
 */

export const profile = {
  // Ganti dengan nama lengkap Anda
  fullName: "Raisatul Humairah",
  // Nama pendek untuk sapaan hero, mis. "[NAMA]"
  shortName: "Raisa",
  photo: "/profile-raisa.png", // ganti dengan foto asli Anda (format: JPG/PNG, rasio 1:1, ukuran < 1MB)
  degree: "A.Md.Kom", // sesuaikan gelar
  major: "Teknik Informatika",
  university: "Politeknik Negeri Banjarmasin",
  gpa: "3,74",
  status: "Fresh Graduate",
  yudisiumDate: "19 Agustus 2026",
  graduationDate: "23 September 2026",
  location: "Banjarmasin, Kalimantan Selatan, Indonesia",
  roles: [
    "UI/UX Designer",
    "Web Developer",
    "Software Tester",
    "Graphic Designer",
    "Video Editor",
    "Copy Writer",
  ],
  heroHeadline:
    "Designing interfaces, building web experiences, and testing them with purpose.",
  heroDescription:
    "Saya merupakan lulusan Teknik Informatika Politeknik Negeri Banjarmasin dengan IPK 3,74 yang memiliki ketertarikan pada UI/UX Design, Web Development, Software Testing, dan Graphic Design.",
}

export const contact = {
  // Ganti "#" dengan link asli. Kosongkan (biarkan "#") jika belum tersedia.
  email: "raisatulhumairah23@gmail.com",
  phone: "+62 831-2609-8924",
  linkedin: "https://www.linkedin.com/in/raisatul-humairah-aa6749316",
  github: "https://github.com/Araisa23",
  instagram: "https://www.instagram.com/raissaa.ca?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  cvUrl: "/cv.pdf", // link file CV/resume (PDF)
  workingTogether:
    "Saya terbuka untuk kesempatan kerja, internship, freelance, maupun kolaborasi yang berkaitan dengan UI/UX Design, Web Development, Software Testing, dan Graphic Design.",
}

export const about = {
  paragraphs: [
    "Saya seorang fresh graduate Teknik Informatika Politeknik Negeri Banjarmasin. Selama masa studi, saya membangun fondasi kuat di pengembangan web dan desain antarmuka, sambil aktif terlibat dalam kegiatan organisasi selama kurang lebih dua tahun.",
    "Ketertarikan utama saya ada pada titik temu antara desain dan teknologi: merancang antarmuka yang jelas, membangun aplikasi web yang rapi, lalu mengujinya agar benar-benar berfungsi. Saya terbiasa bekerja dalam tim dan menyelesaikan masalah secara sistematis.",
  ],
}

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX Design",
    description: "Merancang alur dan antarmuka yang jelas dan mudah digunakan.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flow", "Design System", "Usability"],
  },
  {
    title: "Web Development",
    description: "Membangun sistem dan tampilan web yang responsif, terstruktur, dan fungsional.",
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "HTML/CSS", "RESTful API"],
  },
  {
    title: "Software Testing",
    description: "Memastikan fitur berjalan sesuai skenario yang diharapkan.",
    skills: ["Black-Box Testing", "Test Case Design", "Functional Testing", "Bug Reporting"],
  },
  {
    title: "Graphic Design",
    description: "Menyusun visual yang komunikatif dan konsisten.",
    skills: ["Poster", "Feed & Story", "Sertifikat", "Branding", "Layout", "Typography"],
  },
  {
    title: "Video Editing",
    description: "Mengedit dan menyusun konten video yang menarik dan sesuai kebutuhan.",
    skills: ["CapCut", "Color Grading", "Logo Motion", "Transition", "Storyboarding"],
  },
  {
    title: "Copy Writer",
    description: "Menulis pesan yang jelas, persuasif, dan sesuai target audiens.",
    skills: ["Caption Writing", "Ad Copy", "Content Planning", "Tone of Voice", "Storytelling", "SEO Basic"],
  },
]

/* -------------------------------------------------------------------------- */
/*  FEATURED PROJECT — Tugas Akhir (Sistem Presensi)                          */
/* -------------------------------------------------------------------------- */

export const featuredProject = {
  title: "Sistem Presensi Tenaga Kependidikan",
  subtitle: "Web-based Attendance System · Tugas Akhir",
  teamNote: "Proyek tim (2 orang)",
  description:
    "Sistem presensi berbasis web untuk tenaga kependidikan Politeknik Negeri Banjarmasin yang dikembangkan untuk meningkatkan validitas dan keamanan proses presensi melalui kombinasi swafoto, validasi lokasi, face liveness detection, location-based anomaly detection, dan device binding.",
  background:
    "Tugas Akhir ini di rancang dan dibangun dengan mempertahankan mekanisme validasi lokasi yang telah digunakan sebelumnya, kemudian menambahkan dokumentasi swafoto melalui kamera real time dengan verifikasi liveness, pendeteksian anomali lokasi untuk mengurangi risiko manipulasi GPS, serta pembatasan penggunaan akun melalui mekanisme registrasi perangkat. Dengan penerapan fitur tersebut, sistem diharapkan mampu meningkatkan keamanan, keakuratan, dan keandalan proses presensi.",
  approach:
    "Sistem dikembangkan dengan menggabungkan validasi lokasi yang sudah ada dengan lapisan keamanan baru: dokumentasi swafoto, face liveness detection, deteksi anomali berbasis lokasi, dan device binding.",
  method: {
    name: "Waterfall",
    steps: [
      {
        title: "Analisis Kebutuhan",
        description:
          "Mengidentifikasi kebutuhan fungsional sistem presensi berdasarkan proses yang sudah berjalan, termasuk kebutuhan validasi lokasi, dokumentasi swafoto, dan lapisan keamanan tambahan.",
      },
      {
        title: "Desain Sistem",
        description:
          "Merancang arsitektur sistem, alur presensi (user flow), struktur database, serta antarmuka untuk fitur swafoto, geofencing, dan device binding.",
      },
      {
        title: "Implementasi",
        description:
          "Mengembangkan sistem menggunakan Laravel dan MySQL, mengintegrasikan Geolocation API, Camera API, serta OpenStreetMap untuk validasi lokasi.",
      },
      {
        title: "Pengujian",
        description:
          "Melakukan black-box testing terhadap setiap fitur (login, swafoto, validasi lokasi, device binding) untuk memastikan sistem berjalan sesuai skenario yang diharapkan.",
      },
      {
        title: "Pemeliharaan",
        description:
          "Memantau performa sistem setelah implementasi dan melakukan perbaikan atau penyesuaian bila ditemukan bug atau kebutuhan baru.",
      },
    ],
  },
  techStack: [
    "Laravel",
    "PHP",
    "MySQL",
    "JavaScript",
    "Tailwind CSS",
    "Geolocation API",
    "Camera API",
    "OpenStreetMap",
    "Git",
  ],
  keyFeatures: [
    "Swafoto sebagai dokumentasi presensi",
    "Validasi lokasi (geofencing) dengan OpenStreetMap",
    "Face liveness detection",
    "Location-based anomaly detection",
    "Device binding per pengguna",
  ],
  gallery: [
    { src: "/projects/presensi-dashboard.png", caption: "Dashboard rekap presensi" },
    { src: "/projects/presensi-selfie.png", caption: "Swafoto & face liveness" },
    { src: "/projects/presensi-map.png", caption: "Validasi lokasi (geofencing)" },
  ],
  heroMockup: "/projects/presensi-dashboard.png",

  challenges: [
    {
      challenge:
        "Memastikan foto presensi adalah wajah asli, bukan foto dari layar/cetakan.",
      solution:
        "Menambahkan face liveness detection untuk memverifikasi kehadiran nyata sebelum presensi disimpan.",
    },
    {
      challenge:
        "Mencegah manipulasi lokasi agar presensi tetap valid secara geografis.",
      solution:
        "Menggunakan Geolocation API + geofencing OpenStreetMap dan location-based anomaly detection untuk menandai lokasi yang tidak wajar.",
    },
    {
      challenge:
        "Menghindari satu akun dipakai di banyak perangkat untuk titip presensi.",
      solution:
        "Menerapkan device binding sehingga akun terikat pada perangkat terdaftar.",
    },
  ],

  myContribution: [
    "Merancang user flow, struktur basis data (MySQL), dan arsitektur logika back-end menggunakan kerangka kerja Laravel.",
    "Mengembangkan RESTful API/routing backend serta mengintegrasikan Camera API dan Geolocation API berbasis peramban untuk mekanisme validasi lokasi dan data swafoto secara real-time.",
    "Mengimplementasikan fitur otomatisasi pemrosesan presensi harian, sistem task scheduling, serta manajemen peran (role/permission) pengguna.",
    "Melakukan pengujian fungsional seluruh alur sistem menggunakan metode Black Box Testing guna memastikan performa back-end dan alur data berjalan akurat serta bebas dari kendala teknis.",
  ],

}

/* -------------------------------------------------------------------------- */
/*  TESTING — hanya data pengujian yang benar-benar dimiliki                  */
/* -------------------------------------------------------------------------- */

export type TestRow = {
  feature: string
  scenario: string
  expected: string
  actual: string
  status: "PASS" | "FAILED"
}

export const testResults: TestRow[] = [
  {
    feature: "Login",
    scenario: "Login dengan kredensial valid",
    expected: "Pengguna berhasil masuk ke dashboard",
    actual: "Pengguna masuk ke dashboard",
    status: "PASS",
  },
  {
    feature: "Swafoto",
    scenario: "Presensi tanpa deteksi wajah hidup",
    expected: "Presensi ditolak",
    actual: "Presensi ditolak",
    status: "PASS",
  },
  {
    feature: "Validasi Lokasi",
    scenario: "Presensi di luar radius yang ditentukan",
    expected: "Presensi ditolak dengan pesan lokasi tidak valid",
    actual: "Presensi ditolak",
    status: "PASS",
  },
  {
    feature: "Device Binding",
    scenario: "Login akun dari perangkat tidak terdaftar",
    expected: "Akses dibatasi / perlu verifikasi",
    actual: "Akses dibatasi",
    status: "PASS",
  },
]

export const testingNote =
  "Pengujian menggunakan metode black-box testing berdasarkan skenario fungsional. Tabel di atas menampilkan hasil pengujian yang benar-benar dilakukan pada proyek tugas akhir."


/* -------------------------------------------------------------------------- */
/*  WEB PROJECTS                                                              */
/* -------------------------------------------------------------------------- */

export type WebProject = {
  title: string
  description: string
  tech: string[]
  preview?: string
  live: string
  code: string
}

export const webProjects: WebProject[] = [
  {
    title: "SISTEM PRESENSI BERBASIS WEB UNTUK POLITEKNIK NEGERI BANJARMASIN",
    description:
      "Aplikasi presensi berbasis web dengan swafoto, validasi lokasi, dan lapisan keamanan tambahan (Tugas Akhir, tim 2 orang).",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    preview: "/projects/dashboard-pegawai.png",
    live: "#",
    code: "#",
  },
]

/* -------------------------------------------------------------------------- */
/*  GRAPHIC DESIGN                                                            */
/* -------------------------------------------------------------------------- */

export type DesignWork = {
  title: string
  categories: string[]
  src?: string
  size?: "tall" | "wide" | "normal"
  videoUrl?: string // link embed YouTube, contoh: "https://www.youtube.com/embed/VIDEO_ID"
}

export const designCategories = ["Semua", "Poster", "Video","Feed", "Story", "Sertifikat", "Branding"]

export const designWorks: DesignWork[] = [
  {
    title: "Flyer Promosi Pelatihan",
    categories: ["Poster"],
    src: "/design/flyer-1.png",
    size: "tall",
  },
  {
    title: "Poster Ucapan",
    categories: ["Poster"],
    src: "/design/poster-guru.png",
    size: "tall",
  },
  {
    title: "Poster Hiring Internship",
    categories: ["Poster"],
    src: "/design/hiring-intern.png",
    size: "tall",
  },
  {
    title: "Feed Edukasi",
    categories: ["Feed"],
    src: "/design/edukasi-1.png",
    size: "tall",
  },
  {
    title: "Feed Edukasi",
    categories: ["Feed"],
    src: "/design/edukasi-2.png",
    size: "tall",
  },
  {
    title: "Feed Edukasi",
    categories: ["Feed"],
    src: "/design/edukasi-3.png",
    size: "tall",
  },
  {
    title: "Press Release",
    categories: ["Feed"],
    src: "/design/press-release.png",
    size: "tall",
  },
  {
    title: "Live Report Mingguan",
    categories: ["Story"],
    src: "/design/live-report.png",
    size: "tall",
  },
  {
    title: "Sertifikat Kompetensi TLC",
    categories: ["Sertifikat"],
    src: "/design/sertifikat-tlc.png",
    size: "wide",
  },
  {
    title: "Logo Kegiatan Maban & Pengmas 2025",
    categories: ["Branding"],
    src: "/design/maban-hme-2025.jpeg",
    size: "normal",
  },
  {
    title: "Logo Kegiatan Electro Days 2025",
    categories: ["Branding"],
    src: "/design/edays-hme-2025.png",
    size: "normal",
  },
  {
    title: "Bumper Opening TLC 2025",
    categories: ["Video"],
    videoUrl: "https://www.youtube.com/embed/7foR1ZUp1go",
    size: "wide",
  },
  // dst...
]

/* -------------------------------------------------------------------------- */
/*  BEYOND CODE — Pengalaman Organisasi                                       */
/* -------------------------------------------------------------------------- */

export type OrgEvent = {
  code: string
  event: string
  position: string
  period?: string
  responsibilities: string[]
}

export const beyondCode = {
  intro:
    "Pengalaman organisasi di Himpunan Mahasiswa Elektro membantu saya mengembangkan kemampuan kepemimpinan, komunikasi publik, manajemen proyek, administrasi, dan koordinasi tim lintas divisi.",
  events: [
    {
      code: "EVENT 01",
      event: "Latihan Dasar Kepemimpinan (LDK)",
      position: "Sekretaris Acara",
      period: "2023 – 2024",
      responsibilities: [
        "Menyusun proposal kegiatan, surat-menyurat resmi, rancangan susunan acara, hingga Laporan Pertanggungjawaban (LPJ).",
        "Mencatat seluruh keputusan rapat serta mengelola lini masa persiapan acara secara sistematis.",
        "Mengoordinasikan kebutuhan administratif dan berkoordinasi langsung dengan ketua pelaksana serta divisi terkait.",
      ],
    },
    {
      code: "EVENT 02",
      event: "Malam Keakraban",
      position: "Koordinator Seksi PDD",
      period: "2023 – 2024",
      responsibilities: [
        "Mengoordinasikan pembuatan aset visual, spanduk, sertifikat, dan media publikasi acara.",
        "Mengarahkan tim dalam pengambilan dokumentasi lapangan serta pengolahan hasil akhir media sosial.",
        "Menjaga konsistensi identitas visual (branding) untuk seluruh rangkaian kegiatan.",
      ],
    },
    {
      code: "EVENT 03",
      event: "Open Recruitment HME",
      position: "Koordinator Seksi Kesekretariatan",
      period: "2023 – 2024",
      responsibilities: [
        "Mengelola alur pendaftaran, mekanisme formulir digital, dan pangkalan data calon anggota.",
        "Mengoordinasikan ketersediaan ruang, sarana, serta jadwal wawancara peserta.",
        "Menyusun rekapitulasi akhir kelengkapan berkas peserta untuk proses seleksi kepengurusan.",
      ],
    },
    {
      code: "EVENT 04",
      event: "Pengenalan Jurusan Elektro",
      position: "Koordinator Seksi Humas",
      period: "2023 – 2024",
      responsibilities: [
        "Memimpin alur komunikasi internal dan eksternal dengan pihak jurusan, pembicara, serta tamu undangan.",
        "Merancang strategi penyebaran informasi dan publikasi agenda kegiatan kepada mahasiswa baru.",
        "Mengoordinasikan anggota tim Humas dalam menjalankan fungsi keprotokoleran acara.",
      ],
    },
    {
      code: "EVENT 05",
      event: "Temu Pengurus HME",
      position: "Koordinator Seksi Konsumsi",
      period: "2023 – 2024",
      responsibilities: [
        "Mengoordinasikan tim dalam perencanaan anggaran, alokasi logistik, dan penyediaan makanan/minuman.",
        "Mengatur jadwal pembagian konsumsi agar selaras dengan alur dan efisiensi waktu kegiatan.",
        "Menjadi penanggung jawab utama dalam mengelola hubungan dan negosiasi dengan vendor.",
      ],
    },
    {
      code: "EVENT 06",
      event: "Program Kreatif Konten S3 HME",
      position: "Sekretaris Acara",
      period: "2023 – 2024",
      responsibilities: [
        "Mengelola pendaftaran serta jadwal publikasi konten kreatif organisasi secara terstruktur.",
        "Menyusun dokumentasi tertulis, notulensi rapat, dan laporan berkala pelaksanaan program kerja.",
        "Memfasilitasi koordinasi lintas divisi untuk kelancaran produksi dan unggah konten.",
      ],
    },
  ] as OrgEvent[],
  gallery: [
    { src: "/hme/tepung-2024.jpeg", caption: "Temu Pengurus HME 2024" },
    { src: "/hme/maban-2024.jpg", caption: "Malam Keakraban Mahasiswa Jurusan Teknik Elektro (Maban) 2024" },
    { src: "/hme/mubes-2024.jpg", caption: "Musyawarah Besar (MUBES) 2024" },
    { src: "/hme/edays-2024.jpeg", caption: "Electro Days 2024" },
    { src: "/hme/oprec-2024.jpeg", caption: "Open Recruitment HME 2024" },
    { src: "/hme/pengmas-2024.jpg", caption: "Pengabdian Masyarakat Mahasiswa Jurusan Teknik Elektro (Pengmas) 2024" },
    { src: "/hme/ldk-2024.jpg", caption: "Latihan Dasar Kepemimpinan (LDK) 2024" },
    { src: "/hme/oprec-2025.jpg", caption: "Open Recruitment HME 2025" },
    { src: "/hme/maban-2025.jpeg", caption: "Malam Keakraban Mahasiswa Jurusan Teknik Elektro (Maban) 2025" },
    { src: "/hme/edays-2025.jpeg", caption: "Electro Days 2025" },
    { src: "/hme/pengmas-2025.jpeg", caption: "Pengabdian Masyarakat Mahasiswa Jurusan Teknik Elektro (Pengmas) 2025" },
  ],
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#featured" },
  { label: "Case Study", href: "#case-study" },
  { label: "Design", href: "#design" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]