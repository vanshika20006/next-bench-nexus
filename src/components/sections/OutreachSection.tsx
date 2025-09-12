import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Mic, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OutreachSection = () => {
  const { toast } = useToast();
  const [collegeForm, setCollegeForm] = useState({
    collegeName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const [speakerForm, setSpeakerForm] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    topics: "",
  });

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll get back to you within 48 hours.",
    });
    setCollegeForm({
      collegeName: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSpeakerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Speaker Application Submitted!",
      description: "Our team will review and contact you soon.",
    });
    setSpeakerForm({
      name: "",
      email: "",
      expertise: "",
      experience: "",
      topics: "",
    });
  };

  return (
    <section id="outreach" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-gradient">Community Outreach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with us to bring innovation to your campus or share your expertise with our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* College Outreach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-space font-semibold">College Collaboration</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Bring Next Bench to your campus. We organize workshops, hackathons, and tech talks.
            </p>

            <form onSubmit={handleCollegeSubmit} className="space-y-4">
              <div>
                <Label htmlFor="collegeName">College Name</Label>
                <Input
                  id="collegeName"
                  value={collegeForm.collegeName}
                  onChange={(e) => setCollegeForm({ ...collegeForm, collegeName: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  value={collegeForm.contactPerson}
                  onChange={(e) => setCollegeForm({ ...collegeForm, contactPerson: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="collegeEmail">Email</Label>
                <Input
                  id="collegeEmail"
                  type="email"
                  value={collegeForm.email}
                  onChange={(e) => setCollegeForm({ ...collegeForm, email: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={collegeForm.phone}
                  onChange={(e) => setCollegeForm({ ...collegeForm, phone: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="collegeMessage">Message</Label>
                <Textarea
                  id="collegeMessage"
                  value={collegeForm.message}
                  onChange={(e) => setCollegeForm({ ...collegeForm, message: e.target.value })}
                  rows={4}
                  className="bg-input border-border"
                />
              </div>
              <Button type="submit" variant="gradient" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Collaboration Request
              </Button>
            </form>
          </motion.div>

          {/* Speaker Application */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-space font-semibold">Call for Speakers</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Share your knowledge and inspire the next generation of innovators.
            </p>

            <form onSubmit={handleSpeakerSubmit} className="space-y-4">
              <div>
                <Label htmlFor="speakerName">Full Name</Label>
                <Input
                  id="speakerName"
                  value={speakerForm.name}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, name: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="speakerEmail">Email</Label>
                <Input
                  id="speakerEmail"
                  type="email"
                  value={speakerForm.email}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, email: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="expertise">Area of Expertise</Label>
                <Input
                  id="expertise"
                  value={speakerForm.expertise}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, expertise: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  value={speakerForm.experience}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, experience: e.target.value })}
                  required
                  className="bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="topics">Proposed Topics</Label>
                <Textarea
                  id="topics"
                  value={speakerForm.topics}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, topics: e.target.value })}
                  rows={4}
                  placeholder="List topics you'd like to speak about"
                  className="bg-input border-border"
                />
              </div>
              <Button type="submit" variant="gradient" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Apply as Speaker
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;