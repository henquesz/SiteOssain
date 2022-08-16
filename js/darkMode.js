window.onload=function(){

    const darnkBtn = document.getElementById('teste-moon');
    const bodyEl = document.querySelector('body');

    var imageLogo = document.getElementById('imgNav');
    
    const darkMode = () => {
        bodyEl.classList.toggle('dark-mode')
    } 

    darnkBtn.addEventListener('click', () => {
        setDarkMode = localStorage.getItem('dark-mode');

        if(setDarkMode !== "on"){
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', 'on');

            imageLogo.src = "/public/assets/bulbassaur2.gif";
        }else{
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', null);

            imageLogo.src = "/public/assets/ossainGroup-black.png";
        }
    });

    let setDarkMode = localStorage.getItem('dark-mode');

    if(setDarkMode === 'on'){
        darkMode();
    }
}
