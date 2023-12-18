<script>
    import {liveQuery} from "dexie";
    import {db} from "./js/db.js";
    import {currentCompany} from "./js/currentCompanyStore.js";

    let companies = liveQuery(async () => {
        return await db.companies
            .toArray()
    });
</script>

{#if $currentCompany}
    <nav>
        <hgroup>
            <h5 role="link">{$currentCompany.name}</h5>
            <h6>Памахити</h6>
        </hgroup>
        <a href="#" on:click|preventDefault={currentCompany.exit}>X</a>
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