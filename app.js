import Corrigir from './corrigir.js';


const peso = {q1:2, q2:2, q3:2, q4:2, q5:2}; // feito separadamente para possivel alteração de peso
const gabarito = {q1:"a", q2:"b", q3:"a", q4:"c", q5:"d"}
const prova = new Corrigir(gabarito, peso);

prova.add({
  estudante: 'jon,',
  gabarito: {q1:"a", q2:"b", q3:"b", q4:"b", q5:"b"},
});

console.log(Corrigir(prova))