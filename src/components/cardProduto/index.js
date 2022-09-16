import React from "react";

const CardProduto = (props) =>
{
    const { urlImagem, titulo, descricao, urlLink } = props;

    return (
        <div className="card">
            <img src={ urlImagem } className="card-img-top" alt="..." />
            <div className="card-body">
                <div>
                    <h5 className="card-title">{ titulo }</h5>
                    <p className="card-text">{ descricao }</p>
                </div>
                <div style={ { textAlign: 'center' } }>
                    <a href={ urlLink }
                        className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default CardProduto;