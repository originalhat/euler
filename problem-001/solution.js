function isMultipleOfThreeOrFive(i) {
  return i % 3 == 0 || i % 5 == 0
}

var sum = 0;

for (var i = 0; i <= 999; i++) {
  if (isMultipleOfThreeOrFive(i)) {
    sum += i;
  }
}

console.log(sum);

