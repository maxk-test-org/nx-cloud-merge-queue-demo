import { featureGreeting } from './feature-greeting.js';

describe('featureGreeting', () => {
  it('should work', () => {
    expect(featureGreeting()).toEqual('feature-greeting');
  });
});

describe('greet', () => {
  it('greets a user by capitalized name', async () => {
    const { greet } = await import('./feature-greeting.js');
    expect(greet(0)).toEqual('Hello, Ada!');
  });
});
