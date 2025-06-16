function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split("\n").flatMap((section) => section.split(","));

  const nums = parts.map((str) => parseInt(str, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
