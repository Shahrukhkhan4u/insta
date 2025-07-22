import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Eye, EyeOff, Send } from 'lucide-react';
import { mockConfessions } from '../data/mockConfessions';

const ConfessionPage: React.FC = () => {
  const [showNewConfession, setShowNewConfession] = useState(false);
  const [confessionText, setConfessionText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [selectedConfession, setSelectedConfession] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmitConfession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confessionText.trim()) return;
    
    // Here you would submit the confession
    console.log('New confession:', { text: confessionText, anonymous: isAnonymous });
    
    setConfessionText('');
    setShowNewConfession(false);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    // Add comment logic here
    setComment('');
  };

  return (
    <div className="max-w-lg mx-auto p-4 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Confessions</h2>
        <button
          onClick={() => setShowNewConfession(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-xl hover:shadow-lg transition-all"
        >
          New Confession
        </button>
      </div>

      {/* New Confession Modal */}
      {showNewConfession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Share Your Confession</h3>
            
            <form onSubmit={handleSubmitConfession}>
              <textarea
                value={confessionText}
                onChange={(e) => setConfessionText(e.target.value)}
                placeholder="What's on your mind? Share anonymously..."
                className="w-full h-32 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                maxLength={500}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isAnonymous ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isAnonymous ? <EyeOff size={16} /> : <Eye size={16} />}
                    <span className="text-sm font-medium">
                      {isAnonymous ? 'Anonymous' : 'Show Identity'}
                    </span>
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  {confessionText.length}/500
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewConfession(false)}
                  className="flex-1 bg-gray-100 text-gray-600 font-medium py-3 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 rounded-xl"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confessions List */}
      <div className="space-y-4">
        {mockConfessions.map((confession, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                {confession.isAnonymous ? (
                  <EyeOff size={16} className="text-white" />
                ) : (
                  <img
                    src={confession.avatar}
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800">
                    {confession.isAnonymous ? 'Anonymous' : confession.author}
                  </h4>
                  <span className="text-sm text-gray-500">{confession.time}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{confession.text}</p>
                
                {confession.tags && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {confession.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-pink-600 transition-colors">
                  <Heart size={16} />
                  <span className="text-sm">{confession.likes}</span>
                </button>
                
                <button
                  onClick={() => setSelectedConfession(selectedConfession === index ? null : index)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm">{confession.comments}</span>
                </button>
                
                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                  <Share size={16} />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              
              <div className="text-xs text-gray-500">
                {confession.college}
              </div>
            </div>
            
            {/* Comments Section */}
            {selectedConfession === index && (
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="space-y-3 mb-3">
                  {confession.recentComments?.map((commentItem, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-2">
                          <p className="text-sm text-gray-700">{commentItem.text}</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500 font-medium">
                            {commentItem.author}
                          </span>
                          <span className="text-xs text-gray-400">{commentItem.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleComment} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-2 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfessionPage;