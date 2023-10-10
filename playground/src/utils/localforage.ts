import localStorage from "localforage";

class Localforage {
  constructor() {
    localStorage.config({
      name: "TQTDSL",
    });
  }

  setItem<T>(key: string, value: T) {
    return localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    return localStorage.removeItem(key)
  }
}

export const MAGIC_DSL_KEY = "magicDSL";
export const storage = new Localforage();
