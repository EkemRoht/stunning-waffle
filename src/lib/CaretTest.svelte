<script>
    import { onMount } from 'svelte';

    let caretPosition = { top: 0, left: 0 };
    let showDiv = false;

    const updateCaretPosition = () => {
        const input = document.getElementById('your-input-id');
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

        showDiv = true;
    };

    onMount(() => {
        const input = document.getElementById('your-input-id');
        input.addEventListener('input', updateCaretPosition);
    });
</script>

<style>
    .caret-div {
        position: absolute;
    }
</style>

<input id="your-input-id" type="text" />

{#if showDiv}
    <div style="left:{caretPosition.left}px; top: {caretPosition.top}px" class="caret-div">
        <!-- Здесь размести нужные тебе элементы -->
        Твой контент под кареткой
    </div>
{/if}
