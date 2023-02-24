class Utils {
  static calculateNumber(type, a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
    }

    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case "SUM":
        return roundedA + roundedB;
      case "SUBTRACT":
        return roundedA - roundedB;
      case "DIVIDE":
        if (roundedB === 0) {
          return "Error";
        }
        return roundedA / roundedB;
      default:
        return NaN;
    }
  }
}

module.exports = Utils;
