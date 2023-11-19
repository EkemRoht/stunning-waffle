<script>
    import '@picocss/pico';
    import './app.css';
    import JSONUploader from "./lib/JSONUploader.svelte";
    import GeneratorsList from "./lib/GeneratorsList.svelte";
</script>

<main class="container">
    <nav>
<!--        <ul>-->
<!--            <li><a href="/">Генераторы</a></li>-->
<!--        </ul>-->
        <hgroup>
            <h1><a href="/">Stunning Waffle</a></h1>
            <h>Смотри, мам, я в телевизоре</h>
        </hgroup>
<!--        <ul>-->
<!--            <li><a href="/modules">Модули</a></li>-->
<!--        </ul>-->
    </nav>

    <GeneratorsList/>
    <JSONUploader/>
</main>