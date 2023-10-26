<script>
    export let tableScale;
    $: tableData = Array.from({ length: tableScale.rows }, () => Array(tableScale.cols).fill(''));

</script>

<div>
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
