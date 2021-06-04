import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Premium Plan</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>
          Subscribe <h6>₹ 399.00</h6>
        </button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Basic Plan</h5>
          <h6>1080p</h6>
        </div>
        <button>
          Subscribe <h6>₹ 299.00</h6>
        </button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Basic Plan</h5>
          <h6>720p</h6>
        </div>
        <button>
          Subscribe <h6>₹ 149.00</h6>
        </button>
      </div>
    </div>
  );
}

export default PlansScreen;
