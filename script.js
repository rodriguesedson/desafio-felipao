/*Classificador de nível de Herói*/

const nomeHeroi = 'Aghkundr';
let xp = 3570;
let nivel = '';

switch (true) {
  case (xp <= 1000):
    nivel = 'Ferro';
    break;
  case (xp <= 2000):
    nivel = 'Prata';
    break;
  case (xp <= 6000):
    nivel = 'Ouro';
    break;
  case (xp <= 7000):
    nivel = 'Platina';
    break;
  case (xp <= 8000):
    nivel = 'Ascendente';
    break;
  case (xp <= 9000):
    nivel = 'Imortal';
    break;
  case (xp >= 10001):
    nivel = 'Radiante';
}

console.log(`"O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**."`);
