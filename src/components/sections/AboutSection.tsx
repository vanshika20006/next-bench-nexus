import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const cards = [
    {
      icon: Eye,
      title: "Vision",
      description: "To create a global network of student innovators who collaborate, learn, and build solutions for tomorrow's challenges.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Target,
      title: "Mission",
      description: "Empowering students through workshops, hackathons, and real-world projects that bridge the gap between education and industry.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Innovation, collaboration, inclusivity, and continuous learning form the foundation of everything we do at Next Bench.",
      gradient: "bg-gradient-hero",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-gradient">About Next Bench</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than just a community - we're a movement of passionate students 
            dedicated to learning, growing, and creating impact together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-xl p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${card.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse`}>
                  <card.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-space font-semibold mb-4">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;