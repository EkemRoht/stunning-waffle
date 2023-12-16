<script>
    import {db} from "./js/db.js";

    let selectedFiles = [];

    async function handleFileInput(event) {
        selectedFiles = event.target.files;
    }

    async function loadJsonFiles() {
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            if (file.type === 'application/json') {
                try {
                    const data = await file.text();
                    let moduleData = JSON.parse(data);
                    await db.recipes.put({
                        name: moduleData.name,
                        template: moduleData.template,
                        requirements: moduleData.requirements
                    });

                    for (const tableName of Object.keys(moduleData.tables)) {
                        await db.waffleBits.put({
                            name: tableName,
                            bits: moduleData.tables[tableName]
                        });
                    }
                } catch (error) {
                    console.error(`Ошибка при обработке файла ${file.name}:`, error);
                }
            }
        }
    }
</script>

<details>
    <summary>Загрузить новый модуль</summary>
    <input type="file" multiple on:change={handleFileInput} />
    <button on:click={loadJsonFiles}>Загрузить</button>
</details>