import { useState } from 'react';
import { Plus, Search, Eye, Edit, Trash2, FileText, Copy, Package, Printer } from 'lucide-react';

const Orcamentos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  
  const orcamentos = [
    {
      id: 12,
      numero: 'ORÇAMENTO 12',
      cliente: 'CLERYS NOVIDADE',
      endereco: 'DOMINGOS CARVALHO, 00, Barreirinhas,...',
      telefone: '(00) 00000-0000',
      responsavel: 'Natanael S. Nascimento',
      valor: 2760.97,
      data: '30/10/2023 11:17:06',
      status: 'aprovado'
    },
    {
      id: 11,
      numero: 'ORÇAMENTO 11',
      cliente: 'Teixera',
      endereco: 'Condomínio, 00, BARREIRINHAS, carnaubal',
      telefone: '(00) 00000-0000',
      responsavel: 'Natanael S. Nascimento',
      valor: 27956.63,
      data: '19/10/2023 17:07:40',
      status: 'aprovado'
    },
    {
      id: 10,
      numero: 'ORÇAMENTO 10',
      cliente: 'JOSE RODRIGUES',
      endereco: 'RUA MISSIONARIA, 03, Barreirinhas, CIDAD...',
      telefone: '(98) 99153-6321',
      responsavel: 'Natanael S. Nascimento',
      valor: 7550.11,
      data: '16/08/2023 10:41:26',
      status: 'aprovado'
    },
    {
      id: 9,
      numero: 'ORÇAMENTO 9',
      cliente: 'Dinha Reis',
      endereco: 'Cidade Nova, 000, BARREIRINHAS, Cidade...',
      telefone: '(00) 00000-0000',
      responsavel: 'Natanael S. Nascimento',
      valor: 5851.91,
      data: '09/05/2023 06:47:33',
      status: 'pendente'
    },
    {
      id: 8,
      numero: 'ORÇAMENTO 8',
      cliente: 'IATE CLUB',
      endereco: 'carnaubal, 00, Barreirinhas, carnaubal,...',
      telefone: '(00) 00000-0000',
      responsavel: 'Natanael S. Nascimento',
      valor: 203042.75,
      data: '02/08/2023 17:59:27',
      status: 'aprovado'
    },
    {
      id: 7,
      numero: 'ORÇAMENTO 7',
      cliente: 'OSVALDIR',
      endereco: 'BSRREIRINHAS, 00, Barreirinhas,...',
      telefone: '(00) 00000-0000',
      responsavel: 'Natanael S. Nascimento',
      valor: 3024.00,
      data: '21/07/2023 12:16:11',
      status: 'rejeitado'
    }
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'aprovado':
        return 'status-badge aprovado';
      case 'pendente':
        return 'status-badge pendente';
      case 'rejeitado':
        return 'status-badge rejeitado';
      default:
        return 'status-badge';
    }
  };
  
  const filteredOrcamentos = orcamentos.filter(orc => {
    const matchesSearch = orc.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         orc.numero.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || orc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  // Componente de Card de Orçamento
  const OrcamentoCard = ({ orcamento }) => {
    return (
      <div className="card-manageasy p-6 card-enter">
        {/* Header do Card */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {orcamento.numero}
          </h3>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        {/* Informações do Cliente */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <span className="font-medium text-gray-800">{orcamento.cliente}</span>
          </div>
          <div className="text-sm text-gray-600">
            📍 {orcamento.endereco}
          </div>
          <div className="text-sm text-gray-600">
            📞 {orcamento.telefone}
          </div>
        </div>
        
        {/* Responsável */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Responsável:</span> {orcamento.responsavel}
          </p>
        </div>
        
        {/* Valor */}
        <div className="mb-4">
          <p className="valor-destaque">
            R$ {orcamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-gray-500">{orcamento.data}</p>
        </div>
        
        {/* Ações */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Copy className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Fazer cópia</span>
          </button>
          <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Package className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Materiais</span>
          </button>
          <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <FileText className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Contrato</span>
          </button>
          <button className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Printer className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-xs text-gray-600">Imprimir</span>
          </button>
        </div>
        
        {/* Botões de Ação */}
        <div className="flex gap-2">
          <button className="btn-manageasy-secondary flex-1">
            Fechar orçamento
          </button>
          <button className="btn-manageasy-primary flex-1">
            Editar
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Orçamentos</h1>
          <p className="text-gray-600">Gerencie todos os orçamentos da sua vidraçaria</p>
        </div>
      </div>
      
      {/* Grid de Cards de Orçamentos */}
      <div className="grid-manageasy">
        {filteredOrcamentos.map((orcamento, index) => (
          <div 
            key={orcamento.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <OrcamentoCard orcamento={orcamento} />
          </div>
        ))}
      </div>
      
      {/* Botões de Ação Inferior */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Play className="w-6 h-6 text-blue-600" />
          </div>
          <span className="font-medium text-gray-700">Assistir tutorial</span>
        </button>
        
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Search className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-medium text-gray-700">Buscar</span>
        </button>
        
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <FileText className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-medium text-gray-700">Configurar contrato</span>
        </button>
        
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <CreditCard className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-medium text-gray-700">Formas de pagamento</span>
        </button>
      </div>
      
      {/* Botão Flutuante */}
      <button className="fab-manageasy">
        <Plus className="w-6 h-6" />
      </button>
      
      {filteredOrcamentos.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-gray-500 font-medium">Nenhum orçamento encontrado</h3>
          <p className="text-gray-400 text-sm">Tente ajustar os filtros ou criar um novo orçamento</p>
        </div>
      )}
    </div>
  );
};

export default Orcamentos;

