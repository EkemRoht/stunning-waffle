<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import CompanyForm from "./CompanyForm.svelte";

    let currentCompany;
    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });

    let newCompanyForm = false;
    function showNewCompanyForm() {
        newCompanyForm = !newCompanyForm;
    }
</script>

{#if !$companies}
    <a href="#" aria-busy="true">Загрузочка…</a>
{:else}
    <button on:click={showNewCompanyForm}>Создать новую компанию</button>
    {#each ($companies || []) as company}
        ///
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