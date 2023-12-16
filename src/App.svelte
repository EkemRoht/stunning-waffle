<script>
    import '@picocss/pico';
    import './app.css';
    import CompaniesManager from "./lib/CompaniesManager.svelte";
</script>

<main class="container">
    <nav>
        <hgroup>
            <h1><a href="#">Stunning Waffle</a></h1>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
    </nav>

    <CompaniesManager/>
</main>