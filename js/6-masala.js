let son, narx, i, opshinarh;

son = Number(prompt("Sonni kiriting"));
narx = 10000;
i = 1;
opshinarh = 0;
for (i = 1.2; i <= 2; i++) {
  opshinarh = narx * son;
  i = i + 0.2;
}
alert(
  "" +
    son +
    " kg konfetimiz " +
    opshinarh +
    " so'mni tashkil etadi.(1kg konfet narxi=10000 so'm deb oldim) "
);
