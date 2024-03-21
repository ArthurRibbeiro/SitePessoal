


//template dos componentes de cabeçalho e rodapé
const cabecalho = {
    template:`
    
    <div class="cabecalho">
        <div class="logoSpace">
            <img src="/Untitled (Copy)/Group 2294.png" alt="">
            <img src="/Untitled (Copy)/Atualiz.art.png" alt="">

        </div>
        <div class="navbar lightInter">
            <ul>
            <li><RouterLink to="/">sobre</RouterLink></li>
            <li><RouterLink to="/knowledge">profissional</RouterLink></li>
            <li><RouterLink to="/dev">contato</RouterLink></li>
            </ul>
        </div>
    </div>

    `
}

const rodape = {
    template:`
    
    <div class="rodape lightInter ">
            <div id="meEncontre">

                    <h3 class="gradient boldTitle">me encontre</h3>
                    
                    <span class="boldTitle">nas interwebs</span>

            </div>
            <div class="contato boldTitle ">
                <ul>
                    <li><a href="https://www.linkedin.com/in/arthur-ribeiro-da-silva-63736216b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedIn</a></li>
                    <li><a href="https://www.instagram.com/artthur_ribbeiro?igsh=MXAxZ2lyaDdiY2plYg==">instagram</a></li>
                    <li><a href="https://wa.me/+5527996667239">whatsapp</a></li>
                </ul>

            </div>
        </div>

    `
}

//templates das páginas de conteúdo

const about = {
    template:`
    
    <link rel="stylesheet" href="/about/about.css">
    
    <div>

        <h3 class="lightInter slimTitle">A forma como <span class="gradient boldTitle">mesclamos</span> nossos <span class="gradient boldTitle">conhecimentos</span> é o que nos torna <span class="gradient boldTitle">indivíduos</span></h3>
    
        <div class="painel">
    
            <div class="half">
    
                <div id="i2x1" class="i2x1">
                    <img src="/Untitled (Copy)/bartend_2x1.png" alt="">
                </div>
                <div class="i2x1">
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/cgDraw3_1x1.jpeg" alt="">
                    </div>
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/Drink_1x1.jpg" alt="">
                    </div>
                </div>
                <div class="i2x1">
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/pc2_1x1.jpg" alt="">
                    </div>
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/oneShotDraw_1x1.jpeg" alt="">
                    </div>
                </div>
            </div>
            <div class="half">
                <div>
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/dev1_1x1.png" alt="">
                    </div>
                    <div class="i1x1">
                        <img src="/Untitled (Copy)/dev2_1x1.png" alt="">
                    </div>
                </div>
                <div class="i2x2">
                    <img src="/Untitled (Copy)/pc1_2x2.jpg" alt="">
                    
                </div>
            </div>
        </div>
    </div>
    

        
        <div >
            <h3 class="lightInter slimTitle">Arthur Ribeiro in a <span class="gradient boldTitle">nutshell</span></h3>
            <div class="sobre lightInter texto">
                <p>Opa! me chamo Arthur Ribeiro da Silva, tenho 21 anos e estou construindo uma carreira como desenvolvedor. Apesar disso tenho muitas inspirações, paixões, hobbies e projetos.</p>

                <p>Minha jornada no mundo da informática começou em 2019 quando por um quase engano saí do rumo de me tornar um engenheiro elétrico para ser um técnico de informática. Me identifiquei e me destaquei na parte de programação e hardware, e como junto ao curso já estagiava em manutenção de computadores segui trabalhando e me atualizando nessa parte. desde então sigo trabalhando autônomo ou com projetos paralelos. comecei com computadores simples para uso doméstico e aos poucos comecei a trabalhar com máquinas mais potentes. hoje monto estações de trabalho e principalmente maquinas para jogos com estética gamer</p>
                    
                <p>durante a pandemia do covid-19 as atividades do técnico de informática foram suspensas e durante esse tempo me aprofundei no ramo da programação de forma autodidata e trabalhei de forma autonoma para suprir a demanda por  computadores da época, enquanto no tempo 
                livre gostava de dedicar tempo ao lado criativo, escrevendo e desenhando.</p> 
                    
                <p>ao fim da pandemia finalizei o técnico e pouco depois iniciei a faculdade de ADS e tive uma nova inspiração, iniciar um novo hobbie; me tornar bartender. gosto de nas horas vagas fazer drinks em família ou entre amigos, e aos fins de semana trabalhar como bartender freelance</p>
                    
                <p>sou uma pessoa que gosta de explorar o lado criativo e adquirir novas habilidades, estou sempre em movimento e mesclando meus conhecimentos de diferentes areas. acredito que qualquer um pode ter um determinado conhecimento específico. mas <span class="gradient boldTitle">a forma como mes clamos nossos conhecimentos é o que nos torna indivíduos</span>, nos diferenciando.
                por isso estou sempre me <span class="gradient boldTitle">atualizando</span></p>
                
            </div>     
        </div>
    
    `
}

