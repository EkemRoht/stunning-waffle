<script>
    import {currentCompany} from "./js/currentCompanyStore.js";
    import CompaniesManager from "./CompaniesManager.svelte";
    import JSONUploader from "./JSONUploader.svelte";
    import Editor from "./Editor.svelte";
</script>

{#if $currentCompany}
    Чот открыла, это {$currentCompany.name}
{:else}
    Когда-нибудь здесь будет что-то умное.
{/if}

<article>
<!--    <header>-->
<!--        <CompaniesManager/>-->
<!--    </header>-->



<!--    <footer>-->
<!--        <JSONUploader/>-->
<!--    </footer>-->
    <Editor/>
</article>