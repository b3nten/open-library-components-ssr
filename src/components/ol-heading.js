import { LitElement, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';

export class OlHeading extends LitElement {
  static properties = {
    element: { type: String },
    size: { type: String },
    icon: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }

    .ol-heading {
      font-family: var(--heading-font-family);
      font-weight: var(--heading-font-weight);
      line-height: var(--heading-line-height);
      color: var(--heading-color);
      margin: 0;
      margin-bottom: var(--spacing-heading-bottom);
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }

    /* Display sizes - largest headings */
    .display-1, .display-2, .display-3 {
      font-family: var(--display-font-family);
      font-weight: var(--display-font-weight);
      line-height: var(--display-line-height);
      color: var(--display-color);
    }

    .display-1 {
      font-size: var(--heading-display-1-size);
    }

    .display-2 {
      font-size: var(--heading-display-2-size);
    }

    /* Title sizes - standard headings */
    .title-1 {
      font-size: var(--heading-title-1-size);
    }

    .title-2 {
      font-size: var(--heading-title-2-size);
    }

    .title-3 {
      font-size: var(--heading-title-3-size);
    }

    .title-4 {
      font-size: var(--heading-title-4-size);
    }

    .title-5 {
      font-size: var(--heading-title-5-size);
    }

    .ol-heading-icon {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    this.element = 'h1';
    this.size = 'title-1';
    this.icon = '';
  }

  render() {
    const tag = unsafeStatic(this.element);

    return html`
      <${tag} class="ol-heading ${this.size}">
        ${this.icon ? html`<span class="ol-heading-icon">${this.icon}</span>` : ''}
        <slot></slot>
      </${tag}>
    `;
  }
}

customElements.define('ol-heading', OlHeading);

