import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>anzook - dev</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="p-5 text-6xl font-bold text-left">A. N. Zook </h1>
        <h2 className="text-4xl">
          I am an engineer with a{" "}
          <code className="p-3 font-mono text-3xl font-bold bg-gray-100 rounded-md">
            javascript
          </code>{" "}
          problem{" "}
        </h2>

        <p className="mt-3 text-2xl"></p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://github.com/anzook"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Github &rarr;</h3>
            <p className="mt-4 text-xl">
              An engineer finally getting the chance to build things through
              code!
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/alexnzook/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3>
            <p className="mt-4 text-xl">Full Stack JS Developer at 21PSTEM</p>
          </a>

          <a
            href="https://github.com/anzook/anzook"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">This repo &rarr;</h3>
            <p className="mt-4 text-xl">
              A work in progress, as I play with NextJS, TailwindCSS, and Vercel
            </p>
          </a>
          <a
            href="mailto:anzook@gmail.com?subject=Portfolio%20Contact-"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Email me &rarr;</h3>
            <p className="mt-4 text-xl">
              Let's talk about exciting opportunities
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        anzook <img src="/ANZ_Logo.png" alt="anzook Logo" className="h-4 m-2" />
        2021
      </footer>
    </div>
  );
}
