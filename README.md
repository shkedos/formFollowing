# formFollowing

Изменение изображений в зависимости от вводимого текста в элементы формы.

### Подключение

Подключить к коду файлы wdgtjq.js и styleFE.css.
```html
  <link rel="stylesheet" href="styleFE.css">
```
```html
  <script src="w/wdgtjq.js"></script>
```

Опции
```html
function formEnter(){
      $('#form-cntnr').formEnter({
            elem: $('#form-cntnr'),
            frontImg: 0,
            numImg: 7,
            });
}
```
