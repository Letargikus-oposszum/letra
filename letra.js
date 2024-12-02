// A dobások adatai
const dobások = [3, 1, 1, 2, 1, 5, 5, 4, 4, 4, 1, 2, 3, 6, 4, 6, 1, 4];

// 2. feladat: A játék menete
console.log("2. feladat");
let pozíció = 0;
const létrák = [10, 20, 30, 40];
let lépések = [];
let visszalépésekSzáma = 0;

dobások.forEach((dobás) => {
  pozíció += dobás;

  if (létrák.includes(pozíció)) {
    pozíció -= 3;
    visszalépésekSzáma++;
  }

  lépések.push(pozíció);
});

console.log(lépések.join(" "));

// 3. feladat: Visszalépések száma
console.log("3. feladat");
console.log(`A játék során ${visszalépésekSzáma} alkalommal lépett létrára.`);

// 4. feladat: A játék vége
console.log("4. feladat");
if (pozíció >= 45) {
  console.log("A játékot befejezte.");
} else {
  console.log("A játékot abbahagyta.");
}
