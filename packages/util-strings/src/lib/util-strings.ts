export function utilStrings(): string {
  return 'util-strings';
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function shout(value: string): string {
  return `${value.toUpperCase()}!`;
}
