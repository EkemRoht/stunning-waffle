<script>
    import {db} from "../js/db.js";
    import {liveQuery} from "dexie";
    import ListItem from "./ListItem.svelte";
    import CompanyForm from "./CompanyForm.svelte";


    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

<article>
    {#if $companies}
        <header>
            <h3>Список компаний</h3>
        </header>
        {#each ($companies || []) as company}
            <ListItem {company} />
        {/each}

        <footer>
            <details>
                <summary><h5>Создать новую компанию</h5></summary>
                <CompanyForm/>
            </details>
        </footer>
    {:else}
        Loading
    {/if}
</article>