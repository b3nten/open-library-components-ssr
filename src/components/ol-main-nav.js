import { LitElement, html, css } from 'lit';

export class OlMainNav extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: var(--spacing-section);
    }

    nav {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-section);
      font-size: var(--font-body-sm-size);
    }

    ul {
      list-style: none;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      flex: 1;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
    }

    a {
      color: var(--color-secondary);
      text-decoration: none;
      font-weight: var(--font-weight-semibold);
      background-color: var(--color-surface-tertiary);
      padding: var(--spacing-inline) var(--spacing-element);
      border-radius: var(--radius-button);
    }

    a:hover {
      text-decoration: none;
      background-color: var(--color-surface-tertiary-hovered);
    }
  `;

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup.html">Sign Up</a></li>
          <li><a href="/trending.html">Trending Books</a></li>
          <li><a href="/components.html">Components</a></li>
          <li><a href="/forms.html">Forms</a></li>
        </ul>
        <ol-theme-toggle></ol-theme-toggle>
      </nav>
    `;
  }
}

customElements.define('ol-main-nav', OlMainNav);

