export function dataAccess(): string {
  return 'data-access';
}

export function loadUserName(id: number): string {
  return ['ada', 'grace', 'linus'][id % 3];
}

export function userCount(): number {
  return 3;
}

export function hasUser(id: number): boolean {
  return id >= 0;
}
