# formFollowing

Изменение изображений в зависимости от вводимого текста в элементы формы.

### Подключение

Подключить к коду файлы wdgtjq.js, библиотеку jQuery и styleFE.css.
```html
  <link rel="stylesheet" href="styleFE.css">
```
```html
  <script src="w/wdgtjq.js"></script>
```
```html
  <script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
```

### Опции
elem - сюда будет вставлена форма,

numImg - количество изображений,

frontImg - изнчаально видимое изображение.
```html
function formEnter(){
      $('#form-cntnr').formEnter({
            elem: $('#form-cntnr'),
            frontImg: 0,
            numImg: 7,
            });
}
```
