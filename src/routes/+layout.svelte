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
            <h2><a href="/">Stunning Waffle</a></h2>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
        <ul>
            <li><a href="/modules">Модули</a></li>
        </ul>
    </nav>

    <slot />
</main>