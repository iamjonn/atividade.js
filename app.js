import {Corrigir} from './corrigir.js';


const peso = {q1:2, q2:2, q3:2, q4:2, q5:2}; // feito separadamente para possivel alteração de peso
const gabarito = {q1:"A", q2:"b", q3:"A", q4:"c", q5:"D"}
const prova = new Corrigir(gabarito, peso);

//TESTADO COM 1 ALUNO OU VARIOS, TERMINADO COM 5

prova.compara({
  estudante: 'jon,',
  gabarito: {q1:"a", q2:"B", q3:"b", q4:"b", q5:"b"},
});

prova.compara({
  estudante: 'alice,',
  gabarito: {q1:"a", q2:"b", q3:"a", q4:"C", q5:"d"},
});

prova.compara({
  estudante: 'joao,',
  gabarito: {q1:"a", q2:"b", q3:"a", q4:"b", q5:"d"},
});
prova.compara({
  estudante: 'julia,',
  gabarito: {q1:"a", q2:"b", q3:"A", q4:"b", q5:"d"},
});
prova.compara({
  estudante: 'ISA,',
  gabarito: {q1:"B", q2:"b", q3:"c", q4:"b", q5:"D"},
});

console.log(`A media geral da turma foi: ${prova.media()}`);
console.log(`A nota mais baixa foi: ${prova.baixa()}`);
console.log(`A nota mais alta foi: ${prova.alta()}`);
console.log(`As notas dos reprovados são: ${prova.reprovados()} e foram ${prova.reprovados().length} reprovados😢`);
console.log(`As notas dos aprovados são: ${prova.aprovados()} e foram ${prova.aprovados().length} aprovados😁`);
