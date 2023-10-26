<script>
    let tableParams = {
        cols: 2,
        rows: 6
    };
</script>

<details>
    <summary>Начальный размер таблицы</summary>
    <div class="grid">
        <label for="colsCount">
            Столбцы:
            <input type="number" id="colsCount" name="colsCount" bind:value={tableParams.cols} required>
        </label>
        <label for="rowsCount">
            Строки:
            <input type="number" id="rowsCount" name="rowsCount" bind:value={tableParams.rows} required>
        </label>
    </div>
</details>
<a href="/tables/{tableParams.cols}x{tableParams.rows}" role="button">Создать новую таблицу</a>