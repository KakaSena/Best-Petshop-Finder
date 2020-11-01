import React from 'react';



  interface CheapestPetShop{
    name: string,
    total: number,
    distance: number
}

interface ResultsProps {
    result?: CheapestPetShop;
  }

const Results: React.FC<ResultsProps> = ({result}) => {

    return(
        <main className="result">
            O Petshop <strong>{result?.name}</strong> é a sua melhor escolha com preço de banho total de <strong>R${result?.total},00.</strong>
        </main>
    )
}

export default Results;