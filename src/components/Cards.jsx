import data from '../data.json';
import Head from './Head';

export const Cards = () => {
    const id_card = 'id-456';
    const clas_card = 'card-title-2';

    return data.map(card => {
        return (<div key={card.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
        <img src={card.url} className="card-img-top" alt={card.title} />
        <div className="card-body">
            <h5 className="card-title">Card title: {card.title}</h5>
                
                {/* Вставляем в виде Реакт компонента */}
                <Head id={id_card} clas={clas_card} />

            <a href="http" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>)
        })
};