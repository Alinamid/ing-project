import { LitElement, html, css } from 'lit';

class WelcomePage extends LitElement {
    constructor() {
        super();
        this.username = '';
    }

    static get properties() {
        return {
            username: { type: String }
        };
    }

    render() {
        return html`
            <div class="welcome-container">
                <h1>Welcome, ${this.username}!</h1>
                <p>You have successfully logged in.</p>
            </div>
        `;
    }

    static get styles() {
        return css`
            .welcome-container {
                max-width: 400px;
                margin: auto;
                padding: 1rem;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
        `;
    }
}

customElements.define('welcome-page', WelcomePage);
