function resultado(){

const nome = document.querySelector('#nome').value
const idade = document.querySelector('#idade').value
const linguagem = document.querySelector('#linguagem').value
const gostando = document.querySelector('#gostando')
const resposta1 = document.querySelector('#resposta1')
const resposta2 = document.querySelector('#resposta2')
const videoAlura = document.querySelector('#videoAlura')

 
  if(gostando.value == 1){
    document.getElementById("resposta1").innerHTML = `Olá ${nome} ! Você tem ${idade} anos e está aprendendo e curtindo ${linguagem}. Muito bom! Continue estudando e você terá muito sucesso."`
    }
  if(gostando.value == 2){
    document.getElementById("resposta2").innerHTML = `Olá ${nome} ! Você tem ${idade} anos e não esta curtindo ${linguagem},  ahh que pena... Já tentou aprender outras linguagens? O vídeo abaixo será de grande ajuda! Espero que goste!`
    document.getElementById("videoAlura").style.display = "block"; 
    }
}