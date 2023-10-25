<script>
    let rows = 2; // Начальное количество строк
    let cols = 2; // Начальное количество столбцов
    $: tableData = Array.from({ length: rows }, () => Array(cols).fill(''));

    function addRow() {
        rows++;
        tableData.push(Array(cols).fill(''));
    }
    function removeRow() {
        if (rows > 1) {
            rows--;
            tableData.pop();
        }
    }
    function addColumn() {
        cols++;
        tableData.forEach(row => row.push(''));
    }
    function removeColumn() {
        if (cols > 2) {
            cols--;
            tableData.forEach(row => row.pop());
        }
    }
</script>

<div class="data-table">
    <button on:click={addRow}>Добавить строку</button>
    <button on:click={removeRow}>Удалить строку</button>
    <button on:click={addColumn}>Добавить столбец</button>
    <button on:click={removeColumn}>Удалить столбец</button>

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