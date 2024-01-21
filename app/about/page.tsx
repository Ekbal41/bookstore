export default function About() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mx-2 md:w-2/4 md:mx-auto pt-20 pb-4">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          Nova Store Inc.
        </h3>
        <p className="text-center">
          We are a small team of developers who are passionate about building
          web applications. We are based in India and we are currently working
          on a few projects. We are also open to freelance work. If you have any
          queries, please feel free to contact us at
          <a
            href="mailto:asiekbaldev@gmail.com"
            className="text-blue-500 hover:text-blue-700 ml-2 font-mono"
          >
            asifekbaldev@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}
