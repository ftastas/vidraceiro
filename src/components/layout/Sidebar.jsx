import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  DollarSign, 
  ClipboardList, 
  Package, 
  Calculator,
  Settings,
  Users,
  Calendar,
  BarChart3,
  MapPin,
  UserCheck,
  LogOut,
  Tag,
  Scissors,
  Layers,
  CheckSquare
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  
  const menuItems = [
    { 
      icon: Home, 
      label: 'Início', 
      path: '/dashboard',
      badge: null
    },
    { 
      icon: DollarSign, 
      label: 'Financeiro', 
      path: '/dashboard/financas',
      badge: '2'
    },
    { 
      icon: Users, 
      label: 'Clientes', 
      path: '/dashboard/clientes',
      badge: '6'
    },
    { 
      icon: FileText, 
      label: 'Orçamentos', 
      path: '/dashboard/orcamentos',
      badge: '4'
    },
    { 
      icon: CheckSquare, 
      label: 'Serviços', 
      path: '/dashboard/servicos',
      badge: '5',
      isNew: true
    },
    { 
      icon: ClipboardList, 
      label: 'Relação materiais', 
      path: '/dashboard/materiais',
      badge: '6'
    },
    { 
      icon: Scissors, 
      label: 'Plano de corte', 
      path: '/dashboard/plano-corte',
      badge: '7'
    },
    { 
      icon: Layers, 
      label: 'Projeto vidro', 
      path: '/dashboard/projeto-vidro',
      badge: '8'
    },
    { 
      icon: Calendar, 
      label: 'Agenda', 
      path: '/dashboard/agenda',
      badge: '9'
    },
    { 
      icon: Package, 
      label: 'Produtos', 
      path: '/dashboard/produtos',
      badge: '10'
    },
    { 
      icon: Tag, 
      label: 'Preço dos itens', 
      path: '/dashboard/precos',
      badge: '11'
    },
    { 
      icon: BarChart3, 
      label: 'Relatórios', 
      path: '/dashboard/relatorios',
      badge: '12'
    },
    { 
      icon: MapPin, 
      label: 'Mapa', 
      path: '/dashboard/mapa',
      badge: '14'
    },
    { 
      icon: UserCheck, 
      label: 'Administradores', 
      path: '/dashboard/administradores',
      badge: '16'
    },
    { 
      icon: Users, 
      label: 'Funcionários', 
      path: '/dashboard/funcionarios',
      badge: null
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`
      fixed left-0 top-0 h-full sidebar-manageasy
      transition-all duration-300 ease-in-out z-50
      ${isCollapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Header da Sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="logo-icon">
              U
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">URBANO VIDROS</h1>
              <p className="text-white/70 text-xs">E ALUMÍNIO</p>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="p-2 space-y-1 overflow-y-auto h-full pb-20">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group flex items-center justify-between p-3 rounded-lg
                menu-item-hover text-white/90 hover:text-white
                ${active ? 'menu-item-active text-white' : ''}
              `}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 menu-icon" />
                
                {!isCollapsed && (
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                )}
              </div>
              
              {!isCollapsed && (
                <div className="flex items-center space-x-2">
                  {item.isNew && (
                    <span className="badge-novo">Novo</span>
                  )}
                  {item.badge && (
                    <span className="badge-notification">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
        
        {/* Botão Sair */}
        <div className="pt-4 border-t border-white/10 mt-4">
          <button
            className="group flex items-center justify-between w-full p-3 rounded-lg
                       menu-item-hover text-white/90 hover:text-white"
          >
            <div className="flex items-center space-x-3">
              <LogOut className="w-5 h-5 menu-icon" />
              
              {!isCollapsed && (
                <span className="font-medium text-sm">
                  Sair
                </span>
              )}
            </div>
            
            {!isCollapsed && (
              <span className="badge-notification">
                19
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

