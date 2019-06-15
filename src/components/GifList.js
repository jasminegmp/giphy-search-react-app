import React from 'react';
import GifCard from './GifCard'
import './GifList.css'

function GifList(props){
	console.log(props)
	const gifs = props.gifs.map(image => {
		return <GifCard key = {image.id} gif = {image}/>
	});
	return <div className = "gif-list">{gifs}</div>
};

export default GifList;