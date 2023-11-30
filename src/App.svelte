<script>
    import '@picocss/pico';
    import './app.css';
    import JSONUploader from "./lib/JSONUploader.svelte";
    import GeneratorsList from "./lib/GeneratorsList.svelte";

</script>

<main class="container">
    <nav>
        <hgroup>
            <h1><a href="#">Stunning Waffle</a></h1>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
    </nav>
    <GeneratorsList/>
    <JSONUploader/>
</main>