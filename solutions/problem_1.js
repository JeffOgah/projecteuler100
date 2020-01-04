const multiplesOf3and5 = number => {
  let sum = Array.from({ length: number-1 }, (v, i) => i + 1) //generate array of numbers
    .filter(num => num % 3 === 0 || num % 5 === 0) //filter multiples of 3 and 5
    .reduce((acc, cum) => acc + cum);  //sum
  return sum;
}

multiplesOf3and5(1000);
