class CaixaDaLanchonete {
    constructor() {
      this.cardapio = {
        cafe: 3.00,
        chantily: 1.50,
        suco: 6.20,
        sanduiche: 6.50,
        queijo: 2.00,
        salgado: 7.25,
        combo1: 9.50,
        combo2: 7.50,
      };
  
      
      this.formasDePagamento = ["dinheiro", "debito", "credito"];
    }
     
    calcularValorDaCompra(formaDePagamento, itens) {
  
      if (itens.length === 0) {
  
         return "Não há itens no carrinho de compra!";
  
      }
  
      
      if (!this.formasDePagamento.includes(formaDePagamento)) {
        return 'Forma de pagamento inválida!';
      }
      
      if (itens.includes("chantily") && !itens.includes("cafe")) {
  
          return "Item extra não pode ser pedido sem o principal";
  
      }
  
      let valorTotal = 0;
  
      var itensDoPedido = []
      
      for (const item of itens) {
        const [codigo, quantidade] = item.split(',');
  
          itensDoPedido.push (codigo)
        
          if (parseInt(quantidade) === 0){
          return "Quantidade inválida!" 
      }
       
          if (this.cardapio[codigo] === undefined) {
          return 'Item inválido!';
      }
  
        const precoItem = this.cardapio[codigo];
        valorTotal += precoItem * quantidade;
      }
  
      if (formaDePagamento === 'dinheiro') {
        valorTotal *= 0.95; // 5% de desconto.
      } else if (formaDePagamento === 'credito') {
        valorTotal *= 1.03; // 3% de acréscimo.
      }
  
      if ((itensDoPedido.includes("chantily") && !itensDoPedido.includes("cafe"))  
      || (itensDoPedido.includes("queijo") && !itensDoPedido.includes("sanduiche"))) {
  
       return "Item extra não pode ser pedido sem o principal";
  
      }
  
      const valorFormatado = this.formatarValorParaString(valorTotal);
      return valorFormatado;
    }
     
    formatarValorParaString(valor) {
      const valorFormatado = valor.toFixed(2).replace('.', ',');
      return `R$ ${valorFormatado}`;
    }
  }
  
  export { CaixaDaLanchonete };