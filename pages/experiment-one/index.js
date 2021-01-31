import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Nav from '../../components/Nav';
import styles from './ExperimentOne.module.css';

export default function ExperimentOne() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&amp;family=Open+Sans&amp;display=swap"
          rel="stylesheet"
        />
        <title>Experiment One | CSS Workshop</title>
      </Head>
      <Nav>
        <a href="https://dribbble.com/shots/14313928-Kuproy-co-Interior-Design-Agency-Landing-Page">Original Shot</a> by{' '}
        <a href="https://dribbble.com/choirulsyafril">Choirul Syafril</a>
      </Nav>

      <AnimateSharedLayout>
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
                Interior designers make interior spaces functional, safe, and beautiful for almost every type of
                building.
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
            <motion.ul layout className="flex">
              <li className={styles.card}>
                <motion.div
                  className="mb-8"
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 0.5 }}
                >
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
                </motion.div>
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
            </motion.ul>
          </section>

          <section className={styles.listedContentSection}>
            <div className="flex-1">
              <h2 className={styles.largeHeading}>
                We Love <span role="presentation" /> Great Process.
              </h2>
              <p className="my-8 pr-16">
                Interior designers make interior spaces functional, sage, and beautiful. Consectetur a erat.
              </p>
              <a href="#" className={styles.primaryBtn}>
                Contact Us
              </a>
            </div>
            <div className="flex-1">
              <ul className="flex flex-row flex-wrap">
                <li className="flex-auto mb-8 mr-8 w-1/2">
                  <h3>01. Discuss</h3>
                  <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
                </li>
                <li className="flex-auto mb-8 w-1/2">
                  <h3>02. Research</h3>
                  <p>Consectetur a erat nam at lectusurna. Purus faucibus ornare.</p>
                </li>
                <li className="flex-auto mr-8 w-1/2">
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
            <div className="flex items-center content-center mb-20">
              <div className="flex-1">
                <p className={styles.ctaText}>
                  Safe, and beautiful for almost every type of building. Interior designers make interior spaces
                  functional, safe, and beautiful for almost every type of building.
                </p>
              </div>
              <div className="flex-1 text-right leading-6">
                <h2 className={styles.largeHeading}>
                  This is some of our <br /> creative process
                </h2>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/img/experiment-one/linkedin-sales-navigator-46bom4lObsA-unsplash.jpg"
                alt="Two woman discussing something displayed on a computer monitor."
                title="Photo by LinkedIn Sales Navigator on Unsplash."
                width={1200}
                height={800}
                layout="responsive"
                className="object-center object-cover"
              />
              <small className="text-gray-500">
                Photo by{' '}
                <a
                  href="https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  LinkedIn Sales Navigator
                </a>{' '}
                on{' '}
                <a
                  href="https://unsplash.com/s/photos/office-meeting?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                  className="underline"
                >
                  Unsplash
                </a>
              </small>
            </div>
          </section>

          <section className={styles.contactUs}>
            <div>
              <h2>Want to Collaborate With Us?</h2>
              <p className="w-3/4">
                Interior designers make interior spaces functional, safe, and beautiful for almost every type of
                building.
              </p>
            </div>
            <div>
              <a href="#" className={styles.secondaryBtn}>
                Contact Us
              </a>
              <a href="#" className={styles.secondaryBtnOutline}>
                Visit Us
              </a>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className="flex justify-between">
            <span className={styles.companyLogo}>Kuproy.co</span>
            <p>Company 2020 All Rights Reserved.</p>
          </div>
        </footer>
      </AnimateSharedLayout>
    </>
  );
}
