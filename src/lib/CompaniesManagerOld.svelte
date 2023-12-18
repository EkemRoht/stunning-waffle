<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import CompanyForm from "./CompanyFormOld.svelte";
    import {currentCompany} from "./js/currentCompanyStore.js";
    import CompanyOpen from "./CompanyOpen.svelte";
    $: console.log($currentCompany)

    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });

    let newCompanyForm = false;
    function showNewCompanyForm() {
        newCompanyForm = !newCompanyForm;
    }

</script>

{#if $currentCompany}
    <CompanyOpen/>
{:else}
    {#if !$companies}
        <a href="#" aria-busy="true">Загрузка…</a>
    {:else}
        <button on:click={showNewCompanyForm}>Создать новую компанию</button>
        {#each ($companies || []) as company}
            <button class="outline" on:click={currentCompany.open(company.id)}>{company.name}</button>
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