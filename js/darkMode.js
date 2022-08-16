window.onload=function(){

    const darnkBtn = document.getElementById('teste');
    const bodyEl = document.querySelector('body');
    
    const darkMode = () => {
        bodyEl.classList.toggle('dark-mode')
    } 

    darnkBtn.addEventListener('click', () => {
        setDarkMode = localStorage.getItem('dark-mode');

        if(setDarkMode !== "on"){
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', 'on');
        }else{
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', null);
        }
    });

    let setDarkMode = localStorage.getItem('dark-mode');

    if(setDarkMode === 'on'){
        darkMode();
    }
}
