import { LitElement, html } from 'lit-element';
import { litHaunted } from './base-components/lit-haunted-element.js';
import { useState } from 'haunted'

function CounterChild({count}){
  return html`
    <h1>${count}dd</h1>
  `;
}

CounterChild.observedAttributes = ['count'];

window.customElements.define('my-counter-child', litHaunted(CounterChild));


const mapState = () => {
  console.log('mapState')
  return {
    count: { type: Number }
  }
}

const dynamicPropsConnector = (mapStateFunc) => Comp => 
  class extends Comp  {
    static get properties() {
      return mapStateFunc();
  }
}


class CounterChild2 extends dynamicPropsConnector(mapState)(LitElement){
  
  // static get properties() {
  //   return {
  //     count: { type: Number }
  //   }
  // }

  render(){
    return html`<div>${this.count}</div>`
  }
}

window.customElements.define('my-counter-child-2', CounterChild2);


const Counter = litHaunted(() => {

  const [count, setCount] = useState(0);

  return html`
      <p>A paragraph</p>
      <button type="button" @click=${() => { setCount(count + 1)}}>Increment</button>
      <p><strong>Count:</strong> ${count}</p>
    <div>
      <my-counter-child .count=${count}></my-counter-child>
      <my-counter-child-2 .count=${count}></my-counter-child-2>
    </div>    
  `;
});

window.customElements.define('my-counter', Counter);