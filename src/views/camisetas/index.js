import React from 'react';
import CardProduto from '../../components/cardProduto';
import bone1 from './../../assets/images/bone1.png';

const Camisetas = () => 
{
    return (
        <div class="container py-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <CardProduto
                        urlImagem={ bone1 }
                        titulo='BONÉ DEVIL SIDE c/ Chifres'
                        descricao='EgoStudios'
                        urlLink='https://egostudios.com.br/produtos/bone-devil-side-c-chifres/'
                    ></CardProduto>
                </div>

                <div class="col">
                    <CardProduto
                        urlImagem={ bone1 }
                        titulo='BONÉ DEVIL SIDE c/ Chifres'
                        descricao='EgoStudios'
                        urlLink='https://egostudios.com.br/produtos/bone-devil-side-c-chifres/'
                    ></CardProduto>
                </div>
                
                <div class="col">
                    <CardProduto
                        urlImagem={ bone1 }
                        titulo='BONÉ DEVIL SIDE c/ Chifres'
                        descricao='EgoStudios'
                        urlLink='https://egostudios.com.br/produtos/bone-devil-side-c-chifres/'
                    ></CardProduto>
                </div>
            </div>
        </div>
    )
}

export default Camisetas;