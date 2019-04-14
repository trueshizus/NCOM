import ComplexNumber from './index';

describe('ComplexNumber', () => {
  it('creates a (0,0) complex number as default', () => {
    const complex = new ComplexNumber();
    expect(complex.real).toEqual(0);
    expect(complex.imaginary).toEqual(0);
    expect(complex.radius).toEqual(0);
    expect(complex.angle).toEqual(0);
  });

  describe('creates a complex number from a string', () => {
    describe('cartesian form', () => {
      it('accepts "(0,0)" as constructor', () => {
        const complex = new ComplexNumber('(0,0)');
        expect(complex.real).toEqual(0);
        expect(complex.imaginary).toEqual(0);
        expect(complex.radius).toEqual(0);
        expect(complex.angle).toEqual(0);
      });

      // 1st cuadrant
      it('accepts "(1,1)" as constructor', () => {
        const complex = new ComplexNumber('(1,1)');
        expect(complex.real).toEqual(1);
        expect(complex.imaginary).toEqual(1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(0.7854);
      });

      // 2nd cuadrant
      it('accepts "(-1,1)" as constructor', () => {
        const complex = new ComplexNumber('(-1,1)');
        expect(complex.real).toEqual(-1);
        expect(complex.imaginary).toEqual(1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(2.35619);
      });

      //3rd cuadrant
      it('accepts "(-1,-1)" as constructor', () => {
        const complex = new ComplexNumber('(-1,-1)');
        expect(complex.real).toEqual(-1);
        expect(complex.imaginary).toEqual(-1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(3.92699);
      });

      //4th cuadrant
      it('accepts "(1,-1)" as constructor', () => {
        const complex = new ComplexNumber('(1,-1)');
        expect(complex.real).toEqual(1);
        expect(complex.imaginary).toEqual(-1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(5.49779);
      });

      it('accepts "(3,-4)" as constructor', () => {
        const complex = new ComplexNumber('(3,-4)');
        expect(complex.real).toEqual(3);
        expect(complex.imaginary).toEqual(-4);
        expect(complex.radius).toEqual(5);
        expect(complex.angle).toEqual(5.35589);
      });
    });

    describe('polar form', () => {
      it('accepts "[0,0]" as constructor', () => {
        const complex = new ComplexNumber('[0,0]');
        expect(complex.real).toEqual(0);
        expect(complex.imaginary).toEqual(0);
        expect(complex.radius).toEqual(0);
        expect(complex.angle).toEqual(0);
      });

      // 1st cuadrant
      it('accepts "[1.41421,0.7854]" as constructor', () => {
        const complex = new ComplexNumber('[1.41421,0.7854]');
        expect(complex.real).toEqual(1);
        expect(complex.imaginary).toEqual(1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(0.7854);
      });

      // 2nd cuadrant
      it('accepts "[1.41421,2.35619" as constructor', () => {
        const complex = new ComplexNumber('[1.41421,2.35619]');
        expect(complex.real).toEqual(-1);
        expect(complex.imaginary).toEqual(1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(2.35619);
      });

      //3rd cuadrant
      it('accepts "(-1,-1)" as constructor', () => {
        const complex = new ComplexNumber('[1.41421, 3.92699]');
        expect(complex.real).toEqual(-1);
        expect(complex.imaginary).toEqual(-1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(3.92699);
      });

      //4th cuadrant
      it('accepts "(1,-1)" as constructor', () => {
        const complex = new ComplexNumber('[1.41421, 5.49779]');
        expect(complex.real).toEqual(1);
        expect(complex.imaginary).toEqual(-1);
        expect(complex.radius).toEqual(1.41421);
        expect(complex.angle).toEqual(5.49779);
      });

      it('accepts "(3,-4)" as constructor', () => {
        const complex = new ComplexNumber('(3,-4)');
        expect(complex.real).toEqual(3);
        expect(complex.imaginary).toEqual(-4);
        expect(complex.radius).toEqual(5);
        expect(complex.angle).toEqual(5.35589);
      });
    });
  });
});
