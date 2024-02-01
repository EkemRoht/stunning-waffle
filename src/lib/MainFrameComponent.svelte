<script>
    import {currentCompany} from "./js/currentCompanyStore.js";
    import CompaniesList from "./CompaniesManager/CompaniesList.svelte";

</script>

{#if $currentCompany}
    Чот открыла, это {$currentCompany.name}
{:else}
    Когда-нибудь здесь будет что-то умное.
{/if}

<article>
    <CompaniesList/>
</article>