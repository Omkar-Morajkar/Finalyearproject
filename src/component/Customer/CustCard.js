import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const CustCard = ({ menuData }) => {
  const now = 50;

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
                  <div className="col-lg-12 col-xl-11" >
                    <div className="card text-black" style={{borderRadius: '25px', }}>
                      <div className="card-body p-md-5" >
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <div className="card-body">
                                  <h3 className="card-title">{curElem.title}</h3>
                                  <span className="card-author subtle">{curElem.name}</span>
                                  <span className="card-description subtle">
                                    {curElem.description}
                                  </span>
                                  <div className="card-read">Read</div>
                                  <ProgressBar now={now} label={`${now}%`} />
                                  <br/>
                                  <Link to='/billing'><button className="card-tag subtle" >Donate</button></Link>
                                </div>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src={curElem.image}alt="images"className="card-media"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default CustCard;
