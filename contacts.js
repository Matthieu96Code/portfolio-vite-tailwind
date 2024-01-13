
// ---------------------------
// Mobile menu                |
// ----------------------------

const mobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuList = document.querySelector('.mobile-menu ul');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileMenuList.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

mobileMenu();