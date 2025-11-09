'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FilterProps {
    search: string;
    status: string;
    gender: string;
}

export function Filters({ search, status, gender }: FilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [localSearch, setLocalSearch] = useState(search)

    const debounceSearch = useDebounce(localSearch, 300);

    const updateURL = (params: Record<string, string>) => {
        const updateParams = new URLSearchParams(searchParams.toString());

        Object.entries(params).forEach(([key, value]) => {
            if (value) updateParams.set(key, value)
            else updateParams.delete(key);
        });

        router.replace(`?${updateParams.toString()}`);
    }

    useEffect(() => {
        updateURL({ search: debounceSearch });
    }, [debounceSearch]);

    useEffect(() => {
        router.replace("/", { scroll: false });
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="">
                <input
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    placeholder="Buscar..."
                    className="px-2 py-1 border rounded"
                />
            </div>
            <div className="flex gap-2">
                <select className='bg-gray-950 text-white font-semibold' value={status} onChange={(e) => updateURL({ status: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="Alive">Vivo  </option>
                    <option value="Dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>

                <select className=' bg-gray-950 text-white font-semibold' value={gender} onChange={(e) => updateURL({ gender: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                </select>
            </div>
        </div>
    );
}