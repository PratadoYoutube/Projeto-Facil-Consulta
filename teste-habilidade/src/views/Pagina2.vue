<template>
<div class="container">
  <header class="header">
    <!-- AQUI EU NÃO ACHEI O ÍCONE QUE O SENHOR USA NO EXEMPLO DO SITE, DEIXEI SÓ A BORDA ROXA -->
     <router-link to="/" tag="button" class="Submit-btn">​</router-link> 
  </header>
    <main class="main-content">
    <h1> Sobre o Atendimento </h1>
    <h2> Detalhes do Atendimento</h2>
  <form id="Cadastro2">
    <div class="Input-container">
      <label for="especialidade">Selecione sua especialidade</label>
       <input type="text" id="especialidade" v-model="especialidade" placeholder="Selecione sua especialidade">
    </div>
      <div class="Input-container">
      <label for="preço">Informe o preço da consulta*</label>
       <input type="text" id="preço" v-model="preço" placeholder="Valor">
    </div>
      <div class="Input-container">
      <label id="opcoes" for="formas de pagamento">formas de pagamento da consulta*</label>
       <div class="checkbox-container">
         <input type="checkbox" name="formas de pagamento" v-model="preço" value="Formas de pagamento da consulta">
         <span>Pix</span>
       </div>
        <div class="checkbox-container">
         <input type="checkbox" name="formas de pagamento" v-model="preço" value="Formas de pagamento da consulta">
         <span>Em dinheiro</span>
       </div>
           <div class="checkbox-container">
         <input type="checkbox" name="formas de pagamento" v-model="preço" value="Formas de pagamento da consulta">
         <span>Cartão de crédito</span>
       </div>
       <div class="Input-container">
          <router-link to="/Pagina3" tag="button" class="Submit-btn">Próximo</router-link>
       </div>
    </div>
  </form>
  </main>
     <aside class="side-bar"> </aside>
     <content class="content-bar"></content>
     <footer class="footer"></footer>     
  </div>
</template>
<style>
.main-content{
    grid-area: main ;
    background-image: url('F:\TESTE DE HABILIDADE\Front-end-F-cilConsulta\teste-habilidade\src\assets\desktop-pagina-2.png');
    background-position: right center;
    background-repeat: no-repeat;
    padding:30px;
    font-family: 'Comfortaa', cursive;
}
.main-content h1{
  color: #483698;
   font-size: 26px;
   margin-bottom: 28px;
}

.main-content h2{
    margin-bottom: 28px;
    font-size: 18px;
}
</style>
