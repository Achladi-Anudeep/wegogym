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
      <div className="third-sec">
        <div className="third-text-sec">
          <p>
            YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE.
            <br />
            YOUR PERSONAL TRAINING SHOULD REFLECT THAT!
          </p>
          <h1>
            CERTIFIED PERSONAL
            <br />
            TRAINERS
          </h1>
          <p className="personal-trainer-desc">
            Our <b>internationally certified gym</b> trainers help accomplish
            your
            <br />
            fitness and weight loss goals, quicker. They aid in guiding you
            <br /> through a balanced combination of
            <b>
              cardio, aerobic exercise,
              <br /> strength,
            </b>
            and <b>weight training</b> with the help of the latest training
            <br />
            techniques, technology, and high-end fitness equipment. Our
            <br />
            personal gym trainers help you turn the <b>IMPOSSIBLE</b> to
            <br />
            <b>I’M’POSSIBLE.</b>
          </p>
          <button>BOOK A FREE PT SESSION</button>
        </div>
        <div className="third-img-holder">
          <img
            src="https://wavesgym.com/wp-content/uploads/elementor/thumbs/WavesGym1-prllb1g3r4gd7phsw99uiz7czy7nq2mlh7sir7fif4.jpg"
            alt="gym-trainer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
