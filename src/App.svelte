<script>
    import '@picocss/pico';
    import './app.css';
    import MainFrameComponent from "./lib/MainFrameComponent.svelte";
</script>

<main class="container">
    <nav>
        <hgroup>
            <h1><a href="#" on:click|preventDefault>Stunning Waffle</a></h1>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
    </nav>

    <MainFrameComponent/>
</main>