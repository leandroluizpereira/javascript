

var then = new Date(2021,6,14); // DIA 14 de junho de 2021
var later = new Date(2021,6,14,17,10,30); // O mesmo dia,as 5 horas e 10 minutos da tarde , hora local
var now = new Date(); // ====== favorite criando objetto instanciado classe Date para data e hora atual
var elapsed = now - then ; // subtraçâo de data : intervalo em milissegundos
var ano = later.getFullYear() ; // =>2010
var mes =later.getMonth(); // 0:meses com base em zero
var data = later.getDate(); //dias com base de um
var dia =later.getDay();//dia da semana, 0 é domingo, 5 é sexta feira.
var hora = later.getHours();// 5 da tarde,hora local;
var horac =later.getUTCHours();//horas em utc; depende do fuso hórario

console.log(then);
console.log(now);
console.log(later);
console.log(elapsed);
console.log(ano);
console.log(mes);
console.log(data);
console.log(dia);
console.log(hora);
console.log(horac);

console.log("\u0000")   // \o caractere bull

console.log("\u0008")   // \b Retrocesso


console.log("\u0009")   // \t Tabulação horizontal 


console.log("\u000A")   // \n Nova linha


console.log("\u000B")   // \v Tabulação vertical


console.log("\u000C")  //  \f Avanço de página


console.log("\u000D")  //  \r Retorno de carro


console.log("\u0022")  //  \" aspas duplas


console.log("\u0027")  // \' apóstrofo ou aspas simples


console.log("\u005C")  // \\ barra invertida



var idade = 25;
if (idade <11){

console.log("Criança");
}
else if (idade > 12 && idade < 17){

console.log("Adolescente");
}

else if (idade >= 18 && idade <= 55){

console.log("Adulto");
}
else {
console.log("Idoso");
}