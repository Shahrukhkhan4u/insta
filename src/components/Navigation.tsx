import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, MessageCircle, Search, Users, Compass, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { to: '/discover', icon: Compass, label: 'Discover' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/likes', icon: Heart, label: 'Likes' },
    { to: '/chat', icon: MessageCircle, label: 'Chat' },
    { to: '/confessions', icon: Users, label: 'Confessions' },
    { to: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-around items-center py-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;