import React, { useState } from 'react';
import { Camera, Edit2, Settings, Shield, Star, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    age: 21,
    college: 'Stanford University',
    department: 'Computer Science',
    year: 'Junior',
    bio: 'Love coding, hiking, and good coffee. Looking for someone to explore the Bay Area with!',
    relationshipStatus: 'Single',
    interests: ['Programming', 'Hiking', 'Coffee', 'Travel', 'Photography'],
    photos: [
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  });

  const [settings, setSettings] = useState({
    notifications: true,
    showDistance: true,
    invisibleMode: false,
    autoMatch: false
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <div className="max-w-lg mx-auto p-4 pt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-colors">
            <Settings size={20} />
          </button>
          <button className="bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-2 transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'profile'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            activeTab === 'settings'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          Settings
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          {/* Photo Grid */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Photos</h3>
              <button className="text-blue-600 text-sm font-medium">Add Photo</button>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {profile.photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={photo}
                    alt={`Profile ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  {index === 0 && (
                    <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs px-1 rounded">
                      Main
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Profile Info */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Profile Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-1 text-blue-600 text-sm font-medium"
              >
                <Edit2 size={14} />
                <span>{isEditing ? 'Save' : 'Edit'}</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">{profile.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profile.age}
                      onChange={(e) => setProfile(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">{profile.age}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.college}
                    onChange={(e) => setProfile(prev => ({ ...prev, college: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800">{profile.college}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.department}
                      onChange={(e) => setProfile(prev => ({ ...prev, department: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">{profile.department}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  {isEditing ? (
                    <select
                      value={profile.year}
                      onChange={(e) => setProfile(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  ) : (
                    <p className="text-gray-800">{profile.year}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                    maxLength={200}
                  />
                ) : (
                  <p className="text-gray-800">{profile.bio}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full border-2 border-dashed">
                      + Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Verification Status</h4>
                  <p className="text-sm text-gray-600">Your profile is verified</p>
                </div>
              </div>
              <div className="bg-green-500 text-white p-1 rounded-full">
                <Star size={16} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">Privacy & Safety</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Push Notifications</h4>
                  <p className="text-sm text-gray-600">Get notified about matches and messages</p>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, notifications: !prev.notifications }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Show Distance</h4>
                  <p className="text-sm text-gray-600">Display your distance to other users</p>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, showDistance: !prev.showDistance }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.showDistance ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.showDistance ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Invisible Mode</h4>
                  <p className="text-sm text-gray-600">Hide your profile from discovery</p>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, invisibleMode: !prev.invisibleMode }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.invisibleMode ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.invisibleMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
            
            <div className="space-y-3">
              <button className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Change Password
              </button>
              <button className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Blocked Users
              </button>
              <button className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Privacy Policy
              </button>
              <button className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Terms of Service
              </button>
              <button className="w-full text-left text-red-600 hover:text-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;