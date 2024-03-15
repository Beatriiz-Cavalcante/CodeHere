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
            document.getElementById("c1").style.display = "inline-block";
            document.getElementById("c2").style.display = "none";
            break;
        case 2:
            document.getElementById("c2").style.display = "inline-block";
            document.getElementById("c1").style.display = "none";
            break;           
    }
    
}



