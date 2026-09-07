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
  fullName: "[NAMA LENGKAP]",
  // Nama pendek untuk sapaan hero, mis. "[NAMA]"
  shortName: "[NAMA]",
  degree: "S.Tr.Kom", // sesuaikan gelar
  major: "Teknik Informatika",
  university: "Politeknik Negeri Banjarmasin",
  gpa: "3,74",
  status: "Fresh Graduate",
  yudisiumDate: "19 Agustus 2026",
  graduationDate: "23 September 2026",
  location: "Banjarmasin, Indonesia",
  roles: [
    "UI/UX Designer",
    "Front-End Developer",
    "Software Tester",
    "Graphic Designer",
  ],
  heroHeadline:
    "Designing interfaces, building web experiences, and testing them with purpose.",
  heroDescription:
    "Saya merupakan lulusan Teknik Informatika Politeknik Negeri Banjarmasin dengan IPK 3,74 yang memiliki ketertarikan pada UI/UX Design, Front-End Development, Software Testing, dan Graphic Design.",
}

export const contact = {
  // Ganti "#" dengan link asli. Kosongkan (biarkan "#") jika belum tersedia.
  email: "your.email@example.com",
  phone: "+62 8xx-xxxx-xxxx",
  linkedin: "#",
  github: "#",
  instagram: "#",
  cvUrl: "#", // link file CV/resume (PDF)
  workingTogether:
    "Saya terbuka untuk kesempatan kerja, internship, freelance, maupun kolaborasi yang berkaitan dengan UI/UX Design, Front-End Development, Software Testing, dan Graphic Design.",
}

