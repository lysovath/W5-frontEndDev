
export default function Card({card}){
    return(
        <>
            <div key={card.id} className="card">
                <div className="card-image-container">
                    <img src={card.img.src} alt={card.img.alt} className="card-image" />
                </div>
                <div className="card-text-container">
                    <h3>{card.foodName}</h3>
                    <p>{card.description}</p>
                </div>
            </div>
        </>
    )
}