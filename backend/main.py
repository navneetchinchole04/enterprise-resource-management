from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

employees = []
departments = []
tasks = []

@app.get("/")
def read_root():
    return {"message": "ERM Backend Running"}

@app.get("/employees")
def get_employees():
    return employees

@app.post("/employees")
def add_employee(employee: dict):
    employees.append(employee)
    return employee

@app.get("/departments")
def get_departments():
    return departments

@app.post("/departments")
def add_department(department: dict):
    departments.append(department)
    return department

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def add_task(task: dict):
    tasks.append(task)
    return task

users = []

@app.post("/signup")
def signup(user: dict):
    users.append(user)
    return {"message": "User registered successfully"}

@app.post("/login")
def login(user: dict):
    for u in users:
        if u["username"] == user["username"] and u["password"] == user["password"]:
            return {"message": "Login successful"}
    return {"message": "Invalid credentials"}
