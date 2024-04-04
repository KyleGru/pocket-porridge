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

    return (
        <div>
            <h1>Popular Memes</h1>
            <div>
                {memes.map((meme, index) => (
                <img key={index} src={meme.url} alt={meme.name} />))}
            </div>
        </div>
    );
}