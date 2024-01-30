export default function About() {
  return (
    <>
      <div>
        <div className="h-full w-full flex justify-center items-center">
          <div className=" mx-2 md:w-2/4 md:mx-auto pb-4">
            <h3 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">
              Nova Store Inc.
            </h3>
            <p className="text-center dark:text-gray-100">
              We are a small team of developers who are passionate about
              building web applications. We are based in India and we are
              currently working on a few projects. We are also open to freelance
              work. If you have any queries, please feel free to contact us at
              <a
                href="mailto:asiekbaldev@gmail.com"
                className="text-blue-500 hover:text-blue-700 ml-2 font-mono"
              >
                asifekbaldev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
