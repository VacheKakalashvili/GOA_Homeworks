const numbersAvg = [10, 20, 30, 40, 50];
let sumAvg = 0;
for (let i = 0; i < numbersAvg.length; i++) {
    sumAvg += numbersAvg[i];
}
const average = sumAvg / numbersAvg.length;
console.log("Average:", average);