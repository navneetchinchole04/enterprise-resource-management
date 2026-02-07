/* ===== LOGIN ===== */
function login() {
  window.location.href = "dashboard.html";
}

/* ===== TASK PAGE (BACKEND CONNECTED) ===== */
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

if (taskForm && taskTable) {

  // Load tasks from backend
  fetch("http://127.0.0.1:8000/tasks")
    .then(res => res.json())
    .then(data => {
      data.forEach(task => {
        addTaskRow(task.taskName, task.assignedTo);
      });
    });

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const assignedTo = document.getElementById("assignedTo").value;

    fetch("http://127.0.0.1:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ taskName, assignedTo })
    })
    .then(res => res.json())
    .then(task => {
      addTaskRow(task.taskName, task.assignedTo);
      taskForm.reset();
    });
  });
}

function addTaskRow(taskName, assignedTo) {
  const table = document.getElementById("taskTable");
  if (!table) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${taskName}</td>
    <td>${assignedTo}</td>
    <td><button onclick="this.closest('tr').remove()">Delete</button></td>
  `;
  table.appendChild(row);
}

/* ===== EMPLOYEE PAGE (BACKEND CONNECTED) ===== */
const empForm = document.getElementById("employeeForm");
const empTable = document.getElementById("employeeTable");

if (empForm && empTable) {

  // Load employees from backend
  fetch("http://127.0.0.1:8000/employees")
    .then(res => res.json())
    .then(data => {
      data.forEach(emp => {
        addEmployeeRow(emp.name, emp.role);
      });
    });

  empForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;

    fetch("http://127.0.0.1:8000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, role })
    })
    .then(res => res.json())
    .then(emp => {
      addEmployeeRow(emp.name, emp.role);
      empForm.reset();
    });
  });
}

function addEmployeeRow(name, role) {
  const table = document.getElementById("employeeTable");
  if (!table) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${role}</td>
    <td><button onclick="this.closest('tr').remove()">Delete</button></td>
  `;
  table.appendChild(row);
}

/* ===== DEPARTMENT PAGE (BACKEND CONNECTED) ===== */
const deptForm = document.getElementById("departmentForm");
const deptTable = document.getElementById("departmentTable");

if (deptForm && deptTable) {

  // Load departments from backend
  fetch("http://127.0.0.1:8000/departments")
    .then(res => res.json())
    .then(data => {
      data.forEach(dept => {
        addDepartmentRow(dept.name);
      });
    });

  deptForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("deptName").value;

    fetch("http://127.0.0.1:8000/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(dept => {
      addDepartmentRow(dept.name);
      deptForm.reset();
    });
  });
}

function addDepartmentRow(name) {
  const table = document.getElementById("departmentTable");
  if (!table) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td><button onclick="this.closest('tr').remove()">Delete</button></td>
  `;
  table.appendChild(row);
}

/* ===== SIGNUP PAGE ===== */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("suUsername").value;
    const password = document.getElementById("suPassword").value;

    fetch("http://127.0.0.1:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(() => {
      alert("Signup successful. Please login.");
      window.location.href = "index.html";
    });
  });
}
