import { Card, CardContent } from "@/components/ui/card";

const hobbies = [
  {
    title: "Playing board games",
    content: [
      "I am really into playing board games with my friends and family! I frequently go to the Victory Point board game cafe in Berkeley with my friends. For just $8, you get access to their massive board game catalog. I love board games that force players to be strategic and optimize their play. I also recently got back into playing Magic the Gathering, which has been very fun!",
      "My favorite board games right now are Scythe, Terraforming Mars, and Hanabi."
    ],
    image: "board games2.jpg",
    alt: "Board game hobby"
  },
  {
    title: "Watching Star Trek",
    content: [
      "As a child, I would watch episodes of Star Trek with my parents. We would dress up as characters from Star Trek every halloween. As an adult, I am still working my way through all the episodes my parents watched when they were younger.",
      "I'm currently watching Star Trek: Voyager. No spoilers please!"
    ],
    image: "star trek.jpg",
    alt: "star trek",
    reversed: true
  },
  {
    title: "Cooking and baking",
    content: [
      "I have been eating since a very young age, and I always took great joy in trying new recipes and understanding the science behind different cooking techniques. It's fascinating how small changes in ingredients or temperature can dramatically affect the outcome.",
      "There's something satisfying about the precision required in baking that appeals to my analytical nature. I also just like bread."
    ],
    image: "flat bread.jpg",
    alt: "Cooking and baking interests"
  }
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-slate-100 mb-6">Hobbies & Interests</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            When I'm not analyzing data, here's what I enjoy doing
          </p>
        </div>
        
        <div className="space-y-16">
          {hobbies.map((hobby, index) => (
            <Card key={hobby.title} className="bg-slate-900 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={hobby.reversed ? 'order-2 lg:order-1' : ''}>
                    <h2 className="text-3xl text-slate-200 mb-6">{hobby.title}</h2>
                    {hobby.content.map((paragraph, idx) => (
                      <p key={idx} className="text-base text-slate-200 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <img 
                    src={hobby.image} 
                    alt={hobby.alt} 
                    className={`rounded-xl shadow-lg w-full h-80 object-cover ${
                      hobby.reversed ? 'order-1 lg:order-2' : ''
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
