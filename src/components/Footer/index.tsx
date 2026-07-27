import Deskcorp from "../Deskcorp";

export async function Footer() {
  return (
    <footer className="bg-primary-hover dark text-primary py-12" data-theme="dark">
      <div className="container grid gap-8 lg:grid-cols-3">
        <div>
          <Deskcorp variant="negative" />
        </div>
        <div>
          <h2>Deskcorp</h2>
          <ul>
            <li>Página inicial</li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
