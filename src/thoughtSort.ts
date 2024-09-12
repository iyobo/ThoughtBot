function isPositiveNumber(name: string, input: number) {
  const inputType = typeof input;
  if (inputType !== 'number') {
    throw new Error(`Invalid input: ${name} is not a number. Type: ${inputType}`);
  }

  if (input <= 0) {
    throw new Error(`Invalid input: ${name} must be a number above zero. Value: ${input}`);
  }
}

export function thoughtSort(width: number, height: number, length: number, mass: number): string {

    isPositiveNumber('width', width);
    isPositiveNumber('height', height);
    isPositiveNumber('length', length);
    isPositiveNumber('mass', mass);

    const volume = width * height * length;
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
      return "REJECTED";
    } else if (isBulky || isHeavy) {
      return "SPECIAL";
    } else {
      return "STANDARD";
    }
}