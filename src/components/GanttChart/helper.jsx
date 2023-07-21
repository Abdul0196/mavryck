export function initTasks() {
    const currentDate = new Date();
    const tasks = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Vault maintainance",
            id: "1",
            progress: 25,
            type: "project",
            hideChildren: false
        },        
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: "Baseline",
            id: "11",
            progress: 25,            
            type: "task",
            project: "1",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
            name: "Comparator",
            id: "12",
            progress: 45,
            type: "task",
            project: "1"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Previous Project",
            id: "13",
            progress: 10,
            type: "task",
            project: "1",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Pipe",
            id: "2",
            progress: 50,
            type: "project",
            hideChildren: false
        },        
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Baseline",
            id: "21",
            progress: 25,            
            type: "task",
            project: "2",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10, 12, 28),
            name: "Comparator",
            id: "22",
            progress: 45,
            type: "task",
            project: "2"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
            name: "Previous Project",
            id: "23",
            progress: 60,
            type: "task",
            project: "2",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
            name: "Server",
            id: "3",
            progress: 60,
            type: "project",
            hideChildren: false
        },        
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Baseline",
            id: "31",
            progress: 40,            
            type: "task",
            project: "3",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 12, 28),
            name: "Comparator",
            id: "32",
            progress: 75,
            type: "task",
            project: "3"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15, 0, 0),
            name: "Previous Project",
            id: "33",
            progress: 70,
            type: "task",
            project: "3",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
            name: "Server",
            id: "4",
            progress: 60,
            type: "project",
            hideChildren: false
        },        
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7, 0, 0),
            name: "Baseline",
            id: "41",
            progress: 40,            
            type: "task",
            project: "4",
            isDisabled: true,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 12, 28),
            name: "Comparator",
            id: "42",
            progress: 75,
            type: "task",
            project: "4"
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14, 0, 0),
            name: "Previous Project",
            id: "43",
            progress: 70,
            type: "task",
            project: "4",
            isDisabled: true,
        }
    ];
    return tasks;
  }
  export function getStartEndDateForProject(tasks, projectId) {
    const projectTasks = tasks.filter((t) => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;
    for (let i = 0; i < projectTasks.length; i++) {
      const task = projectTasks[i];
      if (start.getTime() > task.start.getTime()) {
        start = task.start;
      }
      if (end.getTime() < task.end.getTime()) {
        end = task.end;
      }
    }
    return [start, end];
  }
  