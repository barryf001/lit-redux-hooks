import { html } from 'lit';
import { litHaunted } from './src/components/base-components/lit-haunted-element.js';

// import "./src/components/my-profile.js";
// import "./src/components/my-counter.js";
import "./src/components/my-store-counter.js";
import "./src/components/my-todo-list.js";



const MyElement = litHaunted(() => {

    return html`
    <div>
      <my-store-counter></my-store-counter>
      <my-store-counter></my-store-counter>
      <my-todo-list></my-todo-list>
    </div>        
    `;  
  }
);

customElements.define('my-element', MyElement);