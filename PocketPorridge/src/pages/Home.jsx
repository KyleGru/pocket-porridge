import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Row, Col } from 'react-bootstrap';




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