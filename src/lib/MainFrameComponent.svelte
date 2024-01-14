<script>
    import {currentCompany} from "./js/currentCompanyStore.js";
    import NoteEditor from "./NoteEditor.svelte";
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
    <NoteEditor/>
</article>