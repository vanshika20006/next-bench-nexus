import { motion } from "framer-motion";
import { Send } from "lucide-react";

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="text-gradient">Join Our Mentorship Program</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock your potential with personalized guidance from experienced
            mentors. Whether you aim to grow in <b>tech, design, leadership</b>,
            or entrepreneurship — we’ll help you take the next big step in your journey 🚀.
          </p>
        </motion.div>

        {/* Mentorship Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 max-w-4xl mx-auto relative"
        >
          {/* Background Graphic */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>

          <div className="glass rounded-3xl p-10 shadow-neon border border-white/10 relative">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">
              Apply Now
            </h3>
            <form className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Location (City, State)"
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="College / University"
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
              />
              <select
                required
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
              >
                <option>Select Area of Interest</option>
                <option>AI & Machine Learning</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Startup / Entrepreneurship</option>
                <option>Data Science</option>
                <option>Cybersecurity</option>
              </select>
              <textarea
                placeholder="Tell us your goals..."
                rows="4"
                className="px-4 py-3 rounded-xl border border-white/20 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="md:col-span-2 px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-3 shadow-lg shadow-pink-500/30"
              >
                <Send className="w-5 h-5" /> Submit Application
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSection;
