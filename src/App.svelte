<script>
    import '@picocss/pico';
    import './app.css';
    import CompaniesManager from "./lib/CompaniesManager.svelte";
    import JSONUploader from "./lib/JSONUploader.svelte";
</script>

<main class="container">
    <nav>
        <hgroup>
            <h1><a href="#">Stunning Waffle</a></h1>
            <h3>Смотри, мам, я в телевизоре</h3>
        </hgroup>
        <!--<ul>
            <li>
                <details role="list" dir="rtl">
                    <summary aria-haspopup="listbox" role="link">Dropdown</summary>
                    <ul role="listbox">
                        <li><a>Action</a></li>
                        <li><a>Another action</a></li>
                        <li><a>Something else here</a></li>
                    </ul>
                </details>
            </li>
        </ul>-->
    </nav>

    <article>
        <CompaniesManager/>
        <footer>
            <JSONUploader/>
        </footer>
    </article>
</main>