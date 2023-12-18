<script>
    import {currentCompany} from "./js/currentCompanyStore.js";
</script>
<dialog open>
    <article>
        <header>
            <a href="#close" aria-label="Close" class="close"></a>
            {$currentCompany.name}
        </header>
        <p>
            Nunc nec ligula a tortor sollicitudin dictum in vel enim.
            Quisque facilisis turpis vel eros dictum aliquam et nec turpis.
            Sed eleifend a dui nec ullamcorper.
            Praesent vehicula lacus ac justo accumsan ullamcorper.
        </p>
    </article>
</dialog>