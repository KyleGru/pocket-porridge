import './MemeChoices.css'
import { useState, useEffect } from 'react';
import axios from 'axios';




export function MemeChoices() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const fetchMemes = async () => {
            try {
            const response = await axios.get('https://api.imgflip.com/get_memes')
            const { memes } = response.data.data;
            setMemes(memes);
            } catch (error) {
            console.error('Error fetching memes', error);
            }
        }
        fetchMemes();
    }, [])

      return (
        <>
        <div className='choiceFlex'>
          {memes.map((meme, index) => (
                    <div key={index}>
                        <button className='memeBox'>
                            <img 
                                className='memeImg'
                                src={meme.url}
                                alt={meme.name}
                            />
                        </button>
                    </div>
                ))}
        </div>
        </>
      )

  }