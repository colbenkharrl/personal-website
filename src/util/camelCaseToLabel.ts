/**
 * Converts a camelCase string to a formatted label with spaces and each word capitalized.
 * @param camelCaseStr The camelCase string to be transformed.
 * @returns The formatted label.
 */
export const camelCaseToLabel = (camelCaseStr: string): string => {
  // Adjust regex to separate numbers and uppercase letters, treat sequences of numbers followed by lowercase as separate words
  const spacedStr = camelCaseStr
    .replace(/([0-9]+|[A-Z])/g, ' $1')
    .replace(/(\d+)([a-z])/g, '$1 $2');
  // Trim any leading space and capitalize each word
  return spacedStr.trim().replace(/\b\w/g, (char) => char.toUpperCase());
};
