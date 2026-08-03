import { getCurrentYear } from "@/utilities/get-current-year";
import Deskcorp from "../Deskcorp";

export async function Footer() {
  return (
    <footer className="bg-primary-hover dark text-on-primary dark py-12">
      <div className="container flex flex-col items-center gap-4">
        <Deskcorp className="w-full max-w-54" variant="negative" />
        <p className="">© {getCurrentYear()} Deskcorp. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
