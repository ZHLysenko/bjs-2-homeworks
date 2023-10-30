"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  if (discriminant === 0) {
    arr.push(-b / (2 * a))
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)); 
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 12) / 100;
  let payments = amount - contribution;
  let monthlyPayment = payments * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let fullPayment = monthlyPayment * countMonths;
  return +fullPayment.toFixed(2);
}