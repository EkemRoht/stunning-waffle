<script>
    import {db} from "$lib/js/db.js";

    let status = "";

    let moduleName = "";
    let moduleData = "";
    async function addModule() {
        try {
            const id = await db.modules.add({
                name: moduleName,
                content: moduleData
            });

            status = `Модуль ${moduleName} был сохранёнс с айди ${id}`;
            moduleName = "";
            moduleData = [];
        } catch (err) {
            status = `Модуль ${moduleName} не удалось сохранить. Ошибка: ${err}`;
        }
    }
</script>

<div>
    <p>{status}</p>
    <fieldset>
        <legend>Add new module</legend>
        <label>
            Name:
            <input
                    type="text"
                    bind:value={moduleName} />
        </label>
        <br/>
        <label>
            Age:
            <input
                    type="text"
                    bind:value={moduleData} />
        </label>
        <br />
        <button on:click={addModule}>Add Friend</button>
    </fieldset>
</div>