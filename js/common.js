window.addEventListener('load', (e) => {

    var rellax = new Rellax('.rellax');

    let offset
    if (window.innerWidth > 991) {
        offset = 150;
    } else {
        offset = 20;
    }

    AOS.init({
        easing: 'ease',
        delay: 100,
        once: true,
        duration: 1000,
        offset: offset,
    });

    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach(element => {
            var parallaxInstance = new Parallax(element)
        });
    }

    const body = document.querySelector('body');

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
        }

        function closeModal() {
            e.preventDefault();
            document.querySelector('.modal.show').classList.remove('show');
            body.classList.remove('locked');
            document.querySelector('.modal_body.show').classList.remove('show');
        }
        if (target.closest('[data-modal-close]')) {
            closeModal()
        }
        if (target.closest('.modal') && !target.closest('.modal-content')) {
            closeModal()
        }
    });
});