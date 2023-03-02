class taskItem extends HTMLElement {
    constructor() {
        super();
        this.task = this.getAttribute('task');

    }

    deleteSelf() {
        this.remove();
    }

    static get observedAttributes() {
        return ['task'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.task = newValue;
        this.render();
    }

    render() {
    
        this.innerHTML = `
            <link rel="stylesheet" href="/src/components/taskItem/styles.css">
            <li class="task-item">
                <input type="checkbox" name="task" id="task">
                <label for="task">${this.task}</label>
                <button type="button" class="btn btn-outline-secondary">delete</button>
            </li>
        `

        const button = this.querySelector('button');
        button.addEventListener('click', () => {this.deleteSelf()})
    }
}


customElements.define('task-item', taskItem);
export default taskItem;