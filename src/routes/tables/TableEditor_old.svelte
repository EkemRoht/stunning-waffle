<script>
    import {db} from "$lib/js/db.js";

    export let tableParams;
    let status = "";
    let tableName = "";
    $: tableData = Array.from({ length: tableParams.rows }, () => Array(tableParams.cols).fill(''));

    async function addTable() {
        try {
            const id = await db.modules.add({
                name: tableName,
                content: tableData
            });

            status = `Модуль ${tableName} был сохранёнс с айди ${id}`;
            tableName = "";
            tableData = [];
        } catch (err) {
            status = `Модуль ${tableName} не удалось сохранить. Ошибка: ${err}`;
        }

    }
</script>

<div>
    <input type="text" id="title" name="title" placeholder="Название таблицы" required bind:value={tableName}>
    <table>
        {#each tableData as row, rowIndex}
            <tr>
                {#each row as cell, colIndex}
                    <td>
                        <input type="text" bind:value={tableData[rowIndex][colIndex]}>
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>
<p>{status}</p>
<button on:click={addTable()}>Создать</button>