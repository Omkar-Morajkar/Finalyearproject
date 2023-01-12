import React from 'react';

const CustCard = ({menuData}) =>{
    return(
        <>
       <section className="main-card--cointainer">
        {menuData.map((curElem)=>{
            return(
            <>
                <div className='card-container' key={curElem.id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{curElem.id}</span>
                            <h3 className='card-title'>{curElem.title}</h3>
                            <span className='card-author subtle'>{curElem.name}</span>
                            <span className='card-description subtle'>
                                {curElem.description}
                            </span>
                            <div className='card-read'>Read</div>
                        </div>
                        <img src={curElem.image} alt='images' className='card-media'/>
                        <span className='card-tag subtle'>Donate</span>
                        <br/>    
                    </div>
                </div>
            </>
            );
        })}
          </section>
        </>
        
    );
}
export default CustCard;