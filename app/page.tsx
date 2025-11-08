

import { Suspense } from "react";
import { Characters } from "./components/Characters";

export default function Home() {

  return (
    <div>
      <h1>Rick and Morty TekBees Test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Characters />
      </Suspense>
    </div>
  );
}
