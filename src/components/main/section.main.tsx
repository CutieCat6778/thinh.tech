import Image from "next/image";

export default function Section() {
  return (
    <div className="flex justify-between items-center c-bg-black c-text-white h-screen p-10 py-20">
      <div className="w-1/2 h-auto">
        <Image
          src="/me-1.jpeg"
          width={525}
          height={700}
          style={{ width: "525px", height: "auto" }}
          alt="An image of my self"
        />
      </div>
      <div className="flex justify-center items-center flex-col h-screen w-1/2">
        <h1 className="text-3xl mb-10">About me</h1>
        <span className="w-4/5 text-center">
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
  );
}
