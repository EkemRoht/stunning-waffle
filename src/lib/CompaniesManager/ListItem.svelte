<!-- ListItem.svelte -->
<script>
    import { deleteCompany, openCompany } from "./companiesManager.js";

    export let company;

    $: isChecked = false;
</script>

<div class="outline item" role="button" on:click={openCompany}>
    <h4>{company.name}</h4>
    <input type="checkbox" role="switch" bind:checked={isChecked} on:click|stopPropagation>
    {#if isChecked}
        <a href="#" on:click|preventDefault|stopPropagation={deleteCompany(company.id)}>Удалить</a>
    {/if}
</div>

<style>
    .item {
        width: 100%;
        text-align: left;
        margin: 10px;
        border-color: var(--secondary);
    }
    .item:hover {
        border-color: var(--primary);
    }
    .item > h4 {
        margin-bottom: 10px;
        text-transform: capitalize;
        line-height: 1.5rem;
    }
</style>