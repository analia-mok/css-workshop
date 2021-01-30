import Head from 'next/head';
import Image from 'next/image';
import Nav from '../../components/Nav';
import styles from './ExperimentOne.module.css';

export default function ExperimentOne() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&amp;family=Roboto&amp;display=swap"
          rel="stylesheet"
        />
        <title>Experiment One | CSS Workshop</title>
      </Head>
      <Nav>
        <a href="https://dribbble.com/shots/14313928-Kuproy-co-Interior-Design-Agency-Landing-Page">Original Shot</a> by{' '}
        <a href="https://dribbble.com/choirulsyafril">Choirul Syafril</a>
      </Nav>

      <main className="mx-auto mt-6 max-w-7xl">
        <header className="flex justify-between my-24">
          <span className={styles.companyLogo}>Kuproy.co</span>
          <ul className={styles.navLinks}>
            <li>Projects</li>
            <li>Services</li>
            <li>Office</li>
            <li>About</li>
          </ul>
        </header>

        <section className="relative">
          <Image
            src="/img/experiment-one/toa-heftiba-FV3GConVSss-unsplash.jpg"
            alt="An office building's lobby."
            title="Photo by Toa Heftiba on Unsplash."
            width={1440}
            height={800}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="bg-white w-16 h-full absolute top-0 left-1/2" role="presentation" />
          <div className={styles.heroContent}>
            <h1 className={styles.largeHeading}>
              We Make <span role="presentation" /> Your Interior Better.
            </h1>
            <p className="mb-8">
              Interior designers make interior spaces functional, safe, and beautiful for almost every type of building.
            </p>
            <a href="#" className={styles.primaryBtn}>
              Contact Us
            </a>
          </div>
        </section>

        <section className="mb-16">
          <small className="text-gray-500">
            Photo by{' '}
            <a
              href="https://unsplash.com/@heftiba?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className="underline"
            >
              Toa Heftiba
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/s/photos/office?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              className="underline"
            >
              Unsplash
            </a>
          </small>
        </section>

        <section className="py-20 flex items-center">
          <div>
            <ul className="flex items-center">
              <li className={styles.stat}>
                <strong>18</strong>
                <p>
                  Years <br /> Experience
                </p>
              </li>
              <li className={styles.stat}>
                <strong>48</strong>
                <p>
                  Awards <br /> Gained
                </p>
              </li>
              <li className={styles.stat}>
                <strong>286</strong>
                <p>
                  Properties <br /> Built
                </p>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <h2 className={styles.largeHeading}>
              We Provide Look <span role="presentation" /> And Accuracy.
            </h2>
          </div>
        </section>

        <section>
          <ul className="flex">
            <li className={styles.card}>
              <div className="mb-8">
                <Image
                  src="/img/experiment-one/minh-pham-7pCFUybP_P8-unsplash.jpg"
                  alt="A bedroom with a tall green house plant and dresser/mirror combo."
                  title="Photo by Minh Pham on Unsplash"
                  width={750}
                  height={768}
                  quality={80}
                  layout="responsive"
                  className="object-center object-cover"
                />
              </div>
              <h3 className={styles.heading}>Architecture.</h3>
              <p>48 Finished Projects.</p>
              <small>
                Photo by{' '}
                <a
                  href="https://unsplash.com/@minhphamdesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Minh Pham
                </a>{' '}
                on{' '}
                <a
                  href="https://unsplash.com/s/photos/house-interior-with-plants?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Unsplash
                </a>
              </small>
            </li>
            <li className={styles.card}>
              <div className="mb-8">
                <Image
                  src="/img/experiment-one/minh-pham-MBsReSZ2WNM-unsplash.jpg"
                  alt="A set of small green house plants."
                  title="Photo by Minh Pham on Unsplash"
                  width={750}
                  height={768}
                  quality={80}
                  layout="responsive"
                  className="object-center object-cover"
                />
              </div>
              <h3 className={styles.heading}>Engineering.</h3>
              <p>27 Finished Projects.</p>
              <small>
                Photo by{' '}
                <a
                  href="https://unsplash.com/@minhphamdesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Minh Pham
                </a>{' '}
                on{' '}
                <a
                  href="https://unsplash.com/s/photos/house-interior-with-plants?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Unsplash
                </a>
              </small>
            </li>
            <li className={styles.card}>
              <div className="mb-8">
                <Image
                  src="/img/experiment-one/hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg"
                  alt="The corner of a white room with a small table set and overhanging silver lamp."
                  title="Photo by Hutomo Abrianto on Unsplash"
                  width={750}
                  height={768}
                  quality={80}
                  layout="responsive"
                  className="object-center object-cover"
                />
              </div>
              <h3 className={styles.heading}>Interior.</h3>
              <p>118 Finished Projects.</p>
              <small>
                Photo by{' '}
                <a
                  href="https://unsplash.com/@hutomoabrianto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Hutomo Abrianto
                </a>{' '}
                on{' '}
                <a
                  href="https://unsplash.com/s/photos/house-interior-with-plants?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Unsplash
                </a>
              </small>
            </li>
          </ul>
        </section>

        <section className="py-20 flex items-center">
          <div className="flex-1">
            <h2 className={styles.largeHeading}>
              We Love <span role="presentation" /> Great Process.
            </h2>
            <p className="mt-4">
              Interior designers make interior spaces functional, sage, and beautiful. Consectetur a erat.
            </p>
            <a href="#" className={styles.primaryBtn}>
              Contact Us
            </a>
          </div>
          <div className="flex-1">
            <ul className="flex flex-row flex-wrap">
              <li className="flex-auto mb-8 w-1/2">
                <h3>01. Discuss</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li className="flex-auto mb-8 w-1/2">
                <h3>02. Research</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li className="flex-auto w-1/2">
                <h3>03. Create Concept</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
              <li className="flex-auto w-1/2">
                <h3>04. Implementation</h3>
                <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="flex items-center">
            <p className="flex-1">
              Safe, and beautiful for almost every type of building. Interior designers make interior spaces functional,
              safe, and beautiful for almost every type of building.
            </p>
            <div className="flex-1 text-right leading-6">
              <h2 className={styles.largeHeading}>
                This is some of our <br /> creative process
              </h2>
            </div>
          </div>
          <div className="text-center">TODO: Find Placeholder video or image.</div>
        </section>

        <section className="flex py-20">
          <div>
            <h2>Want to Collaborate With Us?</h2>
            <p>
              Interior designers make interior spaces functional, safe, and beautiful for almost every type of building.
            </p>
          </div>
          <div>
            <a href="#">Contact Us</a>
            <a href="#">Visit Us</a>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto py-6">
        <div className="flex justify-between">
          <span className={styles.companyLogo}>Kuproy.co</span>
          <p>Company 2020 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
