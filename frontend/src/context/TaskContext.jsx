import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { currentUser } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      if (!currentUser) {
        setTasks([]);
        return;
      }

      setTaskLoading(true);

      const response = await API.get("/tasks");

      setTasks(response.data.tasks);

      setTaskLoading(false);
    } catch (error) {
      setTaskLoading(false);
      console.log(error.response?.data?.message || "Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [currentUser]);

  const addTask = async (title, subject, deadline) => {
    try {
      const response = await API.post("/tasks", {
        title,
        subject,
        deadline,
      });

      setTasks([response.data.task, ...tasks]);

      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Task creation failed",
      };
    }
  };

  const updateTask = async (id, title, subject, deadline) => {
    try {
      const response = await API.put(`/tasks/${id}`, {
        title,
        subject,
        deadline,
      });

      const updatedTasks = tasks.map((task) => {
        if (task._id === id) {
          return response.data.task;
        }

        return task;
      });

      setTasks(updatedTasks);

      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Task update failed",
      };
    }
  };

  const markCompleted = async (id) => {
    try {
      const response = await API.put(`/tasks/${id}`, {
        status: "Completed",
      });

      const updatedTasks = tasks.map((task) => {
        if (task._id === id) {
          return response.data.task;
        }

        return task;
      });

      setTasks(updatedTasks);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to complete task");
    }
  };

  const markPending = async (id) => {
    try {
      const response = await API.put(`/tasks/${id}`, {
        status: "Pending",
      });

      const updatedTasks = tasks.map((task) => {
        if (task._id === id) {
          return response.data.task;
        }

        return task;
      });

      setTasks(updatedTasks);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

      const remainingTasks = tasks.filter((task) => task._id !== id);

      setTasks(remainingTasks);
    } catch (error) {
      alert(error.response?.data?.message || "Task delete failed");
    }
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

    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);

    const difference = deadlineDate - today;
    const daysLeft = difference / (1000 * 60 * 60 * 24);

    return daysLeft >= 0 && daysLeft <= 3;
  }).length;

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskLoading,
        fetchTasks,
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