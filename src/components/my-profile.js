import { html } from 'lit';
import { litHaunted } from './base-components/lit-haunted-element.js';

const Profile = litHaunted(({userData}) => {

  return html`
    <section>
      <h2>Profile</h2>
      <article>
        <figure>          
          <figcaption>${userData.name}</figcaption>
        </figure>
        <p>${userData.bio}</p>
      </article>
    </section>
  `;
});

window.customElements.define('my-profile', Profile);