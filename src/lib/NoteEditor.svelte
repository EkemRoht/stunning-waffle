<script>
    let text1;
    let text2;

    function switchFields(event) {
        if ((event.ctrlKey || event.metaKey) && (event.key === 'й' || event.key === 'q')) {
            event.preventDefault();
            const target = event.target === text1 ? text2 : text1;
            target.focus();
        }
    }
</script>

<textarea bind:this={text1} on:keydown={switchFields}></textarea>
<textarea bind:this={text2} on:keydown={switchFields}></textarea>