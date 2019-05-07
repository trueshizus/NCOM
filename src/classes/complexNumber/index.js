import { isEqual } from "lodash";
import { parseInput, toCartesian, toPolar } from "../Operations";

class ComplexNumber {
  constructor(input) {
    const shouldParseInput =
      typeof input === "string" || input instanceof String;
    const initialValues = shouldParseInput ? parseInput(input) : input;

    // The constructor accepts various formats:
    // const example1 = new complexNumber("(1,1)")
    // const example2 = new complexNumber("[1,1]")
    // const example3 = new complexNumber({real: 1, imaginary: 1 })
    // const example4 = new complexNumber({radius: 1, angle: 1 })

    if (input === undefined) {
      this.real = 0;
      this.imaginary = 0;
      this.radius = 0;
      this.angle = 0;
      return;
    }

    if (isEqual(Object.keys(initialValues), ["real", "imaginary"])) {
      const { radius, angle } = toPolar(initialValues);
      this.real = initialValues.real;
      this.imaginary = initialValues.imaginary;
      this.radius = radius;
      this.angle = angle;
      return;
    }

    if (isEqual(Object.keys(initialValues), ["radius", "angle"])) {
      const { real, imaginary } = toCartesian(initialValues);
      this.real = Number(real.toFixed(4));
      this.imaginary = Number(imaginary.toFixed(4));
      this.radius = initialValues.radius;
      this.angle = initialValues.angle;
      return;
    }
  }
}

export default ComplexNumber;
