import React, { useState, useEffect } from 'react';
import { Heart, X, MessageCircle, ChevronLeft, ChevronRight, MapPin, GraduationCap } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';

const DiscoverPage: React.FC = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const currentUser = mockUsers[currentUserIndex];

  const getPhotoInfo = (photoIndex: number) => {
    switch (photoIndex) {
      case 0:
        return {
          title: 'Basic Info',
          details: [
            { label: 'Name', value: currentUser.name },
            { label: 'Age', value: `${currentUser.age}` },
            { label: 'College', value: currentUser.college }
          ]
        };
      case 1:
        return {
          title: 'Academic Info',
          details: [
            { label: 'Bio', value: currentUser.bio },
            { label: 'Department', value: currentUser.department },
            { label: 'Year', value: currentUser.year }
          ]
        };
      case 2:
        return {
          title: 'Preferences',
          details: [
            { label: 'Status', value: currentUser.relationshipStatus },
            { label: 'Interests', value: currentUser.interests.join(', ') }
          ]
        };
      default:
        return { title: '', details: [] };
    }
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % 3);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleAction = (action: 'like' | 'dislike' | 'dm') => {
    if (swipeCount >= 15 && action !== 'dm') {
      setShowLimitModal(true);
      return;
    }

    if (action !== 'dm') {
      setSwipeCount(prev => prev + 1);
    }

    // Move to next user
    setCurrentUserIndex((prev) => (prev + 1) % mockUsers.length);
    setCurrentPhotoIndex(0);
  };

  const photoInfo = getPhotoInfo(currentPhotoIndex);

  return (
    <div className="max-w-lg mx-auto p-4 pt-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Photo Section */}
        <div className="relative h-96">
          <img
            src={currentUser.photos[currentPhotoIndex]}
            alt={`${currentUser.name} - Photo ${currentPhotoIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Photo Navigation */}
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <div className="flex space-x-1">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`h-1 w-20 rounded-full ${
                    index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            {currentUser.verified && (
              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                ✓ Verified
              </div>
            )}
          </div>

          <button
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Swipe Count */}
          <div className="absolute top-4 right-4">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              Swipes: {swipeCount}/15
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{photoInfo.title}</h3>
            <div className="space-y-2">
              {photoInfo.details.map((detail, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600 font-medium">{detail.label}:</span>
                  <span className="text-gray-800">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distance and Match Info */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{currentUser.distance} away</span>
            </div>
            <div className="flex items-center space-x-1">
              <GraduationCap size={14} />
              <span>Same campus</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => handleAction('dislike')}
              className="bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={() => handleAction('dm')}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <MessageCircle size={24} />
            </button>
            
            <button
              onClick={() => handleAction('like')}
              className="bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Premium Limit Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Limit Reached</h3>
            <p className="text-gray-600 mb-6">
              You've reached your daily limit of 15 swipes. Upgrade to Premium for unlimited swipes!
            </p>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl">
                Upgrade to Premium
              </button>
              <button
                onClick={() => setShowLimitModal(false)}
                className="w-full bg-gray-100 text-gray-600 font-medium py-3 rounded-xl"
              >
                Continue Tomorrow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverPage;