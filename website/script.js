addEventListener("DOMContentLoaded", (event) => {



    //Buttons
    let darkMode = localStorage.getItem('darkMode');

    const lightOrDarkMode = document.getElementById('light-darkMode');



    const enableDarkMode = () => {
        document.body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'active');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkMode');
        localStorage.setItem('darkMode', 'inactive');
    }



    localStorage.getItem('darkMode') === 'active' ? enableDarkMode() : disableDarkMode();



    lightOrDarkMode.addEventListener("click", () => {
        darkMode = localStorage.getItem('darkMode');
        darkMode !== "active" ? enableDarkMode() : disableDarkMode();
    });


});
    function showSidebar() {
        const sideBar = document.querySelector('.sideBar');
        sideBar.classList.add('active');
    }

    function hideSidebar() {
        const sideBar = document.querySelector('.sideBar');
        sideBar.classList.remove('active');
    }