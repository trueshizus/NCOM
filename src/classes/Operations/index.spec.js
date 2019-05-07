import Operations from './index';
import ComplexNumber from '../complexNumber';

describe('Operation', () => {
  describe('parseInput', () => {
    it('splits (1, -1.5) in real and imaginary', () => {
      const result = Operations.parseInput('(1, -1.5)');
      expect(result.real).toEqual(1);
      expect(result.imaginary).toEqual(-1.5);
    });

    it('splits [1, -1.5] in radius and angle', () => {
      const result = Operations.parseInput('[1, -1.5]');
      expect(result.radius).toEqual(1);
      expect(result.angle).toEqual(-1.5);
    });
  });

  describe('toPolar', () => {
    it('converts cartesian input to polar', () => {
      const result = Operations.toPolar({ real: 1, imaginary: 1 });
      expect(result.radius).toEqual(1.41421);
      expect(result.angle).toEqual(0.7854);
    });
  });

  describe('toCartesian', () => {
    it('converts cartesian input to polar', () => {
      const result = Operations.toCartesian({
        radius: Math.sqrt(2),
        angle: Math.PI / 4
      });
      expect(result.real).toEqual(1);
      expect(result.imaginary).toEqual(1);
    });
  });

  describe('add', () => {
    it('sum two complex numbers', () => {
      const firstComplex = new ComplexNumber('(2, 2)');
      const secondComplex = new ComplexNumber('(1, -1)');

      const result = Operations.add(firstComplex, secondComplex);

      expect(result).toEqual(new ComplexNumber('(3, 1)'));
    });
  });

  describe('sum', () => {
    const firstComplex = new ComplexNumber('(2, 2)');
    const secondComplex = new ComplexNumber('(1, -1)');
    const thirdComplex = new ComplexNumber('(1, -1)');

    const result = Operations.sum(firstComplex, secondComplex, thirdComplex);

    expect(result).toEqual(new ComplexNumber('(4,0)'));
  });

  describe('product', () => {});
  describe('sum', () => {});
});
