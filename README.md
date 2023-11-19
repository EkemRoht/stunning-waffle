# Stunning Waffle Generator

Нет времени объяснять, это генератор штук для ГМов. Здесь уже готов целый один модуль НПС.

Дальше я объясню как устроен файл модуля.
### `"name"`
Название модуля, то как модуль будет отображаться в списке генераторов
### `"template"`
Сам шаблон генерации.

Синтаксис: `@(название таблицы|количество)`. Из указанной таблицы будет получено указанное после `|` количество случайных элементов. Если элемент 1, то достаточно написать просто название таблицы.

**Пример:** `@(gender)` и `@(appearance|3)`

### `"header"`
Заголовок, будет отображаться сверх карточки результата с особым оформлением. Так же это поле будет использоваться для сохранения данных в базу. Сейчас нет.

**Пример:** `@(name) «@(nickname)» @(surname)`

### `"content"`
Более описательная часть блока генерации. Всё то же самое, что и в заголовке, но сюда можно накрутить целую кучу текста. Перевод строк обозначается при помощи `::`.

### `"requirements"`
Полный список таблиц необходимых для заполнения шаблона. К заполнению обязателен.

### `"tables"`
Непосредственно таблицы шаблона. Не обязательная часть, если ваш шаблон, например, использует таблицы из другого модуля.

Синтаксис следующий:

```json
"уникальное название таблицы": [
'значение №1',
'значение №2',
...
]
```
Можно использовать вложенные массивы для более сложных таблиц, например так:
```json
"уникальное название таблицы": [
['значение №1/1', 'значение №1/2'],
['значение №2/1', 'значение №2/2'],
]
```