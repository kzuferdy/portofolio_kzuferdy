// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/flutter.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/fire.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ferdy Mohamad",
  tagline: "Ini Web Portofolio Saya",
  img: profile,
  about: `Saya adalah seorang Junior Fullstack Developer dengan fokus utama pada pengembangan aplikasi menggunakan Flutter. Sebagai fresh graduate, saya telah menuntaskan tiga proyek mandiri yang mencakup pengembangan aplikasi dari front-end hingga back-end. Pengalaman ini telah membekali saya dengan keterampilan dalam merancang, mengembangkan, dan menguji aplikasi secara menyeluruh.
Saya selalu antusias untuk belajar teknologi baru dan berkolaborasi dalam tim untuk menciptakan solusi yang inovatif dan efisien. Saya percaya bahwa kemampuan saya untuk bekerja secara independen maupun dalam tim, serta dedikasi saya terhadap pengembangan perangkat lunak, akan menjadi aset yang berharga bagi perusahaan yang ingin menciptakan aplikasi mobile yang menarik dan fungsional.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/kzuferdy-0749b41b7",
  github: "https://www.github.com/kzuferdy",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Fullstack Flutter Developer",
    Company: `Sanbercode Bootcamp`,
    Location: "Bandung",
    Type: "Course",
    Duration: "Juni 2024 - Agustus 2024",
  },
  {
    Position: "Program Kreasi Mahasiswa",
    Company: `Universitas Bhakti Kencana`,
    Location: "Bandung",
    Type: "Programmer",
    Duration: "Juni 2022 - Dec 2022",
  },
  {
    Position: "Magang",
    Company: `Rumah Sakit Cicendo`,
    Location: "Cicendo, Bandung",
    Type: "Programmer",
    Duration: "Agustus 2022 - September 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Sarjana Teknik Informatika S-1",
    Company: "Universitas Komputer Indonesia",
    Location: "Dipatiukur, Bandung",
    Type: "Lulus",
    Duration: "September 2019 - Mei 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "MOAPPS Movie Apps",
    image: projectImage1,
    description: `Moapps adalah project yang dibuat menggunakan bahasa kotlin dan menggunakan layanan cloud database seperti Firebase`,
    techstack: "Kotlin, Firebase",
    previewLink: "",
    githubLink: "https://github.com/kzuferdy/MOAP_Movie_Apps",
  },
  {
    title: "InGameApps",
    image: projectImage2,
    description: `InGameApp adalah project PKM (Program Kreasi Mahasiswa) yang dibuat menggunakan bahasa kotlin, menambahkan beberapa assets gambar, quiz, alarm pengingat dsb, aplikasi ini bertujuan untuk mengedukasi pelajar agar tidak selalu bermain game dan ingat waktu (diingatkan oleh alarm), dan juga digunakan untuk penelitian mahasiswa.`,
    techstack: "Kotlin",
    previewLink: "https://google.com",
    githubLink: "https://github.com/kzuferdy/InGameApps",
  },
  {
    title: "POS APPS SHOP",
    image: projectImage3,
    description: `POS APPS SHOP adalah aplikasi e-commerce 
berbasis Point Of Sales Atau POS bisa membeli barang dari ataupun menjual product apa saja. Project ini dibuat untuk final project Superbootcamp Sanbercode.`,
    techstack: "Flutter, Bloc, Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com/kzuferdy/final_project_bootcamp",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `Aplikasi Edukasi dan Kuis ini di buat untuk mengedukasi siswa dan untuk pembelajaran PKN, menggunakan state manajemen MVVC`,
    techstack: "Flutter",
    previewLink: "https://google.com",
    githubLink: "https://github.com/kzuferdy/quiz_app",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "kzuferdy@gmail.com",
  phone: "+62 87823725271",
};
