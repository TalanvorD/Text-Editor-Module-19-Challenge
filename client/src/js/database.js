import { openDB } from 'idb';

const initdb = async () => // Checks for the the jate indexedDB and creates one if not found
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
    console.log('PUT to the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: id, text: content });
    const result = await request;
    console.log('Data saved to the database', result);
  }
  catch (err) { console.error('There was a problem adding to the DB!'); }
};

export const getDb = async () => { // Get all content from the jate database
  try {
    console.log('GET all from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
  }
  catch (err) { console.error('There was a problem getting the DB!'); }
};

initdb();