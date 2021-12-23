import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../store/store';
import { increment, decrement, incrementMagnifier } from '../services/counter'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter.value * state.counter.magnify
  }
}

class StoreCounter extends connect(store)(LitElement){

  static get properties() {
    return {
      count: { type: Number }
      //magnifier: { type: Number }
    }
  }

  constructor(){
    super()
    this.count = 0;
    this.name = "StoreCounter";
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

  render(){

    return html`
    <button type="button" @click=${() => { store.dispatch(increment())}}>Increment</button>
    <button type="button" @click=${() => { store.dispatch(decrement())}}>Decrement</button>
    <button type="button" @click=${() => { store.dispatch(incrementMagnifier())}}>Magnify</button>
    <p><strong>Count:</strong> ${this.count}</p>
  `;
  }

}

window.customElements.define('my-store-counter', StoreCounter);