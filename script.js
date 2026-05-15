const images = document.querySelectorAll('.mystery-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 300);
        } else {
            entry.target.classList.remove('visible'); // add this line
        }
    });
}, { threshold: 0.2 });

images.forEach(img => observer.observe(img));



const text = "I was never there,\nYet you felt me.";
const h1 = document.querySelector('.hero-header h1');
h1.textContent = '';

let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === '\n') {
            h1.innerHTML += '<br>';
        } else {
            h1.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 200);
    } else {
        h1.classList.remove('typing');
    }
}

window.addEventListener('load', () => {
    h1.classList.add('typing');
    setTimeout(typeWriter, 500);
});