const dev = {
    template:`
    
    <link rel="stylesheet" href="/develop/dev.css">
    <div id="repositorio">
        <h3 class="lightInter slimTitle">meu <span class="gradient boldTitle">repositório</span></h3>

        <div id="gitHubBtn">
            <div></div>
            <a href="https://github.com/ArthurRibbeiro"><div><h4 class="slimTitle lightInter">ArthurRibbeiro</h4></div></a>
        </div>

    </div>
    
    <div id="tecnologias">
        <h3 class="lightInter slimTitle">minhas <span class="gradient boldTitle">tecnologias</span></h3>

        <div class="placa lightInter">
            <div class="linha">
                <div class="celula">Java</div>
                <div class="celula">Python</div>
            </div>
            
            <div class="linha">
                <div class="celula">JavaScript</div>
                <div class="celula">Vue</div>
            </div>

            <div class="linha">
                <div class="celula">Materialize</div>
                <div class="celula">Ionic</div>
            </div>

            <div class="linha">
                <div class="celula">Node</div>
                <div class="celula">React</div>
            </div>

            <div class="linha">
                <div class="celula">Git</div>
                <div class="celula">Docker</div>
            </div>
        </div>
    </div>
    <div id="projeto">
        <h3 class="lightInter slimTitle">meus <span class="gradient boldTitle">projetos</span></h3>
        <div class="projcard">
            <div class="projimg">
                <img src="/Untitled (Copy)/Atualiz.art_multi.png" alt="">
            </div>
            <div class="projdesc lightInter">
                <h4 class="gradient boldTitle">Website pessoal</h4>
                <p class=" texto">queria desenvolver um lugar onde pudesse expor não só meu portifólio e trabalho, mas quem sou e minhas multiplas áreas de atividade. gostaria de poder mostrar meu lado criativo e hiperativo quando o assunto é novas habilidades. Espero que com isso tenha conseguido passar essa pequena parte de mim </p>
                <button class="projetoBtn celula lightInter ">Sobre</button>
            </div>
            

        </div>
    </div>
    `
}

