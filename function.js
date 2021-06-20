

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