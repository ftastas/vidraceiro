import { useState, useEffect } from 'react';
import { 
  Play,
  FileText,
  CreditCard,
  Package,
  CheckSquare,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Cards principais do dashboard
  const dashboardCards = [
    {
      id: 1,
      title: 'Tutoriais',
      description: 'Ficou com dúvidas? Assista alguns tutoriais sobre o sistema',
      icon: Play,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500',
      action: 'Assistir tutorial'
    },
    {
      id: 2,
      title: 'Orçamentos',
      description: 'Cadastre seus orçamentos de forma fácil e rápida',
      icon: FileText,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-500',
      action: 'Cadastrar'
    },
    {
      id: 3,
      title: 'Sua assinatura',
      description: 'Assine um plano através do cartão de crédito, pix ou boleto.',
      icon: CreditCard,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-500',
      action: 'Faltam 16 dias',
      isSubscription: true
    },
    {
      id: 4,
      title: 'Produtos',
      description: 'Cadastre ou altere seus produtos a qualquer momento',
      icon: Package,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-500',
      action: 'Gerenciar'
    },
    {
      id: 5,
      title: 'Serviços',
      description: 'Acompanhe o andamento dos seus serviços',
      icon: CheckSquare,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-500',
      action: 'Visualizar'
    },
    {
      id: 6,
      title: 'Agenda',
      description: 'Organize seus compromissos e visualize os agendamentos de serviços',
      icon: Calendar,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-500',
      action: '6/6/2025',
      isDate: true
    }
  ];
  
  // Componente de Card do Dashboard
  const DashboardCard = ({ card, loading }) => {
    const Icon = card.icon;
    
    return (
      <div className="card-manageasy p-6 card-enter">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor} mr-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {card.description}
            </p>
            
            <div className="mt-auto">
              {card.isSubscription ? (
                <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {card.action}
                </div>
              ) : card.isDate ? (
                <div className="text-gray-600 font-medium">
                  {card.action}
                </div>
              ) : (
                <button className="btn-manageasy-primary w-full">
                  {card.action}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
  };
  
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao seu painel de controle</p>
      </div>
      
      {/* Grid de Cards */}
      <div className="grid-manageasy">
        {dashboardCards.map((card, index) => (
          <div 
            key={card.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <DashboardCard card={card} loading={loading} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

