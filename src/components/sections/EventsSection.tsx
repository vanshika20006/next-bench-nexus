import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Radio, Clock, MapPin, Users } from "lucide-react";

const EventsSection = () => {
  const pastEvents = [
    {
      id: 1,
      title: "HackNext 2024",
      description: "48-hour hackathon with 500+ participants",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=400&fit=crop",
      date: "March 15-17, 2024",
      winners: ["Team Alpha", "Team Beta", "Team Gamma"],
    },
    {
      id: 2,
      title: "AI Workshop Series",
      description: "5-day intensive AI/ML workshop",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      date: "February 5-9, 2024",
      participants: 200,
    },
    {
      id: 3,
      title: "Web3 Summit",
      description: "Blockchain and Web3 conference",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      date: "January 20, 2024",
      speakers: 15,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "CodeFest 2024",
      date: "April 10, 2024",
      time: "10:00 AM",
      location: "Virtual + Mumbai",
      description: "Annual coding competition with amazing prizes",
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      date: "April 25, 2024",
      time: "2:00 PM",
      location: "Delhi NCR",
      description: "Learn design thinking principles from industry experts",
    },
    {
      id: 3,
      title: "Startup Bootcamp",
      date: "May 5-7, 2024",
      time: "9:00 AM",
      location: "Bangalore",
      description: "3-day intensive startup building workshop",
    },
  ];

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
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
          <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-3 glass">
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live">Live Now</TabsTrigger>
          </TabsList>

          {/* Past Events */}
          <TabsContent value="past" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                    <h3 className="text-xl font-space font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    {event.winners && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-accent" />
                          Winners:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.winners.map((winner) => (
                            <span key={winner} className="text-xs bg-gradient-primary text-primary-foreground px-2 py-1 rounded">
                              {winner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
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
                    <h3 className="text-xl font-space font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
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

          {/* Live Events */}
          <TabsContent value="live" className="mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <Radio className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-space font-semibold mb-4">
                Live Event Starting Soon!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join us for our weekly tech talk session. Industry experts share insights on the latest technologies.
              </p>
              <div className="aspect-video bg-card rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-muted-foreground mb-4 mx-auto" />
                  <p className="text-muted-foreground">Live stream will appear here</p>
                </div>
              </div>
              <Button variant="neon" size="lg">
                Join Live Session
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;