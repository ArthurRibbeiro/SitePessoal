
function reload(){
    
    document.addEventListener("DOMContentLoaded", function () {
        var textElements = document.querySelectorAll(".gradient");
        var cardElements = document.querySelectorAll(".celula");
    
    
        const recalculaCor = () => {
            var ired = 26;
            var igreen = 48;
            var iblue = 255;
    
            var fred = 127;
            var fgreen = 0;
            var fblue = 178;
    
            textElements.forEach(function (element) {
    
                var retangulo = element.getBoundingClientRect();
    
                porcentPosicCima = retangulo.top /window.innerHeight
                porcentPosic = retangulo.bottom /window.innerHeight
    
                if (porcentPosic > 0 && porcentPosicCima <= 1){
                    // Calcular e ajustar a cor conforme o scroll
                    //var percentScrolled = (scrollPosition - elementPosition) / element.offsetHeight;
    
                    
                    var red = (ired) + ((fred - ired) * porcentPosic) 
                    var green = (igreen) + ((fgreen - igreen) * porcentPosic) 
                    var blue = (iblue) + ((fblue - iblue) * porcentPosic) 
    
                    element.style.color = "rgb(" + red + "," + green + "," + blue + ")";
                }
    
    
            });
    
            cardElements.forEach(function (element) {
    
                var retangulo = element.getBoundingClientRect();
    
                porcentPosicCima = retangulo.top /window.innerHeight
                porcentPosic = retangulo.bottom /window.innerHeight
    
                if (porcentPosic > 0 && porcentPosicCima <= 1){
                    // Calcular e ajustar a cor conforme o scroll
                    //var percentScrolled = (scrollPosition - elementPosition) / element.offsetHeight;
    
                    
                    var red = (ired) + ((fred - ired) * porcentPosic) 
                    var green = (igreen) + ((fgreen - igreen) * porcentPosic) 
                    var blue = (iblue) + ((fblue - iblue) * porcentPosic) 
    
                    element.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

                    console.log('aaaaaaaaaaaaa');
                }
    
    
            });
    
        }
    
        recalculaCor()
    
        window.addEventListener("scroll", recalculaCor);
    });

}    

/*
window.onhashchange = function () {
    console.log('onhashchange property works');
  };
*/
  reload()