abstract class TaskManager {
    protected tasks: { type: string; task: string }[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): { type: string; task: string }[];
}

class Project extends TaskManager {

    addTask(task: string): void {
        const exists = this.tasks.some(t => t.task === task);
        if (!exists) {
            this.tasks.push({ type: "project", task });
        }
    }

    listTasks(): { type: string; task: string }[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {

    addTask(task: string): void {
        const exists = this.tasks.some(t => t.task === task);
        if (!exists) {
            this.tasks.push({ type: "daily", task });
        }
    }

    listTasks(): { type: string; task: string }[] {
        return this.tasks;
    }
}
