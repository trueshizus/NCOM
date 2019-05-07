import ComplexNumber from '../complexNumber';

export function parseInput(input) {
  // Creates regex for (real, imaginary) or [radius, angle]
  const cartesianRegex = /\(([-.0-9]+),\s*([-.0-9]+)\)/;
  const polarRegex = /\[([-.0-9]+),\s*([-.0-9]+)\]/;

  // Verify input string regex match
  const cartesianMatch = input.match(cartesianRegex);
  const polarMatch = input.match(polarRegex);

  if (cartesianMatch) {
    return {
      real: parseFloat(cartesianMatch[1]),
      imaginary: parseFloat(cartesianMatch[2])
    };
  }

  if (polarMatch) {
    return {
      radius: parseFloat(polarMatch[1]),
      angle: parseFloat(polarMatch[2])
    };
  }

  throw Error`Input doesn't have a valid format, input: ${input}`;
}

export function toPolar({ real, imaginary }) {
  let radius = Math.hypot(real, imaginary);
  let angle = Math.atan2(imaginary, real);

  // Adjustment for the 3rd cuadrant
  if (real < 0 && imaginary < 0) {
    angle += 2 * Math.PI;
  }

  // Adjustment for the 4th cuadrant
  if (real > 0 && imaginary < 0) {
    angle += 2 * Math.PI;
  }

  return {
    radius: Number(radius.toFixed(5)),
    angle: Number(angle.toFixed(5))
  };
}

export function toCartesian({ radius, angle }) {
  const real = radius * Math.cos(angle);
  const imaginary = radius * Math.sin(angle);

  return {
    real: Number(real.toFixed(5)),
    imaginary: Number(imaginary.toFixed(5))
  };
}

export function add(firstCplxNumber, secondCplxNumber) {
  const real = firstCplxNumber.real + secondCplxNumber.real;
  const imaginary = firstCplxNumber.imaginary + secondCplxNumber.imaginary;
  return new ComplexNumber({ real, imaginary });
}

export function sum(...complexNumbers) {
  return complexNumbers.reduce(
    (result, number) => (result = add(result, number))
  );
}

export function product(firstCplxNumber, secondCplxNumber) {
  const radius = firstCplxNumber.radius + secondCplxNumber.radius;
  const angle = firstCplxNumber.angle * secondCplxNumber.angle;
  return new ComplexNumber({ radius, angle });
}

export function divide(firstCplxNumber, secondCplxNumber) {
  const radius = firstCplxNumber.radius / secondCplxNumber.radius;
  const angle = firstCplxNumber.angle - secondCplxNumber.angle;
  return new ComplexNumber({ radius, angle });
}

const Operations = {
  parseInput,
  toPolar,
  toCartesian,
  add,
  sum,
  product,
  divide
};

export default Operations;
