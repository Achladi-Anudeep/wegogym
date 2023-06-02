import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="image-sec">
        <h1>
          WELCOME <span>FORWARD</span>
        </h1>
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="gym-img"
        ></img>
      </div>
      <div className="join-sec">
        <p>
          EXPERIENCE THE FITNESS WAVE
          <br />
          AT MUMBAI'S FRIENDLIEST GYM!
        </p>
        <h1>JOIN WEGOGYM TODAY</h1>
        <form>
          <div className="form-input-sec">
            <input type="text" placeholder="Name" />
            <input type="emain" placeholder="Email" />
            <input type="text" placeholder="Mobile" />
            <select name="class">
              <option value="" disabled selected hidden>
                Choose One
              </option>
              <option value="">Free 1-Day Pass</option>
              <option value="">Complimentary Personal Training</option>
              <option value="">Complimentary Zumba Class</option>
              <option value="">
                Complimentary Spin Class/Indoor Cycling Class
              </option>
              <option value="">Complimentary Power Yoga Class</option>
              <option value="">Complimentary Kickboxing Class</option>
            </select>
          </div>
          <button type="submit">SEND</button>
        </form>
        <p>
          #19YEARS OF SERVICE TO THE FITNESS & WELNESS COMMUNITY.
          <br />
          #HEREFORYOU #HERETOSTAY
        </p>
      </div>
    </div>
  );
};

export default Home;
