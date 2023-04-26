import arc from "@architect/functions";

export default function Component({ html, state }) {
  const CSS = /*css*/ `
  `;

  return html` <style>
      ${CSS}
    </style>
    <section class="text-and-image">
      <div class="text">
        <h2>Crypto &amp; E-Signing</h2>
        <ul>
          <li>Sign with cryptographic keypairs or e-sign via email</li>
          <li>Immutable, tamper-proof record of transactions and changes</li>
          <li>Secure and encrypted environment for uploading, sharing, and signing of documents</li>
          <li>ESIGN and UETA compliant signing</li>
        </ul>
      </div>
      <div class="image">
        <img src="${arc.static('/homepage/signing.png')}" />
      </div>
    </section>`;
}
