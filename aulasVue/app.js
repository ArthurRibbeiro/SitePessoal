const appVue = {
    data(){
        return{
            N1:0,
            N2:0,
            soma: 0,
            sub: 0,
            mult: 0,
            div: 0

        }

    },

    methods: {
        submitForm(e){
            e.preventDefault();

            this.nome = this.inputName;




        },

        calcular(){
            this.soma = this.N1 + this.N2,
            this.sub = this.N1 - this.N2,
            this.mult = this.N1 * this.N2,
            this.div = this.N1 / this.N2
        }

    }
}

Vue.createApp(appVue).mount('#app');
