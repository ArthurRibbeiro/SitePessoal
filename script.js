document.addEventListener("DOMContentLoaded", function () {
    var textElements = document.querySelectorAll(".gradientTittle");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        
        var ired = 26;
        var igreen = 48;
        var iblue = 255;

        var fred = 182;
        var fgreen = 0;
        var fblue = 229;



        textElements.forEach(function (element) {

            var retangulo = element.getBoundingClientRect();
            var posicaoTopNaTela = retangulo.top + window.scrollY;
            console.log(retangulo.top)


            porcentPosic = retangulo.bottom /window.innerHeight

            if (porcentPosic > 0.1 && porcentPosic <= 0.90){
                // Calcular e ajustar a cor conforme o scroll
                //var percentScrolled = (scrollPosition - elementPosition) / element.offsetHeight;

                
                var red = (ired) + ((fred - ired) * porcentPosic) 
                var green = (igreen) + ((fgreen - igreen) * porcentPosic) 
                var blue = (iblue) + ((fred - ired) * porcentPosic) 

                element.style.color = "rgb(" + red + "," + green + "," + blue + ")";
            }


        });
    });
});
