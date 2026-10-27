# Project Report: Smart Student Planner

## 1. Title
Smart Student Planner — A Web-Based Study Task Management Application

## 2. Abstract
The Smart Student Planner is a web application designed to help students organize academic and personal tasks. Users can add tasks, assign subjects and priorities, set due dates, mark work as complete, and filter tasks. The application stores information in the browser using LocalStorage, so tasks remain available in the same browser after it is closed and reopened.

## 3. Problem Statement
Students may find it difficult to keep track of study activities, assignment deadlines, and exam preparation. A simple planner can help keep these activities organized in one place.

## 4. Objectives
- Provide a simple interface for managing tasks.
- Help students track assignments and exam preparation.
- Show completed and remaining task counts.
- Save task data locally in the browser.
- Build a beginner-friendly project using web technologies.

## 5. Technologies Used
- HTML5: page structure and form controls.
- CSS3: layout, colors, and responsive design.
- JavaScript: task creation, filtering, completion, deletion, and statistics.
- LocalStorage: saving tasks in the current browser.

## 6. Modules
1. Add Task: records task name, subject, due date, priority, and type.
2. Task List: displays saved tasks.
3. Completion: marks a task complete or incomplete.
4. Filter: shows all tasks, remaining tasks, or completed tasks.
5. Statistics: displays total, completed, and remaining task counts.
6. Delete: removes a task from the list.

## 7. How It Works
The user enters task details in the form and selects Add Task. JavaScript adds the task to the task list and saves the list to LocalStorage. The dashboard counts update whenever tasks are added, completed, or deleted. The filter can be used to display only a selected task status.

## 8. Advantages
- Easy to use.
- Runs in a modern web browser.
- Does not require installation or an internet connection after the files are available.
- Responsive on desktop and mobile screens.
- Useful for learning basic front-end development.

## 9. Limitations
- Tasks are stored only in the current browser on the current device.
- There is no login or multi-user support.
- Notifications and cloud synchronization are not included.

## 10. Future Enhancements
- User login and account management.
- Backend using Python Flask.
- Database using SQLite or PostgreSQL.
- Email or browser reminders.
- Cloud synchronization across devices.
- Weekly calendar and study analytics.

## 11. Conclusion
The Smart Student Planner demonstrates how HTML, CSS, JavaScript, and LocalStorage can be combined to create a useful student productivity application. It is suitable as a beginner-level web development project and can be expanded into a full SaaS application.

## 12. References
- MDN Web Docs: https://developer.mozilla.org/
- GitHub Docs: https://docs.github.com/
