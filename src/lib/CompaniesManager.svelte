<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import CompanyNew from "./CompanyNew.svelte";
    import Editor from "./Editor.svelte";

    let currentCompany;
    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

{#if !$companies}
    <a href="#" aria-busy="true">Загрузочка…</a>
{:else}
    <Editor/>
    {#each ($companies || []) as company}
        ///
    {/each}
{/if}
