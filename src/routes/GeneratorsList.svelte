<script>
    import {liveQuery} from "dexie";
    import {db} from "$lib/js/db.js";

    let modules = liveQuery(async () => {
        return await db.modules
            .toArray()
    })
</script>



<article>
    <header>
            <h4>Генераторы</h4>
    </header>

    {#if !$modules}
        <a href="#" aria-busy="true">Loading…</a>
    {/if}

    <ul>
        {#each ($modules || []) as module}
            <li>{module.name}</li>
        {/each}
    </ul>
</article>