import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>CSS Workshop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto text-center mt-12">
        <h1 className="text-6xl font-bold">
          CSS Workshop
        </h1>
        <section className="mt-6 max-w-xl mx-auto">
          <div className="text-left">
            <p>
              Where I go to improve my CSS chops, and to experiment with interaction design.
              I will be scanning through <a href="https://dribbble.com" className="underline text-blue-700">Dribbble</a> and choosing
              various designs to attempt to implement. (I'm not much of a designer...) With that said,
              I will only be choosing designs where I can easily find matching or similar images and illustrations.
            </p>
            <h2 className="text-4xl font-semibold mt-4 mb-2">Guidelines For Myself:</h2>
            <ol className="list-decimal pl-4 inline-block text-left">
              <li>Attributions everywhere!</li>
              <li>If there are very obvious a11y issues, I will deviate from the original design to fix it.</li>
              <li>However, I will not always aim for perfect AA compliance.</li>
              <li>IE 11 Support....maybe</li>
            </ol>
          </div>
        </section>
        <section className="max-w-6xl mx-auto mt-8">
          <h2>Design Pending</h2>
          <ul className="list-disc inline-block">
            <li>
              <Link href="/experiment-one">
                <a>Experiment One <br/></a>
              </Link>
              <a href="https://dribbble.com/shots/14313928-Kuproy-co-Interior-Design-Agency-Landing-Page">Original Shot</a> by <a href="https://dribbble.com/choirulsyafril">Choirul Syafril</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-8">
        &copy; Copyright 2021
      </footer>
    </div>
  );
}
