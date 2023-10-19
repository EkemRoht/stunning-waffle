<script>
    import GenerateNPCButton from "./GenerateNPCButton.svelte";
    import NPCProfile from "./NPCProfile.svelte";

    let chosenNPC;
    function handleChosenNPC (event) {
        chosenNPC = event.detail;
    }
</script>

<main>
    <GenerateNPCButton on:chosenNPC={handleChosenNPC}/>
    {#if chosenNPC}
        <NPCProfile npcData={chosenNPC}/>
    {/if}
</main>