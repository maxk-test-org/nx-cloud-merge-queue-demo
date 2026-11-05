export function utilMath(): string {
  return 'util-math';
}

export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
