<script>
    import '@picocss/pico';
    import './app.css';
    import JSONUploader from "./lib/JSONUploader.svelte";
    import CompaniesDropdownList from "./lib/CompaniesDropdownList.svelte";
    import MainComponent from "./lib/MainFrameComponent.svelte";
</script>

<main class="container">
    <nav>
        <hgroup>
            <h1><a href="#" on:click|preventDefault>Stunning Waffle</a></h1>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
    </nav>

    <article>
        <header>
            <CompaniesDropdownList/>
        </header>
        <MainComponent/>
        <footer>
            <JSONUploader/>
        </footer>
    </article>
</main>