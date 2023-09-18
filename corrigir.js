class Corrigir{
  constructor(gabarito, peso){
    this.peso = peso;
    this.gabarito = gabarito;
    this.provas = []; //push linha 11 colocando todas as provas para comparaçao
  }
  compara(prova){
    prova.array = Object.keys(prova.gabarito).reduce((total, j) => {
      return total += (prova.gabarito[j].toLowerCase()=== this.gabarito[j].toLowerCase()? this.peso[j]:0)
    },0);  //colocado o '0' para retirar o error no caso de array vazio
    this.provas.push(prova);
  }

  media(){
    let sum = Object.values(this.provas).reduce((sum, j) => sum + j.array,0);
    return sum /this.provas.length; //usado a variavel 'sum' para declarar que é um numero e prosseguir com a soma
  }

  baixa( j = 1){
    let array = this.provas.map((gabarito) => gabarito.array);
    array.sort((a, b) => a-b); return array.slice(0, j).join();
  }

  alta( j = 1){
    let array = this.provas.map((gabarito) => gabarito.array);
    array.sort((a, b) => a-b); return array.slice(-j).join();
  }

  reprovados(j = 7){
    let array = this.provas.map((gabarito)=> gabarito.array);
    array.sort().reverse(); //deixando em ordem decrescente
    return array.filter((array)=> array < j)
  }
  
  aprovados(j = 7){
    let array = this.provas.map((gabarito)=> gabarito.array);
    array.sort().reverse(); //deixando em ordem decrescente
    return array.filter((array)=> array > j)
  }
}
export{Corrigir}