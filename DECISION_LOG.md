*** DECISION LOG ***

**Decisions and trade-offs**

*Server Components*

- Using server components to implemente the suspense boundary using loading.tsx and error.tsx for handling loading and error states with requests to external APIs

*Caching / Revalidate*

- Using fetch with {next: { revalidate: 60 }} to cache requests, for characters, episodes and characterById

*Handling Errors*

- Using try catch to handle errors with requests to external APIs

*Components composition*

- Reutilization of <CharacterCard>, <FavoriteButton> and <CharacterStatus> components

*Styles / UI*

- Using Tailwind CSS for styling and CSSModules for especific and custon styles.

