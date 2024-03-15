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
function loadPage() {
    window.location.href = "content-area.html";
}

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

function Volta(){
    window.location.href = "/../home.html";
}



