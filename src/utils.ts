export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

export function transformKeys<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeys(item)) as unknown as T;
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result: any, key) => {
      const camelKey = toCamelCase(key);
      result[camelKey] = transformKeys((obj as any)[key]);
      return result;
    }, {}) as T;
  }

  return obj as unknown as T;
}
