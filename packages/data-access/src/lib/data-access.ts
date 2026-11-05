export function dataAccess(): string {
  return 'data-access';
}

export function loadUserName(id: number): string {
  return ['ada', 'grace', 'linus'][id % 3];
}
