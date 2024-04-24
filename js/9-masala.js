{
    let i, son, sum;

    son = Number(prompt('son kriting kvadrat chiqad'));
    sum = 0;
    for (i = 1; i <= son; i++) {
        sum = sum + i**2;
    }
    alert(sum);
}
