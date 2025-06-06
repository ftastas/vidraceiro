import { useState } from 'react';
import { DollarSign, CreditCard, Wallet, Plus } from 'lucide-react';

const Financas = () => {
  const [activeTab, setActiveTab] = useState('movimentacoes');
  const [activePeriod, setActivePeriod] = useState('semana');
  
  // Tabs disponíveis
  const tabs = [
    { id: 'movimentacoes', label: 'MOVIMENTAÇÕES DE CAIXA', icon: DollarSign },
    { id: 'servicos', label: 'SERVIÇOS', icon: CreditCard },
    { id: 'despesas', label: 'DESPESAS', icon: Wallet },
    { id: 'planejamento', label: 'PLANEJAMENTO', icon: CreditCard },
    { id: 'formas', label: 'FORMAS DE PAGAMENTO', icon: CreditCard }
  ];
  
  // Períodos disponíveis
  const periods = [
    { id: 'semana', label: '1 Semana' },
    { id: 'mes', label: '1 Mês' },
    { id: 'meses', label: '2 Meses' },
    { id: 'personalizada', label: 'Data personalizada' }
  ];
  
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Título da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Financeiro</h1>
      </div>
      
      {/* Tabs horizontais */}
      <div className="flex overflow-x-auto pb-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              className={`flex items-center px-6 py-4 whitespace-nowrap ${
                isActive 
                  ? 'bg-manageasy-blue text-white rounded-lg' 
                  : 'text-gray-600 hover:bg-gray-100 rounded-lg'
              } transition-all mr-2`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon className="w-5 h-5 mr-2" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
      
      {/* Filtros de período */}
      <div className="bg-white rounded-lg shadow-sm p-2 flex mb-6">
        {periods.map((period) => (
          <button
            key={period.id}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              activePeriod === period.id
                ? 'bg-manageasy-blue text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActivePeriod(period.id)}
          >
            {period.label}
          </button>
        ))}
      </div>
      
      {/* Conteúdo principal */}
      <div className="bg-white rounded-lg shadow-sm p-8 min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Não encontramos dados</p>
          <button className="btn-manageasy-primary flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financas;

