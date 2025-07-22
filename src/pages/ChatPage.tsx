import React, { useState } from 'react';
import { Send, ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
import { mockChats } from '../data/mockChats';

const ChatPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Simulate word count trigger for quiz
    const wordCount = message.split(' ').length;
    if (wordCount > 50) { // Simplified trigger
      setShowQuiz(true);
    }
    
    setMessage('');
  };

  if (selectedChat !== null) {
    const chat = mockChats[selectedChat];
    
    return (
      <div className="max-w-lg mx-auto bg-white h-screen flex flex-col">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSelectedChat(null)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-sm text-white/80">{chat.isOnline ? 'Online' : 'Last seen recently'}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <Phone size={20} />
            </button>
            <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <Video size={20} />
            </button>
            <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chat.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.isOwn
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
          
          {chat.compatibilityScore && (
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 text-center">
              <h4 className="font-bold text-gray-800 mb-2">Compatibility Quiz Complete!</h4>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {chat.compatibilityScore}% Match
              </div>
              <p className="text-sm text-gray-600">You both answered 8/12 questions similarly!</p>
            </div>
          )}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages</h2>
      
      {/* DM Requests */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">DM Requests (2)</h3>
        <div className="space-y-2">
          {mockChats.filter(chat => chat.isDMRequest).map((chat, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{chat.name}</h4>
                    <p className="text-sm text-gray-600">{chat.lastMessage}</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Accept
                  </button>
                  <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Chats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Chats</h3>
        <div className="space-y-2">
          {mockChats.filter(chat => !chat.isDMRequest).map((chat, index) => (
            <div
              key={index}
              onClick={() => setSelectedChat(mockChats.indexOf(chat))}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-800">{chat.name}</h4>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unreadCount > 0 && (
                  <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unreadCount}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;