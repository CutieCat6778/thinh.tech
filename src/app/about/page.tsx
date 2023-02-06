import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavigationBar";
import Image from "next/image";

export default function About() {
	return (
		<div>
			<NavBar root={true} />
			<div className="my-10 md:mx-20 mx-0">
				<header className="flex justify-center items-start sm:items-center w-full flex-col-reverse sm:flex-row">
					<div className="sm:w-6/12 mt-6 sm:mt-0">
						<h1 className="mb-2">Thinh Nguyen</h1>
						<span>
							I was born into a middle-class family and raised by
							parents who are both teachers. Growing up in an
							teacher&apos;s family, I received a good education and am
							proud to have been taught by my knowledgeable
							parents.
						</span>
					</div>
					<div className="w-6/12 flex justify-start sm:justify-center">
						<Image
							src="/me_3.jpg"
							className="rounded-xl shadow-2xl"
							height={200}
							width={200}
							alt="Profile picture"
						/>
					</div>
				</header>
				<Divider props="my-12" />
				<section>
					<div>
						<h1 className="mb-5">About me</h1>
						<span>
							I was born in Ha Tinh, Vietnam, a country that was
							still struggling with poverty at the time. Despite
							limited access to technology for many, I was
							fortunate to have some exposure through my father,
							who had the opportunity to learn about Western
							culture while working abroad. This knowledge was
							invaluable for me and eventually led to my move to
							Europe.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							At 9 years old, My family have relocated to
							Bulgaria, where everything was initially quite
							unfamiliar to me. However, I quickly adapted and
							made a lot of friends. The Balkan countries have a
							friendly atmosphere and the people are kind, which
							made my transition smoother. I also learned the
							language while living there, further enhancing my
							experience in the region.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							During my time in Bulgaria, I accomplished much. I
							was able to enroll in the National Mathematics
							Gymnasium in Sofia despite my limited Bulgarian
							language skills. However, after my father moved to
							Germany for work, my family and I faced significant
							difficulties as we navigated life without him.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							After a few months, my family was reunited as my
							mother and I moved to join my father in Germany. I
							had to quickly adapt to my new surroundings and
							assist my parents, who struggled with the German
							language. The pressure to improve my own German
							skills was challenging, but I persevered.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							And now, I am writing this text through ChatGPT and
							actively working to improve my programming skills.
							My goal is to support my parents, so that they can
							live without financial worries or other stressors,
							after having faced many challenges in their lives. I
							am determined to succeed and make a better future
							for myself and my family.{" "}
						</span>
					</div>
				</section>
				<Divider />
				<Footer />
			</div>
		</div>
	);
}
