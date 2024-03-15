//sidebar

//abrir
document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("sidebar").classList.toggle("active");
});
//fechar
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menu = document.getElementById("menu");
    if (!sidebar.contains(event.target) && event.target !== menu) {
        sidebar.classList.remove("active");
    }
});

//Navegação para a página content area
function loadContent(id) {
    window.location.href = "content-area.html";
    switch(id) {
        case 1:
            window.location.href = "/areas/FrontEnd.html";
            break;
        case 2:
            window.location.href = "/areas/BackEnd.html"
            break;  
        case 3:
            window.location.href = "/areas/Analise.html"
            break;  
        case 4:
            window.location.href = "/areas/Seguranca.html"
            break;  
        case 5:
            window.location.href = "/areas/Qualidade.html"
            break;                       
    }
}


//Navegação para a página home
function Volta(){
    window.location.href = "/../home.html";
}

//Navegação para a págino de roadmaps
function Maps(){
    window.location.href = "roadmaps.html"; 
}

function Maps2() {
    window.location.href = "/../roadmaps.html";
}