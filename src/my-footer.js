import { LitElement, html, css } from 'lit';
export class MyFooter extends LitElement {
    render() {
        return html `
    <footer>
      <p>&copy; 2024 My Application. All rights reserved.</p>
    </footer>
  `;
    }
}
MyFooter.styles = css `
    footer {
      padding: 1rem;
      background: #ff5722;
      color: white;
      text-align: center;
    }
  `;
customElements.define('my-footer', MyFooter);
