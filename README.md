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
1. A Submit button that works alongside the tutorial's functionality of pressing "Enter" to submit an item (added a second method to capture a wider range of how a user might choose to interact with the app).
2. A strike-through line appears over a submitted task when the user hovers over the task's text to signify that clicking on the text will mark a task as completed and aid in functionality discovery.
3. An updated "Mark Task as Completed" function that updates the view instantly. In the tutorial's version, if a user crossed out a task in the "Pending" tab, they would need to navigate to another tab and return for the completed task to be removed from the list.
4. Added cues to whether the Submit button can be used (high opacity when task item textbox is empty), with matching checkmark icon behavior.
5. Fixed code support for handling and editing tasks with special characters by using the `encodeURI()` and `decodeURI()` functions.
