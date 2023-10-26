<script lang="ts">
    import '@picocss/pico'
    import '$lib/style/app.css'
</script>
<main class="container">

    <nav>
        <ul>
            <li><a href="/">Генераторы</a></li>
        </ul>
        <hgroup>
            <h2>Stunning Waffle</h2>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
        <ul>
            <li><del disabled>Таблицы</del></li>
        </ul>
    </nav>

    <slot />
</main>