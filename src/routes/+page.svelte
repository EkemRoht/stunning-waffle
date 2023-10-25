<script>
    let table = {};
    let newTableFormShow = false;
</script>
{#if !table.name}
    <button on:click={()=> newTableFormShow = true}>Новая таблица</button>
{/if}
<!--
{#if newTableFormShow}

{/if}-->
