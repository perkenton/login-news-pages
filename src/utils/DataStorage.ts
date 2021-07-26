export interface DataStorage {
  setToLocalStorage(keyName: string, keyValue: string): void,
  getFromLocalStorage(keyName: string): string | null,
}

export class DataStorageMethods implements DataStorage {
  constructor() {}

  setToLocalStorage(keyName: string, keyValue: string) {
    localStorage.setItem(keyName, keyValue);
  }

  getFromLocalStorage(keyName: string) {
    return localStorage.getItem(keyName);
  }

}