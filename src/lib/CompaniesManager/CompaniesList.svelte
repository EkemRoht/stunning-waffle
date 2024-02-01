<script>
    import {db} from "../js/db.js";
    import {liveQuery} from "dexie";
    import ListItem from "./ListItem.svelte";


    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

<div>
    {#if $companies}
        {#each ($companies || []) as company}
            <ListItem {company} />
        {/each}
    {:else}
        Loading
    {/if}
</div>