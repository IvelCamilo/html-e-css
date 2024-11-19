
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');

    let isValid = true;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    
    if (!nome) {
        isValid = false;
        document.getElementById('nome-error').textContent = 'Por favor, preencha o seu nome.';
    }
    if (!email) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Por favor, preencha o seu e-mail.';
    }
    if (!mensagem) {
        isValid = false;
        document.getElementById('mensagem-error').textContent = 'Por favor, escreva uma mensagem.';
    }

    if (isValid) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        document.getElementById('formContato').reset();
    }
});


const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        
        menuItems.forEach(i => i.classList.remove('active'));
        
       
        this.classList.add('active');
    });
});


const beneficios = document.querySelectorAll('.beneficio-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

beneficios.forEach(beneficio => {
    observer.observe(beneficio);
});
