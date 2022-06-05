// AQUI APLIQUEI OS ESTILOS GERAIS DAS PÁGINAS //

<template>
</template>
<script>
export default {
   name:'estiloCadastro',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Roboto&display=swap');

.container{  
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-areas:
    "content-bar header header aside"
     "content-bar main main aside " 
    "content-bar main main aside " 
    "content-bar main main aside"
    "content-bar main main aside"
    "content-bar main main aside"
    "content-bar footer footer aside";
   
   grid-template-rows: 50px 1fr 1fr 1fr 100px;
}

.header{
    grid-area: header;
    background-color:#fbde40;
}

.footer{
    grid-area: footer;
    background-color:#fbde40;
    padding: 20px;
}

.side-bar{
        grid-area: aside;
    background-color:#fbde40;
}

.content-bar{
        grid-area: content-bar;
    background-color: #fbde40;

}

.Input-container{
display: flex;
flex-direction:column;
margin-bottom: 5px;
}


label {
font-weight: bold;
margin-bottom: 10px;
color: #222;
padding: 5px 10px;
font-size: 12px;
}

input, select{
    padding: 5px  ;
    width:40%;
    margin-bottom: 5px;
}

#opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  #opçoes-title {
    width: 100%;
  }
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }
  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }
  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }

.Submit-btn {
    background-color: #483698;
    color:aliceblue ;
    font-weight: 800px;
    border: 2px solid #483698;
    border-radius: 8px ;
    padding: 4px;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    transition: .5s ;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    margin-right: 60%;
    }

.Submit-btn:hover {
    background-color: transparent;
    color: #483698;
}

@media only screen and (max: width 748px){
  .main-cadastro{
    flex-direction: column;
}
}

</style>
