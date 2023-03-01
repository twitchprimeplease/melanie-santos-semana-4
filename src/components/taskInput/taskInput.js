class taskInput extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/components/taskInput/styles.css">
            <div>
                <form class="form-task">
                    <input type="text">
                    <label class="lebel-name">
                        <span class="text-name">Task Name</span>
                    </label> 
<!--                     <button>+</button> -->
                </form>
            </div>
            
            <slot></slot>
        `;
    }
}

customElements.define('task-input', taskInput);
export default taskInput;