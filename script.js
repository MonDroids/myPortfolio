// document.addEventListener('DOMContentLoaded', () => {
    const harTsagaanTovch = document.getElementById('toggleDarkMode');
    console.log("buren achaallaj bn");
    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark-mode');
        console.log("DarkModeTrue");
    }
    else{
        console.log("DarkModeFalse");
    }
    harTsagaanTovch.addEventListener('click', () => {
            const assanEseh = document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', assanEseh);
            // localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
            if(assanEseh){
                console.log("dark mode enabled");
            }
            else{
                console.log("dark mode disabled");
            }
        });
// });