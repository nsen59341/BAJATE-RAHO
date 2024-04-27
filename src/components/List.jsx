import { useEffect, useState } from 'react'
import { useSearchContext } from '../contexts/SearchContext';

export default function List() {
    const [data, setData] = useState(null);
    const {search, setSearch} = useSearchContext() 
    console.log('search',search);
    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44a7309956msh32c7ff5370c8b64p1967a9jsn16be050d3ff0',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    useEffect(() => {
        async function fetchMusicList() {
            try {
                const response = await fetch(url, options);
                let result = await response.json();
                const resultData = result.tracks.items;
                setData(resultData);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMusicList()
    }, []);
    // console.log('search 3',search);

    let filteredData = data;
    if(search!=undefined && search!=''){
        filteredData = data.filter((item,kidx) => {
            return item.data.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    return (
        <>{
            filteredData === null ?
                <h2>Your Audios are loading...</h2> :
                <>
                    <ul className='myMusics'>
                        {filteredData.map((value,idx) => {
                            return (
                                <li key={idx}><a href={'https://open.spotify.com/track/'+value.data.id}>{value.data.name}</a></li>
                            )
                        })
                    }
                    </ul>
                </>
        }
        </>
  )
}
