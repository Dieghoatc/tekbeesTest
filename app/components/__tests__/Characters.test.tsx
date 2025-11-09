import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Characters } from '../../sections/Characters';
import { getCharacters } from '../../libs/api/service/getCharacters';

jest.mock('../../libs/api/service/getCharacters');

const mockGetCharacters = getCharacters as jest.MockedFunction<typeof getCharacters>;

describe('Characters', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the list of characters correctly', async () => {
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
        {
          id: 3,
          name: 'Summer Smith',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Female',
          origin: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/6'],
          url: 'https://rickandmortyapi.com/api/character/3',
          created: new Date('2017-11-04T19:09:56.428Z'),
        },
      ],
    };

    mockGetCharacters.mockResolvedValueOnce(mockData);

    // Render the async component directly
    const component = await Characters({ search: '', status: '', gender: '' });
    render(component);

    expect(mockGetCharacters).toHaveBeenCalledTimes(1);
    
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getByText('Summer Smith')).toBeInTheDocument();
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('displays a loading state while fetching data', () => {
    const mockData = {
      info: {
        count: 1,
        pages: 1,
        next: null,
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
      ],
    };

    // Mock a delayed response
    mockGetCharacters.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(mockData), 100))
    );

    // Render with Suspense boundary
    render(
      <Suspense fallback={<div>Loading...</div>}>
        <Characters search="" status="" gender="" />
      </Suspense>
    );

    // Check that loading state is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
