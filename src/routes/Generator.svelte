<script>
    import {db} from "$lib/js/db.js";

    export let generator;

    // Функция для получения случайных элементов из массива
    function generateRandomItem(arr) {
        const randomArrIndex = Math.floor(Math.random() * arr.length);
        const randomArr = arr[randomArrIndex];

        if (typeof randomArr === 'string') {
            return randomArr;
        } else {
            return generateRandomItem(randomArr);
        }
    }

    // Функция для заполнения шаблона данными
    async function fillTemplate(template) {
        const pattern = /@\((.*?)\)(?:\|(\d+)\+)?/g;
        let match;
        let filledTemplate = template;

        while ((match = pattern.exec(template)) !== null) {
            const bitsName = match[1].split('|')[0];
            const maxCount = match[1].indexOf('|') > 0 ? parseInt(match[1].split('|')[1]) : 1;
            // Получаем данные из IndexedDB по названию таблицы tableName
            const data = await db.waffleBits
                .where('name').equalsIgnoreCase(bitsName)
                .first();

            let randomBits = [];
            for (let i = 0; i < maxCount; i++) {
                randomBits.push(generateRandomItem(data.bits));
            }
            filledTemplate = filledTemplate.replace(match[0], randomBits.join(', '));
        }

        return filledTemplate;
    }

    // Пример использования
    const template = "@(name) @(surname). @(gender). @(appearance|3+)";
    fillTemplate(template).then((filledTemplate) => {
        console.log(filledTemplate);
    });

</script>

{#await fillTemplate(generator.template)}
    <p>...waiting</p>
{:then number}
    <p>{number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}