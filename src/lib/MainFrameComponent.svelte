<script>
    import {currentCompany} from "./js/currentCompanyStore.js";
</script>

{#if $currentCompany}
    Чот открыла, это {$currentCompany.name}
{:else}
    Когда-нибудь здесь будет что-то умное.
{/if}