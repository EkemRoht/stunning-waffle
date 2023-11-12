<script>
    let name = "John";
    let surname = "Doe";
    let gender = "Male";
    let appearance = "Tall";
    function generateRandomValue() {
        // Здесь реализуй логику генерации случайных значений
        // Например, используй Math.random() или другие методы.
        return "New Value";
    }
    function regenerate(element) {
        switch (element) {
            case 'name':
                name = generateRandomValue();
                break;
            case 'surname':
                surname = generateRandomValue();
                break;
            case 'gender':
                gender = generateRandomValue();
                break;
            case 'appearance':
                appearance = generateRandomValue();
                break;
            default:
                break;
        }
    }
</script>
<h1>
    {name}
    <span on:click={() => regenerate('name')}>🔀</span>
</h1>
<p>
    {surname}.
    <span on:click={() => regenerate('surname')}>🔀</span>
    {gender}.
    <span on:click={() => regenerate('gender')}>🔀</span>
    {appearance}
    <span on:click={() => regenerate('appearance')}>🔀</span>
</p>

<article>
    <header>sd</header>
    bububu
    <blockquote>sd</blockquote>
    <footer>
        <button>test</button>
    </footer>
</article>