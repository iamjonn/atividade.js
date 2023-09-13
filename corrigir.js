function Corrigir(Q1,Q2,Q3,Q4,Q5){
  nota = 0
  Q1 === "a" ? nota+=2:nota+=0;
  Q2 === "b" ? nota+=2:nota+=0;
  Q3 === "a" ? nota+=2:nota+=0;
  Q4 === "c" ? nota+=2:nota+=0;
  Q5 === "d" ? nota+=2:nota+=0;

  return nota
}

console.log(Corrigir('a','b','b','b','b'))