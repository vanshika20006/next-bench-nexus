import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

// 🛠 Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const EventsSection = () => {
  // 🏆 Past Events
  const pastEvents = [
    {
      id: 1,
      title: "Quiz Showdown",
      description: "Test your knowledge and Win",
      image: "One.jpg",
      date: "July 14-15, 2025",
      winners: ["Team Alpha", "Team Beta", "Team Gamma"],
    },
    {
      id: 2,
      title: "MindIgnite 2.0",
      description: "Open Stage Ideation Challenge",
      image: "two.jpg",
      date: "February 5-9, 2024",
      participants: 200,
    },
    {
      id: 3,
      title: "The Untold Problem",
      description: "Are u a creator at Heart? ready to make content that matters?",
      image: "three.jpg",
      date: "July 19-23, 2025",
      speakers: 15,
    },
    {
      id: 4,
      title: "Frontend Designing Challenge",
      description: "Design and Develop Landing page for NextBench",
      image: "four.jpg",
      date: "September, 2025",
    },
    {
      id: 5,
      title: "Ui/UX Workshop",
      description: "The Psychology Behind Addictive Ui/UX in Big Brands",
      image: "five.jpg",
      date: "August 17, 2025",
    },
    {
      id: 6,
      title: "SpeakEase",
      description: "From nervous to natural :Level-Up your speaking Games",
      image: "six.jpg",
      date: "August 3, 2025",
    },
    {
      id: 7,
      title: "Startup Pitching Session",
      description: "Building a startup with zero budget",
      image: "seven.jpg",
      date: "August 31, 2025",
    },
    {
      id: 8,
      title: "Agentic AI",
      description: "Agentic AI unlocked: Build and Understand your own AI Agents",
      image: "eight.jpg",
      date: "September 14, 2025",
    },
    {
      id: 9,
      title: "AI for Students",
      description: "Tools, Trends and Tips That Every Student Must Know",
      image: "nine.jpg",
      date: "September 21, 2025",
    },
  ];

  // 📅 Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Escape",
      date: "Upcoming",
      time: "Updated Soon",
      location: "Updated Soon",
      description: "Can you Escape the Tech Maze Before The Times Out?",
    }
  ];

  // 🥇 Winners
  const winners = [
    {
      id: 1,
      name: "Vanshika Sharma",
      college: "DAVV, Indore",
      image: "w1.jpg",
      event: "Code The Bench",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      college: "IIT Bombay",
      image: "w2.jpg",
      event: "HackNext 2024",
    },
    {
      id: 3,
      name: "Priya Verma",
      college: "NIT Bhopal",
      image: "w3.jpg",
      event: "AI Workshop",
    },
    {
      id: 4,
      name: "Arjun Singh",
      college: "IIPS, Indore",
      image: "w4.jpg",
      event: "Web3 Summit",
    },
    {
      id: 5,
      name: "Janya Kumari",
      college: "VIT Vellore",
      image: "w5.jpg",
      event: "Design Jam",
    },
  ];

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-gradient">Events Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exciting events - from hackathons to workshops
          </p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full md:w-[450px] mx-auto grid-cols-3 glass">
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="winners">Winners</TabsTrigger>
          </TabsList>

          {/* Past Events */}
          <TabsContent value="past" className="mt-8">
            <div className="max-h-[700px] overflow-y-auto pr-2">
              <div className="grid md:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-space font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-neon transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-space font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1 text-accent">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-secondary">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <Button variant="gradient" size="lg">
                    Register Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Winners Section */}
          <TabsContent value="winners" className="mt-8">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={30}
    slidesPerView={1}
    className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg overflow-hidden"
  >
    {winners.map((winner) => (
      <SwiperSlide key={winner.id}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[500px] flex items-center justify-center bg-black"
        >
          <img
            src={winner.image}
            alt={winner.name}
            className="w-full h-full object-contain bg-black"
          />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;
