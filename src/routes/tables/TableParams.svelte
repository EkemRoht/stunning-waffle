<script>
    import {createEventDispatcher} from "svelte";
    export let tableParams = {
        cols: 2,
        rows: 6,
        diceCol: true,
        diceRow: false
    };
    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submitTableParams');
</script>

<form>
    <details>
        <summary>Стартовые параметры</summary>
        <div class="grid">
            <label for="colsCount">
                Столбцы:
                <input type="number" id="colsCount" name="colsCount" bind:value={tableParams.cols} required>
            </label>
            <label for="rowsCount">
                Столбцы:
                <input type="number" id="rowsCount" name="rowsCount" bind:value={tableParams.rows} required>
            </label>
        </div>
        <label for="diceCol">
            <input type="checkbox" id="diceCol" name="diceCol" role="switch" bind:checked={tableParams.diceCol}>
            Автоматически заполнить столбец дайсов
        </label>
        <label for="diceRow">
            <input type="checkbox" id="diceRow" name="diceRow" role="switch" bind:checked={tableParams.diceRow}>
            Автоматически заполнить строку дайсов
        </label>
    </details>
    <button on:click={submit()}>Создать новую таблицу</button>
</form>