function isPositive(num: string | number): number {
  const sizeNumber: number = typeof num === 'string' ? Number(num) : num;
  const sign: number = Math.sign(sizeNumber);

  if (sign === -1 || isNaN(sign) || num === 0)
    throw new Error(
      'Both width and height most be a positive number and greater than 0'
    );

  return sizeNumber;
}

export default isPositive;
