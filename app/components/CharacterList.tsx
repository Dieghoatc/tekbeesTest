'use client'

import { useState, useEffect, useRef } from "react";
import { Result } from "../libs/api/types/rickAndMortyTypes"
import { characterFilter } from '../libs/helpers/characterFilter';
import { CharacterCard } from "./CharacterCard";
import { getCharacters } from "../libs/api/service/getCharacters";
import Link from "next/link";

interface CharacterListProps {
  search: string;
  status: string;
  gender: string;
}

export function CharacterList({ search, status, gender }: CharacterListProps) {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Result[]>([]);

  const loadingRef = useRef(false);
  const hasNextRef = useRef<boolean>(true);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const filteredCharacters = characterFilter({ characters, status, gender, search });

  useEffect(() => {
    async function fetchData() {
      if (loadingRef.current) return;
      loadingRef.current = true;

      const data = await getCharacters(page);

      setCharacters(prev => [...prev, ...data.results]);
      hasNextRef.current = Boolean(data.info?.next);

      loadingRef.current = false;
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextRef.current && !loadingRef.current) {
          setPage(prev => prev + 1);
        }
      },
      { root: null, threshold: 0, rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredCharacters.map((character: Result) => (
          <li key={character.id}>
            <Link href={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        ))}
      </ul>

      <div ref={triggerRef} className="h-8 flex justify-center items-center">

      </div>
    </section>
  );
}