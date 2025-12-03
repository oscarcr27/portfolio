// --- 1. Definición de los Datos de Proyectos ---
const projects = [
    {
        id: 1,
        title: "Portafolio Personal (El Proyecto Actual)",
        description: "El sitio web que estás viendo. Desarrollado como un portafolio dinámico utilizando HTML5 y CSS como base, Vanilla JavaScript para la gestión de datos, Tailwind CSS para el diseño responsivo y Font Awesome para los iconos de tecnología.",
        imageSrc: "assets/img/portafolio.png",
        gallery: [
            
        ],
        tags: [
            { name: "HTML5", color: "orange", hex: "f97316", icon: "fab fa-html5" },
            { name: "CSS3", color: "pink", hex: "ec4899", icon: "fab fa-css3-alt" },
            { name: "JavaScript", color: "yellow", hex: "facc15", icon: "fab fa-js" },
            { name: "Tailwind CSS", color: "cyan", hex: "06b6d4", icon: "fas fa-wind" },
            { name: "Font Awesome", color: "purple", hex: "a855f7", icon: "fas fa-icons" }
        ],
        demoUrl: "#",
        codeUrl: "El código de este portafolio está disponible en la vista del editor.",
        codeSnippet: `// Snippet de la función principal de renderizado (JavaScript)
/**
 * Función principal para renderizar todos los proyectos en el DOM.
 */
const renderProjects = () => {
    const container = document.getElementById('projects-container');
    // ... lógica de renderizado
    const projectHtmlArray = projects.map(createProjectCard); 
    container.innerHTML = projectHtmlArray.join('');
};

document.addEventListener('DOMContentLoaded', renderProjects);`
    },
    {
        id: 2,
        title: "Portal de Empleo y Gestión de Candidatos",
        description: "Plataforma completa para la publicación de ofertas de empleo, gestión de usuarios (Demandante, Empresa, Gestor) y del proceso de selección. Incluye autenticación con contraseñas encriptadas, filtros avanzados para ofertas, y módulos CRUD para la administración de entidades como Demandantes, Empresas y Niveles Formativos.",
        imageSrc: "assets/img/agencia-portal-empleo.png",
        gallery: [
            "assets/img/agencia-portal-empleo2.png",
            "assets/img/agencia-portal-empleo3.png",
            "assets/img/agencia-portal-empleo4.png",
        ],
        tags: [
            { name: "PHP", color: "indigo", hex: "4f46e5", icon: "fab fa-php" },
            { name: "MySQL", color: "orange", hex: "f97316", icon: "fas fa-database" },
            { name: "Bootstrap", color: "purple", hex: "9333ea", icon: "fab fa-bootstrap" },
            { name: "CRUD", color: "teal", hex: "14b8a6", icon: "fas fa-cogs" }
        ],
        demoUrl: "https://agencia.jobconsulting.es/index.php", 
        codeUrl: "https://github.com/tuusuario/portal-empleo-php",
        codeSnippet: `// Ejemplo de código PHP (clase Demandante.php)
// Se muestran funcionalidades como un CRUD para la gestión de demandantes.
class Demandante {
    public function obtenerDemandantes($filtro = '', $limite = 20) {
        $sql = "SELECT DNI, Nombre, Apellido1, Apellido2, FechaNacimiento FROM demandantes";
        // Lógica para aplicar filtros y límites
        if (!empty($filtro)) {
             $sql .= " WHERE Nombre LIKE '%$filtro%' OR DNI = '$filtro'";
        }
        $sql .= " LIMIT $limite";
        // ... Ejecución y retorno
    }
}`
    },
//     {
//         id: 3,
//         title: "Juego de Trivia Interactivo (Vanilla JS)",
//         description: "Un juego de trivia dinámico y rápido desarrollado completamente con JavaScript vanilla para poner a prueba conocimientos generales de forma divertida.",
//         imageSrc: "https://placehold.co/400x250/ef4444/ffffff?text=Trivia+Game",
//         gallery: [ "https://placehold.co/800x400/ef4444/ffffff?text=Screen+1", "https://placehold.co/800x400/ef4444/ffffff?text=Screen+2" ],
//         tags: [
//             { name: "JavaScript", color: "yellow", hex: "facc15", icon: "fab fa-js" }, 
//             { name: "HTML5", color: "orange", hex: "f97316", icon: "fab fa-html5" }, 
//             { name: "CSS3", color: "pink", hex: "ec4899", icon: "fab fa-css3-alt" } 
//         ],
//         demoUrl: "https://tu-usuario.github.io/trivia-game-js/demo",
//         codeUrl: "https://github.com/tuusuario/trivia-game-js",
//         codeSnippet: `const questions = [
//     { q: "Capital de Francia?", a: "París" },
//     { q: "Lenguaje de programación principal?", a: "JavaScript" }
// ];

// let score = 0;
// let currentQuestionIndex = 0;

// function checkAnswer(userAnswer) {
//     if (userAnswer === questions[currentQuestionIndex].a) {
//         score++;
//         return true;
//     }
//     return false;
// }`
//     },
//     {
//         id: 4,
//         title: "Blog Personal y Portfolio (Tailwind)",
//         description: "Un sitio estático con diseño minimalista y responsivo, optimizado para la lectura, el SEO y tiempos de carga ultrarrápidos.",
//         imageSrc: "https://placehold.co/400x250/10b981/ffffff?text=Personal+Blog",
//         gallery: [ "https://placehold.co/800x400/10b981/ffffff?text=Vista+Home", "https://placehold.co/800x400/10b981/ffffff?text=Vista+Móvil" ],
//         tags: [
//             { name: "HTML", color: "red", hex: "ef4444", icon: "fab fa-html5" }, 
//             { name: "Tailwind CSS", color: "cyan", hex: "06b6d4", icon: "fas fa-wind" }, 
//             { name: "Responsive Design", color: "purple", hex: "a855f7", icon: "fas fa-mobile-alt" } 
//         ],
//         demoUrl: "https://tu-usuario.github.io/personal-blog-tailwind/demo",
//         codeUrl: "https://github.com/tuusuario/personal-blog-tailwind",
//         codeSnippet: `<article class="max-w-4xl mx-auto py-12">
//     <h1 class="text-4xl font-bold text-gray-900 mb-4">Título del Post</h1>
//     <p class="text-gray-500 mb-8">Publicado el 1 de Enero de 2025</p>
//     <div class="prose max-w-none">
//         <p>Este es el contenido del post...</p>
//         <pre><code class="language-javascript">console.log("Snippet de código");</code></pre>
//     </div>
// </article>`
//     },
//     {
//         id: 5,
//         title: "Visualizador de Datos 3D (Three.js)",
//         description: "Una herramienta interactiva avanzada para visualizar grandes conjuntos de datos complejos en un entorno tridimensional con WebGL.",
//         imageSrc: "https://placehold.co/400x250/6366f1/ffffff?text=3D+Data+Viz",
//         gallery: [ "https://placehold.co/800x400/6366f1/ffffff?text=Visualización+1", "https://placehold.co/800x400/6366f1/ffffff?text=Visualización+2" ],
//         tags: [
//             { name: "Three.js", color: "indigo", hex: "6366f1", icon: "fas fa-cubes" }, 
//             { name: "WebGL", color: "gray", hex: "6b7280", icon: "fas fa-cogs" }, 
//             { name: "JavaScript", color: "yellow", hex: "facc15", icon: "fab fa-js" } 
//         ],
//         demoUrl: "https://tu-usuario.github.io/threejs-dataviz/demo",
//         codeUrl: "https://github.com/tuusuario/threejs-dataviz",
//         codeSnippet: `// Inicialización básica de Three.js
// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     renderer.render(scene, camera);
// }

// animate();`
//     }
];

