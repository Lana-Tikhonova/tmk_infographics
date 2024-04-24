$(document).ready(function () {
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

});