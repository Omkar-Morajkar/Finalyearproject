import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const CustCard = ({ menuData }) => {
  const now = 100;

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <h3 className="card-title">{curElem.title}</h3>
                    <span className="card-author subtle">{curElem.name}</span>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">Donate</span>
                  <ProgressBar now={now} label={`${now}%`} />;
                  <br />
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
