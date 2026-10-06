import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <p className="eyebrow">404</p>
      <h1 className="display">Page not found</h1>
      <Link href="/" className="btn">
        Back home
      </Link>
    </main>
  );
}
