# JS_Vue-Kanban

![image](https://user-images.githubusercontent.com/56207146/162626412-46fbfa58-bdc3-4f56-a38a-260d672ecf07.png)

## Table of Contents

TODO

## Starting the project

### Downloading and running the project

- Clone / Download this project
- Open _Visual Studio Code_
- Open a CLI and install the dependencies with `npm run init`
- In *JS_Vue-Kanban_server*, rename the `.example.env` file into `.env` and fill in the keys.

![image](https://user-images.githubusercontent.com/56207146/162626129-2310d27f-7c86-4d48-9def-b95408218c32.png)

#### Setup the automatic project launch

Theses steps makes the project launch itself automatically and only has to be
done once

- Go to the **"kanban.code-workspace"** file and click on the
  "Open Workspace" button

  ![image](https://user-images.githubusercontent.com/56207146/160180330-3c543095-cc5b-477f-8d91-0f6a7f5adf80.png)

- Once the workspace is open, open the Command Palette and write down
  "`>Tasks: Run Task`". Select the option and then "`Run all`"

![image](https://user-images.githubusercontent.com/56207146/162626219-2e9f9722-4380-407a-a14d-06327949d8be.png)

- Two terminals will open and run the command. On this point onwards,
 each time you open the workshop, the task will automatically run.

> :information_source: A prompt might ask your authorization to accept or deny
> the automatic launch.

#### Manual project launch

Open a terminal and type in :
- For the server: "`npm run start:server`"
- For the client: "`npm run start:client`"

---

## Project

### Project features

Here are some of the main features of this WebApp:

TODO

### Project tree

```tree
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
