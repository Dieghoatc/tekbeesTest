'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { useRouter } from 'next/navigation';

interface FilterProps {
    search: string;
    status: string;
    gender: string;
}

export function Filters({ search, status, gender }: FilterProps) {

    const router = useRouter();
    const debouseFilters = useDebounce({ search, status, gender }, 300);

    const update = (params: Record<string, string>) => {
        const query = new URLSearchParams({
            search, status, gender, ...params
        }).toString();

        router.replace(`?${query}`);
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="">
                <input
                    value={debouseFilters.search}
                    onChange={(e) => update({ search: e.target.value })}
                    placeholder="Buscar..."
                    className="px-2 py-1 border rounded"
                />
            </div>
            <div className="flex gap-2">
                <select className='bg-gray-950 text-white font-semibold' value={debouseFilters.status} onChange={(e) => update({ status: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="Alive">Vivo  </option>
                    <option value="Dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>

                <select className=' bg-gray-950 text-white font-semibold' value={debouseFilters.gender} onChange={(e) => update({ gender: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                </select>
            </div>
        </div>
    );
}