"use client";

import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useFocusTrap } from "@/hooks/useFocusTrap";

import { Menu as MenuIcon, X } from "lucide-react";
import Deskcorp from "../Deskcorp";
import { Button } from "../ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function openButton() {
    setIsOpen((v) => !v);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useFocusTrap(menuRef as RefObject<HTMLElement>, isOpen);

  useEscapeKey(() => setIsOpen(false));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1028) {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className={`absolute z-30 w-full px-6 py-4 ${isOpen ? "h-svh overflow-auto bg-neutral-950/60 backdrop-blur-lg" : "h-auto"}`} ref={menuRef}>
        <div className="container max-w-6xl rounded-lg bg-white p-3">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/">
              <span className="sr-only">Página inicial</span>
              <Deskcorp className="text-on-primary w-full max-w-60" variant="mono" />
            </Link>
            <div className="flex items-center justify-center lg:hidden">
              <Button variant="secondary" size="icon" onClick={openButton}>
                <span className="sr-only">Abrir/fechar menu</span>
                {isOpen ? <X /> : <MenuIcon />}
              </Button>
            </div>
            <nav className={`dark basis-full lg:basis-auto lg:rounded-full lg:bg-neutral-950/40 lg:px-1 lg:py-1 lg:backdrop-blur-lg ${isOpen ? "py-10" : ""}`}>
              <ul className={`flex items-center gap-y-2 max-lg:flex-col lg:flex ${isOpen ? "block" : "hidden"}`}>
                <li>
                  <Button size={isOpen ? "lg" : "default"} variant="ghost" asChild>
                    <a href="/" onClick={closeMenu}>
                      Início
                    </a>
                  </Button>
                </li>
                <li>
                  <Button size={isOpen ? "lg" : "default"} variant="ghost" asChild>
                    <a href="#solucoes" onClick={closeMenu}>
                      Soluções
                    </a>
                  </Button>
                </li>
                <li>
                  <Button size={isOpen ? "lg" : "default"} variant="ghost" asChild>
                    <a href="#ecossistema" onClick={closeMenu}>
                      Ecossistema
                    </a>
                  </Button>
                </li>
                <li>
                  <Button size={isOpen ? "lg" : "default"} variant="accent" asChild>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener" onClick={closeMenu}>
                      Contato
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
