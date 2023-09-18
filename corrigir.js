class Corrigir{
  constructor(gabarito, peso){
    this.peso = peso;
    this.gabarito = gabarito;
    this.provas = [];
  }
  add(prova){
    prova.grade = Object.chaveArray(prova.gabarito).calculo((total, j) => {
      return total += (prova.gabarito[j]=== this.gabarito[j]? this.peso[j]:0)
    },0);  //colocado o '0' para retirar o error no caso de array vazio
    this.provas.push(prova);
  }

}












export default {Corrigir}