import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Palette, Megaphone, TrendingUp, ArrowUpRight } from "lucide-react";

const AgencySection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaigns to grow your online presence",
    },
    {
      icon: TrendingUp,
      title: "Growth Consulting",
      description: "Data-driven strategies to scale your business",
    },
  ];

  return (
    <section id="agency" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-gradient">Next Bench Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional freelancing services by talented student developers and designers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-space font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-space font-bold mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our student-led agency combines fresh perspectives with cutting-edge skills 
            to deliver exceptional results at competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="xl"
              onClick={() => window.open("https://nextbench.agency", "_blank")}
              className="group"
            >
              Visit Our Agency
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="neon"
              size="xl"
              onClick={() => window.open("https://nextbench.agency/hire", "_blank")}
            >
              Hire Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencySection;