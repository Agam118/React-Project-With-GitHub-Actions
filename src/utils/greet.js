export function greet(name) {
  if (!name || name.trim() === '') {
    return 'Hello, stranger!';
  }

  return `Hello, ${name.trim()}!`;
}
