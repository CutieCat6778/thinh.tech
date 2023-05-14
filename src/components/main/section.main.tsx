import Image from "next/image";
import SkillTable from "../SkillTable";

export default function Section() {
  return (
    <div>
      <div className="placeholder"></div>
      <div className="flex px-1 lg:px-10 justify-center items-center flex-col lg:flex-row h-screen d-bg d-text shadow-2xl">
        <Image
          src="/me-1.jpeg"
          width={500}
          height={500}
          alt="An image of my self"
          className="aspect-square object-cover overflow-hidden rounded-lg p-10"
        />
        <div className="flex justify-center items-center flex-col mt-10 lg:mt-0 w-full lg:w-1/2">
          <h1 className="text-3xl mb-10">About me</h1>
          <span className="w-full sm:w-3/5 text-center">
            As a young developer, my focus lies in web development, and I
            specialize in using programming languages such as JavaScript,
            TypeScript, and GoLang. I have experience with both frontend and
            backend development and am entirely self-taught.
          </span>
          <div className="mt-4">
            <a href="https://instagram.com/txzje">
              <button>Instagram</button>
            </a>
            <a className="ml-6 btn" href="https://github.com/CutieCat6778">
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
      <div className="placeholder"></div>
      <div className="flex px-10 justify-center items-center flex-row h-screen d-bg d-text shadow-2xl">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-semibold mb-4">Programming skills</h1>
          <SkillTable />
        </div>
      </div>
    </div>
  );
}
