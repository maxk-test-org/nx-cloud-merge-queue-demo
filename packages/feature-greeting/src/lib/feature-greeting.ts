import { loadUserName } from '@org/data-access';
import { capitalize } from '@org/util-strings';

export function featureGreeting(): string {
  return 'feature-greeting';
}

export function greet(id: number): string {
  return `Hello, ${capitalize(loadUserName(id))}!`;
}
