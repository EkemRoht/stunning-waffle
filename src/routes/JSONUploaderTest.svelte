<!-- App.svelte -->
<script>
    let selectedFiles = [];
    let jsonData = {};

    async function handleFileInput(event) {
        selectedFiles = event.target.files;
    }

    async function loadJsonFiles() {
        jsonData = {}; // Очищаем объект перед загрузкой новых файлов

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            if (file.type === 'application/json') {
                try {
                    const data = await file.text();
                    jsonData[file.name] = JSON.parse(data);
                } catch (error) {
                    console.error(`Ошибка при обработке файла ${file.name}:`, error);
                }
            }
        }

        // Вывести данные в консоль
        console.log('Загруженные JSON файлы:', jsonData['npc.json']);
    }
</script>

<input type="file" multiple on:change={handleFileInput} />
<button on:click={loadJsonFiles}>Загрузить и вывести JSON файлы</button>