import { LitElement } from 'lit-element';
import { State } from 'haunted';

export default class LitHauntedElement extends LitElement {
  constructor() {
    super();

    this.haunted = new State(() => this.requestUpdate());
  }

  update(changedProperties) {
    console.log(JSON.stringify(changedProperties))

    this.haunted.run(() => super.update(changedProperties));
    this.haunted.runEffects();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.haunted.teardown();
  }
}

export const litHaunted = (renderer) => {
  return class extends LitHauntedElement {
    render() {
      return renderer.call(this, this);
    }
  }
};