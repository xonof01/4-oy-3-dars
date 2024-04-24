 
  let a, b, sum, i;

  a = Number(prompt("A ni kiriting"));

  b = Number(prompt("B ni kiriting"));
  sum = 0;
  if (b - a <= 1) {
    alert("Qiymat to'g'ri kiritildi,jarayon quyidagicha:");
  }
  for (i = b - 1; i >= a + 1; i--) {
    alert(i);
    sum = sum + 1;
  }
  alert(sum.ToString() + " ta butun son mavjud. ");

