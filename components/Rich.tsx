/** Renders text where **segments** become <strong> highlights. */
export function Rich({text}: {text: string}) {
  return (
    <>
      {text
        .split("**")
        .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  );
}
