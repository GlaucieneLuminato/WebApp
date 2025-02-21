import React, {useState} from 'react';
import axios from 'axios';

const ImageGenerator = ()=>{

    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = seState ('');
    const [loading, setLoading] = useState (false);

    const handleGenerateImage = async () => {
        setLoading(true);
        try{
            const response= awaitaxios.post(
                'https://api.prodia.com/v1/generate',
            )
        }
        prompt:prompt
        model: 'model_id', 
        steps: 50,
        cfg_scale: 7.5,
        seed: null,
        upscale: false,
      },
    

    {
        headers:{
            Authorization:'Bearer SUA_CHAVE_DE_API_AQUI',
            'content-Type:'application/json'

    }

}

setImageUrl (response.data.image_url); catch (error){

    consoleerror('Erro ao gerar a imagem:', error);
}

setLoading(false);

return(

    <div className="container">
      
      <h1> Gerador  de Imagem com I.A </h1>

      <input
      type="text"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}

      placeholder="Digite seu prompt aqui..."/>
      <button onClick={handleGenerateImage} disabled={loading}>
        {loanding ? 'Gerando...' : 'Gerar Imagem'}
      </button>
      
      {imageUrl && <img src={imageUrl} alt="imagem gerada" />}
    </div>
)
export default ImagemGenerator
