import React, { useState } from 'react'; 

  

function GaleriaDeImagens() { 

  const [imagens, setImagens] = useState([ 

    'https://s.glbimg.com/es/ge/f/original/2011/05/04/messi2009_get300.jpg', 

    'https://conteudo.imguol.com.br/c/esporte/77/2021/06/02/ronaldinho-gaucho-em-atuacao-pelo-barcelona-1622663451254_v2_3x4.jpg', 

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eEEOFsJefZ50OdOP_lmLhB8rEBLTk4fH35tZgAG_4w&s' 

  ]); 

  

  const adicionarImagem = () => { 

    setImagens([...imagens, 'https://www.imortaisdofutebol.com/wp-content/uploads/2020/11/598px-Ronaldo_FC_Inter_-_Pallone_doro_1997.jpg']); 

  }; 

  

  return ( 

    <div> 

      <h2>Galeria de Imagens</h2> 

      <div style={{ display: 'flex', flexWrap: 'wrap' }}> 

        {imagens.map((imagem, index) => ( 

          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px', width: '250px', height:'250px', }} /> 

        ))} 

      </div> 

      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button> 

    </div> 

  ); 

} 

  

export default GaleriaDeImagens; 