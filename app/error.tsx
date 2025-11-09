"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "16px", border: "1px solid #f00" }}>
      <h2>Pagina de error</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: "8px" }}>
        Reintentar
      </button>
    </div>
  );
}
