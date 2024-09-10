import { LitElement, html, css } from 'lit';

export class MyHeader extends LitElement {
    static styles = css`
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background: #ff5722;
            color: white;
            position: relative;
        }
        .title {
            font-size: 1.5rem;
        }
    `;

    render() {
        return html`
            <header>
                <div class="title">My App</div>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);
