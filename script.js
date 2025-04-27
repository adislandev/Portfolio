console.log('Portfolio script carregado!');

// --- Lógica do Menu Mobile --- 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const body = document.body;

    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', () => {
            navMobile.classList.toggle('active');
            menuToggle.classList.toggle('active');
            body.classList.toggle('menu-open'); 
        });

        // Fechar menu ao clicar em um link (opcional)
        const navLinks = navMobile.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    }

    // --- Lógica das Abas de Experiência ---
    const tabsContainer = document.querySelector('.experience-tabs');
    const contentContainer = document.querySelector('.experience-content');

    if (tabsContainer && contentContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabPanels = contentContainer.querySelectorAll('.tab-panel');

        tabsContainer.addEventListener('click', (e) => {
            const clickedTab = e.target.closest('.tab-button');
            if (!clickedTab) return; // Sai se não clicou em um botão

            const targetTab = clickedTab.dataset.tab;

            // Remover active dos outros botões e painéis
            tabButtons.forEach(tab => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.hidden = true;
            });

            // Adicionar active ao botão clicado
            clickedTab.classList.add('active');
            clickedTab.setAttribute('aria-selected', 'true');

            // Encontrar e mostrar o painel correspondente
            const targetPanel = contentContainer.querySelector(`.tab-panel[data-panel="${targetTab}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
                targetPanel.hidden = false;
            }
        });
    }

    // --- Lógica do Ano Atual no Footer ---
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} AdislanDev. Todos os direitos reservados.`;
    }

}); // Fim do DOMContentLoaded

// --- Lógica do Efeito de Fundo com Mouse ---
window.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPercent = (clientX / innerWidth) * 100;
    const yPercent = (clientY / innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`);
    document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`);
});

// Lógica do Intersection Observer para animações virá aqui (se implementarmos) 