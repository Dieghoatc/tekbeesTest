import { Characters } from "./sections/Characters";
import { Filters } from "./components/Filters";

export default async function Home({ searchParams }: { searchParams: Promise<{ search: string; status: string; gender: string }> }) {
  const searchParamsResolved = await searchParams;
  const search = searchParamsResolved.search ?? "";
  const status = searchParamsResolved.status ?? "";
  const gender = searchParamsResolved.gender ?? "";

  return (
    <main className="w-full md:w-[1024px] mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-4">
        Rick and Morty TekBees Test
      </h1>

      <Filters search={search} status={status} gender={gender} />

      <div className="md:m-4 mx-2">
        <Characters search={search} status={status} gender={gender} />
      </div>
    </main>
  );
}
