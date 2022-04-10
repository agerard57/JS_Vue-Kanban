# JS_Vue-Kanban

![image](https://user-images.githubusercontent.com/56207146/162626412-46fbfa58-bdc3-4f56-a38a-260d672ecf07.png)

## Table of Contents

- [JS_Vue-Kanban](#js_vue-kanban)
  - [Table of Contents](#table-of-contents)
  - [Starting the project](#starting-the-project)
    - [Downloading and running the project](#downloading-and-running-the-project)
      - [Setup the automatic project launch](#setup-the-automatic-project-launch)
      - [Manual project launch](#manual-project-launch)
  - [Project](#project)
    - [Project features](#project-features)
      - [Home page](#home-page)
      - [Navbar](#navbar)
      - [Sign up / Login page](#sign-up--login-page)
      - [List page](#list-page)
      - [Add page](#add-page)
      - [Edit page](#edit-page)
      - [View page](#view-page)
      - ["Not a valid url" page](#not-a-valid-url-page)
      - ["Auth message" page](#auth-message-page)
    - [Project tree](#project-tree)

## Starting the project

### Downloading and running the project

- Clone / Download this project
- Open _Visual Studio Code_
- Open a CLI and install the dependencies with `npm run init`
- In _JS_Vue-Kanban_server_, rename the `.example.env` file into `.env` and fill in the keys.

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

#### Home page

This page displays the three latest tasks edited
as well as the task marked as favourite.

> The home pages also displays the name of the user when logged in.

#### Navbar

The navbar also changes when the user is logged in. The user will now have a button to add a new task as well as a log out button.

#### Sign up / Login page

Using a switch, the user can either sign up or sign in with his credentials.
On login, the user will be accorded a JWT token
that will leave him access to otherwise restricted pages.

#### List page

The list page simply lists all tasks the users made in form of a kanban. Depending on the advancement of a task, the user can move from one column to another thanks to the edit button.

> :information_source: The edit and delete button will only
> be seen if the used is logged in.

#### Add page

This page is a form that creates a new task.
If the user accesses this page with the navbar button,
the user will be able choose the list it will appear on.
However, if the page is accessed from one of
the "Add ..." buttons on a list, the list input cannot be changed.

#### Edit page

The edit page is a form that updates a selected task.
In addition of the changing label for the submit button,
the form will, by default, automatically be populated
by the selected task.

#### View page

The view page gets the desired task and displays it on the same form
that was used to add and edit a task. All inputs will be blocked
and the submit button will just take the user on the previous page.

#### "Not a valid url" page

This page appears when the user accesses a page that doesn't exist.

> Note that this page cannot be accessed without changing manually the url

#### "Auth message" page

This page appears when the user is:

- Already logged in and wants goes in the "Log in/Sign up" page
- Not logged in and wants to access a restricted feature.

> Note that these pages too cannot be accessed without changing
> manually the url

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
