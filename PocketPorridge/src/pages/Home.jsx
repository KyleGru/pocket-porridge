// import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client"
import { QUERY_MEMES } from '../utils/queries';
// import axios from 'axios';

export default function Home() {
    const { loading, data } = useQuery(QUERY_MEMES);
    const memes = data?.memes || [];
    return (
        <div className="container">
            <h1 className="my-4">Popular Memes</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {memes.map((meme) => (
                    <div key={meme.id} className="col">
                        <div className="card">
                            <img
                                src={meme.url}
                    
                                className="card-img-top meme-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}