import { characterFilter } from '../characterFilter';
import { Result } from "@/app/libs/api/types/rickAndMortyTypes";

const mockCharacters: Result[] = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",

        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },

        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/1"],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": new Date("2017-11-04T18:48:46.250Z")
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",

        "origin": {
            "name": "unknown",
            "url": ""
        },

        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": new Date("2017-11-04T18:50:21.651Z")
    },

    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",

        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },

        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": new Date("2017-11-04T19:09:56.428Z")
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Female",

        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },

        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/6",
        ],
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": new Date("2017-11-04T19:22:43.665Z")
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "unknown",
        "species": "Human",
        "type": "",
        "gender": "Male",

        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },

        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": new Date("2017-11-04T19:26:56.301Z")
    },
    {
        "id": 6,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Female",

        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },

        "location": {
            "name": "Testicle Monster Dimension",
            "url": "https://rickandmortyapi.com/api/location/21"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",

        "episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11"
        ],
        "url": "https://rickandmortyapi.com/api/character/7",
        "created": new Date("2017-11-04T19:59:20.523Z")
    },
]

describe('characterFilter', () => {
    it('should return all characters when no filters are applied', () => {
        const result = characterFilter({ characters: mockCharacters, status: '', gender: '', search: '' });
        expect(result).toHaveLength(6);
    });

    it('should return characters filtered by status', () => {
        const result = characterFilter({ characters: mockCharacters, status: 'Alive', gender: '', search: '' });
        expect(result).toHaveLength(2);
    });

    it('should return characters filtered by gender', () => {
        const result = characterFilter({ characters: mockCharacters, status: '', gender: 'Male', search: '' });
        expect(result).toHaveLength(2);
    });

    it('should return characters filtered by search', () => {
        const result = characterFilter({ characters: mockCharacters, status: '', gender: '', search: 'Rick' });
        expect(result).toHaveLength(1);
    });

    it('should return characters filtered by status and gender', () => {
        const result = characterFilter({ characters: mockCharacters, status: 'Alive', gender: 'Male', search: '' });
        expect(result).toHaveLength(1);
    });

    it('should return characters filtered by status and search', () => {
        const result = characterFilter({ characters: mockCharacters, status: 'Alive', gender: '', search: 'Rick' });
        expect(result).toHaveLength(1);
    });

    it('should return characters filtered by gender and search', () => {
        const result = characterFilter({ characters: mockCharacters, status: '', gender: 'Male', search: 'Rick' });
        expect(result).toHaveLength(1);
    });

    it('should return characters filtered by status, gender and search', () => {
        const result = characterFilter({ characters: mockCharacters, status: 'Alive', gender: 'Male', search: 'Rick' });
        expect(result).toHaveLength(1);
    });
});