import { thoughtSort } from './thoughtSort';

describe('thoughtSort', () => {

  // Input validation tests
  describe('input validation', () => {
    it('should throw an error if params are negative', () => {
      expect(() => thoughtSort(-10,10,10,10)).toThrow('Invalid input: width must be a number above zero');
      expect(() => thoughtSort(10,-10,10,10)).toThrow('Invalid input: height must be a number above zero');
      expect(() => thoughtSort(10,10,-10,10)).toThrow('Invalid input: length must be a number above zero');
      expect(() => thoughtSort(10,10,10,-10)).toThrow('Invalid input: mass must be a number above zero');
    });

    it('should throw an error if params are zero', () => {
      expect(() => thoughtSort(0,10,10,10)).toThrow('Invalid input: width must be a number above zero');
      expect(() => thoughtSort(10,0,10,10)).toThrow('Invalid input: height must be a number above zero');
      expect(() => thoughtSort(10,10,0,10)).toThrow('Invalid input: length must be a number above zero');
      expect(() => thoughtSort(10,10,10,0)).toThrow('Invalid input: mass must be a number above zero');
    });

    it('should throw an error if params are not numbers', () => {
      expect(() => thoughtSort("0" as any,10,10,10)).toThrow('Invalid input: width is not a number');
      expect(() => thoughtSort(10,null as any,10,10)).toThrow('Invalid input: height is not a number');
      expect(() => thoughtSort(10,10,undefined as any,10)).toThrow('Invalid input: length is not a number');
      expect(() => thoughtSort(10,10,10,{} as any)).toThrow('Invalid input: mass is not a number');
    });

  });

  // Package sorting operation tests
  describe('package sorting', () => {

    // STANDARD tests
    describe('STANDARD Package', () => {
      it('is neither heavy nor bulky', () => {
        expect(thoughtSort(100, 100, 99, 10)).toBe('STANDARD');
      });

      it('is neither heavy nor bulky 2', () => {
        expect(thoughtSort(10, 10, 10, 5)).toBe('STANDARD');
      });
    });

    // SPECIAL tests
    describe('SPECIAL Package', () => {
      it('is only heavy', () => {
        expect(thoughtSort(16, 15, 56, 20)).toBe('SPECIAL');
      });

      it('is only bulky', () => {
        expect(thoughtSort(150, 150, 150, 10)).toBe('SPECIAL');
      });
    });

    // REJECTED tests
    describe('REJECTED Package', () => {
      it('is both heavy and bulky', () => {
        expect(thoughtSort(100, 100, 100, 20)).toBe('REJECTED');
      });

      it('is both heavy and bulky #2', () => {
        expect(thoughtSort(500, 500, 500, 50)).toBe('REJECTED');
      });
    });
  });
});
