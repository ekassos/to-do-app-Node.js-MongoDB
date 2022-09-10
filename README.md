# To-do App with Node.js and MongoDB

$\textcolor{ForestGreen}{\textbf{\emph{Completed:}}} \text{\emph{ Friday, Sep 9, 2022}}$

## Live Demo
You can access a working version of the project [here](https://todo-app-week2-evangelos.herokuapp.com).

## Code Source 
The code for this project is adapted from fawwaz37's [ToDo List App](https://github.com/fawwaz37/todo-express-mongodb) tutorial, with many additions as noted in the [Improvements section](#improvements) below.

## Features  
- After navigating to the main page, click "Get started" to land on the Login page.
- You can either click "Register" to create a new profile or use the following details to log-in: email: `example@email.com`, password: `password` (please disregard the obvious security flaws here).
- Once logged in, you will be redirected to the main app page. If there are no tasks, you can click "Add Task" to create one.
- Type a task in the "Title" text box and a short/long description in the "Description" text box. Press the "Submit" button to register it. The task persists when the browser tab is refreshed or reopened later (using MongoDB).
- When you have some tasks to work over, you can click on the "Mark as Completed" button to mark them as completed. 
- Made a mistake? Click on the "Edit Task" button on the bottom of each item box. You can now edit the text of the task title and description in the text box. Submit your correction with the "Submit" button.
- Done with the app or never want to track tasks again? Click "Delete your account" in the navigation bar. You can also log out instead for a milder disassotiation you can reverse.

## Improvements  
> *These improvements are referenced throught the project files using the numbers shown below, e.g. Improvement (5).*
1. A "Mark as Complete" instead of a "Delete Task" button.
1. An Edit Task page and corresponding functions that transfer the current values of the task into the view, so editing is easier for the user. This required extensive code editing to allow the forwarding URL to contain the necessary information.
1. An updated Add Task and Edit Task page that includes a larger textarea for the description.
1. An updated color palette for the whole app.
1. An updated placement of the "Add Task" button that leverages custom CSS placement methods form the imported Bootstrap CSS stylesheet.
1. Updated language throughout the app for clarity.

## Reflection
> What are the significant software concepts that this combination of technologies has that plain HTML, CSS, and JS does not? Or that they handle significantly differently?

The main significant software concepts that this combination of technologies has that plain HTML, CSS, and JS does not is database management. Here, storing details was much easier, and this allowed for a much simpler login/logout feature set. Moreover, this feature set was somewhat needed, as we were implementing a remote database and not using localStorage anymore. Of course, moving from one page to the other was handled significantly differently and it was a much more time-consuming process to set up the server-side functions. However, once everything was set, it was very easy to program. 