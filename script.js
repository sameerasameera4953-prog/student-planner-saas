const STORAGE_KEY = "smartStudentPlannerTasks";
const $ = (id) => document.getElementById(id);
let tasks = loadTasks();

function loadTasks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function render() {
  const filter = $("filterTasks").value;
  const shown = tasks.filter(task => filter === "all" || (filter === "active" && !task.done) || (filter === "done" && task.done));
  $("totalCount").textContent = tasks.length;
  $("completedCount").textContent = tasks.filter(t => t.done).length;
  $("remainingCount").textContent = tasks.filter(t => !t.done).length;
  $("taskList").innerHTML = shown.map(task => `
    <article class="task ${task.done ? "completed" : ""}">
      <input type="checkbox" aria-label="Mark ${escapeHTML(task.title)} complete" data-toggle="${task.id}" ${task.done ? "checked" : ""}>
      <div class="task-main">
        <div class="task-title">${escapeHTML(task.title)}</div>
        <div class="task-meta">
          ${task.subject ? `<span class="tag">${escapeHTML(task.subject)}</span>` : ""}
          <span class="tag">${escapeHTML(task.type)}</span>
          ${task.dueDate ? `<span>Due: ${escapeHTML(task.dueDate)}</span>` : ""}
          <span class="tag ${task.priority === "High" ? "priority-high" : task.priority === "Low" ? "priority-low" : ""}">${escapeHTML(task.priority)} priority</span>
        </div>
      </div>
      <button class="delete" data-delete="${task.id}" type="button">Delete</button>
    </article>`).join("");
  $("emptyMessage").hidden = shown.length > 0;
}
$("taskForm").addEventListener("submit", event => {
  event.preventDefault();
  const title = $("taskTitle").value.trim();
  if (!title) return;
  tasks.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    title,
    subject: $("taskSubject").value.trim(),
    dueDate: $("taskDate").value,
    priority: $("taskPriority").value,
    type: $("taskType").value,
    done: false
  });
  saveTasks();
  event.target.reset();
  $("taskTitle").focus();
  render();
});
$("taskList").addEventListener("change", event => {
  const id = event.target.dataset.toggle;
  if (!id) return;
  const task = tasks.find(t => t.id === id);
  if (task) task.done = event.target.checked;
  saveTasks();
  render();
});
$("taskList").addEventListener("click", event => {
  const id = event.target.dataset.delete;
  if (!id) return;
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
});
$("filterTasks").addEventListener("change", render);
$("today").textContent = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date());
render();
