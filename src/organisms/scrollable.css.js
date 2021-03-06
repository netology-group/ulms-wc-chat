import { css } from 'lit-element';

export const style = css`
  :host {
    box-sizing: var(--chat-scrollable-box-sizing, content-box);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: var(--chat-scrollable-padding, 0);
  }

  :host .wrapper {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0;
    position: relative;
  }

  :host .wrapper .scrollable {
    flex: 1 1 auto;
    overflow-y: auto;
  }

  :host .row {
    align-items: center;
    display: flex;
    font-size: 0.85em;
    justify-content: space-between;
  }
`;
