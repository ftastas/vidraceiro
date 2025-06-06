import { useState } from 'react';
import { Plus, Trash2, Search, Download } from 'lucide-react';

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Categorias de produtos baseadas no Manageasy
  const categorias = [
    { id: 1, nome: 'ACESSÓRIOS', hasProducts: true },
    { id: 2, nome: 'BOX', hasProducts: true },
    { id: 3, nome: 'COBERTURA', hasProducts: true },
    { id: 4, nome: 'CONTRA MARCO', hasProducts: true },
    { id: 5, nome: 'CORRIMÃO', hasProducts: true },
    { id: 6, nome: 'ESPELHOS', hasProducts: true },
    { id: 7, nome: 'FACHADA CORTINA', hasProducts: true },
    { id: 8, nome: 'FACHADA PV2', hasProducts: true },
    { id: 9, nome: 'FECHAMENTOS DE SACA', hasProducts: true },
    { id: 10, nome: 'GRADES DE ALUMÍNIO', hasProducts: true },
    { id: 11, nome: 'GUARDA CORPO', hasProducts: true },
    { id: 12, nome: 'LINHA 16', hasProducts: true },
    { id: 13, nome: 'LINHA 25', hasProducts: true },
    { id: 14, nome: 'LINHA 30', hasProducts: true },
    { id: 15, nome: 'LINHA 42', hasProducts: true }
  ];
  
  const filteredCategorias = categorias.filter(cat => 
    cat.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Componente de Card de Categoria
  const CategoriaCard = ({ categoria }) => {
    return (
      <div className="card-manageasy p-6 card-enter">
        {/* Botão de exclusão */}
        <div className="flex justify-end mb-4">
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        {/* Nome da categoria */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {categoria.nome}
          </h3>
        </div>
        
        {/* Botão Ver produtos */}
        <button className="btn-manageasy-primary w-full">
          Ver produtos
        </button>
      </div>
    );
  };
  
  // Card para adicionar nova categoria
  const AddCategoriaCard = () => {
    return (
      <div className="card-manageasy p-6 card-enter flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 hover:border-manageasy-blue transition-colors cursor-pointer">
        <div className="p-4 bg-manageasy-blue rounded-full mb-4">
          <Plus className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
          Adicionar
        </h3>
      </div>
    );
  };
  
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Produtos</h1>
        <p className="text-gray-600">Gerencie suas categorias e produtos</p>
      </div>
      
      {/* Grid de Categorias */}
      <div className="grid-manageasy">
        {/* Card para adicionar */}
        <AddCategoriaCard />
        
        {/* Cards das categorias */}
        {filteredCategorias.map((categoria, index) => (
          <div 
            key={categoria.id}
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <CategoriaCard categoria={categoria} />
          </div>
        ))}
      </div>
      
      {/* Botões de Ação Inferior */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Trash2 className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-medium text-gray-700">Lixeira</span>
        </button>
        
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Search className="w-6 h-6 text-gray-600" />
          </div>
          <span className="font-medium text-gray-700">Buscar</span>
        </button>
        
        <button className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Download className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-left">
            <div className="font-medium text-gray-700">Baixar tipologias</div>
            <div className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded">2955</div>
          </div>
        </button>
      </div>
      
      {filteredCategorias.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-gray-500 font-medium">Nenhuma categoria encontrada</h3>
          <p className="text-gray-400 text-sm">Tente ajustar os filtros ou criar uma nova categoria</p>
        </div>
      )}
    </div>
  );
};

export default Produtos;

