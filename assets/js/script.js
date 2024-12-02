// Função para formatar o telefone
function formatPhoneNumber(value) {
   // Remove tudo que não for número
   let phone = value.replace(/\D/g, '');
   
   // Limita a 11 dígitos
   phone = phone.substring(0, 11);
   
   // Se não tiver números, retorna vazio
   if (!phone) return '';
   
   // Formata baseado no número de dígitos
   if (phone.length <= 10) {
       if (phone.length <= 2) {
           return `(${phone}`;
       }
       if (phone.length <= 6) {
           return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
       }
       return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
   } else {
       return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
   }
}

// Função para rolar até o formulário
function scrollToForm() {
   const form = document.querySelector('.form-container');
   const formPosition = form.getBoundingClientRect().top + window.scrollY;
   
   window.scrollTo({
       top: formPosition,
       behavior: 'smooth'
   });
}

// Função para formatar a data
function formatDeadlineDate() {
   const hoje = new Date();
   const proximaSegunda = new Date(hoje);
   proximaSegunda.setDate(hoje.getDate() + ((1 + 7 - hoje.getDay()) % 7));
   
   const meses = [
       'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
       'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
   ];
   
   const dataFormatada = `segunda-feira, ${proximaSegunda.getDate()} de ${meses[proximaSegunda.getMonth()]}`;
   document.getElementById('deadline-date').textContent = dataFormatada;
}

// Listener do telefone
const phoneInput = document.querySelector('input[name="telefone"]');
if (phoneInput) {
   phoneInput.addEventListener('keypress', function(e) {
       // Permite apenas números
       const charCode = (e.which) ? e.which : e.keyCode;
       if (charCode > 31 && (charCode < 48 || charCode > 57)) {
           e.preventDefault();
           return false;
       }
   });

   phoneInput.addEventListener('input', function() {
       const formattedValue = formatPhoneNumber(this.value);
       this.value = formattedValue;
   });
}

// Event listener do formulário
document.getElementById('sampleForm').addEventListener('submit', function(e) {
   e.preventDefault();
   
   // Validação do telefone
   const telefone = document.querySelector('input[name="telefone"]').value;
   const telefone10Digitos = /^\(\d{2}\)\s\d{4}-\d{4}$/;
   const telefone11Digitos = /^\(\d{2}\)\s\d{5}-\d{4}$/;
   
   if (!telefone10Digitos.test(telefone) && !telefone11Digitos.test(telefone)) {
       alert('Por favor, insira um número de telefone válido');
       return;
   }
   
   // Pega o nome e atualiza
   const nomeCompleto = document.querySelector('input[name="nome"]').value;
   const primeiroNome = nomeCompleto.split(' ')[0];
   
   // Atualiza o nome
   const userNameElement = document.getElementById('user-name');
   if (userNameElement) {
       userNameElement.textContent = primeiroNome;
   }
   
   // Esconde a página inicial
   document.querySelector('.initial-content').classList.add('hidden');
   
   // Mostra a página de produto
   document.querySelector('.produto-section').classList.add('visible');
   
   // Atualiza a data
   formatDeadlineDate();
   
   // Scroll para o topo
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   });
});

// Inicializar a data no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
   formatDeadlineDate();
});