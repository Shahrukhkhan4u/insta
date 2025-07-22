import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MessageCircle, Shield, Star, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Heart,
      title: 'Smart Matching',
      description: 'AI-powered matching connects you with compatible students from your college and nearby campuses based on interests, academic goals, and personality'
    },
    {
      icon: Users,
      title: 'Anonymous Confessions',
      description: 'Share your deepest thoughts anonymously and discover others with similar experiences. Build connections through vulnerability and authenticity'
    },
    {
      icon: MessageCircle,
      title: 'Secure Chat',
      description: 'End-to-end encrypted messaging with built-in compatibility quizzes that unlock after meaningful conversations to ensure genuine connections'
    },
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'Mandatory college email verification and optional photo verification ensure you\'re connecting with real students, not fake profiles'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="flex justify-center items-center mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div 
              className="bg-white/20 backdrop-blur-md rounded-full p-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-12 w-12 text-white" />
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Campus
            <motion.span 
              className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {' '}Connection
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The premier dating platform for college students. Discover, connect, and build meaningful relationships with fellow students.
          </motion.p>
          <motion.button
            onClick={onGetStarted}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 mx-auto"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)",
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </motion.div>
              <motion.h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </motion.h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-16"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                10K+
              </motion.div>
              <div className="text-white/80">Active Students</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                500+
              </motion.div>
              <div className="text-white/80">Partner Colleges</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              >
                50K+
              </motion.div>
              <div className="text-white/80">Successful Matches</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            What Students Say
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2 + i * 0.1, type: "spring" }}
                  >
                    <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-white/90 mb-4 italic">
                "Campus Connection helped me find my perfect study partner who became my best friend!"
              </p>
              <p className="text-white/70 font-medium">- Sarah, NYU</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.5 + i * 0.1, type: "spring" }}
                  >
                    <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-white/90 mb-4 italic">
                "The verification system makes me feel safe. Great platform for genuine connections."
              </p>
              <p className="text-white/70 font-medium">- Mike, Stanford</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Ready to Find Your Connection?
          </motion.h2>
          <motion.p 
            className="text-white/80 mb-8"
            variants={itemVariants}
          >
            Join thousands of students finding meaningful relationships
          </motion.p>
          <motion.button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold py-4 px-12 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Connecting Today
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;