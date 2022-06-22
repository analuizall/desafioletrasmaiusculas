import { LightningElement , track } from "lwc";

export default class App extends LightningElement {
  @track nome1;
  @track sobrenome1;
  nomeM;
  sobrenomeM;

  mudaNome(event){
    //console.log(event);   para testar...ver o que o código está fazendo
    //console.log(event.target.value);  para testar...ver o que o código está fazendo
    this.nome1 = event.target.value;

  }

  mudaSobrenome(event){
    this.sobrenome1 = event.target.value;

  }

   nomeESobrenomeMaiusculo(){
    this.nomeM = this.nome1.toUpperCase();
    this.sobrenomeM = this.sobrenome1.toUpperCase();
  }


  nomeMaiusculo(){
    this.nomeM = this.nome1.toUpperCase();
  }

  sobrenomeMaiusculo(){
    this.sobrenomeM = this.sobrenome1.toUpperCase();
  }

  
}
