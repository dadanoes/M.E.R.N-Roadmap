document.addEventListener("DOMContentLoaded", () => {
  const learningData = [
    {
      id: "fase-1",
      title: "Fase 1: Fondasi Absolut",
      duration: [1, 2],
      color: "#81B29A",
      description:
        "Ini adalah pilar dari semua pengembangan web. Fondasi yang kuat di HTML, CSS, JavaScript, dan Git adalah wajib sebelum masuk ke M.E.R.N. stack.",
      content: {
        materi: `
                            <h4 class="font-bold text-lg mb-2">Topik Utama:</h4>
                            <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>Cara Kerja Internet & Web:</strong> Pelajari HTTP/HTTPS, Domain, Hosting, DNS.</li>
                                <li><strong>HTML5 Semantik:</strong> Gunakan tag seperti <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>.</li>
                                <li><strong>CSS3 Modern:</strong> Kuasai <strong>Flexbox</strong>, <strong>Grid</strong>, dan <strong>Responsive Design</strong>.</li>
                                <li><strong>Git & GitHub:</strong> Kuasai version control dari hari pertama.</li>
                            </ul>
                            <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                            <ul class="space-y-2 list-disc list-inside">
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noopener noreferrer" class="resource-link">MDN Web Docs</a>: Referensi terlengkap untuk HTML, CSS, & JS.</li>
                                <li><a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" rel="noopener noreferrer" class="resource-link">freeCodeCamp (Responsive Web Design)</a>: Kurikulum terstruktur & interaktif.</li>
                                <li><a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" target="_blank" rel="noopener noreferrer" class="resource-link">HTML & CSS Full Course (YouTube)</a>: Video kursus lengkap untuk pemula.</li>
                                <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" class="resource-link">The Modern JavaScript Tutorial</a>: Penjelasan JavaScript yang sangat mendalam.</li>
                                <li><a href="https://www.theodinproject.com/paths/foundations/courses/foundations" target="_blank" rel="noopener noreferrer" class="resource-link">The Odin Project (Foundations)</a>: Jalur belajar berbasis proyek yang sangat baik.</li>
                                <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer" class="resource-link">Git and GitHub for Beginners (YouTube)</a>: Crash course yang mudah diikuti.</li>
                            </ul>
                        `,
        proyek: `
                            <p class="mb-4 text-gray-600">Bangun proyek-proyek ini untuk mempraktikkan fondasi Anda. Jangan hanya membaca, langsung tulis kodenya dan unggah ke GitHub.</p>
                            <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>Halaman Bio Pribadi:</strong> Buat halaman statis menggunakan HTML semantik dan CSS.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Halaman Portofolio Sederhana:</strong> Buat halaman portofolio statis yang responsif untuk menampung semua proyek Anda ke depan.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Kloning Halaman Depan Google:</strong> Latihan yang bagus untuk menguasai layouting CSS.</li>
                            </ul>
                        `,
      },
    },
    {
      id: "fase-2",
      title: "Fase 2: Menguasai React.js (R)",
      duration: [3, 4],
      color: "#6A994E",
      description:
        'Fokus mendalam pada React.js, bagian "R" dari M.E.R.N. Anda akan belajar membangun antarmuka pengguna yang dinamis dan modular.',
      content: {
        materi: `
                             <h4 class="font-bold text-lg mb-2">Topik Utama:</h4>
                             <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>JavaScript (Mahir):</strong> Dalami fitur ES6+ seperti Promises, Async/Await, Destructuring.</li>
                                <li><strong>Inti React.js:</strong> Kuasai <span class="tech-tag px-2 py-1 rounded-md">React.js</span>. Pelajari konsep JSX, Components, Props, State (<code>useState</code>), dan Lifecycle (<code>useEffect</code>).</li>
                                <li><strong>Ekosistem React:</strong> Pahami <span class="tech-tag px-2 py-1 rounded-md">npm</span>, styling dengan <span class="tech-tag px-2 py-1 rounded-md">Tailwind CSS</span>, Client-Side Routing dengan <span class="tech-tag px-2 py-1 rounded-md">React Router</span>, dan State Management (misal: <span class="tech-tag px-2 py-1 rounded-md">Zustand</span>).</li>
                            </ul>
                            <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                            <ul class="space-y-2 list-disc list-inside">
                                <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi Resmi React</a>: Tempat terbaik untuk memulai dan referensi utama.</li>
                                <li><a href="https://www.youtube.com/watch?v=bMknfKXIFA8" target="_blank" rel="noopener noreferrer" class="resource-link">React Course 2024 (YouTube - freeCodeCamp)</a>: Kursus video lengkap yang modern.</li>
                                <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi React Router</a>: Untuk membuat Single Page Application.</li>
                                <li><a href="https://tailwindcss.com/docs/guides/create-react-app" target="_blank" rel="noopener noreferrer" class="resource-link">Integrasi Tailwind CSS dengan React</a>: Panduan resmi.</li>
                                <li><a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer" class="resource-link">Zustand (State Management)</a>: Alternatif Redux yang lebih sederhana.</li>
                            </ul>
                        `,
        proyek: `
                            <p class="mb-4 text-gray-600">Proyek-proyek ini akan mengasah kemampuan React Anda, dari fetching data hingga membangun UI yang kompleks.</p>
                            <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>Aplikasi To-Do List (React):</strong> Implementasikan fungsionalitas CRUD (Create, Read, Update, Delete) di sisi klien.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Pokedex App (React):</strong> Ambil data dari API publik (PokeAPI) dan tampilkan dalam sebuah galeri yang interaktif dengan fitur pencarian.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Kalkulator (React):</strong> Latihan yang baik untuk mengelola state dan logika.</li>
                            </ul>
                        `,
      },
    },
    {
      id: "fase-3",
      title: "Fase 3: Backend dengan Node.js & Express.js (N & E)",
      duration: [3, 4],
      color: "#386641",
      description:
        'Membangun sisi server menggunakan Node.js dan Express.js, bagian "N" dan "E" dari M.E.R.N. Anda akan belajar membuat API yang kuat.',
      content: {
        materi: `
                             <h4 class="font-bold text-lg mb-2">Topik Utama:</h4>
                             <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>Inti Node.js:</strong> Pahami arsitektur event-driven, non-blocking I/O dari <span class="tech-tag px-2 py-1 rounded-md">Node.js</span>.</li>
                                <li><strong>Framework Express.js:</strong> Kuasai <span class="tech-tag px-2 py-1 rounded-md">Express.js</span> untuk membuat routing, middleware, dan menangani request/response.</li>
                                <li><strong>RESTful API:</strong> Rancang dan bangun API yang mengikuti prinsip-prinsip REST.</li>
                                <li><strong>Otentikasi & Otorisasi:</strong> Implementasikan sistem login menggunakan <span class="tech-tag px-2 py-1 rounded-md">JWT (JSON Web Tokens)</span> dan hashing password dengan <code>bcrypt</code>.</li>
                            </ul>
                            <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                            <ul class="space-y-2 list-disc list-inside">
                                <li><a href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi Resmi Node.js</a>: Referensi utama untuk modul-modul inti.</li>
                                <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi Resmi Express.js</a>: Panduan lengkap "Hello World" hingga tingkat lanjut.</li>
                                <li><a href="https://www.youtube.com/watch?v=SccSCuHhOw0" target="_blank" rel="noopener noreferrer" class="resource-link">Node.js and Express.js - Full Course (YouTube)</a>: Kursus video dari dasar.</li>
                                <li><a href="https://jwt.io/" target="_blank" rel="noopener noreferrer" class="resource-link">Pengantar JSON Web Tokens (JWT)</a>: Website resmi dengan penjelasan dan debugger.</li>
                                <li><a href="https://www.youtube.com/watch?v=mbsmsi7l3r4" target="_blank" rel="noopener noreferrer" class="resource-link">REST API Crash Course (YouTube)</a>: Penjelasan konsep REST dengan cepat.</li>
                            </ul>
                        `,
        proyek: `
                             <p class="mb-4 text-gray-600">Bangun API untuk "memberi makan" aplikasi React yang telah Anda buat sebelumnya.</p>
                             <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>API untuk To-Do List:</strong> Buat endpoint CRUD untuk menyimpan, mengambil, mengubah, dan menghapus data to-do.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>API untuk Blog Sederhana:</strong> Buat sistem user (registrasi/login) dan endpoint CRUD untuk postingan. Ini akan menjadi fondasi proyek full-stack Anda.</li>
                            </ul>
                        `,
      },
    },
    {
      id: "fase-4",
      title: "Fase 4: Database dengan MongoDB (M)",
      duration: [2, 3],
      color: "#BC4749",
      description:
        'Menguasai MongoDB, database NoSQL yang menjadi bagian "M" dari M.E.R.N. Anda akan belajar menyimpan dan mengelola data aplikasi Anda.',
      content: {
        materi: `
                             <h4 class="font-bold text-lg mb-2">Topik Utama:</h4>
                             <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>Dasar MongoDB:</strong> Pahami konsep database NoSQL, collections, dan documents dari <span class="tech-tag px-2 py-1 rounded-md">MongoDB</span>.</li>
                                <li><strong>Mongoose:</strong> Gunakan <span class="tech-tag px-2 py-1 rounded-md">Mongoose</span> sebagai ODM (Object Data Modeling) untuk mendefinisikan skema dan berinteraksi dengan MongoDB dari aplikasi Express Anda.</li>
                                <li><strong>Query & Agregasi:</strong> Pelajari cara melakukan query data yang kompleks dan menggunakan aggregation framework di MongoDB.</li>
                             </ul>
                             <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                             <ul class="space-y-2 list-disc list-inside">
                                 <li><a href="https://www.mongodb.com/basics" target="_blank" rel="noopener noreferrer" class="resource-link">MongoDB Basics</a>: Penjelasan fundamental langsung dari MongoDB.</li>
                                 <li><a href="https://learn.mongodb.com/" target="_blank" rel="noopener noreferrer" class="resource-link">MongoDB University</a>: Kursus gratis dan mendalam. Sangat direkomendasikan.</li>
                                 <li><a href="https://mongoosejs.com/docs/guide.html" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi Resmi Mongoose</a>: Panduan lengkap untuk menggunakan Mongoose.</li>
                                 <li><a href="https://www.youtube.com/watch?v=ofme2o29ngU" target="_blank" rel="noopener noreferrer" class="resource-link">MERN Stack Crash Course (YouTube)</a>: Video yang menggabungkan semua komponen MERN.</li>
                             </ul>
                        `,
        proyek: `
                            <p class="mb-4 text-gray-600">Integrasikan MongoDB ke dalam proyek backend Anda untuk melengkapi M.E.R.N. stack Anda.</p>
                            <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>Integrasi API Blog dengan MongoDB:</strong> Ganti penyimpanan data sementara dengan MongoDB menggunakan Mongoose untuk menyimpan data user dan postingan.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Hubungkan React App ke API:</strong> Buat aplikasi React Blog Anda mengambil dan mengirim data ke API backend yang sudah terhubung ke MongoDB, menjadikannya aplikasi MERN full-stack pertama Anda.</li>
                            </ul>
                        `,
      },
    },
    {
      id: "fase-5",
      title: "Fase 5: Deployment & DevOps",
      duration: [1, 2],
      color: "#A7C957",
      description:
        "Membawa aplikasi M.E.R.N. Anda dari lokal ke production agar bisa diakses oleh semua orang di internet.",
      content: {
        materi: `
                             <h4 class="font-bold text-lg mb-2">Topik Utama:</h4>
                             <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>Docker:</strong> Pelajari cara membuat <em>container</em> untuk aplikasi React, Node/Express, dan database MongoDB Anda.</li>
                                <li><strong>Cloud Provider:</strong> Pelajari layanan dasar di <span class="tech-tag px-2 py-1 rounded-md">AWS</span>, atau platform PaaS seperti <span class="tech-tag px-2 py-1 rounded-md">Render</span> dan <span class="tech-tag px-2 py-1 rounded-md">Vercel</span>.</li>
                                <li><strong>CI/CD (Continuous Integration/Deployment):</strong> Otomatiskan proses build dan deploy menggunakan <span class="tech-tag px-2 py-1 rounded-md">GitHub Actions</span>.</li>
                            </ul>
                            <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                             <ul class="space-y-2 list-disc list-inside">
                                <li><a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi Docker Get Started</a>: Panduan resmi untuk pemula.</li>
                                <li><a href="https://www.youtube.com/watch?v=3c-iBn73dDE" target="_blank" rel="noopener noreferrer" class="resource-link">Docker Tutorial for Beginners (YouTube)</a>: Video kursus yang komprehensif.</li>
                                <li><a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" class="resource-link">Vercel Docs</a>: Untuk mendeploy aplikasi frontend (React).</li>
                                <li><a href="https://render.com/docs" target="_blank" rel="noopener noreferrer" class="resource-link">Render Docs</a>: Sangat baik untuk mendeploy backend (Node.js) dan database.</li>
                                <li><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" class="resource-link">Dokumentasi GitHub Actions</a>: Untuk belajar otomasi CI/CD.</li>
                             </ul>
                        `,
        proyek: `
                            <p class="mb-4 text-gray-600">Deploy aplikasi M.E.R.N. full-stack Anda secara online.</p>
                            <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>Deploy Aplikasi Blog Full-Stack:</strong> Deploy frontend ke Vercel dan backend/database ke Render.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Siapkan CI/CD Pipeline:</strong> Buat workflow GitHub Actions yang otomatis mendeploy perubahan terbaru pada branch 'main' ke server production.</li>
                            </ul>
                        `,
      },
    },
    {
      id: "fase-6",
      title: "Fase 6: Menjadi Expert & Unggul",
      duration: [0, 0],
      color: "#F2E205",
      description:
        "Fase berkelanjutan untuk terus mengasah skill, membedakan diri dari developer lain, dan menjadi seorang software engineer yang matang.",
      content: {
        materi: `
                             <h4 class="font-bold text-lg mb-2">Topik Lanjutan:</h4>
                             <ul class="space-y-4 list-disc list-inside text-gray-700 mb-6">
                                <li><strong>TypeScript:</strong> Adopsi TypeScript di proyek React dan Node.js Anda untuk kode yang lebih aman.</li>
                                <li><strong>Testing Lanjutan:</strong> Dalami Unit/Integration Testing dengan <span class="tech-tag px-2 py-1 rounded-md">Jest</span> & <span class="tech-tag px-2 py-1 rounded-md">React Testing Library</span>.</li>
                                <li><strong>Arsitektur & System Design:</strong> Pelajari konsep Microservices, Serverless, Caching (Redis).</li>
                                <li><strong>GraphQL:</strong> Pelajari GraphQL sebagai alternatif REST untuk API Anda.</li>
                                <li><strong>WebSockets:</strong> Untuk aplikasi real-time seperti chat atau notifikasi.</li>
                            </ul>
                             <h4 class="font-bold text-lg mb-2">Sumber Belajar:</h4>
                             <ul class="space-y-2 list-disc list-inside">
                                 <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" class="resource-link">TypeScript Handbook</a>: Dokumentasi resmi TypeScript.</li>
                                 <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noopener noreferrer" class="resource-link">React Testing Library Docs</a>: Untuk testing komponen React.</li>
                                 <li><a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer" class="resource-link">Introduction to GraphQL</a>: Belajar dari situs resminya.</li>
                                 <li><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener noreferrer" class="resource-link">System Design Primer</a>: Repositori GitHub yang sangat populer untuk belajar System Design.</li>
                             </ul>
                        `,
        proyek: `
                             <p class="mb-4 text-gray-600">Bangun proyek portofolio yang kompleks untuk menunjukkan keahlian M.E.R.N. Anda secara menyeluruh.</p>
                             <ul class="space-y-3">
                                <li class="p-3 bg-white rounded-lg border"><strong>Kloning Aplikasi Populer (misal: Trello, Medium, Twitter):</strong> Bangun kloning fungsional penuh dengan M.E.R.N stack, tambahkan fitur seperti upload file, notifikasi real-time, dll.</li>
                                <li class="p-3 bg-white rounded-lg border"><strong>Platform SaaS (Software as a Service) Mikro:</strong> Buat aplikasi yang memecahkan masalah spesifik, lengkap dengan sistem user, subscription (bisa menggunakan Stripe), dan dashboard.</li>
                            </ul>
                        `,
      },
    },
  ];

  const navContainer = document.querySelector("#sticky-nav > div");
  const timelineContainer = document.getElementById("timeline-container");

  learningData.forEach((phase, index) => {
    const navButton = document.createElement("a");
    navButton.href = `#${phase.id}`;
    navButton.className =
      "whitespace-nowrap flex-shrink-0 text-sm sm:text-base font-medium px-3 py-2 rounded-md hover:bg-gray-200 transition-colors";
    navButton.textContent = `Fase ${index + 1}`;
    navContainer.appendChild(navButton);

    const phaseElement = document.createElement("div");
    phaseElement.id = phase.id;
    phaseElement.className = "timeline-item mb-12 relative pl-10";

    const dotColor = phase.duration[0] === 0 ? "bg-yellow-400" : "bg-green-500";

    phaseElement.innerHTML = `
                    <div class="timeline-dot ${dotColor}" style="background-color: ${
      phase.color
    };"></div>
                    <div class="group" data-phase-id="${phase.id}">
                        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <h3 class="text-xl md:text-2xl font-bold text-[#3D405B]">${
                              phase.title
                            }</h3>
                            <p class="text-sm font-medium text-gray-500 mb-3">${
                              phase.duration[0] > 0
                                ? `Estimasi: ${phase.duration[0]} - ${phase.duration[1]} Bulan`
                                : "Berkelanjutan"
                            }</p>
                            <p class="text-gray-600 mb-6">${
                              phase.description
                            }</p>
                            
                            <div class="border-b border-gray-200 mb-4">
                                <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                                    <button data-tab="materi" class="tab-button whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm active-tab">Materi & Sumber</button>
                                    <button data-tab="proyek" class="tab-button whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm inactive-tab">Strategi & Proyek</button>
                                </nav>
                            </div>

                            <div class="tab-content" data-tab-content="materi">
                                ${phase.content.materi}
                            </div>
                            <div class="tab-content hidden" data-tab-content="proyek">
                                ${phase.content.proyek}
                            </div>
                        </div>
                    </div>
                `;
    timelineContainer.appendChild(phaseElement);
  });

  timelineContainer.addEventListener("click", (e) => {
    if (e.target.matches(".tab-button")) {
      const phaseCard = e.target.closest(".group");
      const tabButtons = phaseCard.querySelectorAll(".tab-button");
      const tabContents = phaseCard.querySelectorAll(".tab-content");
      const targetTab = e.target.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove("active-tab");
        btn.classList.add("inactive-tab");
      });
      e.target.classList.add("active-tab");
      e.target.classList.remove("inactive-tab");

      tabContents.forEach((content) => {
        if (content.dataset.tabContent === targetTab) {
          content.classList.remove("hidden");
        } else {
          content.classList.add("hidden");
        }
      });
    }
  });

  const ctx = document.getElementById("timeCommitmentChart").getContext("2d");
  const chartLabels = learningData.map((p) => p.title);
  const chartData = learningData.map(
    (p) => (p.duration[0] + p.duration[1]) / 2
  );
  const chartColors = learningData.map((p) => p.color);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "Rata-rata Estimasi Waktu (Bulan)",
          data: chartData,
          backgroundColor: chartColors,
          borderColor: chartColors.map((c) => c + "FF"),
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Estimasi Waktu (Bulan)",
          },
        },
        y: {
          ticks: {
            autoSkip: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const phase = learningData[context.dataIndex];
              return `Estimasi: ${phase.duration[0]} - ${phase.duration[1]} bulan`;
            },
          },
        },
      },
      onHover: (event, chartElement) => {
        const canvas = event.native.target;
        canvas.style.cursor = chartElement[0] ? "pointer" : "default";

        document.querySelectorAll(".timeline-item .group").forEach((el) => {
          el.style.transform = "scale(1)";
          el.style.transition = "transform 0.3s ease";
        });

        if (chartElement.length > 0) {
          const index = chartElement[0].index;
          const phaseId = learningData[index].id;
          const targetElement = document.querySelector(
            `[data-phase-id="${phaseId}"]`
          );
          if (targetElement) {
            targetElement.style.transform = "scale(1.02)";
          }
        }
      },
    },
  });
});
