 {
    let i, n, sum;

    n = Number(prompt('son kriting'));
    sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + 1 / i;
    }
    alert(sum);
}