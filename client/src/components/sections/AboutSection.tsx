import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-16 sm:px-16 lg:px-16">
        
          <h1 className="text-2xl md:text-6xl text-slate-900 dark:text-slate-100 mb-6">About Thomas</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mx-auto">
            Aspiring data scientist passionate about turning complex data into actionable insights
          </p>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-6">
          <div className="space-y-6">
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Hello, and welcome to my portfolio! I'm Thomas Lee, an aspiring data scientist with expertise in machine learning,
              statistical analysis, and data visualization. I love solving complex problems, discovering insights
              hidden within data, and building models to deepen our understanding of real-world phenomena.
            </p>
            <br />
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">I graduated from U.C. Berkeley in 2024 majoring in Computer Science with a minor in Data Science.
          While earning my degree, I gained a great deal of experience working with data as a machine learning intern
          in the biotechnology industry and as a researcher in several U.C. Berkeley labs. </p>
          </div>
          <div className="text-center">
            <img
              src="thomasleepfp.jpg"
              alt="Thomas Lee Profile Picture"
              className="w-45 h-45 lg:mx-0 mt-10 shadow-xl object-cover rounded"
            />
          </div>
        </div>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          Since then,
          I have been working as a data science intern at the East Bay Municipal Utility District (<a href='https://www.ebmud.com/'>EBMUD</a>), the largest
          provider of clean drinking water in the East Bay, where I tackle critical questions like
          "how will a $200 million investment into smart water infrastructure manifest itself as water savings from our customers?"
          and "how can we leverage our decades of historical pipeline condition data to improve pipeline failure forcasting?"
          I have found that the most interesting questions require both technical skills and creativity to draw meaningful insights that motivate decision making.
        </p>
        <br />
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          With my strong foundation in Python, SQL, and other data science frameworks, I am passionate about building
          predictive models, conducting statistical analyses, and creating compelling data visualizations that
          drive business decisions. I am currently seeking opportunities to apply my skills in a dynamic data science role where I can contribute
          to meaningful projects and continue growing my skills as a data scientist.
        </p>

      </div>
    </section>
  );
}