// ----------------------------------------------------------------------
// Función para crear la tarjeta (no requiere cambios)
// ----------------------------------------------------------------------
const createProjectCard = (project) => {
    const tagsHtml = project.tags.map(tag => `
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center whitespace-nowrap"
              style="color: #${tag.hex}; background-color: #${tag.hex}1a;">
            <i class="${tag.icon} mr-1"></i> ${tag.name}
        </span>
    `).join('');

    return `
        <div class="project-card bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border border-gray-100">
            <img src="${project.imageSrc}" alt="Imagen de ${project.title}"
                  class="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                  onerror="this.onerror=null; this.src='https://placehold.co/400x250/94a3b8/ffffff?text=No+Image';">
            
            <h4 class="text-xl font-extrabold text-gray-900 mb-2 truncate">${project.title}</h4>
            
            <p class="text-gray-600 mb-4 text-sm line-clamp-3 h-14">${project.description}</p>
            
            <div class="flex flex-wrap gap-2 mb-5">
                ${tagsHtml}
            </div>
            
            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <a href="${project.demoUrl}" target="_blank"
                   class="text-primary-600 hover:text-primary-800 font-bold text-sm flex items-center transition duration-150">
                    Ver Demo
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
                <button onclick="showProjectDetails(${project.id});"
                   class="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center transition duration-150">
                    Ver Detalles
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
            </div>
        </div>
    `;
};

