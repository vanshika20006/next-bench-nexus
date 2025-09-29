import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon
const ambassadorIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ✅ All Campus Ambassadors with College, State & Coordinates
const ambassadors = [
  { id: 1, name: "Tirupathi", state: "Andhra Pradesh", college: "Andhra University College of Engineering, Vishakapatnam", position: [17.6868, 83.2185] },
  { id: 2, name: "Charisma", state: "Andhra Pradesh", college: "Prasad V. Potluri Siddhartha Institute of Technology, Vijayawada", position: [16.5062, 80.6480] },
  { id: 3, name: "Jyotiraditya", state: "Punjab", college: "Lovely Professional University", position: [31.2550, 75.7050] },
  { id: 4, name: "Nishu", state: "Uttar Pradesh", college: "Vishveshwarya Group of Institutions, Dadri", position: [28.5535, 77.5560] },
  { id: 5, name: "Nitya Chaurasiya", state: "Madhya Pradesh", college: "D.A.V.V, Indore", position: [22.7196, 75.8577] },
  { id: 6, name: "Rohan Singh", state: "Uttar Pradesh", college: "Galgotia University", position: [28.4744, 77.5030] },
  { id: 7, name: "Amarjot Kaur", state: "Punjab", college: "Lovely Professional University", position: [31.2550, 75.7050] },
  { id: 8, name: "Sachin Shekhavat", state: "Punjab", college: "Lovely Professional University", position: [31.2550, 75.7050] },
  { id: 9, name: "Varsh Bhati", state: "Uttar Pradesh", college: "Jaypee University", position: [28.5672, 77.3294] },
  { id: 10, name: "Ritanshu Sharma", state: "Uttar Pradesh", college: "R.R University", position: [26.8467, 80.9462] },
  { id: 11, name: "Divyanjali Tiwari", state: "Punjab", college: "Chitkara University", position: [30.5161, 76.6594] },
  { id: 12, name: "Sakshi Sharma", state: "Punjab", college: "Lovely Professional University", position: [31.2550, 75.7050] },
  { id: 13, name: "Sahebe Alam", state: "Uttarakhand", college: "J.B.I.T College", position: [30.3165, 78.0322] },
  { id: 14, name: "Vivek Parekh", state: "Gujarat", college: "Government Polytechnic, Kheda", position: [22.7500, 72.6833] },
  { id: 15, name: "Ishwar Khosla", state: "Punjab", college: "Lovely Professional University", position: [31.2550, 75.7050] },
  { id: 16, name: "Utkarsh", state: "Madhya Pradesh", college: "Devi Ahilya Vishwavidyalaya, Indore", position: [22.7196, 75.8577] },
  { id: 17, name: "Anuj", state: "Andhra Pradesh", college: "N.S Raju Institute of Technology", position: [16.3067, 81.2546] },
  { id: 18, name: "Hirdesh Sharma", state: "Uttar Pradesh", college: "Jaypee University", position: [28.5672, 77.3294] },
  { id: 19, name: "Ritesh", state: "Uttar Pradesh", college: "Mangalmay Institute of Engineering & Technology", position: [28.5368, 77.3850] },
  { id: 20, name: "Niharika Singh", state: "Delhi", college: "Indira Gandhi Delhi Technical University for Women", position: [28.6692, 77.2324] },
  { id: 21, name: "Anjali Shah", state: "Uttar Pradesh", college: "H.I.M.T College of Pharmacy", position: [28.4595, 77.5000] },
  { id: 22, name: "Mohd. Taushif Reza", state: "Uttarakhand", college: "J.B.I.T College", position: [30.3165, 78.0322] },
  { id: 23, name: "Aarav Kumar", state: "Uttar Pradesh", college: "V.G.I", position: [27.5700, 78.0000] },
];

const CampusAmbassadorsSection = () => {
  return (
    <section id="ambassadors" className="py-20 relative">
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
            <span className="text-gradient">Campus Ambassadors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ambassadors represent <b>different states across India</b>, building strong local communities.
          </p>
        </motion.div>

        {/* Map + Ambassadors List */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 shadow-neon h-[600px] w-full"
          >
            <MapContainer
              center={[20.5937, 78.9629]} // India center
              zoom={5}
              scrollWheelZoom={true}
              className="h-full w-full rounded-2xl"
            >
              {/* Free tile map */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {/* Ambassador markers */}
              {ambassadors.map((amb) => (
                <Marker key={amb.id} position={amb.position} icon={ambassadorIcon}>
                  <Popup className="text-center">
                    <h3 className="font-semibold">{amb.name}</h3>
                    <p>{amb.college}</p>
                    <p className="text-sm text-muted-foreground">{amb.state}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Ambassadors List with Vertical Scroll */}
          <div className="grid sm:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2">
            {ambassadors.map((amb) => (
              <motion.div
                key={amb.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass rounded-xl p-5 flex flex-col gap-2 hover:shadow-neon transition"
              >
                <h3 className="text-lg font-semibold">{amb.name}</h3>
                <p className="text-sm">{amb.college}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" /> {amb.state}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusAmbassadorsSection;
