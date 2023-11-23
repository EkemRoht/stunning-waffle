const recipe = 'Работа: @(job_common), @(job_rare)';
const pattern = /@\(.*?\)/g;
let match = recipe.match(pattern);
let text = recipe.split(pattern);
let rowArray = [];
for (let i = 0; i < match.length; i++) {
    rowArray.push(text[i]);
    rowArray.push(match[i]);
}
rowArray.push(text[match.length]);
console.log(rowArray);

/*const recipe = 'Работа: @(job_common), @(job_rare)';
const pattern = /@\(.*?\)/g;
const matches = recipe.match(pattern) || [];
const rowArray = recipe.split(pattern).flatMap((part, i) => (i < matches.length ? [part, matches[i]] : [part])).filter(Boolean);
console.log(rowArray);*/
