import { LitElement, html } from 'lit-element';
import connect  from '../store/connect';
//import store from '../store/store';
import { increment, decrement, incrementMagnifier } from '../services/counter'

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.counter.value * ownProps.test,
    count: state.counter.value,
    test: ownProps.test || 1
  }
}

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch(increment()),
   decrement: () => dispatch(decrement()),
   magnify: () => dispatch(incrementMagnifier())
});

class StoreCounter extends connect(mapStateToProps, mapDispatchToProps)(LitElement){

//  static get properties() {
//    return {
      //Store variable
      //count: { type: Number },
      //Component variable
      //test: { type: Number }
//    }
//  }

  render(){

    return html`
    <span>Test:${this.test}</span>
    <span>Counter:${this.count}</span>    
    <button type="button" @click=${this.increment}>Increment</button>
    <button type="button" @click=${this.decrement}>Decrement</button>
    <button type="button" @click=${() => { console.log('test'); this.test = this.test + 1 }}>Test</button>
    <p><strong>Product:</strong> ${this.product}</p>
  `;
  }
}

window.customElements.define('my-store-counter', StoreCounter);