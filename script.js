document.addEventListener('DOMContentLoaded', () => {
    const harTsagaanTovch = document.getElementById('toggleDarkMode');
    console.log("buren achaallaj bn");
    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark-mode');
        console.log("DarkModeTrue");
    } else {
        console.log("DarkModeFalse");
    }
    
    harTsagaanTovch.addEventListener('click', () => {
        const assanEseh = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', assanEseh);
        if(assanEseh){
            console.log("dark mode enabled");
        } else {
            console.log("dark mode disabled");
        }
    });

    const PASSWORD = "123";
    const loginBTN = document.getElementById("login-button");
    const loginSection = document.getElementById("login-section");
    const adminPanel = document.getElementById("admin-panel");
    const loginError = document.getElementById("login-error");

    loginBTN.addEventListener("click", () => {
        const password = document.getElementById("admin-password").value;
        if(password === PASSWORD){
            loginSection.style.display = "none";
            adminPanel.style.display = "block";
            console.log("Login success");
        } else {
            loginError.textContent = "Нууц үг буруу байна!";
            console.log("Login fail!");
        }
    });

    const enableEditBtn = document.getElementById("enable-edit-mode");
    const saveBtn = document.getElementById("save-all");
    const cancelBtn = document.getElementById("cancel-all");

    enableEditBtn.addEventListener("click", () => {
        const about = document.getElementById("about-text");
        about.setAttribute("contenteditable", "true");

        const project1 = document.getElementById("project-1");
        project1.setAttribute("contenteditable", "true");
        const project2 = document.getElementById("project-2");
        project2.setAttribute("contenteditable", "true");
        const project3 = document.getElementById("project-3");
        project3.setAttribute("contenteditable", "true");

        saveBtn.style.display = "inline-block";
        alert("Засварлах горим идэвхжлээ. Хадгалах товчыг дарж өөрчлөлтөө хадгална уу!");
        
        saveBtn.addEventListener("click", ()=>{
            const aboutText = document.getElementById("about-text").textContent.trim();
            localStorage.setItem("aboutText", aboutText);
            const project1Text = document.getElementById("project-1").textContent.trim();
            localStorage.setItem("project1Text", project1Text);
            const project2Text = document.getElementById("project-2").textContent.trim();
            localStorage.setItem("project2Text", project2Text);
            const project3Text = document.getElementById("project-3").textContent.trim();
            localStorage.setItem("project3Text", project3Text);
            alert("Өөрчлөлтүүд амжилттай!");
        });
    });

    document.addEventListener("DOMContentLoaded", ()=>{
        const savedAboutText = localStorage.getItem("aboutText");
        if(savedAboutText){
            document.getElementById("about-text").textContent = saveAboutText;
        }
        const savedProject1Text = localStorage.getItem("project1Text");
        if(savedProject1Text){
            document.getElementById("project-1").textContent = saveProject1Text;
        }
        const savedProject2Text = localStorage.getItem("project2Text");
        if(savedProject2Text){
            document.getElementById("project-2").textContent = saveProject2Text;
        }
        const savedProject3Text = localStorage.getItem("project3Text");
        if(savedProject3Text){
            document.getElementById("project-3").textContent = saveProject3Text;
        }
    });
});
