import Dexie from 'dexie';

export const db = new Dexie ('waffle');
db.version(1).stores({
    recipes: 'name',
    waffleBits: 'name',
    waffles: 'name',
    companies: '&id,&name'
});