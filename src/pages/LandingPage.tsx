import React from 'react';
import { Heart, Users, MessageCircle, Shield, Star, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Heart,
      title: 'Smart Matching',
      description: 'Connect with students from your college and nearby campuses'
    },
    {
      icon: Users,
      title: 'Anonymous Confessions',
      description: 'Share thoughts anonymously and connect over shared experiences'
    },
    {
      icon: MessageCircle,
      title: 'Secure Chat',
      description: 'Safe messaging with compatibility quizzes after meaningful conversations'
    },
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'College verification ensures authentic connections'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Campus
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {' '}Connection
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            The premier dating platform for college students. Discover, connect, and build meaningful relationships with fellow students.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Partner Colleges</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Successful Matches</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Students Say</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">
                "Campus Connection helped me find my perfect study partner who became my best friend!"
              </p>
              <p className="text-white/70 font-medium">- Sarah, NYU</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">
                "The verification system makes me feel safe. Great platform for genuine connections."
              </p>
              <p className="text-white/70 font-medium">- Mike, Stanford</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Connection?</h2>
          <p className="text-white/80 mb-8">Join thousands of students finding meaningful relationships</p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold py-4 px-12 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Connecting Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;