

const tasks = ['tasks--todo', 'tasks--doing', 'tasks--done'];

tasks.forEach((taskState) => {
  const tasks = document.getElementById(taskState);
  
  new Sortable(tasks, {
    group: 'shared',
    animation: 150,
    fallbackOnBody: true,
    chosenClass: 'task--chosen',
    dragClass: 'task--drag',
  });
})


