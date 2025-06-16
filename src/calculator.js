function add(numbers) {
  if (numbers === "") return 0;

  const delimiters = ["\n"];

  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\n");
    if (newlineIndex === -1) {
      throw new Error(
        "Invalid input: custom delimiter syntax must include a newline"
      );
    }

    const delimiter = numbers.substring(2, newlineIndex);
    delimiters.push(delimiter);
    numbers = numbers.substring(newlineIndex + 1);
  }

  let tempNumbers = numbers;
  for (let d of delimiters) {
    tempNumbers = tempNumbers.split(d).join(",");
  }

  const parts = tempNumbers.split(",");

  const nums = parts.map((str) => parseInt(str, 10));
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
