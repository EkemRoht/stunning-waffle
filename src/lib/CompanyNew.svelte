<script>
    import { db } from "./js/db.js";
    import { liveQuery } from "dexie";

    let company = {
        name: '',
        activeShuffles: []
    };
    let searchQuery = '';
    $: availableShuffles = liveQuery(async () => {
        const tables = await db.waffleBits.toArray();
        const filteredShuffles = tables.filter(shuffle =>
            shuffle.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredShuffles.filter(shuffle => !company.activeShuffles.includes(shuffle.name));
    });

    function addShuffle (shuffle) {
        if (!company.activeShuffles.includes(shuffle.name)) {
            company.activeShuffles = [...company.activeShuffles, shuffle.name];
        }
    }
    function removeShuffle (shuffle) {
        company.activeShuffles = company.activeShuffles.filter((s) => s !== shuffle);
    }

    async function saveCompany() {
        await db.companies.put(company);
        company = {
            name: '',
            activeShuffles: []
        };
    }
</script>

<!-- Теперь разметка компонента -->
<div>
    <label for="companyName">Название компании:</label>
    <input bind:value={company.name} type="text" id="companyName" />

    <details>
        <summary>Выбрать необходимые для работы таблицы</summary>
        {#if company.activeShuffles.length > 0}
            <label>Подключенные таблицы:</label>
            <div class="list">
                {#each company.activeShuffles as module}
                    <button on:click={() => removeShuffle(module)}>{module}</button>
                {/each}
            </div>
        {/if}

        <input bind:value={searchQuery} type="text" placeholder="Введите название таблицы" />
        {#if !$availableShuffles}
            <a href="#" aria-busy="true">Загрузочка…</a>
        {:else}
            <div class="list">
                {#each $availableShuffles as module}
                    <button class="outline" on:click={() => addShuffle(module)}>{module.name}</button>
                {/each}
            </div>
        {/if}
    </details>
    <button on:click={saveCompany}>Сохранить компанию</button>
</div>

<style>

</style>