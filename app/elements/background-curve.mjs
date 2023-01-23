export default function BackgroundCurve({ html, state }) {
  const { attrs } = state;
  const left = attrs.left === "" || !!attrs.left;
  const right = attrs.right === "" || !!attrs.right;
  const above = attrs.above === "" || !!attrs.above;
  const below = attrs.below === "" || !!attrs.below;
  const fill = attrs.fill || !!attrs.fill;

  const styles = html`
    <style>
      .above-curve {
        position: absolute;
        width: 150px;
        height: 150px;
        margin-top: calc(-150px + 1px);
        top: 0;
      }
      .right-curve {
        right: -20px;
      }
      .left-curve {
        left: -20px;
      }
      .below-curve {
        position: absolute;
        width: 150px;
        height: 150px;
        top: 0px;
        margin-top: -1px;
      }
      svg {
        height: 100%;
        width: 100%;
      }
    </style>
  `;

  if (right && above) {
    return html`
      ${styles}
      <div class="background-curve above-curve right-curve">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="${fill}"
            d="M 0 100
               S 100 100 100 0
               L 100 100 
               z"
          />
        </svg>
      </div>
    `;
  } else if (right && below) {
    return html`
      ${styles}
      <div class="background-curve below-curve right-curve">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="${fill}"
            d="M 0 0
               S 100 0 100 100
               L 100 0 
               z"
          />
        </svg>
      </div>
    `;
  } else if (left && above) {
    return html`
      ${styles}
      <div class="background-curve above-curve left-curve">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="${fill}"
            d="M 100 100
               S 0 100 0 0
               L 0 100 0 100 100 100 
               z"
          />
        </svg>
      </div>
    `;
  } else if (left && below) {
    return html`
      ${styles}
      <div class="background-curve below-curve left-curve">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="${fill}"
            d="M 100 0
               S 0 0 0 100
               L 0 0 
               z"
          />
        </svg>
      </div>
    `;
  } else {
    return html``;
  }
}
