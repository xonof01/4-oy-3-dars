{
  let n, i, sum;

  n = Number(prompt("son kriting"));
  sum = 1;
  for (i = 1; i <= n; i++) {
    sum = sum * (i / 10) + 1;
  }
  alert(sum);
}
