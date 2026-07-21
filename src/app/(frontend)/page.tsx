import { createMetadata } from "@/utilities/create-metadata";

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
      <h1>Página inicial</h1>
    </main>
  );
}
