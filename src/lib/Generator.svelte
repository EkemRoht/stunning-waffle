<script>
    import {db} from "./js/db.js";
    import LinkTest from "./LinkTest.svelte";

    export let generator;
    async function getWaffleBits (names) {
        const bits = await db.waffleBits
            .where('name').startsWithAnyOf(generator.requirements)
            .toArray();
        return bits;
    }

    function renderTemplate(recipe, bits) {
        const header = fillTemplate(recipe.header, bits);
        const content = fillTemplate(recipe.content, bits);

        return `<article>
                    <header>${header}</header>
                    <p>${content.split("::").join('</p><p>')}</p>
                </article>`;
    }

    // Функция для заполнения шаблона данными
    function fillTemplate(recipe, bits) {
        const pattern = /@\((.*?)\)(?:\|(\d+)\+)?/g;
        let match;
        let filledTemplate = recipe;

        while ((match = pattern.exec(recipe)) !== null) {
            const bitsName = match[1].split('|')[0];
            const maxCount = match[1].indexOf('|') > 0 ? parseInt(match[1].split('|')[1]) : 1;
            const currentBits = bits.filter((value)=>{return value.name === bitsName});

            /*let randomBits = [];
            for (let i = 0; i < maxCount; i++) {
                randomBits.push(generateRandomItem(currentBits[0].bits));
            }
            filledTemplate = filledTemplate.replace(match[0], randomBits.join(', '));*/
            let someBits = ``;
            for (let i = 0; i < maxCount; i++) {
                // randomBits.push(generateRandomItem(currentBits[0].bits));
                someBits += `<a href="#">${generateRandomItem(currentBits[0].bits)}</a> `
            }
            filledTemplate = filledTemplate.replace(match[0], someBits);
        }

        return filledTemplate;
    }

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

</script>

{#await getWaffleBits(generator.requirements)}
    <p>...waiting</p>
{:then waffleBits}
    <p>{@html renderTemplate(generator.template, waffleBits)}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}