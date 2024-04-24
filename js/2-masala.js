var a, b, i, sum;


a = Number(prompt("A ni kiriting"));

b = Number(prompt("B ni kiriting"));
sum = 0;
for (i = a; i <= b; i++) {
  alert(i);
  sum = sum + 1;
}
alert(sum.ToString() + "ta butun son bor");
