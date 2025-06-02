import { Star, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { repositories } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";


export default function RepositoriesSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    
    <section id="repositories" className="py-16 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-slate-100 mb-6">Repositories</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A list of project repositories found in my portfolio
          </p>
        </div>
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {repositories.map((repo) => (
              <a href={repo.repolink} target="_blank">
              <Card key={repo.name} className="bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-base font-bold text-slate-100">{repo.name}</CardTitle>
                    <Github className="h-6 w-6 text-slate-100" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{repo.description}</p>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${repo.language.color}`}
                      />
                      <span>{repo.language.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
