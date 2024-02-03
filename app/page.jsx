export default function Home() {
  const lang = ["HTML", "CSS", "JavaScript", "TypeScript"];
  const tech = [
    "React",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Redux",
    "Vuex",
    "Node.js",
    "Express.js",
    "Supabase",
    "Firebase",
    "MongoDB",
    "Tailwind CSS",
    "Chart.js",
  ];
  const about =
    "As a Front End Developer, I'm passionate about breathing life into design ideas by building user-friendly and performant web applications using technologies like React and Vue.js. When I'm not coding, you can find me lifting weights at my home gym.";

  return (
    <main
      className="
      text-slate-200 min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-purple-900 selection:bg-purple-900 flex items-center justify-center font-semibold w-full"
    >
      <div className="px-4 lg:px-0 w-full lg:w-[1024px] my-8 gap-4 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
          <div className="bg-slate-900 border w-full lg:w-4/6 border-slate-800 shadow-md p-8 rounded-3xl">
            <h2 className="text-lg mb-6">about.</h2>
            <p className="text-2xl lg:text-4xl">{about}</p>
          </div>

          <div className="bg-slate-900 border justify-between rounded-3xl w-full lg:w-2/6 border-slate-800 shadow-md flex flex-col">
            <img
              src={process.env.IMG || "./favicon.ico"}
              className="rounded-full w-32 h-32 self-center my-6 lg:my-auto"
            />
            <div className="flex flex-col justify-between w-full">
              <a
                target="_blank"
                href="https://github.com/ask-v1"
                className="text-center hover:text-purple-400 hover:bg-purple-900 duration-300 border-t border-slate-800 shadow-md p-4 w-full text-2xl lg:text-4xl"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ask-online"
                className="text-center hover:text-purple-400 hover:bg-purple-900 duration-300 border-t border-slate-800 shadow-md p-4 w-full text-2xl lg:text-4xl"
              >
                LinkedIn
              </a>
              <a
                href="mailto:a.kntr93@gmail.com"
                className="text-center hover:text-purple-400 hover:bg-purple-900 duration-300 border-t rounded-b-3xl border-slate-800 shadow-md p-4 w-full text-2xl lg:text-4xl"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="bg-slate-900 flex flex-col border rounded-3xl p-8 w-full lg:w-4/6 border-slate-800 shadow-md">
            <h2 className="text-lg mb-6">tech.</h2>

            <div className="flex flex-row w-full gap-2 items-center flex-wrap">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-2.5 py-1 rounded-full text-purple-400 border border-purple-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 flex w-full lg:w-2/6 flex-col border rounded-3xl p-8 border-slate-800 shadow-md">
            <h2 className="text-lg mb-6">lang.</h2>

            <div className="flex flex-row gap-2 items-center flex-wrap">
              {lang.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-2.5 py-1 rounded-full text-purple-400 border border-purple-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between text-lg w-full border-slate-800 shadow-md px-8 py-4 rounded-3xl">
          <p>ahmet kantar.</p>
          <p>all rights reserved. © 2024</p>
        </div>
      </div>
    </main>
  );
}
