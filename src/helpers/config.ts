import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Muhamad Alfin Pratama',
  description: '',
  additionalFeeds: [
    {
      label: '',
      url: '',
    },
  ],
  source: 'https://github.com/AlfinPratamaa/portfolio',
  baseUrl: 'https:/evrea.tech',
  initialFeeds: [
    {
      label: 'Notes',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blog.atom',
    },
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'currently empty',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links and contact form',
    },
  ],
  footerInfo: {
    author: 'Alfin Pratama',
    authorSite: 'https://github.com/Alfinpratamaa',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'Alfinpratamaa',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      // background: '#101010',
      // foreground: '#fafafa',
      // 'dimmed-text': '#808080',
      // 'card-background': '#1b1b1b',
      // 'card-border': '1px solid #2a2a2a',
      // 'code-background': '#333',
      // accent: '#01c0f0',
      // 'accent-1': '#ff0099',
      // 'accent-2': '#b45eff',
      // 'accent-3': '#01c0f0',
      // 'accent-4': '#1de691',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      // background: '#ededed',
      // foreground: '#2a3367',
      // 'card-background': '#F8F8FF',
      // 'card-border': '1px solid #0000001a',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
      // 'home-animated-gradient-outer': '#ffe7f500',
      // 'home-animated-gradient-inner': '#ff8ed05c',
    },
    callisto: {
      // background: '#020617',
      // foreground: '#dcdcdc',
      // 'dimmed-text': '#8892b0',
      // 'card-background': '#0b1021',
      // 'card-border': '1px solid #ffffff1a',
      // 'accent-1': '#00ccb4',
      // 'accent-2': '#00ccb4',
      // 'accent-3': '#00ccb4',
      // 'accent-4': '#00ccb4',
      // 'voronoi-background': '#0a192f',
      // 'home-accent-background': '#fff',
      // 'home-tile-background': '#0B1021',
      // 'home-animated-gradient-outer': '#0361f700',
      // 'home-animated-gradient-inner': '#2e2d40',
    },
  },
  workExperience: [
    {
      company: 'Pilih Jurusan',
      companyUrl: 'https://pilihjurusan.id/',
      companyLogo: 'https://pilihjurusan.id/favicon.ico',
      jobTitle: 'Frontend Developer (Intern)',
      projectType: 'Internship',
      datesWorked: 'September 2024 - Desember 2024',
      responsibilities:
        'Mereorganisasi aset dan komponen untuk meningkatkan kebersihan kode dan reusabilitas. ' +
        'Menyesuaikan dan mengimplementasikan pengujian unit menggunakan Cypress sesuai kode terbaru. ' +
        'Mengembangkan section dan halaman baru berdasarkan permintaan project manager. ' +
        'Membangun CMS dengan integrasi Firebase dan interaksi data menggunakan server action di Next.js.',
      technologies: ['nextjs', 'Cypress', 'firebase', 'TypeScript'],
    },
    {
      company: 'Freelance',
      companyUrl: 'https://alfinpratama.dev/',
      companyLogo: 'https://i.ibb.co/Dt6kGFQ/brick.png',
      projectType: 'Freelance',
      jobTitle: 'Web Developer',
      datesWorked: 'Maret 2023 - Sekarang',
      responsibilities:
        'Desain dan implementasi tata letak situs web yang mengutamakan seluler dan fitur interaktif. ' +
        'Berkolaborasi dengan API publik atau API sendiri. ' +
        'Mendesain dan mengimplementasikan tata letak situs web yang meningkatkan responsivitas mobile. ' +
        'Menulis kode yang rapi, mudah dipelihara, dan efisien sesuai dengan standar web terbaru. ' +
        'Mengkoordinasikan penguji untuk mendapatkan wawasan tentang bidang-bidang utama yang perlu ditingkatkan.',
      technologies: ['React', 'nextjs', 'TypeScript', 'openapiinitiative'],
    },
    {
      company: 'Project E-Commerce ( Project Kuliah )',
      companyUrl: 'https://ngabaca.me',
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWjtj1akRm0OaWR2trJgmt5ncFZysIhm0NHETSD8ZSwkNh24nOJtJZfg&usqp=CAE&s',
      jobTitle: 'Team Lead',
      datesWorked: 'Mei 2025 - Sekarang',
      responsibilities:
        'Memimpin tim dalam pengembangan proyek aplikasi web e-commerce. ' +
        'Merancang dan mengimplementasikan database migration serta model. ' +
        'Menerapkan Role-Based Access Control (RBAC) untuk autentikasi. ' +
        'Mengembangkan fitur manajemen buku (CRUD). ' +
        'Mengimplementasikan integrasi payment gateway. ' +
        'Membangun fitur add to cart dan checkout. ' +
        'Mengatur CI/CD untuk deployment di AWS.',
      projectType: 'Projects Kuliah',
      technologies: ['laravel', 'MySQL', 'docker', 'githubactions', 'php'],
    },
    {
      company: 'Project Web Komik',
      companyUrl: '',
      companyLogo: 'https://i.ibb.co/Dt6kGFQ/brick.png',
      jobTitle: 'Full-Stack Developer',
      datesWorked: 'Maret 2024 - Mei 2024',
      responsibilities:
        'Mengembangkan API dengan memanfaatkan data yang diambil dari situs web lain. ' +
        'Membuat Rest Api menggunakan Node Js (express.js). ' +
        'Menerapkan fungsionalitas sisi klien menggunakan Next.js. ' +
        'Merancang antarmuka web yang sederhana dan mudah digunakan.',
      technologies: ['node', 'express', 'nextjs', 'tailwindcss'],
    },
    {
      company: 'Project Galeri',
      companyUrl: '',
      companyLogo: 'https://i.ibb.co/Dt6kGFQ/brick.png',
      jobTitle: 'Full-Stack Developer',
      datesWorked: 'Desember 2023 - Januari 2024',
      responsibilities:
        'Membangun sisi klien dan server menggunakan Next.js. ' +
        'Merancang tampilan galeri berbasis grid dan responsif. ' +
        'Menerapkan otentikasi untuk keamanan aplikasi.',
      projectType: 'Projects',
      technologies: ['nextjs', 'webauthn', 'interactiondesignfoundation'],
    },
  ],
  projectComplimentaryData: [
    {
      name: '',
      thumbnail: '',
    },
  ],
  postComplimentaryData: [
    {
      postRef: '50 ways to bring in extra cash as a developer',
      thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png',
    },
    {
      postRef: 'CLI tools you cant live without',
      thumbnail: 'https://i.ibb.co/F4THZ2T/cli-tools-banner.png',
    },
    {
      postRef: '20 git commands',
      thumbnail: 'https://i.ibb.co/yqtrTTS/git-commands-banner.png',
    },
    {
      postRef: 'useful css resources',
      thumbnail: 'https://i.ibb.co/CMxy3tz/css-resources-2.png',
    },
    {
      postRef: 'my top 50 windows apps',
      thumbnail: 'https://i.ibb.co/nmPRGgp/open-source-windows-apps.png',
    },
    {
      postRef: 'my top 50 android apps',
      thumbnail: 'https://i.ibb.co/cc8WP4K/App-icons-banner-medium.png',
    },
    {
      postRef: 'pimping up your duckduckgo',
      thumbnail: 'https://i.ibb.co/6XYydtq/Duck-Duck-Go-Themes.png',
    },
    {
      postRef: 'custom styling for listed',
      thumbnail: 'https://i.ibb.co/dMh1y13/listed-dark.png',
    },
    {
      postRef: 'fun with realtime data',
      thumbnail: 'https://i.ibb.co/HqJ77Mf/Fun-with-live-data-banner.png',
    },
    {
      postRef: 'fave youtube chanels',
      thumbnail: 'https://i.ibb.co/185MLZq/youtube-channels-banner.png',
    },
    {
      postRef: 'top 25 raspberry pi projects',
      thumbnail: 'https://i.ibb.co/LP1wZtc/Top-Raspberry-Pi-Projects.png',
    },
    {
      postRef: 'using espanso to boost efficiency',
      thumbnail: 'https://i.ibb.co/6W1Bqyz/espanso-config-banner.png',
    },
    {
      postRef: 'hello world',
      thumbnail: 'https://i.ibb.co/0rfWV1f/DSCN0566-1.jpg',
    },
    {
      postRef: 'dashy a selfhosted homelab dashboard',
      thumbnail: 'https://i.ibb.co/c6kTRch/dashy-theme.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'Muhamad Alfin Pratama',
    email: 'muhamadalfinpratamaa@gmail.com',
    website: 'https://evrea.tech',
    socials: {
      GitHub: 'AlfinPratamaa',
      LinkedIn: 'in/alfinpr',
      Instagram: 'visfiveor5',
      YouTube: 'muhamadalfinpratamaa',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink:
      'https://keybase.io/aliciasykes/pgp_keys.asc?fingerprint=0688f8d34587d954e9e51fb8fedb68f55c0283a7',
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
      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
      mFFVmpQe2X/qgZBVVYC+LjpxNEMt6w==
      =dpLK
      -----END PGP PUBLIC KEY BLOCK-----
    `,
  },
  about: {
    intro: 'Just your average dev...',
    bio: [
      "I'm Alfin, a fullstack developer from Indonesia, currently based in Bandung, Indonesia.",

      `I am loving the world of software development, and I have a passion for building`,

      `I have a keen interest in web development, and I love creating`,

      `I have a passion for open source, and I enjoy contributing to projects that make a difference in the world.
       I strive to write clean, maintainable code and follow best practices in software development.
       I believe in the power of collaboration and enjoy working with others to create amazing software.,
      `,

      `I am always eager to learn new technologies and improve my skills.
       I enjoy exploring new programming languages, frameworks, and tools to stay up-to-date with the`,

      `Away from the keyboard, I like playing game and watching anime.`,
    ],
    picture: '/pfp.png',
  },
  techStack: {
    // backend: [
    //   {
    //     language: 'Go',
    //     projects: [],
    //   },
    //   {
    //     language: 'Node',
    //     projects: [],
    //   },
    //   {
    //     language: 'Python',
    //     projects: [],
    //   },
    //   {
    //     language: 'Java',
    //     projects: [],
    //   },
    //   {
    //     language: 'PHP',
    //     projects: [],
    //   },
    // ],
    // frontend: [
    //   {
    //     language: 'Vue',
    //     projects: [],
    //   },
    //   {
    //     language: 'Svelte',
    //     projects: [],
    //   },
    //   {
    //     language: 'React',
    //     projects: [],
    //   },
    //   {
    //     language: 'HTML',
    //     projects: [],
    //   },
    // ],
    // mobile: [
    //   {
    //     language: 'android',
    //     projects: [],
    //   },
    // ],
    // other: [
    //   {
    //     language: 'Bash',
    //     projects: [],
    //   },
    //   {
    //     language: 'Docker',
    //     projects: [],
    //   },
    //   {
    //     language: 'Config',
    //     projects: [],
    //   },
    //   {
    //     language: 'Markdown',
    //     projects: [],
    //   },
    // ],
  },
  techStackExtras: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Go'],
    frontend: ['React', 'nextjs', 'Svelte', 'TailwindCSS', 'HTML', 'CSS'],
    backend: ['node', 'Express', 'Laravel', 'go'],
    mobile: ['Android'],
    other: ['Bash', 'Docker', 'Markdown', 'Git', 'OpenAPI'],
    devTools: ['postman', 'figma'],
    devOps: ['GitHubActions', 'Grafana'],
    databases: ['PostgreSQL', 'SQLite', 'firebase', 'MySQL', 'MongoDB'],
    testing: ['Cypress'],
  },
  plausible: {
    scriptSrc: 'https://no-track.as93.net/js/script.js',
    domain: 'evrea.tech',
  },
};

export default config;
