export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

export type CamelCase<S extends string> =
  S extends `${infer P}_${infer Q}${infer R}`
    ? `${P}${Uppercase<Q>}${CamelCase<R>}`
    : S;

export type CamelCasedProperties<T> = {
  [K in keyof T as CamelCase<string & K>]: T[K] extends Array<infer U>
    ? Array<CamelCasedProperties<U>>
    : T[K] extends object
    ? CamelCasedProperties<T[K]>
    : T[K];
};

export function transformKeys<T>(obj: T): CamelCasedProperties<T> {
  if (Array.isArray(obj)) {
    return obj.map(transformKeys) as unknown as CamelCasedProperties<T>;
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result: any, key) => {
      const camelKey = typeof key === "string" ? toCamelCase(key) : key;
      result[camelKey] = transformKeys((obj as any)[key]);
      return result;
    }, {}) as CamelCasedProperties<T>;
  }
  return obj as CamelCasedProperties<T>;
}
