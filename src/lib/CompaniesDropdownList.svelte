<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import {currentCompany} from "./js/currentCompanyStore.js";

    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

<ul>
    <li>
        <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">{$currentCompany ? $currentCompany.name : 'Компания не выбрана'}</summary>
            <ul role="listbox">
                {#each ($companies || []) as company}
                    <li><a href="#" on:click|preventDefault={currentCompany.open(company.id)}>{company.name}</a></li>
                {/each}
            </ul>
        </details>
    </li>
</ul>