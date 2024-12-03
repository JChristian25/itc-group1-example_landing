document.addEventListener("DOMContentLoaded", () => {
    const MobileMenuButton = document.getElementById('MobileMenuButton'); 
    const sidebarMenu = document.querySelector('aside'); 
    const CloseSidebarButton = document.getElementById('CloseSidebarButton'); 

    function toggleSidebarMenu() {
        if (sidebarMenu.classList.contains('show')) {
            sidebarMenu.classList.remove('show');
            sidebarMenu.classList.add('hide');
        } else {
            sidebarMenu.classList.remove('hide');
            sidebarMenu.classList.add('show');
        }
    }

    MobileMenuButton.addEventListener('click', (e) => {
        toggleSidebarMenu();
    });

    CloseSidebarButton.addEventListener('click', (e) => {
        toggleSidebarMenu();
    });

    document.addEventListener('click', (event) => {
        if (!sidebarMenu.contains(event.target) && !MobileMenuButton.contains(event.target)) {
            sidebarMenu.classList.remove('show');
            sidebarMenu.classList.add('hide');
        }
    });

    const sidebarItems = document.querySelectorAll('aside .mobile-navbar-menu li a');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarMenu.classList.remove('show');
            sidebarMenu.classList.add('hide');
        });
    });
});
