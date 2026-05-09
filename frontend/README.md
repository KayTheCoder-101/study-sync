# StudySync – Smart Task & Assignment Manager

## Project Introduction

StudySync is a web-based Smart Task and Assignment Manager developed using the MERN Stack. The purpose of this project is to help students organize their academic workload in a simple, efficient, and user-friendly way.

In today’s academic environment, students are often required to manage multiple assignments, deadlines, quizzes, projects, and study tasks at the same time. Without a proper management system, it becomes difficult to remember deadlines, track progress, and complete work on time. StudySync solves this problem by providing a centralized platform where students can create tasks, manage deadlines, monitor progress, and keep a history of their academic activities.

The system is designed especially for students who want to improve productivity, time management, and academic organization.

---

## Project Title

**StudySync – Smart Task & Assignment Manager**

---

## Group Members

- **Hifza Tahir** — Roll No: **23F-0804**
- **Ayesha Hafeez** — Roll No: **23F-0840**

---

## Problem Statement

Students often face difficulty in managing their academic responsibilities because they have to handle multiple subjects, assignments, projects, and submission deadlines. Many students rely on memory, notebooks, or scattered reminders, which can result in missed deadlines, incomplete tasks, and poor time management.

There is a need for a simple digital system that allows students to store, organize, update, and track their academic tasks in one place. StudySync addresses this issue by offering a task management platform focused on academic planning and productivity.

---

## Objectives of the Project

The main objectives of StudySync are:

- To provide a centralized platform for managing academic tasks and assignments.
- To allow students to add, edit, delete, and update task status.
- To help students track pending and completed assignments.
- To provide deadline-based alerts such as Overdue, Due Today, Due Tomorrow, Due Soon, and Upcoming.
- To improve student productivity through dashboard-based progress tracking.
- To secure user data using authentication and protected APIs.
- To store user and task data permanently using MongoDB Atlas.
- To create a clean, responsive, and user-friendly interface.

---

## Scope of the Project

StudySync focuses on academic task and assignment management. The system allows students to register, login, manage tasks, view dashboard statistics, check task history, and track deadlines.

The project does not include advanced Learning Management System features such as online classes, file submission, teacher accounts, grading, or video lectures. Instead, it focuses on providing a lightweight and practical productivity tool for students.

---

## Technology Stack

StudySync is developed using the MERN Stack.

### Frontend Technologies

- **React.js**  
  Used to build the user interface and reusable components.

- **Vite**  
  Used for fast React project setup and development.

- **React Router DOM**  
  Used for navigation between pages such as Dashboard, Tasks, History, Profile, Settings, Login, and Register.

- **Axios**  
  Used to send HTTP requests from the frontend to the backend APIs.

- **Bootstrap**  
  Used for layout support and responsive design.

- **Bootstrap Icons**  
  Used to add clean and meaningful icons throughout the interface.

- **CSS**  
  Used for custom styling, layout design, cards, buttons, forms, and responsiveness.

### Backend Technologies

- **Node.js**  
  Used as the runtime environment for the backend.

- **Express.js**  
  Used to build REST APIs for authentication and task management.

- **MongoDB Atlas**  
  Used as the cloud database for storing users and tasks.

- **Mongoose**  
  Used to define database schemas and communicate with MongoDB.

- **JWT**  
  Used for user authentication and protected routes.

- **bcryptjs**  
  Used to hash user passwords before storing them in the database.

- **CORS**  
  Used to allow communication between frontend and backend.

- **dotenv**  
  Used to manage environment variables such as database connection string and JWT secret.

- **nodemon**  
  Used during development to automatically restart the backend server.

---

## System Users

The main user of this system is:

### Student

A student can:

- Register an account
- Login securely
- Add academic tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Mark completed tasks as pending again
- Search and filter tasks
- View dashboard progress
- View task history
- Manage basic profile and settings

---

## Main Features

### 1. User Registration

New users can create an account by entering their name, email, and password. The password is hashed before being stored in MongoDB for security.

### 2. User Login

Registered users can login using their email and password. After successful login, a JWT token is generated and stored on the frontend.

### 3. Protected Routes

Dashboard, Tasks, History, Profile, and Settings pages are protected. Users cannot access these pages unless they are logged in.

### 4. Add Task

Students can add new academic tasks by entering:

- Task title
- Subject name
- Deadline

### 5. Edit Task

Users can update task title, subject, and deadline if any changes are needed.

### 6. Delete Task

Users can remove tasks that are no longer required.

### 7. Complete / Pending Status

Users can mark tasks as completed and can also change completed tasks back to pending.

### 8. Search Tasks

Users can search tasks by title or subject, making it easier to find specific assignments.

### 9. Filter Tasks

Tasks can be filtered by:

- All Tasks
- Pending Tasks
- Completed Tasks

### 10. Deadline Alerts

StudySync provides smart deadline labels:

- Overdue
- Due Today
- Due Tomorrow
- Due Soon
- Upcoming
- Completed

These labels help students quickly understand task urgency.

### 11. Dashboard Overview

The dashboard displays:

- Total tasks
- Pending tasks
- Completed tasks
- Due soon tasks
- Progress percentage
- Upcoming deadlines

### 12. Task History

The history page shows recent tasks, completed tasks, and pending tasks. This helps students review their academic activity.

### 13. Profile Page

The profile page displays user information and task statistics.

### 14. Settings Page

The settings page provides basic interface options and project information.

### 15. 404 Not Found Page

If a user enters an invalid URL, the system displays a clean 404 page.

---

## Database Design

StudySync uses MongoDB Atlas as the database. The database name is:

```txt
studysync~