import Head from "next/head";
import style from "../styles/Home.module.css";
import { Rowdies, Roboto_Slab } from "@next/font/google";
import Image from "next/image";
import SkillTable from "../components/SkillTable";

export const notoSerif = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
});

export const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Thinh Nguyen: Portfolio</title>
        <meta name="description" content="Hi there! My name is Thinh Nguyen, I'm web developer..." />
      </Head>
      <main className="2xl:mx-96 xl:mx-60 md:mx-10 mx-4 my-4">
        <nav className="flex items-center justify-center">
          <h1 className={rowdies.className}>Thinh Nguyen</h1>
        </nav>
        <header className="my-20 flex items-center xl:flex-row flex-col-reverse">
          <div className="xl:text-left text-center xl:mx-0 lg:mx-56 md:mx-24 sm:mx-16 mx-4">
            <h2 className={notoSerif.className + " text-2xl font-bold my-4"}>
              Hello there! My name is{" "}
              <span
                className={rowdies.className + " font-bold color-blue-dark"}
              >
                Thinh Nguyen
              </span>
            </h2>
            <h3 className={notoSerif.className}>
              I&apos;m a{" "}
              <span
                className={rowdies.className + " font-bold color-blue-dark"}
              >
                web developer
              </span>
              . Currently I&apos;m learning about{" "}
              <span
                className={rowdies.className + " font-bold color-blue-dark"}
              >
                web development
              </span>{" "}
              and also{" "}
              <span
                className={rowdies.className + " font-bold color-blue-dark"}
              >
                server management
              </span>
              . My dream is to build a start-up, that will make me a billionaire
              or the richest man in the world.
            </h3>
            <div className="w-full flex items-center justify-center">
              <a
                href="https://instagram.com/txzje"
                className="no-underline color-black"
              >
                <button
                  className={
                    notoSerif.className + " my-2 sm:my-10 " + style.btn
                  }
                >
                  My instagram
                </button>
              </a>
            </div>
          </div>
          <Image
            src="/ilu-0.svg"
            height={456}
            width={608}
            alt="Ilustration about me"
            priority
          />
        </header>
        <section>
          <div className="my-20 flex items-center xl:flex-row flex-col">
            <Image
              src="/ilu-1.svg"
              height={456}
              width={608}
              alt="Ilustration about me"
            />
            <div className="xl:mx-0 lg:mx-72 md:mx-24 sm:mx-16 mx-4 xl:text-left text-center">
              <h2 className={notoSerif.className + " text-2xl font-bold my-4"}>
                Wanna{" "}
                <span className={rowdies.className + " font-bold color-pink"}>
                  contact
                </span>{" "}
                me?
              </h2>
              <h3 className={notoSerif.className}>
                I&apos;m currently a{" "}
                <span className={rowdies.className + " font-bold color-pink"}>
                  student
                </span>
                , so kinda busy. I will try my best to answer all email and
                message{" "}
                <span className={rowdies.className + " font-bold color-pink"}>
                  within 2-3 days
                </span>
                . I have a very random life so yeah, it is hilarious 🤣
              </h3>
              <div className="w-full flex items-center justify-center">
                <a
                  href="mailto:thinh@thinh.tech"
                  className="no-underline color-black"
                >
                  <button
                    className={notoSerif.className + " my-10 " + style.btn_pink}
                  >
                    Contact meee
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="my-20 flex items-center xl:flex-row-reverse flex-col">
            <Image
              src="/ilu-2.svg"
              height={456}
              width={608}
              alt="Ilustration about me"
            />
            <div className="xl:mx-0 lg:mx-72 md:mx-24 sm:mx-16 mx-4 xl:text-left text-center">
              <h2 className={notoSerif.className + " text-2xl font-bold my-4"}>
                What{" "}
                <span className={rowdies.className + " font-bold color-purple"}>
                  skill
                </span>{" "}
                do I have?
              </h2>
              <SkillTable
                font={notoSerif.className}
                font2={rowdies.className}
              />
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://github.com/CutieCat6778"
                  className="no-underline color-black"
                >
                  <button
                    className={
                      notoSerif.className + " my-10 " + style.btn_purple
                    }
                  >
                    Github profile
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="my-20 flex items-center xl:flex-row flex-col">
            <Image
              src="/ilu-3.svg"
              height={456}
              width={608}
              alt="Ilustration about me"
            />
            <div className="xl:mx-0 lg:mx-72 md:mx-24 sm:mx-16 mx-4 xl:text-left text-center">
              <h2 className={notoSerif.className + " text-2xl font-bold my-4"}>
                Official{" "}
                <span className={rowdies.className + " font-bold color-yellow"}>
                  documents
                </span>{" "}
                are down here!
              </h2>
              <h3 className={notoSerif.className}>
                To apply for any {" "}
                <span className={rowdies.className + " font-bold color-yellow"}>
                  jobs
                </span>
                , every reviewer need to see your
                {" "}
                <span className={rowdies.className + " font-bold color-yellow"}>
                official documents
                </span>
                {" "}right? That why I put them down here in a{" "}
                <span className={rowdies.className + " font-bold color-yellow"}>
                google drive
                </span> link, for you to access it better 😊👌
              </h3>
              <div className="w-full flex items-center justify-center">
                <a
                  href="https://drive.google.com/drive/folders/1LdmC5LjeP0HTm80KUKvn4hAb3Q0dxsIN?usp=sharing"
                  className="no-underline color-black"
                >
                  <button
                    className={
                      notoSerif.className + " my-10 " + style.btn_yellow
                    }
                  >
                    My documents
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className={notoSerif.className + " w-full text-center"}>
          2023 © Thinh Nguyen all rights reserved
        </footer>
      </main>
    </div>
  );
}
