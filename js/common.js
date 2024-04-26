 //Заглушка для мобилок
 const infographicPlug = document.querySelector('.infographic_mobile');

 function getWindowOrientation(element) {
     if (window.innerWidth < 600) {
         element.classList.add('show');
     } else {
         element.classList.remove('show');
     }
 }

 window.addEventListener('load', (e) => {

     var rellax = new Rellax('.rellax');

     AOS.init({
         easing: 'ease',
         delay: 100,
         once: true,
         duration: 1000,
         offset: 150,
         //  disable: 'mobile'
     });

     var scene = document.querySelectorAll('.parallax');
     if (scene) {
         scene.forEach(element => {
             var parallaxInstance = new Parallax(element)
         });
     }

     const body = document.querySelector('body');
     let getScrollWidth = () => window.innerWidth - document.documentElement.offsetWidth;
     let browserScrollWidth = getScrollWidth();

     document.addEventListener('click', (e) => {
         const target = e.target;
         if (target.closest('[data-open-modal]')) {
             e.preventDefault();
             const targetId = target.closest('[data-open-modal]').getAttribute('href');
             const selectedModal = document.querySelector('[data-modal]');
             const modalText = document.querySelectorAll('.modal_body');
             const selectedModalText = document.querySelector(`[id="${targetId}"]`);
             selectedModal.classList.add('show');
             modalText.forEach(item => {
                 item.classList.remove('show');
             })
             selectedModalText.classList.add('show');
             body.classList.add('locked');
             if (getScrollWidth() == 0) {
                 body.style.paddingRight = `${browserScrollWidth}px`;
             }
         }

         function closeModal() {
             e.preventDefault();
             document.querySelector('.modal.show').classList.remove('show');
             body.classList.remove('locked');
             document.querySelector('.modal_body.show').classList.remove('show');
             body.style.paddingRight = ``;
         }
         if (target.closest('[data-modal-close]')) {
             closeModal()
         }
         if (target.closest('.modal') && !target.closest('.modal-content')) {
             closeModal()
         }
     });

     //Заглушка для мобилок
     if (infographicPlug) {
         getWindowOrientation(infographicPlug);
         window.addEventListener('resize', (e) => {
             getWindowOrientation(infographicPlug);
         });
     }
 });