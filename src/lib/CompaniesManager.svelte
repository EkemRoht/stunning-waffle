<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import {currentCompany} from "./js/currentCompanyStore.js";
    import CompanyForm from "./CompanyForm.svelte";

    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });

    let showCompanyForm = false;
    function toggleCompanyForm() {
        showCompanyForm = !showCompanyForm;
    }
</script>

{#if $currentCompany}
    <nav>
        <ul>
            <li><strong role="link">{$currentCompany.name}</strong></li>
        </ul>
        <ul>
            <li><a href="#" on:click|preventDefault={toggleCompanyForm}>Редактировать</a></li>
            <li><a href="#" on:click|preventDefault={currentCompany.exit}>Закрыть</a></li>
        </ul>
    </nav>
{:else}
    <details role="list">
        <summary aria-haspopup="listbox">Выбор активной компании</summary>
        <ul role="listbox">
            {#each ($companies || []) as company}
                <li><a href="#" on:click|preventDefault={currentCompany.open(company.id)}>{company.name}</a></li>
            {/each}
        </ul>
    </details>
{/if}

{#if showCompanyForm}
    <CompanyForm/>
{/if}