const showcase = document.querySelector('.showcase');
const toggleBtn = document.querySelector('.toggle');


toggleBtn.addEventListener('click', () => {
   toggleBtn.classList.toggle('active');
   if (window.innerWidth >= 768)
      showcase.classList.toggle('translate-md');
   else if (window.innerWidth >= 576)
      showcase.classList.toggle('translate-sm');
   else
      showcase.classList.toggle('translate');
});