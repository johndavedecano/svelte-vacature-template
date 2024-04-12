export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isEmpty(str: string): boolean {
  return str === "" || typeof str === "undefined" || str === null;
}
