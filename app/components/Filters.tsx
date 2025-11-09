'use client';

import { useRouter } from 'next/navigation';

interface FilterProps {
    search: string;
    status: string;
    gender: string;
}

export function Filters({ search, status, gender }: FilterProps) {

    const router = useRouter();

    const update = (params: Record<string, string>) => {
        const query = new URLSearchParams({
            search, status, gender, ...params
        }).toString();

        router.replace(`?${query}`);
    }

    return (
        <div className="flex gap-2 my-4">
            <input
                value={search}
                onChange={(e) => update({ search: e.target.value })}
                placeholder="Buscar..."
                className="px-2 py-1 border rounded"
            />

            <select value={status} onChange={(e) => update({ status: e.target.value })}>
                <option value="">Todos</option>
                <option value="Alive">Vivo  </option>
                <option value="Dead">Muerto</option>
                <option value="unknown">Desconocido</option>
            </select>

            <select value={gender} onChange={(e) => update({ gender: e.target.value })}>
                <option value="">Todos</option>
                <option value="Male">Hombre</option>
                <option value="Female">Mujer</option>
            </select>
        </div>
    );
}