const knowledge = {
    template:`
    
    <link rel="stylesheet" href="/knowledge/knowledge.css">
    <div class="probox">
        <div class="proboxTitle">
            <h3 class="lightInter slimTitle">como <span class="gradient boldTitle">desenvolvedor</span></h3>
            <a href="../develop/dev.html"><button class="lightInter celula">saiba mais</button></a>
            
        </div>
        <div class="lightInter proboxShowcase">
            <div class="half">
                <div>
                    <span>tendo iniciado meus estudos em 2019 descobri ser a minha paixão. relembrando e realizando também um sonho de infancia</span>

                </div>
                <div>
                <img src="../Untitled (Copy)/dev1_1x1.png" alt="">
                </div>
            </div>
            <div class="half bottom">
                <div>
                    <span>prosseguindo em 2022 na faculdade de ADS sigo adquirindo base de conhecimento e experiencia. hoje buscando uma oportunidade profissiona na area</span>

                </div>
                <div>
                    <img src="../Untitled (Copy)/dev2_1x1.png" alt="">
                </div>
            </div>

        </div>
    </div>

    <div class="probox">
        <div class="proboxTitle">
            <h3 class="lightInter slimTitle">como <span class="gradient boldTitle">PC builder</span></h3>
            
        </div>
        <div class="lightInter proboxShowcase">
            <div class="half">
                <div>
                    <span>partindo de 2019 em um estágio se tornou minha fonte de renda autônoma durante a pandemia e uma das atividades mais prazerozas e estressantes ao mesmo tempo</span>

                </div>
                <div>
                    <img src="../Untitled (Copy)/pc4_1x1.jpg" alt="">
                </div>
            </div>
            <div class="half bottom">
                <div>
                    <span>me tornei fascinado pela estética e potencial quando evoluí o nível das máquinas que montava.
                        também sendo muito satisfatório estar realizando sonhos de quem sempre sonhou ter um pc gamer</span>
                        
                    </div>
                    <div>
                        <img src="../Untitled (Copy)/pc3_1x1.jpg" alt="">
                    </div>
                </div>

        </div>
    </div>

    <div class="probox">
        <div class="proboxTitle">
            <h3 class="lightInter slimTitle">como <span class="gradient boldTitle">bartender</span></h3>
            
        </div>
        <div class="lightInter proboxShowcase">
            <div class="half">
                <div>
                    <span>desde 2023 admirava as habilidades e o carisma que o bartender carrega. comecei a fazer drinks em família e trabalhar como freelance nos fins de semana</span>

                </div>
                <div>
                <img src="../Untitled (Copy)/bartend2_1x1.jpeg" alt="">
                </div>
            </div>
            <div class="half bottom">
                <div>
                    <span>ainda sigo aprendendo muita coisa, pretendo ler muitos livros sobre. acredito que o dever do bartender é manter o ambiente agradável. seja por bons drinks ou por seu carisma e senso de humor
                        um drink favorito? Mojito.</span>

                </div>
                <div>
                    <img src="../Untitled (Copy)/bartend3_1x1.jpeg" alt="">
                </div>
            </div>

        </div>
    </div>

    <div class="probox">
        <div class="proboxTitle">
            <h3 class="lightInter slimTitle">como <span class="gradient boldTitle">artista</span></h3>
            <a href="https://www.instagram.com/fejaum.dwg?igsh=MWllemJ4NGV4bHR6eA=="><button class="lightInter celula">saiba mais</button></a>
            
        </div>
        <div class="lightInter proboxShowcase">
            <div class="half">
                <div>
                    <span>Desenho desde 2016 mas apenas em 2019 tive um foco maior em dedicar o tempo livre para melhorar o traço. subi um perfil no instagram postando com frequencia e criando uma comunidade</span>

                </div>
                <div>
                <img src="../Untitled (Copy)/cgDraw_1x1.jpeg" alt="">
                </div>
            </div>
            <div class="half bottom">
                <div>
                    <span>mas sendo o intagram conhecido por nao incentivar artistas, o alcance seguia diminuindo, o que gerou certo desanimo no perfil e decidi apenas desenhar sem foco nas postagens</span>

                </div>
                <div>
                    <img src="../Untitled (Copy)/cgDraw2_1x1.jpeg" alt="">
                </div>
            </div>

        </div>
    </div>
    
    `
}

//Estabelecimento de rotas


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
    {path: '/' , component: about},
    {path: '/about' , component: about},
    {path: '/knowledge' , component: knowledge},
    {path: '/dev', component: dev}
]
  })


// criaçao da instancia do Vue
const aplicacao = {
    data(){
        return{

        };
    },
    methods:{

    },

}


const app = Vue.createApp(aplicacao)

app.use(router)

// adição dos templates na instancia
app.component("cabecalho", cabecalho)
app.component("rodape", rodape)



//adição dos templates das paginas na instancia
app.component("about", about)
app.component("dev", dev)
app.component("knowledge", knowledge)






app.mount("#app")

