<script>
    import {editCompany} from "./companiesManager.js";

    export let company = {};
</script>

<form>
    <label for="companyName">Название компании</label>
    <input type="text" id="companyName" bind:value={company.name}/>
    <button type="submit" on:click|preventDefault={editCompany(company)}>Сохранить</button>
</form>