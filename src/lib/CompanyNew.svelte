<script>
    import { db } from "./js/db.js";
    import { liveQuery } from "dexie";

    let companyName = '';
    let selectedModules = [];
    let searchQuery = '';
    $: availableModules = liveQuery(async () => {
        const modules = await db.waffleBits.toArray();
        const filteredModules = modules.filter(module =>
            module.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredModules.filter(module => !selectedModules.includes(module.name));
    });

    // Функция для добавления модуля
    const addModule = (module) => {
        if (!selectedModules.includes(module.name)) {
            selectedModules = [...selectedModules, module.name];
        }
    };

    // Функция для удаления модуля
    const removeModule = (module) => {
        selectedModules = selectedModules.filter((m) => m !== module);
    };

    // Функция для сохранения компании
    const saveCompany = async () => {
        const companyData = {
            name: companyName,
            modules: selectedModules,
        };

        // Сохраняем данные компании в базу данных
        await db.companies.add(companyData);

        // Очищаем форму
        companyName = '';
        selectedModules = [];
    };
</script>

<!-- Теперь разметка компонента -->
<div>
    <label for="companyName">Название компании:</label>
    <input bind:value={companyName} type="text" id="companyName" />

    <label>Выбранные модули:</label>
    <ul>
        {#each selectedModules as module}
            <li>{module} <button on:click={() => removeModule(module)}>Удалить</button></li>
        {/each}
    </ul>

    <label>Поиск доступных модулей:</label>
    <input bind:value={searchQuery} type="text" placeholder="Введите название модуля" />

    <label>Доступные модули:</label>
    {#if !$availableModules}
        <p>Грузицца.</p>
    {:else}
        <div>
            {#each $availableModules as module}
                <button class="secondary" on:click={() => addModule(module)}>{module.name}</button>
            {/each}
        </div>
    {/if}

    <button on:click={saveCompany}>Сохранить компанию</button>
</div>
