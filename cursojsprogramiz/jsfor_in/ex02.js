const salaries = {
   Jack: 24000,
   Paul: 34000,
   Monica: 55000
};

// usando for..in
for ( let i in salaries) {

   // adicionar o símbolo do cifrão
   let salary = "$" + salaries[i];

   // mostre os valores
   console.log(`${i} : ${salary}`);
}