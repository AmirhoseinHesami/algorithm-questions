export default function getExcelColumn(number) {
  if (number < 1 || number > 1_000_000_000) {
    throw new Error("Invalid input! Number should be between 1 and 1 billion.");
  }

  let columnName = "";

  while (number > 0) {
    const remainder = (number - 1) % 26;
    const char = String.fromCharCode(65 + remainder); // ASCII code for 'A' is 65
    columnName = char + columnName;
    number = Math.floor((number - 1) / 26);
  }

  return columnName;
}
