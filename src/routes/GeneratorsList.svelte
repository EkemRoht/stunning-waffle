<script>
    import {liveQuery} from "dexie";
    import {db} from "$lib/js/db.js";
    import Generator from "./Generator.svelte";

    let modules = liveQuery(async () => {
        return await db.modules
            .toArray()
    });

    $: generator = {};
    let generatorOpen = false;
    function moduleHandler (module) {
        generator = module;
        generatorOpen = true;
    }
    function moduleClose() {
        generator = {};
        generatorOpen = false;
    }
</script>


<h3>Генераторы</h3>
{#if generatorOpen}
    <Generator {generator}/>
    <button on:click={moduleClose}>Закрыть</button>
{:else}
    {#if !$modules}
        <center><a href="#" aria-busy="true">Loading…</a></center>
    {:else}
        {#each ($modules || []) as module}
            <button on:click={moduleHandler(module)}>{module.name}</button>
        {/each}
    {/if}
{/if}