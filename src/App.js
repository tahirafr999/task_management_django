import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaChartPie, FaUsers, FaPlus } from "react-icons/fa";
import { LineChart, Line, PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import "./Dashboard.css";

// Sample Data for Charts
const taskTrendData = [
  { day: "Mon", completed: 3 },
  { day: "Tue", completed: 7 },
  { day: "Wed", completed: 5 },
  { day: "Thu", completed: 10 },
  { day: "Fri", completed: 6 },
];

const taskDistributionData = [
  { name: "Pending", value: 8 },
  { name: "Completed", value: 24 },
  { name: "In Progress", value: 5 },
];

const COLORS = ["#FFBB28", "#00C49F", "#FF4B2B"];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <motion.div className="sidebar" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <h2>TaskMaster</h2>
        <nav>
          <ul>
            <li><FaTasks /> Tasks</li>
            <li><FaChartPie /> Analytics</li>
            <li><FaUsers /> Teams</li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Dashboard */}
      <div className="dashboard-content">
        {/* Header */}
        <header>
          <h1>Welcome Back, User</h1>
          <motion.button className="add-task-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaPlus /> Add Task
          </motion.button>
        </header>

        {/* Task Overview */}
        <section className="task-overview">
          <motion.div className="task-card" whileHover={{ scale: 1.05 }}>
            <h3>📌 Pending Tasks</h3>
            <p>8 Tasks</p>
          </motion.div>
          <motion.div className="task-card" whileHover={{ scale: 1.05 }}>
            <h3>✅ Completed Tasks</h3>
            <p>24 Tasks</p>
          </motion.div>
          <motion.div className="task-card" whileHover={{ scale: 1.05 }}>
            <h3>🚀 Progress</h3>
            <p>70% Done</p>
          </motion.div>
        </section>

        {/* Charts Section */}
        <section className="charts-container">
          <div className="chart-box">
            <h2>📊 Task Completion Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={taskTrendData}>
                <Line type="monotone" dataKey="completed" stroke="#FF4B2B" strokeWidth={3} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h2>📌 Task Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={taskDistributionData} dataKey="value" nameKey="name" outerRadius={90} label>
                  {taskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Task List */}
        <section className="task-list">
          <h2>Today's Tasks</h2>
          <ul>
            <motion.li whileHover={{ scale: 1.02 }}>✅ Design Landing Page</motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>🚀 Deploy Backend</motion.li>
            <motion.li whileHover={{ scale: 1.02 }}>🔍 Fix Bugs</motion.li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;