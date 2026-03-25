import "./itemProduto.css";

function ItemProduto({ produto }) {
    return (
        <div className="lista-produtos__root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>
          
            {produto.cores.map((aquarela, contagem) => {
                return <div aquarela={aquarela} key={contagem} className="lista-produtos__cor" />;
            })}
        </div>
        
    );
}

export default ItemProduto;