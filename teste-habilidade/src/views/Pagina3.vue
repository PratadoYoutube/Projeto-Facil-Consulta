<template>
<!-- NÃO CONSEGUI RESGATAR AS INFORMAÇÕES DO BANCO DE DADOS :/ -->
<div class="container">
  <header class="header">
  </header>
    <main class="main-content">
      <h1>Revisão de cadastro</h1>
    <div class="input-incorrect">
       <h3>Nome completo</h3>
       <h4>Erick Dean Malizia Borges</h4>
    </div>

    <div class="input-incorrect">
       <h3>CPF</h3>
       <h4>0000000000000</h4>
 </div>

<div class="input-incorrect">
       <h3>Número de celular ou telefone</h3>
       <h4>(61) 991141730</h4>
 </div>

<div class="input-incorrect">
       <h3>Estado/Cidade</h3>
       <h4>Distrito Federal-Brasília</h4>
 </div>

<div class="input-incorrect">
       <h3>Especialidade principal</h3>
       <h4>Desenvolvedor front-end</h4>
 </div>

<div class="input-incorrect">
       <h3>Preço da consulta</h3>
       <h4>R$ 0,00</h4>
 </div>

 <div class="input-incorrect">
       <h3>Formas de pagamento da consulta</h3>
       <h4>Pix</h4>
  </div>
    <router-link to="/pagina4" tag="button" class="Submit-btn">Cadastrar Profissional</router-link> 
    </main>
     <aside class="side-bar"> </aside>
     <content class="content-bar"></content>
     <footer class="footer"></footer>  
</div>
    </template>

<style scoped>

.main-content{
  background-image: url('F:\TESTE DE HABILIDADE\Front-end-F-cilConsulta\teste-habilidade\src\assets\desktop-pagina-3.png');
      grid-area: main ;
    background-position: right center;
    background-repeat: no-repeat;
    font-family: 'Comfortaa', cursive;
}

.main-content h1{
 margin-left: 5%;
 font-size: 24px;
 margin-bottom: 12px;
}
.input-incorrect{
  padding: 2px;
}
.input-incorrect h3{
  color: black;
  font-size: 12px;
}

.input-incorrect h4{
  color: grey;
  font-size:10px ;
  margin-bottom: 10px;
}

.Submit-btn {
    background-color: #fbde40;
    color:black ;
    font-weight: 300px;
    border: 2px solid #fbde40;
    border-radius: 8px ;
    padding: 6px;
    font-size: 12px;
    margin: 25px;
    cursor: pointer;
    transition: .5s ;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
    margin-right: 60%;
}

.Submit-btn:hover {
    background-color: transparent;
    color: #fbde40;
}

</style>
