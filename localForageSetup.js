localforage.config({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE,
    localforage.WEBSQL,
  ],
  name: 'Sketch',     // These fields
  version: 1.0,      // are totally optional
});
