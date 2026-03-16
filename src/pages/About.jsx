import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Cog,
  Shield,
  TrendingUp,
  RefreshCw,
  Briefcase,
  Package,
  CheckCircle,
} from "lucide-react";
import { siteConfig, getFullUrl } from "../utils/siteConfig";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "12+", label: "Global Brands" },
  { value: "1000+", label: "Products Delivered" },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "Our focus would be on understanding & serving customer needs towards achieving the need of customer & getting desired results.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We partner with world-leading manufacturers to bring you the best tooling solutions available.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Quality is at the heart of everything we do. We partner exclusively with world-renowned manufacturers who maintain the highest international standards. Backed by our 25+ years of industry expertise and unwavering commitment to customer satisfaction, our products ensure world quality standards to meet customer requirements, ensuring consistency of performance in their machining to get the best results.",
  },
  {
    icon: Cog,
    title: "Technical Expertise",
    description:
      "We provide combined expert solutions working with our principals to get best results for our customers.",
  },
];

const capabilities = [
  "Solid Carbide End Mills",
  "Tool Holders",
  "Indexable Cutting Tools",
  "Machine Tool",
  "PCD & CBN Tool Solutions",
  "Tool Presetter - Online & Offline",
  "Custom Tooling Solutions",
  "Technical Consultation",
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - {siteConfig.name}</title>
        <meta
          name="description"
          content={`Learn about ${siteConfig.name} - Your trusted partner for premium industrial tooling solutions with 25+ years of experience.`}
        />
        <link rel="canonical" href={getFullUrl('/about')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-500 to-navy-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/companyProfileBg.png')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-green-400"> Tool Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 5+ years, Win Win Tooling Solutions has been at the
              forefront of industrial tooling, providing world-class solutions
              to manufacturing companies across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-premium p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-navy-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Company <span className="text-green-500">Profile</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Introduction */}
              <div className="bg-gradient-to-br from-navy-500 to-navy-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-green-400" />
                  Total Tooling Solution & Service Providers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-white font-semibold">Win Win Tooling Solutions</span> offers a wide range of tooling solutions to manufacturing industries such as die & mould, automotive, machinery, aerospace, Medical, Oil & Gas with unique products. We consistently strive to be a company which would respond rapidly to the changing business needs of our customers.
                </p>
              </div>

              {/* Vision Quote */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-6">
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">"Continuous Improvement"</h4>
                    <p className="text-gray-600 leading-relaxed">
                      is our vision that we're dedicated to pursue all the time, so we always strive for providing the right products and service quality, maintaining stable delivery promise and securing the best before/after sales services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-navy-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">25+ Years of Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our Business Manager has 25 plus years of sales & marketing experience working with major cutting tool companies, bringing unparalleled expertise to every customer interaction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Products & Offerings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Products Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Package className="w-6 h-6 text-green-500" />
                  Our Product Range
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We offer comprehensive tooling solutions that support in enhancing your process & achieve better cost saving solutions in your applications:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "CNC & VMC Machines",
                    "Cutting Tools",
                    "Tool Holders",
                    "Tool Presetters",
                    "Measuring & Probing",
                    "Testing Technology",
                    "Storage Products",
                    "Laser Marking",
                    "CMM Equipment",
                    "Angle Heads",
                    "Inserts",
                    "Custom Solutions",
                  ].map((product) => (
                    <div key={product} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Served */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Die & Mould",
                    "Automotive",
                    "Aerospace",
                    "Medical",
                    "Oil & Gas",
                    "Machinery",
                    "General Manufacturing",
                  ].map((industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 font-medium border border-green-200 shadow-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Excellence Through
                <span className="text-green-500"> Collaboration</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bring world-class tooling solutions
                  to Indian manufacturers, Win Win Tooling Solutions has grown
                  to become a trusted name in the industry.
                </p>
                <p>
                  Our journey began with a simple belief: that every
                  manufacturer deserves access to the best tools available
                  globally. Today, we partner with leading international brands
                  to make this vision a reality.
                </p>
                <p>
                  We understand that in precision manufacturing, the quality of
                  your tools directly impacts your output. That's why we go
                  beyond just supplying products - we provide comprehensive
                  solutions backed by technical expertise and exceptional
                  service.
                </p>
              </div>

              {/* Sister Company Highlight */}
              <div className="sister-company">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                  Our Brand
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  WIN WIN END MILLS
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  WIN WIN's new range of Solid Carbide End Mills represent a new direction in our branding of end mill products all under the WIN WIN brand name.
                </p>

                <p className="text-gray-600 text-sm font-semibold mb-2">Features and Benefits:</p>
                <p className="text-gray-600 text-sm mb-3">
                  Solid carbide end mills that are suited for industries in Die Mold upto HRC65, Automotive, Medical, Valve machining, Aluminium machining & most common milling operations such as slotting, plunging, side and face milling, as well as ramping and copy milling in a wide range of materials such as P20, Steels, CI, SS, Titanium, Inconel etc.
                </p>

                <p className="text-gray-600 text-sm mb-3">
                  Our range of Solid carbide Endmills for die & mold come with a variety of series. Each series with their own characteristics and application strengths.
                </p>

                <p className="text-gray-600 text-sm">
                  WIN WIN end mill family offers, ranges of uncoated and coated end mills with options for square end, ball nosed, and radius corners as well as various length options.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-navy-500 rounded-2xl p-6 text-white">
                <Target className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-300 text-sm">
                  To empower manufacturers with the best tooling solutions,
                  driving efficiency and precision in every operation.
                </p>
              </div>
              <div className="bg-green-500 rounded-2xl p-6 text-white">
                <Eye className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-green-100 text-sm">
                  To be the most trusted industrial tooling partner in India,
                  known for quality, innovation, and customer success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-navy-100 text-navy-600 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives <span className="text-green-500">Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from selecting partners to
              serving customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-navy-500">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Tooling
                <span className="text-green-400"> Solutions</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                From cutting tools to tool holding systems, we offer a complete
                range of solutions to meet your manufacturing needs. Our
                technical team works with you to identify the right products for
                your specific applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center text-white"
                  >
                    <Shield className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <img
                src="/assets/generalMachineBG.png"
                alt="Our Capabilities"
                className="w-full rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Quality Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Committed to Excellence{" "}
              <span className="text-green-500">Every Step of the Way</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our products ensures the world quality standard to meet customer requirements ensuring consistency of performance in their machining to get the best results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                High Quality Products
              </div>
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                Global Brand Partners
              </div>
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                Expert Technical Support
              </div>
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                Customer Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
