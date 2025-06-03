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

const PASSWORD = "123";
const loginBTN = document.getElementById("login-button");
const loginSection = document.getElementById("login-input");
const adminPanel = document.getElementById("admin-panel");
const loginError = document.getElementById("login-error");

loginBTN.addEventListener("click", () => {
    const password = document.getElementById("admin-password").value;

    if(password === PASSWORD){
        loginSection.style.display = "none";
        adminPanel.style.display = "block";
        console.log("Login success");
    }
        else{
            loginError.textContent = "Нууц үг буруу байна!";
            console.log("Login fail!");
        }
});
