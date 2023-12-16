<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import CompanyNew from "./CompanyNew.svelte";

    let currentCompany;
    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

{#if !$companies}
    <a href="#" aria-busy="true">Загрузочка…</a>
{:else}
    <CompanyNew/>
    {#each ($companies || []) as company}
        ///
    {/each}
{/if}
