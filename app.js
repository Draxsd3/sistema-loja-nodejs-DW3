const express = require('express');
const path = require('path');

// Inicialização do app
const app = express();
const PORT = process.env.PORT || 3000;

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Dados mockados
const clientes = [
  { id: 1, nome: 'João Silva', cpf: '123.456.789-00', email: 'joao@email.com', telefone: '(11) 99999-1111', endereco: 'Rua das Meias Furadas, 42, São Paulo - SP' },
  { id: 2, nome: 'Maria Oliveira', cpf: '987.654.321-00', email: 'maria@email.com', telefone: '(11) 99999-2222', endereco: 'Av. dos Pentes para Carecas, 123, São Paulo - SP' },
  { id: 3, nome: 'Carlos Souza', cpf: '456.789.123-00', email: 'carlos@email.com', telefone: '(11) 99999-3333', endereco: 'Praça do Guarda-Chuva Furado, 789, São Paulo - SP' },
  { id: 4, nome: 'Ana Pereira', cpf: '789.123.456-00', email: 'ana@email.com', telefone: '(11) 99999-4444', endereco: 'Alameda das Luvas Digitais, 555, São Paulo - SP' },
  { id: 5, nome: 'Lucas Santos', cpf: '321.654.987-00', email: 'lucas@email.com', telefone: '(11) 99999-5555', endereco: 'Rua dos Sapatos com Rodas, 321, São Paulo - SP' }
];

const produtos = [
  { id: 1, nome: 'Caneta sem Tinta', descricao: 'Para quem adora escrever no ar', categoria: 'Utilidades', preco: 29.99, estoque: 50 },
  { id: 2, nome: 'Guarda-Chuva Furado', descricao: 'Para você ver a chuva enquanto se molha', categoria: 'Utilidades', preco: 89.99, estoque: 20 },
  { id: 3, nome: 'Carrossel para Snails', descricao: 'Diversão em ultra-slow-motion', categoria: 'Pet', preco: 45.99, estoque: 15 },
  { id: 4, nome: 'Óculos com Spray', descricao: 'Limpa enquanto você enxerga!', categoria: 'Utilidades', preco: 79.99, estoque: 100 },
  { id: 5, nome: 'Teclado sem Letras', descricao: 'Para os verdadeiros profissionais', categoria: 'Tecnologia', preco: 149.99, estoque: 10 },
  { id: 6, nome: 'Espelho para Vampiros', descricao: 'Sempre mostra nada!', categoria: 'Utilidades', preco: 199.99, estoque: 30 },
  { id: 7, nome: 'Óculos para Batatas', descricao: 'Porque batatas também merecem estilo', categoria: 'Utilidades', preco: 35.50, estoque: 25 },
  { id: 8, nome: 'Guarda-chuva para Peixes', descricao: 'Proteja seu peixe da água', categoria: 'Pet', preco: 15.99, estoque: 8 },
  { id: 9, nome: 'WiFi para Submarino', descricao: 'Conexão rápida embaixo d\'água', categoria: 'Tecnologia', preco: 299.99, estoque: 12 }
];

const pedidos = [
  { numero: '1001', cliente: 'João Silva', data: '10/11/2023', status: 'Entregue', statusClass: 'badge-success', valor: 59.99 },
  { numero: '1002', cliente: 'Maria Oliveira', data: '11/11/2023', status: 'Em processamento', statusClass: 'badge-warning', valor: 89.99 },
  { numero: '1003', cliente: 'Carlos Souza', data: '12/11/2023', status: 'Cancelado', statusClass: 'badge-danger', valor: 29.99 },
  { numero: '1004', cliente: 'Ana Pereira', data: '13/11/2023', status: 'Enviado', statusClass: 'badge-info', valor: 45.99 },
  { numero: '1005', cliente: 'Lucas Santos', data: '14/11/2023', status: 'Aguardando pagamento', statusClass: 'badge-secondary', valor: 149.99 }
];

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/clientes', (req, res) => {
  res.render('clientes', { clientes });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { produtos });
});

app.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  
  if (!produto) {
    return res.redirect('/produtos');
  }
  
  // Get related products (excluding current product)
  const produtosRelacionados = produtos
    .filter(p => p.categoria === produto.categoria && p.id !== produto.id)
    .slice(0, 3);
    
  res.render('produto-detalhe', { produto, produtosRelacionados });
});

app.get('/pedidos', (req, res) => {
  res.render('pedidos', { pedidos });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});