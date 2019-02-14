var tablica = [3,67,23];
var len = tablica.length;
for(var i = 0; i < len; i++) {
    if(tablica[i]>10) tablica[i]=5;
}

console.log(tablica[]);

var tmp="";

for(i=0;i<len;i++){
    tmp+=tablica[i];
}

console.log(tmp);
