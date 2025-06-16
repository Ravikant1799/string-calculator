function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(",").map((str) => parseInt(str, 10));
  return parts.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
