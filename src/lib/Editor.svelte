<script>
    let editorContent = "";
    let tableNames = ["users", "posts", "comments", "categories"]; // Пример названий таблиц

    let showDropdown = false;
    let filteredTables = [];

    function handleInput(event) {
        const cursorPosition = getCaretPos(event.target);
        const textBeforeCursor = editorContent.slice(0, cursorPosition);

        if (textBeforeCursor.includes('@')) {
            const searchText = textBeforeCursor.split('@')[1];
            filterTables(searchText);
            showDropdown = true;
        } else {
            showDropdown = false;
        }
    }

    function filterTables(searchText) {
        filteredTables = tableNames.filter(name => name.includes(searchText));
    }

    function getCaretPos(obj) {
        obj.focus();

        if (obj.selectionStart) return obj.selectionStart; // Gecko
        else if (document.selection) // IE
        {
            var sel = document.selection.createRange();
            var clone = sel.duplicate();
            sel.collapse(true);
            clone.moveToElementText(obj);
            clone.setEndPoint('EndToEnd', sel);
            return clone.text.length;
        }

        return 0;
    }
</script>

<style>
    /* Тут можно добавить стили для текстового редактора и выпадающего меню */
    :host {
        display: block;
        width: 100%;
        position: relative;
    }

    textarea {
        width: 100%;
        height: 200px;
        padding: 10px;
        position: relative;
    }

    .dropdown-menu {
        position: absolute;
        width: 200px; /* или любая другая ширина, подходящая для твоего дизайна */
        background: #fff;
        border: 1px solid #ccc;
        z-index: 1;
    }

    .dropdown-item {
        padding: 8px;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
    }

    .dropdown-item:last-child {
        border-bottom: none; /* Убираем границу с последнего элемента */
    }
</style>

<textarea bind:value={editorContent} on:input={handleInput}></textarea>

{#if showDropdown && filteredTables.length > 0}
    <div class="dropdown-menu">
        {#each filteredTables as tableName (tableName)}
            <div class="dropdown-item">{tableName}</div>
        {/each}
    </div>
{/if}
