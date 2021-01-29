import Head from 'next/head';
import Link from 'next/link';
import styles from './ExperimentOne.module.css';

export default function ExperimentOne() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&amp;family=Roboto&amp;display=swap" rel="stylesheet" />
      </Head>
      {/* TODO: Move to own component */}
      <nav className="bg-white shadow-sm sticky top-0" aria-label="Main Navigation">
        <div className="container mx-auto py-4">
          <Link href="/"><a>&larr; Back To CSS Workshop</a></Link>
        </div>
      </nav>
      <main className="container mx-auto mt-6">
        <header className="flex justify-between">
          <span>Kuproy.co</span>
          <ul className="flex items-center">
            <li>Projects</li>
            <li>Services</li>
            <li>Office</li>
            <li>About</li>
          </ul>
        </header>

        <section>
          {/* TODO: Find image */}
          <div>
            <h1 className={styles.heading}>We Make <br/> Your Interior Better.</h1>
            <p>
              Interior designers make interior spaces functional, safe, and beautiful for almost
              every type of building.
            </p>
            <a href="#">Contact Us</a>
          </div>
        </section>

        <section>
          <div>
            <ul>
              <li>
                <strong>18</strong>
                <p>Years Experience</p>
              </li>
              <li>
                <strong>48</strong>
                <p>Awards Gained</p>
              </li>
              <li>
                <strong>286</strong>
                <p>Properties Built</p>
              </li>
            </ul>
          </div>
          <div>
            <h2>We Provide Look <br/> And Accuracy.</h2>
          </div>
        </section>

        <section>
          <ul>
            <li>
              {/* TODO: Find Image */}
              <h3>Architecture</h3>
              <p>48 Finished Projects.</p>
            </li>
            <li>
              {/* TODO: Find Image */}
              <h3>Engineering</h3>
              <p>27 Finished Projects.</p>
            </li>
            <li>
              {/* TODO: Find Image */}
              <h3>Interior</h3>
              <p>118 Finished Projects.</p>
            </li>
          </ul>
        </section>

        <section>
          <div>
            <h2>We Love <br/> Great Process</h2>
            <p>
              Interior designers make interior spaces functional, sage, and beautiful. Consectetur a erat.
            </p>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <ul>
              <li>
                <h3>01. Discuss</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li>
                <h3>02. Research</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li>
                <h3>03. Create Concept</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li>
                <h3>04. Implementation</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <p>
              Safe, and beautiful for almost every type of building. Interior designers make interior
              spaces functional, safe, and beautiful for almost every type of building.
            </p>
            <h2>This is some of our <br/> creative process</h2>
          </div>
          <div>
            TODO: Find Placeholder video or image.
          </div>
        </section>

        <section>
          <div>
            <h2>Want to Collaborate With Us?</h2>
            <p>Interior designers make interior spaces functional, safe, and beautiful for almost every type of building.</p>
          </div>
          <div>
            <a href="#">Contact Us</a>
            <a href="#">Visit Us</a>
          </div>
        </section>

      </main>

      <footer className="container mx-auto py-6">
        <div className="flex justify-between">
          <span>Kuproy.co</span>
          <p>Company 2020 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}