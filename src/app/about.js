import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">About Page</h1>
        <p className="mt-3 text-2xl">
          This is the about page of the Next.js app.
        </p>
        <Link href="/">
          <a className="mt-6 text-blue-600">Go back home</a>
        </Link>
      </main>
    </div>
  );
}
