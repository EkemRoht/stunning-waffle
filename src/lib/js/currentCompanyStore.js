import {writable} from "svelte/store";
import {db} from "./db.js";

function createCompanyStore() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        open: async (id) => {
            db.companies
                .where('id')
                .equals(id)
                .first()
                .then(res => set(res));
        },
        exit: () => {
            set(null);
        }
    }
}

export let currentCompany = createCompanyStore();