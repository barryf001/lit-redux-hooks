import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../store/store';
import { addTodo } from '../services/todos';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.value
  }
}

class TodoList extends connect(store)(LitElement){

  static get properties() {
    return {
      todos: { type: Array },
      todo: { type: String }
    }
  }

  constructor(){
    super()
    this.count = 0;
    this.name = "Todo";
    this.todo = "";

    //this.magnifier = 10;
  }

  update(newProps){
    super.update();
    console.log('name:' + this.name + ':update:'+ JSON.stringify(newProps))

    const state = store.getState();
    const newState = mapStateToProps(state, this);
    Object.entries(newState).forEach(([key, value]) => {
       this[key] = value
    })
  }

  stateChanged(state){
    console.log('name:' + this.name +':stateChanged:'+ JSON.stringify(state))
    const newState = mapStateToProps(state, this);
    Object.entries(newState).forEach(([key, value]) => {
      this[key] = value
    })
    //this.count = state.counter.value;
  }

  handleTodo(ev){
    const value = ev.target.value;
    this.todo=value;
  }

  renderAddTodo(){
    return html`
      <div>
        <input type="text" .value=${this.todo} @change=${this.handleTodo}/>
        <button type="button" @click=${() => { store.dispatch(addTodo(this.todo))}}>+</button>
      </div>
    `;
  }

  render(){

    return html`
      <h3>TODOS</h3>
      ${this.renderAddTodo()}
      ${this.todos.map( (t) => 
        html`<div>${t}</div>`
        )}
  `;
  }
}

window.customElements.define('my-todo-list', TodoList);