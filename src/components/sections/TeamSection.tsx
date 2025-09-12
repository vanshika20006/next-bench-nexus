import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Founder & President",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      bio: "Passionate about building communities and fostering innovation among students.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Technical Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      bio: "Full-stack developer with a love for teaching and mentoring fellow students.",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Events Coordinator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      bio: "Organizing hackathons and workshops to bring the community together.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Sofia Rodriguez",
      role: "Design Head",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
      bio: "Creating beautiful experiences and leading the creative direction of Next Bench.",
      social: {
        github: "#",
        twitter: "#",
      },
    },
    {
      id: 5,
      name: "Raj Patel",
      role: "Outreach Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
      bio: "Connecting with colleges and organizations to expand our community reach.",
      social: {
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Content Strategist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      bio: "Crafting compelling stories and managing our community content.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-gradient">Core Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving Next Bench forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer group"
            >
              <div className="glass rounded-xl p-6 hover:shadow-neon transition-all duration-300 hover:-translate-y-2">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full bg-card"
                  />
                </div>
                <h3 className="text-xl font-space font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-center">{member.role}</p>
                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.social.github && (
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                  {member.social.linkedin && (
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                  {member.social.twitter && (
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="glass border-border/50">
              <DialogHeader>
                <DialogTitle className="text-2xl font-space">
                  <span className="text-gradient">{selectedMember.name}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-primary p-1">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full rounded-full bg-card"
                  />
                </div>
                <p className="text-primary font-semibold">{selectedMember.role}</p>
                <p className="text-muted-foreground text-center">{selectedMember.bio}</p>
                <div className="flex gap-4">
                  {selectedMember.social.github && (
                    <a href={selectedMember.social.github} className="hover:text-primary transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a href={selectedMember.social.linkedin} className="hover:text-primary transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a href={selectedMember.social.twitter} className="hover:text-primary transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;