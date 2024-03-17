import React, {useState, useEffect} from 'react';


function Portfolio(){
    const [projekt, setProjekt] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://api.github.com/users/obetydligsten/repos')
        .then(response=>response.json())
        .then(data=>{
            setProjekt(data);
            setLoading(false);
            })
        .catch(error=>console.error('Kunde inte läsa data ' + error))
    }, []);

    return (
        <div className="portfolio">
            <div className='prodiv'>
                {loading ? (
                    <p>Laddar projekt...</p>
                ) : (
                    projekt.map(proj => (
                        <div className='project' key={proj.id}>
                            <h3 className='portfolioHeader'>{proj.name}</h3>
                            <p className='projBesk'>{proj.description || 'Ingen beskrivning tillgänglig'}</p>
                            <p className='projLänk'><a href={proj.html_url} target='_blank' rel='noopener noreferrer'>Projektlänk</a></p>
                        </div>
                    ))
                )}
            </div>
            <div className="spans">
                <span className="background span1"></span>
                <span className="background span2"></span>
                <span className="background span3"></span>
            </div>
        </div>
    );
}

export default Portfolio