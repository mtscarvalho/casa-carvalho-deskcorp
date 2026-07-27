import Ecosystem from "@/components/Ecosystem";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/utilities/create-metadata";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export async function generateMetadata() {
  return createMetadata({
    path: "/",
    title: "Página inicial",
    description: "",
  });
}

export default async function Page() {
  return (
    <main>
      <section className="relative z-0 grid min-h-screen items-end">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            <div className="py-8">
              <h1 className="text-on-primary heading-xl">Modernize sua operação financeira sem riscos</h1>
            </div>
            <div className="bg-base relative rounded-t-xl p-8">
              <p>A Deskcorp® estrutura, integra e orquestra tecnologias críticas para bancos, fintechs, fundos e instituições financeiras que operam em ambientes regulados e de alta complexidade.</p>
              <svg viewBox="0 0 10 10" className="fill-base absolute right-full bottom-0 z-10 size-3" aria-hidden="true">
                <path d="M0 10A10 10 0 0 0 10 0v10z" />
              </svg>
              <svg viewBox="0 0 10 10" className="fill-base absolute bottom-0 left-full z-10 size-3" aria-hidden="true">
                <path d="M0 0A10 10 0 0 0 10 10H0z" />
              </svg>
            </div>
          </div>
        </div>

        <Image className="inset-0 -z-10 object-cover" src="/assets/pagina-inicial/hero.avif" alt="" fill />
        <div className="from-neutral-1000/80 absolute inset-0 -z-10 size-full bg-linear-to-t object-cover" />
      </section>

      <section className="bg-base py-16">
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-4 text-center">
            <li className="flex flex-col gap-2 lg:flex-1">
              <span className="heading-sm text-accent font-bold">10</span>
              <span className="text-sm">anos de atuação </span>
            </li>
            <li className="flex flex-col gap-2 lg:flex-1">
              <span className="heading-sm text-accent font-bold">72</span>
              <span className="text-sm">projetos entregues </span>
            </li>
            <li className="flex flex-col gap-2 lg:flex-1">
              <span className="heading-sm text-accent font-bold">25</span>
              <span className="text-sm">instituições atendidas </span>
            </li>
            <li className="flex flex-col gap-2 lg:flex-1">
              <span className="heading-sm text-accent font-bold">4</span>
              <span className="text-sm">países na América Latina </span>
            </li>
            <li className="flex flex-col gap-2 lg:flex-1">
              <span className="heading-sm text-accent font-bold">12</span>
              <span className="text-sm">parceiros estratégicos </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-base grid items-center py-24">
        <div className="container max-w-4xl text-balance">
          <div className="text-primary space-y-10 text-center">
            <p className="heading-md font-bold">Instituições financeiras precisam evoluir sobre estruturas legadas, sistemas fragmentados e exigências regulatórias cada vez mais rígidas.</p>
            <p className="heading-md font-bold">Cada integração carrega impacto operacional.</p>
            <p className="heading-md font-bold">Cada falha pode comprometer continuidade, segurança e confiança.</p>
          </div>
        </div>
      </section>

      <section className="bg-base overflow-hidden py-24">
        <div className="container">
          <h2 className="heading-lg text-primary text-center font-bold">Atuamos onde a tecnologia não pode falhar</h2>
        </div>
        <div className="relative z-0 my-10">
          <div className="container">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li className="bg-accent-hover relative z-0 grid aspect-6/3 size-full items-end overflow-hidden rounded p-4 text-balance max-sm:p-6 max-sm:py-10 sm:aspect-4/3 lg:aspect-3/4">
                <p className="text-on-primary lg:text-sm">Modernização de sistemas legados sem comprometer a continuidade da operação</p>
                <Image className="-z-10 object-cover" src="/assets/pagina-inicial/falhar-01.avif" alt="" fill />
              </li>
              <li className="bg-accent-hover relative z-0 grid aspect-6/3 size-full items-end overflow-hidden rounded p-4 text-balance max-sm:p-6 max-sm:py-10 sm:aspect-4/3 lg:aspect-3/4">
                <p className="text-on-primary lg:text-sm">Centralização de parceiros e plataformas para reduzir a fragmentação tecnológica</p>
                <Image className="-z-10 object-cover" src="/assets/pagina-inicial/falhar-02.avif" alt="" fill />
              </li>
              <li className="bg-accent-hover relative z-0 grid aspect-6/3 size-full items-end overflow-hidden rounded p-4 text-balance max-sm:p-6 max-sm:py-10 sm:aspect-4/3 lg:aspect-3/4">
                <p className="text-on-primary lg:text-sm">Integrações críticas com governança, controle e rastreabilidade</p>
                <Image className="-z-10 object-cover" src="/assets/pagina-inicial/falhar-03.avif" alt="" fill />
              </li>
              <li className="bg-accent-hover relative z-0 grid aspect-6/3 size-full items-end overflow-hidden rounded p-4 text-balance max-sm:p-6 max-sm:py-10 sm:aspect-4/3 lg:aspect-3/4">
                <p className="text-on-primary lg:text-sm">Incorporação de exigências regulatórias e controle à arquitetura operacional</p>
                <Image className="-z-10 object-cover" src="/assets/pagina-inicial/falhar-04.avif" alt="" fill />
              </li>
            </ul>
          </div>
          <div className="bg-accent text-on-primary absolute top-1/3 w-full -translate-y-1/2 scale-[101%] -rotate-3 p-1.5 max-lg:hidden">
            <Marquee speed={50} direction="right">
              <div className="mr-10 flex gap-10">
                <p className="overtitle text-sm">Core Banking</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">BaaS</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Pagamentos</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Crédito</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Gestão de Fundos</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Risk Management</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Cibersegurança</p>
                <span className="overtitle text-sm">/</span>
              </div>
            </Marquee>
          </div>
          <div className="bg-accent-hover text-on-primary absolute top-1/3 -z-10 w-full -translate-y-1/2 scale-[101%] rotate-3 p-1.5 max-lg:hidden">
            <Marquee speed={50} direction="left">
              <div className="mr-10 flex gap-10">
                <p className="overtitle text-sm">Core Banking</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">BaaS</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Pagamentos</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Crédito</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Gestão de Fundos</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Risk Management</p>
                <span className="overtitle text-sm">/</span>
                <p className="overtitle text-sm">Cibersegurança</p>
                <span className="overtitle text-sm">/</span>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <Button>Fale com um especialista</Button>
          </div>
        </div>
      </section>

      <section className="relative grid min-h-screen items-center py-40">
        <div className="container">
          <h2 className="heading-lg text-on-primary mx-auto max-w-xl text-center">
            Da base tecnológica à operação, tudo em um só <strong className="text-accent">ecossistema</strong>
          </h2>
          <Ecosystem className="mx-auto max-w-xl" />
        </div>

        <Image className="inset-0 -z-10 object-cover object-top" src="/assets/pagina-inicial/ecossistema.avif" alt="" fill />
        <div className="from-neutral-1000/80 absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-linear-to-t object-cover" />
        <div className="from-neutral-1000/80 absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-linear-to-t object-cover" />
      </section>

      <section className="bg-base dark pt-6 pb-24">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="bg-primary-hover text-on-primary rounded text-center text-balance">
              <div className="space-y-4 p-8 pt-0">
                <Image className="mx-auto" src="/assets/pagina-inicial/cobertura-completa-infraestrutura.avif" alt="" width={528} height={396} />
                <h2 className="heading-xs font-bold">Cobertura completa da infraestrutura financeira</h2>
                <p className="text-sm">Conectamos tecnologias, parceiros e governança em uma arquitetura bancária única, preparada para sustentar instituições financeiras que precisam crescer com segurança, controle e estabilidade operacional.</p>
              </div>
            </div>
            <div className="bg-primary-hover text-on-primary rounded text-center text-balance">
              <Image className="mx-auto" src="/assets/pagina-inicial/ecossistema-sob-unica-logica-operacional.avif" alt="" width={528} height={396} />
              <div className="space-y-4 p-8 pt-0">
                <h2 className="heading-xs font-bold">Ecossistema sob uma única lógica operacional</h2>
                <p className="text-sm">Coordenamos parceiros, plataformas e especialistas dentro de um ecossistema integrado, com governança técnica, adaptação regulatória local e responsabilidade sobre a execução.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container">
          <h2 className="heading-md text-primary mx-auto max-w-xl text-center font-bold text-balance">Para instituições financeiras que precisam evoluir, sem espaço para falhas</h2>
        </div>
      </section>

      <section className="relative">
        <div className="container">
          <div className="bg-neutral-1000 dark grid grid-cols-12 rounded bg-[url('/assets/pagina-inicial/cta.avif')] bg-cover bg-center bg-no-repeat">
            <div className="text-on-primary col-span-8 space-y-4 p-10 text-balance">
              <h2 className="heading-sm font-bold">Sua operação está preparada para sustentar o próximo ciclo de crescimento?</h2>
              <p>Converse com nossos especialistas e identifique riscos, gargalos e oportunidades de evolução na sua arquitetura tecnológica.</p>
              <Button>Fale com um especialista</Button>
            </div>
          </div>
        </div>

        <div className="bg-secondary absolute top-0 left-0 -z-10 h-1/2 w-full"></div>
        <div className="bg-primary-hover dark absolute bottom-0 left-0 -z-10 h-1/2 w-full"></div>
      </section>
    </main>
  );
}
