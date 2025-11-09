import FavoritePageClient from "./FavoritePageClient";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl md:text-4xl font-bold text-center my-4">
        Favoritos
      </h1>
      <FavoritePageClient />
    </main>
  );
}
