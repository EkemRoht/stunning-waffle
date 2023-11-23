<script>
    import Link from './LinkTest.svelte';

    let yourText = "Твой текст с @(ссылкой)";

    // Функция для замены @(текст) на компонент Link
    function replaceLink(text) {
        const regex = /@\(([^)]+)\)/g;
        return text.replace(regex, '<Link href="$1">$1</Link>');
    }
</script>

<p>{@html replaceLink(yourText)}</p>
