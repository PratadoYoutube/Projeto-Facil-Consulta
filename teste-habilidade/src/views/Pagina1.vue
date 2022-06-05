<template> 
<div class="container">
    <header class="header"></header>
    <main class="main-content">
       <h1>Sobre o profissional</h1>
                <h2>Dados do profissional</h2>
                <div class="Input-container">
                    <label for="nome">Nome Completo*</label>
                    <input type="Text" id="nome" name="nome" v-model="nome" placeholder="Digite o nome completo">
                </div>
                 <div class="Input-container">
                    <label for="CPF">CPF*</label>
                    <input type="text" id="CPF" v-model="CPF" placeholder="Digite seu CPF">
                </div>
                <div class="Input-container">
                    <label for="Número de celular">Número de celular*</label>
                    <input type="text" id="numero" v-model="Númerodecelular" placeholder="(00) 0000-0000">
                </div>
                    <div class="Input-container">
                    <label for="estados">Estado:</label>
                    <select name="estados" id="estados" v-model="estados" placeholder="selecione">
                        <option value="">Selecione seu estado</option>
                        <option v-for="estados in estados" :key="estados" :value="estados">
                         </option>
                    </select>
                </div>
                    <div class="Input-container">
                    <label for="cidade">Cidade:</label>
                    <select name="cidade" id="cidade" v-model="cidade" placeholder="selecione">
                        <option value="">Selecione sua cidade</option>
                         <option v-for="cidades in cidades" :key="cidades" :value="cidades">
                         </option>
                    </select>
                </div>
                     <div class="Input-container">
                      <router-link to="/Pagina2" tag="button" class="Submit-btn">Próximo</router-link>
                       </div>
                        </main>
                <aside class="side-bar">
                </aside>
            <content class="content-bar">
                  </content>
            <footer class="footer">
                 </footer>     

</div>    
</template>
<script>
import estiloCadastro from "../components/Cadastro.vue"
export default {
   name:'estiloCadastro',

   /* AQUI ABAIXO FOI EU TENTANDO CONFIGURAR A API, MAS NÃO TENHO EXPERIÊNCIA, PRETENDO APRENDER A MANIPULAR MELHOR */
    data() {
      return {
        estados:null,
        cidades:null,
        status:'solicitado',
        msg:null
      }
    },
    methods: {
      async getEstados(){
        const req = await fetch ('http://localhost:3000/estados');
        const data = await req.json();

       this.estados = data.estados;
       this.cidades = data.cidades
      }
    },
    mounted() {
      this.getEstados();
    },
     }
  /*ATÉ CRIEI UMA PASTA 'DB' COM JSON, MAS NÃO CONSEGUI TRABALHAR DIREITO, SE CONSEGUIR EXPLICAR MEUS ERROS EU FICO MUITO GRATO*/
</script>

<style scoped>
.main-content{
    grid-area: main ;
    background-image: url( 'F:\TESTE DE HABILIDADE\Front-end-F-cilConsulta\teste-habilidade\src\assets\pagina1.png');
    background-position: right center;
    background-repeat: no-repeat;
    padding: auto;
    font-family: 'Comfortaa', cursive;
    border: 2px solid white ;
    border-radius: 8px;

}
.main-content h1{
  color: #483698;
   font-size: 26px;
   margin-bottom: 32px;
}
.main-content h2{
   font-size: 18px;
   margin-bottom: 18px;
}

input, select{
    padding: 6px  ;
    width:25%;
    margin-bottom: 5px;
}

</style>
 