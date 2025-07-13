type Operation = "Sum" | "Substract" | "Multiply" | "Divide";

export const calculator = (
  operation: Operation,
  value1: number,
  value2: number,
) => {
  if (operation === "Sum") {
    return value1 + value2;
  } else if (operation === "Substract") {
    return value1 - value2;
  } else if (operation === "Multiply") {
    return value1 * value2;
  } else if (operation === "Divide") {
    if (value2 === 0) {
      return "Error: Cannot divide by zero";
    }
    return value1 / value2;
  }
};
