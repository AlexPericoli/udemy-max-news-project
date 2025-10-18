"use client";

export default function FilterError({ error }) {
  return (
    <div>
      <h2>Ocorreu um erro!</h2>
      <p>{error.message}</p>
    </div>
  );
}
