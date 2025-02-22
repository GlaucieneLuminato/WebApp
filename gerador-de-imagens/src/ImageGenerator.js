import React, {useState} from 'react';
import {useState} from 'react';
import axios from 'axios';

const ImageGenerator = ()=>{

    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState ('');
    const [loading, setLoading] = useState (false);

    const handleGenerateImage = async () => {
        setLoading(true);
       try{
        const response = await
        axios.post('https://api.prodia.com/v1/generate', {

            prompt: prompt,
            model:"model_id",
            steps:20,
            cfg_scale: 7.5,
            seed:null,
            upsacle: false,
        })
        headers:{
            Authorization: 'Bearer ${process.env.REACT_APP_API_KEY}',
            'Content-Type';'application/json'
        }
        setImageUrl(response.data.image-url);
    } catch (error){
        console.error("Erro ao gerar imagem", error);
    }

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
   export default ImageGenerator;
