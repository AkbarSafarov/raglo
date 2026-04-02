# Raglo — интернет-магазин сантехники


## Стек технологий

| Слой | Инструменты |
|------|-------------|
| Сборка | Gulp 5, Babel 7 |
| Стили | SCSS (Dart Sass), Bootstrap 5.3, Autoprefixer |
| JavaScript | jQuery, Vanilla JS (ES6+) |
| UI-компоненты | Swiper.js, Lightgallery, Tippy.js, Bootstrap Icons |

## Страницы

- **Главная** (`index.html`) 
- **Каталог** (`catalog.html`) 
- **Карточка товара** (`card.html`) 
- **Корзина** (`cart.html`, `cart-2.html`) 
- **Оформление заказа** (`order.html`) 
- **Сравнение** (`comparison.html`)
- **Личный кабинет** (`account.html`)
- **Контакты** (`contacts.html`)

## Структура проекта

```
raglo/
├── src/
│   ├── html/
│   │   ├── pages/      # Шаблоны страниц
│   │   └── blocks/     # Переиспользуемые блоки (шапка, подвал и др.)
│   ├── styles/         # SCSS-модули
│   ├── js/             # JavaScript-модули
│   ├── files/          # Изображения и медиа
│   └── libs/           # Сторонние библиотеки
├── build/              # Результат dev-сборки
├── dist/               # Результат prod-сборки
└── gulpfile.mjs        # Конфигурация Gulp
```

## Запуск

```bash
npm install

# Режим разработки (live-reload через BrowserSync)
npm run dev

# Продакшн-сборка (минификация → dist/)
npm run build
```

