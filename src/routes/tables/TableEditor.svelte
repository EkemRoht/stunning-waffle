<script>
    export let tableScale;
    let tableName = '';
    let arr = Array.from({ length: tableScale.rows }, () => Array(tableScale.cols).fill(''));
    $: tableData = arr;
</script>

<article>
    <header>
        <input type="text" name="title" placeholder="Название таблицы" bind:value={tableName} required>
    </header>
    <!--<div class="table">
        {#each tableData as row, rowIndex}
            <div class="grid">
                <div>{rowIndex+1}</div>
                {#each row as cell, colIndex}
                    <div>
                        <input type="text" bind:value={tableData[rowIndex][colIndex]}>
                    </div>
                {/each}
            </div>
        {/each}
    </div>-->

    <table role="grid" class="table">
        {#if typeof tableData[0] != "string"}
            <thead>
            <tr>
                <th>#</th>
                {#each tableData[0] as cell, colIndex}
                    <th>{colIndex +1}</th>
                {/each}
            </tr>
            </thead>
        {/if}
        <tbody>
        {#each tableData as row, rowIndex}
            <tr>
                <th>{rowIndex+1}</th>
                {#each row as cell, colIndex}
                    <td>
                        <input type="text" bind:value={tableData[rowIndex][colIndex]}>
                    </td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</article>

<table role="grid">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th scope="col">#</th>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
    </tr>
    </tfoot>
</table>