import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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
    // const fetchAutomeme = async () => {
    //     try {
    //       console.log('API username', process.env.REACT_APP_API_USERNAME)
    //       console.log('API password', process.env.REACT_APP_API_PASSWORD)

    //       const response = await axios.post(
    //         'https://api.imgflip.com/automeme',
    //         {
    //           username: process.env.REACT_APP_API_USERNAME,
    //           password: process.env.REACT_APP_API_PASSWORD,
    //         }
    //       );
  
    //       // Assuming the API response contains an array of generated memes
    //       setMemes(response.data.memes);
    //     } catch (error) {
    //       console.error('Error fetching automeme:', error);
    //     }
    //   };
  
    //   fetchAutomeme();
    // }, []);

    return (
        <div className="container">
            <h1 className="my-4">Popular Memes</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {memes.map((meme, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <img
                                src={meme.url}
                                alt={meme.name}
                                className="card-img-top meme-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}