<!-- ListItem.svelte -->
<script>
    import { deleteCompany, openCompany, editCompany } from "./companiesManager.js";

    export let company;

    $: isChecked = false;
    $: {
        console.log(isChecked);
    }
</script>

<div class="outline item" role="button">
    <h3>{company.name}</h3>
    <input type="checkbox" id="switch" name="switch" role="switch" bind:checked={isChecked}>
    {#if isChecked}
        <a href="#" on:click|preventDefault={deleteCompany}>Удалить</a>
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
    .item > h3 {
        margin-bottom: 10px;
        text-transform: capitalize;
        line-height: 1.5rem;
    }
</style>