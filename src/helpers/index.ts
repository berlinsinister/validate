export const camelCaseToWords = (camelCaseString: string): string =>
  camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
