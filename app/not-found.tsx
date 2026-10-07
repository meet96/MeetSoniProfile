import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <p className="kicker">
        <span className="kicker-index">404</span>Not found
      </p>
      <h1 className="display">
        This page took a <em>different route</em>.
      </h1>
      <Link href="/" className="btn btn-primary">
        ← Back home
      </Link>
    </main>
  );
}
