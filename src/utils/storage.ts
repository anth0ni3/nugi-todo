import Cookie from 'js-cookie';

export const storage = {
  localStorage: {
    set: <Item>(key: string, value: Item): void =>
      localStorage?.setItem(key, value as string),
    get: <Item>(key: string): Item =>
      //@ts-expect-error fkfkfks
      localStorage?.getItem(key) || undefined,
    remove: (key: string): void => localStorage?.removeItem(key),
    has: (key: string): boolean => localStorage.getItem(key) !== null,
  },
  cookieStorage: {
    set: <Item>(
      key: string,
      value: Item,
      options?: (typeof Cookie)['attributes']
    ) => Cookie?.set(key, String(value), options),
    get: (key: string) => Cookie?.get(key) || undefined,
    remove: (key: string, options?: (typeof Cookie)['attributes']): void =>
      Cookie.remove(key, options),
    has: (key: string): boolean => Boolean(Cookie.get(key)),
  },
  sessionStorage: {
    set: <Item>(key: string, value: Item): void =>
      sessionStorage?.setItem(key, String(value)),
    get: <Item>(key: string): Item | undefined =>
      (sessionStorage?.getItem(key) as Item) || undefined,
    remove: (key: string): void => sessionStorage?.removeItem(key),
    has: (key: string): boolean => sessionStorage.getItem(key) !== null,
  },
  // indexedDB: {

  // }
};
