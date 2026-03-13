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
    icon: Award,
    title: "Quality Excellence",
    description:
      "We never compromise on quality. Every product we supply meets the highest international standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your success is our success. We work closely with you to understand and meet your specific needs.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We partner with world-leading manufacturers to bring you the best tooling solutions available.",
  },
  {
    icon: Cog,
    title: "Technical Expertise",
    description:
      "Our team of engineers provides expert guidance to help you select the right tools for your applications.",
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
          content={`Learn about ${siteConfig.name} - Your trusted partner for premium industrial tooling solutions with 15+ years of experience.`}
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

                <p className="text-gray-600 text-sm">
                  Providing Win Win Tooling Solutions along with leading-edge machining solutions,
                  delivering precision and performance to modern manufacturing.
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
              Quality is at the heart of everything we do. We partner exclusively with
              world-renowned manufacturers who maintain the highest international
              standards. Every product undergoes thorough inspection before reaching
              you, backed by our 25+ years of industry expertise and unwavering
              commitment to customer satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                Rigorous Inspection
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
