import Operations from './index';

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
});
