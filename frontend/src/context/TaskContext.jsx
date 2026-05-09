import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studysync_tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        title: "Complete React Frontend",
        subject: "Web Programming",
        deadline: "2026-05-12",
        status: "Pending",
      },
      {
        id: 2,
        title: "Data Structures Assignment",
        subject: "Data Structures",
        deadline: "2026-05-18",
        status: "Pending",
      },
      {
        id: 3,
        title: "Project Proposal",
        subject: "Web Programming",
        deadline: "2026-05-01",
        status: "Completed",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("studysync_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, subject, deadline) => {
    const newTask = {
      id: Date.now(),
      title: title,
      subject: subject,
      deadline: deadline,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, title, subject, deadline) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
          subject: subject,
          deadline: deadline,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const markCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "Completed",
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const markPending = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "Pending",
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => {
    return task.status === "Completed";
  }).length;

  const pendingTasks = tasks.filter((task) => {
    return task.status === "Pending";
  }).length;

  const dueSoonTasks = tasks.filter((task) => {
    if (task.status === "Completed") {
      return false;
    }

    const today = new Date();
    const deadlineDate = new Date(task.deadline);

    const difference = deadlineDate - today;
    const daysLeft = difference / (1000 * 60 * 60 * 24);

    return daysLeft >= 0 && daysLeft <= 3;
  }).length;

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        markCompleted,
        markPending,
        deleteTask,
        totalTasks,
        completedTasks,
        pendingTasks,
        dueSoonTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}