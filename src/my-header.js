import { LitElement, html, css } from 'lit';
import '@lion/button/define';

export class MyHeader extends LitElement {
    constructor() {
        super();
        this.showProfileDropdown = false;
        this.userProfile = {};
    }

    firstUpdated() {
        this._fetchProfile();
    }

    async _fetchProfile() {
        setTimeout(() => {
            this.userProfile = { username: 'Alina', name: "Midoschi" };
        }, 1000);
    }

    _handleProfileClick() {
        console.log('msamfaq')
        this.showProfileDropdown = !this.showProfileDropdown;
    }q

    _handleLogoutClick() {
        location.reload();
    }

    render() {
        return html`
      <header>
        <div class="title">My App</div>
        <div class="button-group">
          <lion-button @click=${this._handleProfileClick}>Profile</lion-button>
          <lion-button @click=${this._handleLogoutClick}>Logout</lion-button>
        </div>
        ${this.showProfileDropdown
            ? html`
              <div class="dropdown-menu">
                <p>Username: ${this.userProfile.username || 'Loading...'}</p>
                <p>Name: ${this.userProfile.name || 'Loading...'}</p>
              </div>
            `
            : ''}
      </header>
    `;
    }
}

MyHeader.styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #ff5722;
      color: white;
      position: relative;
    }
    .button-group {
      display: flex;
      gap: 0.5rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .dropdown-menu {
      display: block;
      top: 100px;
      position: absolute;
      background: red;
      color: black;
      border: 1px solid #ddd;
      padding: 1rem;
      top: 60px;
      right: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
`;

customElements.define('my-header', MyHeader);
