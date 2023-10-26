import Dexie from 'dexie';

export const db = new Dexie ('modules');
db.version(1).stores({
    modules: '++id, name, content'
});