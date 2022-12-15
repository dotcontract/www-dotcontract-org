export default function NotFoundPage({ html, state }) {
  const { error } = state.attrs;

  return html`<main>
    <div
      class="f
      grid-lg
      flow-col
      gap1
      w-full
      "
    >
    <a
      href="/"
      class="
        link-btn
        mb1
        p1
        flex
        justify-center
        items-center
        radius5
        bg-lilac
        font-bold
      "
    >
      <div class="text-center">
        <h1>Not Found</h1>
        <br />
        <p>${error && error}</p>
      </div>
    </a>
  </main>`;
}
