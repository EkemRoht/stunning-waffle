<script>
    import CompanyForm from "./CompanyForm.svelte";

    let showForm = false;
    function showComponent() {
        showForm = !showForm;
    }
</script>


{#if showForm}
    <dialog open>
        <article>
            <header><button>X</button></header>
            <h3>Confirm your action!</h3>
            <p>
                Mauris non nibh vel nisi sollicitudin malesuada.
                Donec ut sagittis erat. Praesent eu eros felis.
                Ut consectetur placerat pulvinar.
            </p>
            <footer>
                <a href="#" role="button" class="secondary" on:click={showComponent}>Cancel</a>
                <a href="#" role="button" on:click={showComponent}>Confirm</a>
            </footer>
        </article>
        <CompanyForm/>
    </dialog>
{/if}

<button on:click={showComponent}>Создать новую компанию</button>