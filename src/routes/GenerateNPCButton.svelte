<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function generateNPC() {
        // Здесь можно реализовать генерацию НПС
        // Например, создадим плейсхолдер объекта НПС
        const npc = {
            name: "Имя НПС",
            description: "Описание НПС",
            // Другие характеристики НПС
        };

        dispatch('chosenNPC', npc);
    }
</script>

<button on:click={generateNPC}>Новый НПС</button>