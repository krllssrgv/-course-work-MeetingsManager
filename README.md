Meetings Manager
Это приложение помогает организовывать различные мероприятия и встречи внутри компании и отслеживать их.
Есть три основные сущности:
- пользователи
- организации
- мероприятия

В текущей реализации пользователи могут:
- создавать организации
- создавать мероприятия
- принимать и отклонять приглашения в другие организации

Пользователи, являющиеся создателями организации, могут:
- приглашать и удалять других пользователей в те организации, которые они создали


Авторизация включает в себя процесс регистрации и входа
Для регистрации необходимо указать:
- email
- пароль
- пароль повторно
- имя
- фамилию
- отчество

Для входе необходимо указать:
- email
- пароль


В приложении пользователю доступны следующие страницы:
- организации - страница со списком организаций, в которых он состоит (по сути является главное страницей приложения)
- создание - страница, где можно создать свою организацию
- профиль - страница с информацией о профиле
- приглашения - страница со списком активных приглашений пользователя в другие организации
- организация - страница со встречами в какой-то организации (в ссылке используется параметр id для определения организации)
- создать встречу - страница для создания встречи (привязана к параметру id)
- участники (для владельца) - страница, на которой можно просматривать текущих участников и отправлять приглашения другим

Для обработки ошибок и правильного отображения данных об организации используются защищенные маршруты и переадресация


В качестве backend используется приложение на фреймворке flask
**Возможно, это важный момент - backend полностью создавал я параллельно с frontend в течение времени выполнения курсовой работы
База данных - sqlite
Приложение развернуто на timeweb cloud
Для авторизации использутся JWT
Настроены CORS для корректной работы API
Есть встроенная панель администрирования базой данных и swagger


На frontend используется UI-фреймворк React, state manager - Redux
Для маршрутизации используется react-router
Архитектура - FSD
- app - верхний слой приложения с маршрутами и store
- pages - слой страниц
- widgets - слой виджетов (компонентов), из которых состоят страницы
- features - слой со слайсами, селекторами и middleware
- entities - слой с компонентами, которые связаны с сущнстями приожения
- shared - слой с переиспользуемыми ui компонентами, файлами конфигурации, константами, изображениями и утилитами


К приложению подключена Яндекс Метрика для сбора продуктовой статистики
Для сбора ошибок используется TrackJS
