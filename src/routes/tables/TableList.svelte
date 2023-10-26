<script>
    import { liveQuery } from "dexie";
    import {db} from "$lib/js/db.js";

    let modules = liveQuery(
        () => db.modules.toArray()
    );

</script>
<ul>
    {#if $modules}
        {#each $modules as module (module.id)}
            <li>{module.name}</li>
        {/each}
    {/if}
</ul>