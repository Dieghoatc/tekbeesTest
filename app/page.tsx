
import { Characters } from "./components/Characters";

export default function Home() {

  return (
    <main className="w-full md:w-[1024px] mx-auto">
      <div className="my-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Rick and Morty TekBees Test</h1>
      </div>
      <div className="md:m-4">
        <Characters />
      </div>
    </main>
  );
}
