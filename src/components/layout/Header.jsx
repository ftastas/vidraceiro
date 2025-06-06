import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Search, 
  Bell, 
  Settings,
  Menu,
  X
} from 'lucide-react';

const Header = ({ toggleMobileSidebar }) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const notifications = [
    {
      id: 1,
      title: 'Novo orçamento',
      message: 'Cliente João Silva solicitou um orçamento',
      time: '5 min atrás',
      read: false,
    },
    {
      id: 2,
      title: 'Estoque baixo',
      message: 'Vidro temperado 10mm está com estoque baixo',
      time: '1 hora atrás',
      read: false,
    },
  ];
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };
  
  return (
    <header className="header-manageasy sticky top-0 z-30 w-full">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileSidebar}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Logo e informações da empresa */}
        <div className="logo-container">
          <div className="logo-icon">
            U
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">URBANO VIDROS E ALUMÍNIO</h1>
            <p className="text-sm text-gray-600">Boa tarde, Natanael S. Nascimento</p>
          </div>
        </div>
        
        {/* Right side - Configurações e Notificações */}
        <div className="flex items-center space-x-4">
          {/* Configurações */}
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          
          {/* Notifications dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-scale-in origin-top-right">
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Notificações</h3>
                  <button className="text-xs text-blue-500 hover:text-blue-600">
                    Marcar todas como lidas
                  </button>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                        !notification.read ? 'bg-blue-500' : 'bg-gray-300'
                      }`} />
                      <div className="ml-3">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                        <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-3 border-t border-gray-200">
                <button className="w-full text-center text-blue-500 text-sm hover:text-blue-600">
                  Ver todas
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

