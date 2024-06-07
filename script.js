document.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].style.opacity = '1';
    }

    slides.forEach(slide => {
        slide.addEventListener('click', nextSlide);
    });

    setInterval(nextSlide, 3000); 
});
document.addEventListener('scroll', (event) => {
    const header = document.getElementById('cabecalho')
    if (window.scrollY > 10) {
        header.classList.add('m-cabecalho')
    } 
    else {
        header.classList.remove('m-cabecalho')
    }
})  

const botao = document.getElementById('btn');
const exibir = document.getElementById('exibir');
const form = document.getElementById('formulario');
const emailUsuario = document.getElementById('email');
const mensagemEnviada = document.getElementById('mensagem');

botao.addEventListener('click', (event) => {
    event.preventDefault();
    const msg = mensagemEnviada.value;
    const email = emailUsuario.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (msg.trim() === '' || email.trim() === '') {
        exibir.innerHTML = 'Preencha todos os campos!';
        exibir.style.color = 'White';
        exibir.style.fontWeight = 'bold';
        return;
    }
    else if (!emailRegex.test(email)) {
        exibir.innerHTML = 'Por favor, insira um endereço de e-mail válido.';
        exibir.style.color = 'White';
        exibir.style.fontWeight = 'bold';
            return;
        }
    
    exibir.innerHTML = `Mensagem enviada! Em breve você terá uma resposta nesse email: ${email}. Mensagem: ${msg}`;
    exibir.style.color = 'white';
    exibir.style.fontWeight = 'bold';
    form.reset();
});


const botaoHamburguer = document.getElementById('hamburguer');
function exibirMenu() {
    if (window.scrollY > 0) {
        window.scrollTo(0, 0);
    }
    const menu = document.getElementById('menu');
    menu.classList.toggle('mostrar');
}