Критерії прийому

Використовуй цей шаблон React-проекту як стартову точку своєї програми.

    Створено репозиторій goit-react-hw-08-phonebook
    При здачі домашньої роботи є посилання на вихідні файли та робочі сторінки кожного проекту на GitHub Pages
    При запуску коду завдання, в консолі немає помилок та попереджень
    Для кожного компонента є окрема папка з файлом компонента React та файлом стилів
    Для компонентів описано propTypes

Книга контактів

Додай у програму «Книга контактів» можливість реєстрації, логіна та оновлення користувача, а також роботу з приватною колекцією контактів.
Бекенд

Для цього завдання є готовий бекенд. Ознайомся з документацією. Він підтримує всі необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення користувача за допомогою JWT. Використовуй його замість твого бекенда створеного через сервіс mockapi.io.
Маршрутизація

Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

    /register - публічний маршрут реєстрації нового користувача з формою
    /login - публічний маршрут логіна існуючого користувача з формою
    /contacts - приватний маршрут для роботи зі списком контактів користувача
    ________________________________________________________________________________________________________________________________

    React homework template

Этот проект был создан при помощи Create React App. Для знакомства и настройки дополнительных возможностей обратись к документации.
Подготовка нового проекта

    Убедись что на компьютере установлена LTS-версия Node.js. Скачай и установи её если необходимо.
    Клонируй этот репозиторий.
    Измени имя папки с react-homework-template на имя своего проекта.
    Создай новый пустой репозиторий на GitHub.
    Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием по инструкции.
    Установи базовые зависимости проекта командой npm install.
    Запусти режим разработки, выполнив команду npm start.
    Перейди в браузере по адресу http://localhost:3000. Эта страница будет автоматически перезагружаться после сохранения изменений в файлах проекта.

Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на GitHub Pages, в ветку gh-pages, каждый раз когда обновляется ветка main. Например, после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле package.json отредактировать поле homepage, заменив your_username и your_repo_name на свои, и отправить изменения на GitHub.

"homepage": "https://your_username.github.io/your_repo_name/"

Далее необходимо зайти в настройки GitHub-репозитория (Settings > Pages) и выставить раздачу продакшн версии файлов из папки /root ветки gh-pages, если это небыло сделано автоматически.

GitHub Pages settings
Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

    Желтый цвет - выполняется сборка и деплой проекта.
    Зеленый цвет - деплой завершился успешно.
    Красный цвет - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в выпадающем окне перейти по ссылке Details.

Deployment status
Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть по адресу указанному в отредактированном свойстве homepage. Например, вот ссылка на живую версию для этого репозитория https://goitacademy.github.io/react-homework-template.

Если открывается пустая страница, убедись что во вкладке Console нет ошибок связанных с неправильными путями к CSS и JS файлам проекта (404). Скорее всего у тебя неправильное значение свойства homepage в файле package.json.
Маршрутизация

Если приложение использует библиотеку react-router-dom для маршрутизации, необходимо дополнительно настроить компонент <BrowserRouter>, передав в пропе basename точное название твоего репозитория. Слеши в начале и конце строки обязательны.

<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>

Как это работает

How it works

    После каждого пуша в ветку main GitHub-репозитория, запускается специальный скрипт (GitHub Action) из файла .github/workflows/deploy.yml.
    Все файлы репозитория копируются на сервер, где проект инициализируется и проходит линтинг и сборку перед деплоем.
    Если все шаги прошли успешно, собранная продакшн версия файлов проекта отправляется в ветку gh-pages. В противном случае, в логе выполнения скрипта будет указано в чем проблема.