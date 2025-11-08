import { getCharacters } from '../getCharacters';

describe('getCharacters', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('successfully fetches data from the API', async () => {
    const mockData = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character/?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: new Date('2017-11-04T18:48:46.250Z'),
        },
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'unknown',
            url: '',
          },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
          url: 'https://rickandmortyapi.com/api/character/2',
          created: new Date('2017-11-04T18:50:21.651Z'),
        },
      ],
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockData,
    });

    const result = await getCharacters();

    expect(global.fetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character/?page=1'
    );
    expect(result).toEqual(mockData);
    expect(result.results).toHaveLength(2);
    expect(result.results[0].name).toBe('Rick Sanchez');
    expect(result.results[1].name).toBe('Morty Smith');
  });
});