/**
 * Función principal para renderizar todos los proyectos en el DOM.
 */
const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error("Error: No se encontró el contenedor de proyectos con ID 'projects-container'.");
        return;
    }

    const projectHtmlArray = projects.map(createProjectCard);
    container.innerHTML = projectHtmlArray.join('');
};

// ----------------------------------------------------------------------
// Función mejorada para mostrar la modal de detalles
// ----------------------------------------------------------------------
window.showProjectDetails = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('code-modal');
    const headerTitle = document.getElementById('code-modal-title');
    const modalContentBody = document.getElementById('code-snippet'); 
    
    // Generación de la Galería (incluye la imagen principal como primera miniatura)
    const galleryImages = [project.imageSrc, ...(project.gallery || [])].filter((v, i, a) => a.indexOf(v) === i);
    const galleryHtml = galleryImages.map(imgSrc => `
        <a href="${imgSrc}" target="_blank" class="block">
            <div class="group relative aspect-video overflow-hidden rounded-xl cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
                <img src="${imgSrc}" alt="Captura de ${project.title}"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onerror="this.onerror=null; this.src='https://placehold.co/800x400/94a3b8/ffffff?text=No+Disponible';">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-4 left-4 text-white text-sm font-semibold flex items-center">
                        <i class="fas fa-search-plus mr-2"></i>
                        <span>Ampliar imagen</span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');

    // Generación de Tags (Estilo Neomorfismo Suave)
    const tagsHtml = project.tags.map(tag => `
    <span class="inline-flex items-center leading-none px-4 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
        style="color: #${tag.hex}; background: linear-gradient(135deg, #${tag.hex}18, #${tag.hex}28); border: 1.5px solid #${tag.hex}50; box-shadow: 0 2px 8px #${tag.hex}20;">
        <i class="${tag.icon} mr-3 text-base flex-shrink-0"></i>
        <span class="flex-shrink-0">${tag.name}</span>
    </span>
    `).join('');

    // Contenido Detallado 
    const detailsContent = `
        <div class="space-y-5"> 
            
            <div class="relative w-full h-80 sm:h-[30rem] overflow-hidden rounded-3xl shadow-2xl group">
                <img src="${project.imageSrc}" alt="Imagen principal de ${project.title}"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onerror="this.onerror=null; this.src='https://placehold.co/800x400/94a3b8/ffffff?text=No+Image';">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                    <h2 class="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl mb-3 leading-tight">${project.title}</h2>
                    <div class="flex items-center text-gray-200 text-sm font-medium drop-shadow-lg">
                        <i class="fas fa-star text-yellow-400 mr-2"></i>
                        <span>Proyecto Finalizado</span>
                    </div>
                </div>
            </div>

            <section class="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-indigo-100/50 overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                <div class="relative">
                    <div class="flex items-center mb-5">
                        <div class="w-1.5 h-10 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-4 shadow-lg"></div>
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Sobre el Proyecto</h3>
                    </div>
                    <p class="text-gray-700 leading-relaxed text-base sm:text-lg">${project.description}</p>
                </div>
            </section>
            
            <section>
                <div class="flex items-center mb-4">
                    <div class="w-1.5 h-10 bg-gradient-to-b from-pink-500 via-rose-500 to-red-500 rounded-full mr-4 shadow-lg"></div>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Galería Visual</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${galleryHtml}
                </div>
            </section>

            <section>
                <div class="flex items-center">
                    <div class="w-1.5 h-10 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 rounded-full mr-4 shadow-lg"></div>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Stack Tecnológico</h3>
                </div>
                <div class="flex flex-wrap gap-3">
                    ${tagsHtml}
                </div>
            </section>

            <section>
                <div class="flex items-center mb-4">
                    <div class="w-1.5 h-10 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-600 rounded-full mr-4 shadow-lg"></div>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Enlaces del Proyecto</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href="${project.demoUrl}" target="_blank" 
                        class="group relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl p-7 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div class="relative flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                                    <i class="fas fa-rocket text-2xl"></i>
                                </div>
                                <div>
                                    <div class="text-l opacity-90 uppercase tracking-wider">Explorar</div>
                                    <div class="text-xl font-extrabold">Demo en Vivo</div>
                                </div>
                            </div>
                            <i class="fas fa-arrow-right text-2xl transform group-hover:translate-x-2 transition-transform duration-300"></i>
                        </div>
                    </a>
                    
                    ${project.codeUrl ? `
                    <a href="${project.codeUrl}" target="_blank" 
                        class="group relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white font-bold rounded-2xl p-7 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                        <div class="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div class="relative flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                                    <i class="fab fa-github text-2xl"></i>
                                </div>
                                <div>
                                    <div class="text-xs opacity-90 uppercase tracking-wider mb-1">Ver en</div>
                                    <div class="text-xl font-extrabold">GitHub</div>
                                </div>
                            </div>
                            <i class="fas fa-arrow-right text-2xl transform group-hover:translate-x-2 transition-transform duration-300"></i>
                        </div>
                    </a>
                    ` : ''}
                </div>
            </section>
            
            <section class="">
                <div class="flex items-center mb-4">
                    <div class="w-1.5 h-10 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 rounded-full mr-4 shadow-lg"></div>
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Código Destacado</h3>
                </div>
                <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
                    <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-4 flex items-center border-b border-gray-700">
                        <div class="flex space-x-2.5 mr-5">
                            <div class="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer shadow-lg"></div>
                            <div class="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer shadow-lg"></div>
                            <div class="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shadow-lg"></div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-code text-gray-400 mr-2"></i>
                            <span class="text-gray-300 text-sm font-mono font-semibold">main.js</span>
                        </div>
                    </div>
                    <div class="relative">
                        <pre class=" p-6 overflow-x-auto max-h-96 text-sm font-mono leading-relaxed"><code class="text-green-400">${project.codeSnippet}</code></pre>
                        <div class="absolute -top-12 right-4">
                            <button class="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 backdrop-blur-sm border border-gray-600/30">
                                <i class="fas fa-copy mr-1.5"></i>Copiar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
    // ------------------- Lógica de la Modal -------------------
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300';
    
    headerTitle.textContent = project.title;
    modalContentBody.innerHTML = detailsContent; 

    const modalDialog = modal.children[0]; 
    if (modalDialog) {
        modalDialog.className = 'bg-white rounded-3xl w-full max-w-6xl h-full sm:h-[94vh] overflow-hidden flex flex-col transition-transform duration-300 transform scale-100';
    }

    const contentWrapper = document.getElementById('snippet-wrapper');
    if (contentWrapper) {
        contentWrapper.className = 'p-8 sm:p-12 overflow-y-auto flex-grow';
    }
    
    modal.classList.remove('hidden');

    // 💡 NUEVA LÓGICA: Cerrar al hacer clic en el telón de fondo
    modal.onclick = (event) => {
        // Comprueba si el elemento en el que se hizo clic es el contenedor 'modal' (el backdrop)
        if (event.target === modal) {
            window.closeModal();
        }
    };
    
    modal.classList.remove('hidden');
};

/**
 * Cierra la ventana modal de código y limpia el event listener (opcional pero recomendado).
 */
window.closeModal = () => {
    const modal = document.getElementById('code-modal');
    modal.classList.add('hidden');
    // Limpia el event listener al cerrar el modal
    modal.onclick = null; 
};

// --- Ejecución al cargar el documento ---
document.addEventListener('DOMContentLoaded', renderProjects);