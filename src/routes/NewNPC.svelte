<script>
    import NPC from '$lib/modules/npc.json';

    let tables = NPC.tables;
    let npc;
    function generate(table) {
        const randomElementIndex = Math.floor(Math.random() * table.length);
        return table[randomElementIndex];
    }
</script>
{generate(tables['gender'])}
<button>{NPC.name}</button>

<article>
    <header>

    </header>
</article>
