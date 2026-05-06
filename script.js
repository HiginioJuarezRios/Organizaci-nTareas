const STATUSES = ["IDEAS", "EN PROCESO", "COMPLETADO"];

const state = {
  tasks: [],
  nextId: 1,
};

const board = document.getElementById("board");
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

function addTask(title) {
  state.tasks.push({ id: state.nextId++, title, status: "IDEAS" });
  render();
}

function moveTask(id, delta) {
  const task = state.tasks.find((t) => t.id === id);
  if (!task) return;
  const currentIndex = STATUSES.indexOf(task.status);
  const targetIndex = currentIndex + delta;
  if (targetIndex < 0 || targetIndex >= STATUSES.length) return;
  task.status = STATUSES[targetIndex];
  render();
}

function createCard(task) {
  const currentIndex = STATUSES.indexOf(task.status);
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.taskId = task.id;

  const title = document.createElement("p");
  title.textContent = task.title;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const leftBtn = document.createElement("button");
  leftBtn.textContent = "←";
  leftBtn.disabled = currentIndex === 0;
  leftBtn.addEventListener("click", () => moveTask(task.id, -1));

  const rightBtn = document.createElement("button");
  rightBtn.textContent = "→";
  rightBtn.disabled = currentIndex === STATUSES.length - 1;
  rightBtn.addEventListener("click", () => moveTask(task.id, +1));

  actions.append(leftBtn, rightBtn);
  card.append(title, actions);
  return card;
}

function render() {
  board.innerHTML = "";
  STATUSES.forEach((status) => {
    const column = document.createElement("section");
    column.className = "column";
    column.dataset.status = status;

    const heading = document.createElement("h2");
    heading.textContent = status;

    const container = document.createElement("div");
    container.className = "tasks";

    state.tasks
      .filter((task) => task.status === status)
      .forEach((task) => container.appendChild(createCard(task)));

    column.append(heading, container);
    board.appendChild(column);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  addTask(title);
  input.value = "";
  input.focus();
});

render();
