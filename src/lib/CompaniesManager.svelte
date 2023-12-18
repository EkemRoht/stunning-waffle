<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import CompanyForm from "./CompanyForm.svelte";

    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
    let currentCompany;
    async function getCompany (id) {
        currentCompany = await db.companies
            .where('id')
            .equals(id)
            .first()
        console.log(currentCompany);
    }

    let newCompanyForm = false;
    function showNewCompanyForm() {
        newCompanyForm = !newCompanyForm;
    }
</script>

{#if currentCompany}
    puq
{:else}
    {#if !$companies}
        <a href="#" aria-busy="true">Загрузка…</a>
    {:else}
        <button on:click={showNewCompanyForm}>Создать новую компанию</button>
        {#each ($companies || []) as company}
            <button class="outline" on:click={getCompany(company.id)}>{company.name}</button>
        {/each}
    {/if}

    {#if newCompanyForm}
        <dialog open>
            <article>
                <header>
                    <a href="#" aria-label="Close" class="close" on:click|preventDefault={showNewCompanyForm}></a>
                    Создание новой компании
                </header>
                <CompanyForm/>
            </article>
        </dialog>
    {/if}
{/if}