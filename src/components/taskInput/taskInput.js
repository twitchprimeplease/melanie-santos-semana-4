class taskInput extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/taskInput/styles.css">
            <div>
                <form class="form-task">
                    <div class="input-group mb-3" id="input-container">
                    <input type="text" class="form-control" id= "new-task-input"placeholder="New task!" aria-label="New task!" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="add-btn">Add</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <slot></slot>
        `;
    }
}

customElements.define('task-input', taskInput);
export default taskInput;