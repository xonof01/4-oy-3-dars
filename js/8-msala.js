
  let i, sum, a, b;

  ("a sonni kiriting.");
  a = Number(prompt("a sonin kriting"));

  ("b sonni kiriting.");
  b = Number(prompt("b sonni kriting"));
  sum = 1;
  for (i = a+1; i < b; i++) {
    i;
    sum = sum * i;
  }

  "" +
    a +
    " dan " +
    b +
    " gacha bo'lgan butun sonlarni ko'paytmasi " +
    sum +
    " ga teng.";

console.log(sum);
