function mostrarProducto(id) {
    const detalle = document.getElementById(id);
    const bloques = document.querySelectorAll('.detalle');
    bloques.forEach((bloque) => {
        if (bloque.id !== id) {
            bloque.style.display = 'none';
        }
    });

    detalle.style.display = detalle.style.display === 'block' ? 'none' : 'block';
}

function cambiarSalsa(idProducto, tipoSalsa) {
    const contenedorImagen = document.getElementById(`imagen-${idProducto}`);
    const textoSalsa = contenedorImagen.querySelector('.producto-salsa');
    
    // Limpia estados anteriores
    contenedorImagen.classList.remove('salsa-roja', 'salsa-verde', 'salsa-kids');
    
    if (tipoSalsa === 'Roja') {
        contenedorImagen.classList.add('salsa-roja');
        textoSalsa.textContent = 'Con Salsa Roja';
    } else if (tipoSalsa === 'Verde') {
        contenedorImagen.classList.add('salsa-verde');
        textoSalsa.textContent = 'Con Salsa Verde';
    } else if (tipoSalsa === 'Kids') {
        contenedorImagen.classList.add('salsa-kids');
        textoSalsa.textContent = 'Menú Kids (Sin Picante)';
    }
}

window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.detalle').forEach((detalle) => {
        detalle.style.display = 'none';
    });

    document.querySelectorAll('.producto-imagen').forEach((imagen) => {
        const producto = imagen.dataset.producto;
        const nombre = producto === 'bowl' ? 'El Santo Bowl' : 'La Santa Cajita';
        imagen.innerHTML = `
            <span class="producto-nombre">${nombre}</span>
            <span class="producto-salsa">Selecciona una salsa</span>
        `;
    });

    setupCarousel();
});

let currentSlide = 0;
let carouselInterval = null;

function setupCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    if (!slides.length || !dots.length) {
        return;
    }

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (!track || slides.length === 0) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

    slides.forEach((slide) => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        slide.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 4500);
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    if (!track) {
        return;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        updateCarousel();
    }
}