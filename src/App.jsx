import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [changePage, setChangePage] = useState(true);
  const [cardItem, setCardItem] = useState([
    {
      id: 1,
      image: "../sad.png",
      quote: "Unhappy",
    },
    {
      id: 2,
      image: "../neutral.png",
      quote: "Neutral",
    },
    {
      id: 3,
      image: "../smiling-face.png",
      quote: "Happy",
    },
  ]);

  const selectedCard = cardItem.find((card, index) => index === selectedCardId);

  return (
    <div className="main">
      {changePage ? (
        <div className="card-box">
          <h4>How satisfied are you with our customer support performance?</h4>
          <div className="card-container">
            {cardItem.map((card, i) => {
              return (
                <div
                  key={card.id}
                  className="hover"
                  onClick={() => setSelectedCardId(i)}
                  style={
                    selectedCardId === i
                      ? { boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)" }
                      : {}
                  }
                >
                  <img src={card.image} alt="" />
                  <p>{card.quote}</p>
                </div>
              );
            })}
          </div>
          <button
            onClick={() =>
              setChangePage((previousChangePage) => !previousChangePage)
            }
          >
            Send Review
          </button>
        </div>
      ) : (
        <div className="card-box">
          <img src="../heart.png" alt="" />
          <h2>Thank you, James</h2>

          <h3>
            you have choose:{" "}
            {selectedCard ? selectedCard.quote : "How did you get here?"}
          </h3>

          <p>
            We'll use your feedback to improve our customer support performance.
          </p>

          <button
            onClick={() =>
              setChangePage((previousChangePage) => !previousChangePage)
            }
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
