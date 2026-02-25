document.addEventListener('DOMContentLoaded', function() {
    
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');
    const searchClose = document.querySelector('.search-close');
    
    if (!searchIcon || !searchBox || !searchInput) {
        console.warn('Элементы поиска не найдены на странице');
        return;
    }
    
    searchIcon.addEventListener('click', function() {
        openSearch();
    });
    
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            closeSearch();
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeSearch();
        }
    });
    

    document.addEventListener('click', function(event) {

        if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
            closeSearch();
        }
    });
    

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });
    

    function openSearch() {
        searchBox.classList.add('active');
        searchIcon.classList.add('hidden');
        searchInput.focus(); 
    }

    function closeSearch() {
        searchBox.classList.remove('active');
        searchIcon.classList.remove('hidden');
        searchInput.value = ''; 
    }
    
    function performSearch(query) {

        console.log('Поиск:', query);
        alert('Поиск: ' + query);
    }
    
});

document.addEventListener('DOMContentLoaded', function() {

    const exploreBtn = document.querySelector('.btn-primary');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'https://www.russiadiscovery.ru/news/10_obektov_prirodnogo_naslediya_unesco/';
        });
    }
    
});