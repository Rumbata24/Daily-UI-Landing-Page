const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNavigation = document.querySelector('.mobile-navigation');


menuIcon.addEventListener('click', ()=>{
    mobileNavigation.style.display = 'block';
});

closeIcon.addEventListener('click', ()=>{
    mobileNavigation.style.display = 'none';
});


document.body.addEventListener('click', (event) => {
    // Check if the clicked element is not the menu icon or inside the mobile navigation
    if (!event.target.closest('.menu-icon') && !event.target.closest('.mobile-navigation')) {
        // Close the mobile navigation menu
        mobileNavigation.style.display = 'none';
    }
});
