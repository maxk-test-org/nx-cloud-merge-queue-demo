export function utilMath(): string {
  return 'util-math';
}

export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function average(values: number[]): number {
  return values.length === 0 ? 0 : sum(values) / values.length;
}

export function max(values: number[]): number {
  return Math.max(...values);
}
