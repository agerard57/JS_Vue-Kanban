# JS_Vue-Kanban

A to-do list / kanban made with Vue.Js, Express.js and MongoDB

```
📦 ROOT
├─ .gitignore
├─ .vscode
│  └─ tasks.json
├─ JS_Vue-Kanban_client
│  ├─ .gitignore
│  ├─ README.md
│  ├─ jsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ common
│  │  │  └─ EventBus.js
│  │  ├─ components
│  │  │  ├─ authFormPage
│  │  │  │  └─ AuthForm.vue
│  │  │  ├─ layout
│  │  │  │  ├─ PageFooter.vue
│  │  │  │  └─ PageHeader.vue
│  │  │  ├─ table
│  │  │  │  ├─ CardButtons.vue
│  │  │  │  ├─ FavouriteStar.vue
│  │  │  │  ├─ KanbanColumn.vue
│  │  │  │  ├─ TasksTable.vue
│  │  │  │  └─ TodoItem.vue
│  │  │  └─ taskFormPage
│  │  │     └─ TaskForm.vue
│  │  ├─ main.js
│  │  ├─ models
│  │  │  └─ user.js
│  │  ├─ router
│  │  │  ├─ auth.routes.js
│  │  │  ├─ core.routes.js
│  │  │  ├─ index.js
│  │  │  └─ todos.routes.js
│  │  ├─ services
│  │  │  ├─ auth.service.js
│  │  │  ├─ axiosInstance.js
│  │  │  ├─ cards.service.js
│  │  │  └─ token.service.js
│  │  ├─ store
│  │  │  ├─ auth.module.js
│  │  │  └─ index.js
│  │  ├─ styles
│  │  │  ├─ core.css
│  │  │  ├─ forms.css
│  │  │  └─ pageHeader.css
│  │  └─ views
│  │     ├─ AuthFormPage.vue
│  │     ├─ AuthMessage.vue
│  │     ├─ HomePage.vue
│  │     ├─ NotFound.vue
│  │     ├─ TaskFormPage.vue
│  │     └─ TodoList.vue
│  └─ vue.config.js
├─ JS_Vue-Kanban_server
│  ├─ .env.example
│  ├─ app.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ config
│     │  ├─ db.config.js
│     │  ├─ jwt.config.js
│     │  └─ server.config.js
│     ├─ controllers
│     │  ├─ auth.controller.js
│     │  └─ todos.controller.js
│     ├─ middlewares
│     │  ├─ authJwt.js
│     │  ├─ index.js
│     │  └─ verifySignUp.js
│     ├─ models
│     │  ├─ todos.model.js
│     │  └─ users.model.js
│     ├─ routes
│     │  ├─ auth.routes.js
│     │  ├─ index.js
│     │  └─ todos.routes.js
│     └─ utils
│        └─ consoleMessage.js
├─ LICENSE
├─ README.md
├─ kanban.code-workspace
├─ package-lock.json
└─ package.json
```
