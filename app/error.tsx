"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div >
      <h2>Pagina de error</h2>
      <p>{error.message}</p>
      <button onClick={reset} >
        Reintentar
      </button>
    </div>
  );
}
