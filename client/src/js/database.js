import { openDB } from 'idb';

const initdb = async () => // Checks the indexedDB for a jate and database creates one if not found
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => { // Accepts content and adds it to the jate database
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, content });
    const result = await request;
    console.log('Data saved to the database', result);
  }
  catch (err) { console.error(err); }
};

export const getDb = async () => { // Gets the content from the jate database
    console.log('GET all from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();