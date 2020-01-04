const fiboEvenSum = n => {
let a = 0, b = 1, temp, fiboNum = [];
  while (n > 0) {
    temp = a + b;
    a = b;
    b = temp;
    fiboNum.push(temp)
    n--;
  }
  return fiboNum.filter(num => num % 2 === 0).reduce((acc, cum) => acc + cum)
};

fiboEvenSum(10);
