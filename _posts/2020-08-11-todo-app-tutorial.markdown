---
layout: post
title: Todo App | JavaScript | Front-end Development | Surender Lohia
main-title: Todo App Tutorial - Front-end Development
date: 2020-08-11 14:21:05 +0530
author: Surender Lohia
categories: front-end
active: blog
description: Simple Todo App tutorial using HTML, CSS, JavaScript.
image: /assets/images/posts/todo-app/todo-app.png
comments: true
main-js: true
---

Hi Folks, <br>
This tutorial is all about how to create a simple todo list using web technologies - HTML, CSS, and JavaScript...

### Demo:
<div class="video-container mb20">
  <iframe src="https://www.youtube.com/embed/isSe2Nza8Dk?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Live: 
[https://www.surender.net/todo-app](https://www.surender.net/todo-app)

### Source Code:
[https://github.com/SurenderLohia/todo-app](https://github.com/SurenderLohia/todo-app)


### Targeted Audience:
One who looking to learn front-end development.<br>
One who looking to build some cool stuff using web technology.<br>
If you are new to the front-end, I believe this one will be a good starting point.<br>

Yeah, will start...

### Pro Tip: 
If you stuck somewhere in code feel free to check it out that part from [source code](https://github.com/SurenderLohia/todo-app)

### Task breakdown:

1. Create required files and folders.
2. Create a basic structure using HTML and CSS.
3. Add JavaScript functionality.
4. Deploy our code to live, using Github pages.

<br>
### 1. Create required files and folders

First will create the required directories and files. Run the below commands one by one in the terminal. <br>
Note: Don't copy $ sign while coping command, it's just a placeholder to indicate terminal cursor pointer.

<pre>
  <code class="language-shell">
    $ mkdir todo-app
    $ cd todo-app
    $ touch index.html
    $ mkdir css
    $ mkdir js
    $ touch css/main.css
    $ touch js/main.js
  </code>
</pre>
<br>

### 2. Create basic structure using HTML and CSS

Open the created directory (todo-app) in your favorite editor (I am using [VS Code](https://code.visualstudio.com/)).

Will add a basic HTML skeleton first. Open index.html and paste the below HTML code in that file.

<pre>
  <code class="language-html">
    &lt;!-- index.html --&gt;
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
      &lt;meta charset=&quot;UTF-8&quot;&gt;
      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
      &lt;title&gt;Todo App&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h2&gt;Todo App&lt;/h1&gt;
    &lt;/body&gt;
    &lt;/html&gt;
  </code>
</pre>

Run the local server to view this HTML in the browser...

To start the local python server (or you run any other server) go to terminal and navigate to the todo-app directory. And past the below command. It will start the local python server.

<pre>
  <code class="language-shell">
    $ python -m SimpleHTTPServer
  </code>
</pre>

Once server started open Chrome browser and enter the below URL

<pre>
  <code class="language-shell">
    http://localhost:8000
  </code>
</pre>

(Python is available in Mac OS by default, in case if you don't have python or not aware of [how to start a local server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server), then goto todo-app directory right-click the index.html file and click open with -> Google Chrome)

You will see below HTML

<img class="border" src="{{'/assets/images/posts/todo-app/base-html.png' | prepend: site.baseurl}}" alt="Base html">

We have not added any actual content yet, but this is our starting point.

Now, will add the required **CSS** styles. Open the **css/main.css** file in the editor and copy-paste the below code.

<pre>
  <code class="language-css">
    /* css/main.css */
    body {
      margin: 0;
    }

    .wrap {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
    }

    /* Flex */
    .flex {
      display: flex;
    }

    .align-center {
      align-items: center;
    }


    /* Typo */
    .font-weight-normal {
      font-weight: normal;
    }

    /* Margins */
    .mr1 {
      margin-right: 10px;
    }

    .mt0 {
      margin-top: 0;
    }

    .mb0 {
      margin-bottom: 0;
    }

    .mla {
      margin-left: auto;
    }

    .text-btn {
      background-color: transparent;
      padding: 0;
      border: 0;
      cursor: pointer;
    }

    .text-btn:focus {
      outline: 0;
    }

    .danger {
      color: red;
    }


    /* Todo List */
    .add-todo {
      padding-top: 15px;
      padding-bottom: 15px;
      
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .todo-list {
      padding-left: 0;
    }

    .todo-list-item {
      padding: 10px 10px 10px 0;
      border-bottom: 1px solid #ccc;
    }

    .todo-list-item input:checked + label {
    text-decoration: line-through;
    }

    .delete-btn {
      padding: 5px;
    }

  </code>
</pre>

Now will update our index.html. <br>
First, we have to include main.css in index.html. <br>
Open index.html in an editor and before closing head tag (</head>) add the below line

<pre>
  <code class="language-html">
    &lt;link href=&quot;css/main.css&quot; rel=&quot;stylesheet&quot;&gt;
  </code>
</pre>

Now we have to add required **HTML** for todo-list
In **index.html** copy and paste the below code in between the body tags (<body>....</body>)

#### **Below HTML contains:**
1. Todo-list title <br>
2. Add-todo section <br>
3. Todo-list Header section which contains All, Completed, Active filters, and delete all button. <br>
4. And Todo-list

<pre>
  <code class="language-html">
    &lt;div class=&quot;wrap&quot;&gt;
      &lt;h2 class=&quot;font-weight-normal&quot;&gt;Todo App&lt;/h1&gt;
      &lt;section class=&quot;todo-list-container&quot;&gt;
        &lt;section class=&quot;add-todo flex&quot;&gt;
          &lt;input id=&quot;js-add-todo-input&quot; class=&quot;mr1&quot; type=&quot;text&quot; value=&quot;&quot; placeholder=&quot;Task&quot; /&gt;
          &lt;button id=&quot;js-add-todo-btn&quot;&gt;Add&lt;/button&gt;
        &lt;/section&gt;
        &lt;header class=&quot;todo-header flex&quot;&gt;
          &lt;div class=&quot;flex align-center mr1&quot;&gt;
            &lt;input class=&quot;mt0 js-filter-todo-radio-btn&quot; type=&quot;radio&quot; value=&quot;all&quot; id=&quot;all&quot; name=&quot;todo-filter&quot; checked=&quot;checked&quot; /&gt;
            &lt;label for=&quot;all&quot;&gt;All&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;flex align-center mr1&quot;&gt;
            &lt;input class=&quot;mt0 js-filter-todo-radio-btn&quot; type=&quot;radio&quot; value=&quot;active&quot; id=&quot;active&quot; name=&quot;todo-filter&quot; /&gt;
            &lt;label for=&quot;active&quot;&gt;Active&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;flex align-center mr1&quot;&gt;
            &lt;input class=&quot;mt0 js-filter-todo-radio-btn&quot; type=&quot;radio&quot; value=&quot;completed&quot; id=&quot;completed&quot; name=&quot;todo-filter&quot; /&gt;
            &lt;label for=&quot;completed&quot;&gt;Completed&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;flex align-center mla&quot;&gt;
            &lt;button id=&quot;js-delete-all-btn&quot;&gt;Delete All&lt;/button&gt;
          &lt;/div&gt;
        &lt;/header&gt;
        &lt;ul class=&quot;todo-list&quot; id=&quot;js-todo-list&quot;&gt;
          &lt;li class=&quot;flex align-center todo-list-item&quot;&gt;
            &lt;input class=&quot;mt0 mb0 mr1&quot; type=&quot;checkbox&quot; value=&quot;todo-id-1&quot; id=&quot;todo-id-1&quot; /&gt;
            &lt;label for=&quot;todo-id-1&quot;&gt;HTML&lt;/label&gt;
          &lt;/li&gt;
          &lt;li class=&quot;flex align-center todo-list-item&quot;&gt;
            &lt;input class=&quot;mt0 mb0 mr1&quot; type=&quot;checkbox&quot; value=&quot;todo-id-2&quot; id=&quot;todo-id-2&quot; /&gt;
            &lt;label for=&quot;todo-id-2&quot;&gt;CSS&lt;/label&gt;
          &lt;/li&gt;
        
        &lt;/ul&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  </code>
</pre>

Now, the todo-app structure is ready goto browser and refresh it, you will see like below HTML page.

<img class="border" src="{{'/assets/images/posts/todo-app/todo-app.png' | prepend: site.baseurl}}" alt="Todo-app basic structure"> 

<br>
### 3. Add JavaScript functionality

Open js/main.js file in the editor and copy-paste the below js code
<pre>
  <code class="language-js">
    // IIFE to create local scope and to avoid global namespacing collisions
    (function () {
      let todoCollection = {};
      let todoIds = [];

      /* 
      Data Structure:

      const todoCollection = {
        "1": {
          id: 1,
          task: "HTML",
          isCompleted: false,
        },
        "2": {
          id: 2,
          task: "CSS",
          isCompleted: false,
        },
      };

      const todoIds = [1, 2];

      */

      // Localstorage
      function persistData(key, value) {
        const valueStirng = JSON.stringify(value);
        window.localStorage.setItem(key, valueStirng);
      }

      function getPersistedData(key) {
        const value = window.localStorage.getItem(key);
        return JSON.parse(value);
      }

      function init() {
        const _todoCollection = getPersistedData('todoCollection');
        const _todoIds = getPersistedData('todoIds');

        if(_todoCollection) {
          todoCollection = _todoCollection;
        }

        if(_todoIds) {
          todoIds = _todoIds;
        }

        if(todoIds.length) {
          renderTodoList(todoListEl, todoIds, todoCollection);
        }
      }

      // Dom Elements
      const todoListEl = document.getElementById("js-todo-list");
      const addTodoBtn = document.getElementById('js-add-todo-btn');
      const addTodoInput = document.getElementById('js-add-todo-input');
      const filterTodoRadioBtns =  document.querySelectorAll('.js-filter-todo-radio-btn');
      const deleteAllBtn = document.getElementById('js-delete-all-btn');

      function createListItemEl(todoItem) {
        return `<li class="flex align-center todo-list-item">
        <input class="mt0 mb0 mr1" type="checkbox" value="${todoItem.id}" id="${todoItem.id}" ${todoItem.isCompleted ? 'checked': ''} />
        <label for="${todoItem.id}">${todoItem.task}</label>
        <button class="text-btn delete-btn danger js-delete-btn mla" data-id="${todoItem.id}">X</button>
        </li>`;
      }

      function renderTodoList(container, todoIds, todoCollection) {
        let todoListHTML = "";
        todoIds.forEach((id) => {
          todoListHTML += createListItemEl(todoCollection[id]);
        });

        container.innerHTML = todoListHTML;
      }

      function addTodo(task) {
        const todoId = todoIds.length + 1;
        const todoItem = {
          id: todoId,
          task,
          isCompleted: false,
        };

        todoCollection[todoId] = todoItem;
        todoIds.push(todoItem.id);
        addTodoInput.value = '';

        persistData('todoCollection', todoCollection);
        persistData('todoIds', todoIds);

        renderTodoList(todoListEl, todoIds, todoCollection);
      }

      function toggleTodoItem(id) {
        todoCollection[id].isCompleted = !todoCollection[id].isCompleted;
        persistData('todoCollection', todoCollection);
      }

      function filterTodoitems(category) {
        console.log('category', category);

        if(category === 'all') {
          renderTodoList(todoListEl, todoIds, todoCollection);
          return;
        }
        
        let filteredTodoCollection = {}
        let filteredTodoIds = [];
        if(category === 'active') {
          todoIds.forEach((id) => {
            const todoItem = todoCollection[id];
            console.log(todoItem);
            if(!todoItem.isCompleted) {
              filteredTodoCollection[id] = todoItem;
              filteredTodoIds.push(id);
            }
          });
        }

        else if(category === 'completed') {
          todoIds.forEach((id) => {
            const todoItem = todoCollection[id];
            if(todoItem.isCompleted) {
              filteredTodoCollection[id] = todoItem;
              filteredTodoIds.push(id);
            }
          });
        } else {
          filteredTodoCollection = todoCollection;
        }

        renderTodoList(todoListEl, filteredTodoIds, filteredTodoCollection);
      }

      function deleteAll() {
        todoCollection = {};
        todoIds = [];

        persistData('todoCollection', {});
        persistData('todoIds', []);

        renderTodoList(todoListEl, [], {});
      }

      function deleteTodoItem(id) {
        const todoItemIndex = todoIds.indexOf(Number(id));
        delete todoCollection[id];
        todoIds.splice(todoItemIndex, 1);

        persistData('todoCollection', todoCollection);
        persistData('todoIds', todoIds);

        renderTodoList(todoListEl, todoIds, todoCollection);
      }

      function onAddTodo() {
        const task = addTodoInput.value;
        addTodo(task);
      }

      // Using EventDelegation: to keep our code simple and performant
      function onClickTodoItem(e) {
        
        const target = e.target;
        
        if(target.tagName === 'INPUT') {
          e.stopPropagation();
          const id = target.id;
          toggleTodoItem(id);
        }

        if(target.tagName === 'BUTTON' && target.classList.contains('js-delete-btn')) {
          e.stopPropagation();
          const id = target.getAttribute('data-id');
          deleteTodoItem(id);  
        }
      }

      function onFilterTodoItems(e) {
        e.stopPropagation();
        const category = e.target.value;
        filterTodoitems(category);
      }

      function onDeleteAll() {
        deleteAll();
      }

      init();
      
      // AttachEvents
      addTodoBtn.addEventListener('click', onAddTodo, false);
      todoListEl.addEventListener('click', onClickTodoItem, false);
      filterTodoRadioBtns.forEach((item) => {
        item.addEventListener('input', onFilterTodoItems, false);
      });
      deleteAllBtn.addEventListener('click', onDeleteAll, true);
  })();

  </code>
</pre>

Add **main.js** file to **index.html** file. Add below line before body closing tag (</body>) 

<pre>
  <code class="language-html">
    &lt;script src=&quot;js/main.js&quot;&gt;&lt;/script&gt;
  </code>
</pre>

Now remove the placeholder todo-list items from index.html. <br>
Remove the below code from index.html.

<pre>
  <code class="language-html">
    &lt;li class=&quot;flex align-center todo-list-item&quot;&gt;
      &lt;input class=&quot;mt0 mb0 mr1&quot; type=&quot;checkbox&quot; value=&quot;todo-id-1&quot; id=&quot;todo-id-1&quot; /&gt;
      &lt;label for=&quot;todo-id-1&quot;&gt;HTML&lt;/label&gt;
    &lt;/li&gt;
    &lt;li class=&quot;flex align-center todo-list-item&quot;&gt;
      &lt;input class=&quot;mt0 mb0 mr1&quot; type=&quot;checkbox&quot; value=&quot;todo-id-2&quot; id=&quot;todo-id-2&quot; /&gt;
      &lt;label for=&quot;todo-id-2&quot;&gt;CSS&lt;/label&gt;
    &lt;/li&gt;
  </code>
</pre>

Refresh the page you will see the below **todo-app** with empty todo-list

<img class="border" src="{{'/assets/images/posts/todo-app/todo-app-final.png' | prepend: site.baseurl}}" alt="Todo-app app">

Now, go ahead add, remove todo-items. After a refresh also data will be available, because we stored our data on local storage, so it's persisting...

That's all we are done. Now will deploy our app.

<br>
### 4. Deploy our code to live, using Github Pages.

First, we have to do [git](https://git-scm.com/) init. Go to the terminal, navigate to the todo-app directory, and enter the below command.

<pre>
  <code class="language-shell">
    git init
  </code>
</pre>

After that need to add all files to git. For that run the below command in terminal
<pre>
  <code class="language-shell">
    git add .
  </code>
</pre>

Then do git commit. Run the below command in the terminal.
<pre>
  <code class="language-shell">
    git commit -m "Create todo-app"
  </code>
</pre>

Now, go to your Github account [https://github.com/]

In the right-hand side corner, there will be a **+** icon click on that icon and select "New repository". It looks like below screenshot

![Create new repository]({{"/assets/images/posts/todo-app/create-new-repository.png" | prepend: site.baseurl}})

Give a Repository name to "todo-app" and click create repository button.

<!-- From that page copy the code from this section <br>
**…or push an existing repository from the command line** <br>
and past it to terminal <br> -->

To add remote origin, run the below command in terminal <br>
Note: update your Github &lt;username&gt;
<pre>
  <code class="language-shell">
    git remote add origin git@github.com:&lt;username&gt;/todo-app.git
  </code>
</pre>

To push your code to the respective remote repository, run the below command in terminal <br>
<pre>
  <code class="language-shell">
    git push -u origin master
  </code>
</pre>

Refresh the Github repository. Now, your code will be there...

#### **Now we have to deploy via Github-pages**

In that Github repository, click **settings** -> (scroll) go to **GitHub Pages** section. Click the select box under the source section, select **master** and click save.

You will get a notification like "GitHub Pages source saved."

After that, Under the GitHub Pages section, you can find your published app URL. Like below...

"Your site is ready to be published at http://www.surender.net/todo-app"

























