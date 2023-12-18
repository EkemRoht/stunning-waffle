import {writable} from "svelte/store";
import {db} from "./db.js";

function createCompanyStore() {
    const { subscribe, set } = writable({});

    return {
        subscribe,
        open: async (id) => {
            db.companies
                .where('id')
                .equals(id)
                .first()
                .then(res => set(res));
        },
        close: () => {
            set({});
        }
    }
}

export let currentCompany = createCompanyStore();