export const about = {
  paragraphs: [
    "Saya seorang fresh graduate Teknik Informatika Politeknik Negeri Banjarmasin. Selama masa studi, saya membangun fondasi kuat di pengembangan web dan desain antarmuka, sambil aktif terlibat dalam kegiatan organisasi selama kurang lebih dua tahun.",
    "Ketertarikan utama saya ada pada titik temu antara desain dan teknologi: merancang antarmuka yang jelas, membangun front-end yang rapi, lalu mengujinya agar benar-benar berfungsi. Saya terbiasa bekerja dalam tim dan menyelesaikan masalah secara sistematis.",
  ],
  highlights: [
    { label: "IPK", value: "3,74" },
    { label: "Status", value: "Fresh Graduate" },
    { label: "Fokus", value: "UI/UX · Front-End · QA" },
    { label: "Organisasi", value: "±2 Tahun" },
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
    title: "Front-End Development",
    description: "Membangun tampilan web yang responsif dan rapi.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Laravel Blade", "Responsive Design"],
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
    "Sistem presensi sebelumnya telah menggunakan validasi lokasi, tetapi belum memiliki dokumentasi swafoto dan mekanisme keamanan tambahan untuk meningkatkan validitas presensi.",
  approach:
    "Sistem dikembangkan dengan menggabungkan validasi lokasi yang sudah ada dengan lapisan keamanan baru: dokumentasi swafoto, face liveness detection, deteksi anomali berbasis lokasi, dan device binding.",
  method: {
    name: "Waterfall",
    steps: ["Analisis Kebutuhan", "Desain Sistem", "Implementasi", "Pengujian", "Pemeliharaan"],
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
  // Screenshot yang tampil di gallery + hero mockup (bisa diganti dengan tangkapan layar asli)
  gallery: [
    { src: "/projects/presensi-dashboard.png", caption: "Dashboard rekap presensi" },
    { src: "/projects/presensi-selfie.png", caption: "Swafoto & face liveness" },
    { src: "/projects/presensi-map.png", caption: "Validasi lokasi (geofencing)" },
  ],
  heroMockup: "/projects/presensi-dashboard.png",

  // Isi dengan pengalaman nyata Anda. Sesuaikan sesuai kontribusi masing-masing.
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

  // GANTI dengan kontribusi Anda yang sebenarnya. Jangan mengklaim seluruh sistem.
  myContribution: [
    "[Tuliskan bagian yang benar-benar Anda kerjakan, mis. front-end antarmuka presensi]",
    "[Contoh: implementasi integrasi Camera API & tampilan swafoto]",
    "[Contoh: perancangan UI dan penyusunan test case fungsional]",
  ],

  links: {
    // Biarkan "#" jika belum tersedia — tombol akan tampil non-aktif.
    live: "#",
    code: "#",
  },
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
  // Tambahkan baris pengujian lain sesuai data nyata Anda.
]

export const testingNote =
  "Pengujian menggunakan metode black-box testing berdasarkan skenario fungsional. Tabel di atas menampilkan hasil pengujian yang benar-benar dilakukan pada proyek tugas akhir."

/* -------------------------------------------------------------------------- */
/*  UI/UX CASE STUDY                                                          */
/* -------------------------------------------------------------------------- */

export type CaseStudyStep = { title: string; body: string }

export const caseStudies = [
  {
    title: "Sistem Presensi — UX Perspective",
    tagline: "Studi kasus alur presensi yang aman dan mudah",
    steps: [
      {
        title: "Problem",
        body: "Proses presensi lama rawan manipulasi dan belum ada dokumentasi visual untuk memvalidasi kehadiran.",
      },
      {
        title: "Research / Requirement",
        body: "Kebutuhan diturunkan dari sistem presensi yang sudah berjalan dan kebutuhan validitas kehadiran. (Catatan: gunakan hanya kebutuhan yang benar-benar dianalisis, tanpa mengarang riset pengguna.)",
      },
      {
        title: "User Flow",
        body: "Login → verifikasi perangkat → ambil swafoto (liveness) → validasi lokasi → presensi tersimpan.",
      },
      {
        title: "Wireframe",
        body: "Menyusun kerangka layar presensi: kamera, status lokasi, dan konfirmasi kehadiran.",
      },
      {
        title: "Visual Design",
        body: "Antarmuka bersih dengan hierarki jelas, status berwarna, dan tombol aksi utama yang menonjol.",
      },
      {
        title: "Prototype",
        body: "Alur presensi diuji secara fungsional untuk memastikan setiap langkah berjalan sesuai skenario.",
      },
      {
        title: "Final Result",
        body: "Sistem presensi web dengan swafoto, validasi lokasi, dan lapisan keamanan tambahan.",
      },
    ] as CaseStudyStep[],
    mockups: [
      "/projects/presensi-selfie.png",
      "/projects/presensi-map.png",
      "/projects/presensi-dashboard.png",
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  WEB PROJECTS                                                              */
/* -------------------------------------------------------------------------- */

export type WebProject = {
  title: string
  description: string
  tech: string[]
  preview?: string // path screenshot; kosongkan untuk placeholder
  live: string // "#" jika belum tersedia
  code: string // "#" jika belum tersedia
}

export const webProjects: WebProject[] = [
  {
    title: "Sistem Presensi Web",
    description:
      "Aplikasi presensi berbasis web dengan swafoto, validasi lokasi, dan lapisan keamanan tambahan (Tugas Akhir, tim 2 orang).",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    preview: "/projects/presensi-dashboard.png",
    live: "#",
    code: "#",
  },
  {
    title: "[Nama Project Web Anda]",
    description:
      "[Deskripsi singkat project. Ganti dengan project web Anda yang lain atau hapus item ini.]",
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "", // kosong = tampil placeholder
    live: "#",
    code: "#",
  },
]

/* -------------------------------------------------------------------------- */
/*  GRAPHIC DESIGN — placeholder, ganti dengan karya asli                     */
/* -------------------------------------------------------------------------- */

export type DesignWork = {
  title: string
  category: string
  // Path gambar karya asli Anda. Kosongkan untuk menampilkan placeholder.
  src?: string
  // ukuran di grid masonry: "tall" | "wide" | "normal"
  size?: "tall" | "wide" | "normal"
}

export const designCategories = ["Semua", "Poster", "Feed & Story", "Sertifikat", "Branding"]

export const designWorks: DesignWork[] = [
  { title: "[Poster Kegiatan]", category: "Poster", size: "tall" },
  { title: "[Instagram Feed]", category: "Feed & Story", size: "normal" },
  { title: "[Sertifikat Acara]", category: "Sertifikat", size: "wide" },
  { title: "[Logo / Branding]", category: "Branding", size: "normal" },
  { title: "[Instagram Story]", category: "Feed & Story", size: "tall" },
  { title: "[Poster Seminar]", category: "Poster", size: "normal" },
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
    "Pengalaman organisasi membantu saya mengembangkan kemampuan komunikasi, teamwork, problem solving, coordination, dan adaptability di luar lingkungan akademik.",
  events: [
    {
      code: "EVENT 01",
      event: "[Nama Kegiatan / Acara]",
      position: "Coordinator",
      period: "[Tahun]",
      responsibilities: [
        "[Mengoordinasikan tim dan pembagian tugas]",
        "[Memastikan agenda berjalan sesuai rencana]",
        "[Menjadi penghubung antar divisi]",
      ],
    },
    {
      code: "EVENT 02",
      event: "[Nama Kegiatan / Acara]",
      position: "Event Secretary",
      period: "[Tahun]",
      responsibilities: [
        "[Menyusun dokumentasi dan notulensi]",
        "[Mengelola surat-menyurat dan administrasi]",
        "[Mendukung koordinasi jadwal kegiatan]",
      ],
    },
    {
      code: "EVENT 03",
      event: "[Nama Kegiatan / Acara]",
      position: "Committee Member",
      period: "[Tahun]",
      responsibilities: [
        "[Terlibat dalam persiapan teknis acara]",
        "[Membantu pelaksanaan di lapangan]",
        "[Berkolaborasi dengan anggota panitia lain]",
      ],
    },
  ] as OrgEvent[],
  // Galeri dokumentasi kegiatan — ganti dengan foto asli. Kosong = placeholder.
  gallery: [
    { src: "", caption: "[Dokumentasi kegiatan 1]" },
    { src: "", caption: "[Dokumentasi kegiatan 2]" },
    { src: "", caption: "[Dokumentasi kegiatan 3]" },
    { src: "", caption: "[Dokumentasi kegiatan 4]" },
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
