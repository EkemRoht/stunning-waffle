<script>
    let editorContent = "";
    let tableNames = ["users", "posts", "comments", "categories"]; // Пример названий таблиц

    let showDropdown = false;
    let caretPosition = { top: 0, left: 0 };

    let filteredTables = [];

    function handleInput(event) {
        const cursorPosition = getCaretPos(event.target);
        const textBeforeCursor = editorContent.slice(0, cursorPosition);

        if (textBeforeCursor.includes('@')) {
            const searchText = textBeforeCursor.split('@')[1];
            filterTables(searchText);
            updateCaretPosition(this);
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

    function updateCaretPosition (input) {
        const rect = input.getBoundingClientRect();
        const { selectionStart } = input;

        const startPosition = input.value.substring(0, selectionStart);
        const preCaretRect = document.createElement('span');
        preCaretRect.textContent = startPosition;
        document.body.appendChild(preCaretRect);

        caretPosition = {
            top: rect.top + window.scrollY,
            left: rect.left + preCaretRect.offsetWidth + window.scrollX,
        };
        console.log(caretPosition);

        preCaretRect.remove();
    }
</script>

<style>
    .dropdown-menu {
        position: absolute;
        padding: 10px;
    }
</style>

<textarea bind:value={editorContent} on:input={handleInput}></textarea>


{#if showDropdown && filteredTables.length > 0}
    <article class="dropdown-menu" style="left: {caretPosition.left}px; top: {caretPosition.top}px">
        {#each filteredTables as tableName (tableName)}
            <div>{tableName}</div>
        {/each}
    </article>
{/if}