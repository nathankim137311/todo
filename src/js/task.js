// object constructor
class Task {
    constructor() {
        this.title = titleInput.value;
        this.project = projectInput.value; 
        this.priority = priorityInput.value; 
    }
    priority() {
        return this.priority; 
    }
}
export default Task