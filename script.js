// Sample news data
const newsData = [
    {
        id: 1,
        title: "Teknologi AI Terbaru Mengubah Dunia Pendidikan",
        summary: "Perkembangan kecerdasan buatan membawa revolusi besar dalam sistem pembelajaran modern dengan teknologi adaptif yang dapat menyesuaikan kebutuhan setiap siswa.",
        category: "teknologi",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        link: "https://example.com/news/ai-pendidikan",
        date: "2024-01-15",
        author: "Tech News"
    },
    {
        id: 2,
        title: "Tim Nasional Indonesia Raih Prestasi Gemilang di Piala Asia",
        summary: "Prestasi membanggakan tim nasional sepak bola Indonesia berhasil mencapai babak semifinal Piala Asia dengan permainan yang menawan dan sportif.",
        category: "olahraga",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop",
        link: "https://example.com/news/timnas-piala-asia",
        date: "2024-01-14",
        author: "Sports Daily"
    },
    {
        id: 3,
        title: "Kebijakan Ekonomi Digital Mendorong Pertumbuhan UMKM",
        summary: "Pemerintah meluncurkan program digitalisasi UMKM yang diharapkan dapat meningkatkan daya saing dan akses pasar bagi usaha kecil dan menengah di Indonesia.",
        category: "ekonomi",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        link: "https://example.com/news/ekonomi-digital-umkm",
        date: "2024-01-13",
        author: "Economic Report"
    },
    {
        id: 4,
        title: "Reformasi Sistem Pendidikan Nasional Dimulai Tahun Ini",
        summary: "Kementerian Pendidikan mengumumkan serangkaian reformasi komprehensif untuk meningkatkan kualitas pendidikan dan daya saing lulusan di era global.",
        category: "politik",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
        link: "https://example.com/news/reformasi-pendidikan",
        date: "2024-01-12",
        author: "Policy News"
    },
    {
        id: 5,
        title: "Breakthrough Teknologi 5G Mulai Merambah Kota-Kota Besar",
        summary: "Implementasi jaringan 5G di Jakarta, Surabaya, dan Bandung membuka peluang baru untuk Internet of Things dan smart city yang lebih efisien dan terhubung.",
        category: "teknologi",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        link: "https://example.com/news/5g-smart-city",
        date: "2024-01-11",
        author: "Tech Today"
    },
    {
        id: 6,
        title: "Atlet Badminton Indonesia Dominasi Turnamen Internasional",
        summary: "Prestasi gemilang atlet-atlet badminton Indonesia yang berhasil meraih multiple medali emas dalam kejuaraan dunia dan mengharumkan nama bangsa.",
        category: "olahraga",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=300&fit=crop",
        link: "https://example.com/news/badminton-prestasi",
        date: "2024-01-10",
        author: "Sports Weekly"
    },
    {
        id: 7,
        title: "Investasi Asing Meningkat 25% di Sektor Energi Terbarukan",
        summary: "Iklim investasi yang kondusif menarik minat investor asing untuk menanamkan modal di sektor energi terbarukan Indonesia, khususnya solar dan wind power.",
        category: "ekonomi",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
        link: "https://example.com/news/investasi-energi-terbarukan",
        date: "2024-01-09",
        author: "Investment Today"
    },
    {
        id: 8,
        title: "Program Vaksinasi Nasional Capai Target 90% Populasi",
        summary: "Keberhasilan program vaksinasi COVID-19 mencapai cakupan 90% populasi dewasa menandai pencapaian penting dalam upaya pemulihan kesehatan masyarakat.",
        category: "politik",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
        link: "https://example.com/news/vaksinasi-target",
        date: "2024-01-08",
        author: "Health News"
    }
];

// DOM elements
const newsGrid = document.getElementById('newsGrid');
const loadingElement = document.getElementById('loading');
const navLinks = document.querySelectorAll('.nav-link');

// Current filter
let currentFilter = 'all';

// Format date to Indonesian format
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Jakarta'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Create news card HTML
function createNewsCard(news) {
    return `
        <article class="news-card" data-category="${news.category}">
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\"fas fa-image\\"></i>';">
            </div>
            <div class="news-content">
                <span class="news-category">${getCategoryName(news.category)}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.summary}</p>
                <div class="news-meta">
                    <div class="news-date">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${formatDate(news.date)}</span>
                    </div>
                    <div class="news-author">
                        <i class="fas fa-user"></i>
                        <span>${news.author}</span>
                    </div>
                </div>
                <a href="${news.link}" class="news-link" target="_blank" rel="noopener noreferrer">
                    Baca Selengkapnya
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </article>
    `;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'teknologi': 'Teknologi',
        'olahraga': 'Olahraga',
        'politik': 'Politik',
        'ekonomi': 'Ekonomi'
    };
    return categoryNames[category] || category;
}

// Render news cards
function renderNews(newsToShow = newsData) {
    newsGrid.innerHTML = '';
    
    if (newsToShow.length === 0) {
        newsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
                <i class="fas fa-newspaper" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p style="font-size: 1.2rem;">Tidak ada berita yang ditemukan untuk kategori ini.</p>
            </div>
        `;
        return;
    }
    
    newsToShow.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.innerHTML = createNewsCard(news);
        newsCard.firstElementChild.style.animationDelay = `${index * 0.1}s`;
        newsGrid.appendChild(newsCard.firstElementChild);
    });
}

// Filter news by category
function filterNews(category) {
    currentFilter = category;
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
    
    // Filter and render news
    if (category === 'all') {
        renderNews(newsData);
    } else {
        const filteredNews = newsData.filter(news => news.category === category);
        renderNews(filteredNews);
    }
    
    // Scroll to news section
    document.querySelector('.news-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Add click event listeners to navigation links
function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            filterNews(category);
        });
    });
}

// Simulate loading and initialize the page
function initializePage() {
    // Show loading for 1 second to simulate data fetching
    setTimeout(() => {
        loadingElement.style.display = 'none';
        renderNews();
    }, 1000);
}

// Add smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add intersection observer for animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const animatedElements = document.querySelectorAll('.news-card');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        }, 1100);
    });
}

// Search functionality (bonus feature)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Cari berita...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        margin: 1rem auto;
        display: block;
        background: white;
        transition: border-color 0.3s ease;
    `;
    
    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = '#667eea';
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = '#e2e8f0';
    });
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let filteredNews = newsData;
        
        if (currentFilter !== 'all') {
            filteredNews = newsData.filter(news => news.category === currentFilter);
        }
        
        if (searchTerm) {
            filteredNews = filteredNews.filter(news => 
                news.title.toLowerCase().includes(searchTerm) ||
                news.summary.toLowerCase().includes(searchTerm)
            );
        }
        
        renderNews(filteredNews);
    });
    
    // Insert search input before news grid
    const heroSection = document.querySelector('.hero-section');
    heroSection.appendChild(searchInput);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initializePage();
    addSmoothScrolling();
    addScrollAnimations();
    addSearchFunctionality();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for news cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.news-card')) {
            const card = e.target.closest('.news-card');
            card.style.transform = 'translateY(-8px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.news-card')) {
            const card = e.target.closest('.news-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Add click analytics (could be connected to real analytics)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.news-link')) {
            const newsTitle = e.target.closest('.news-card').querySelector('.news-title').textContent;
            console.log(`News clicked: ${newsTitle}`);
            
            // Could send to analytics service here
            // analytics.track('news_clicked', { title: newsTitle });
        }
    });
});