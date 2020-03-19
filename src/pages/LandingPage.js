import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BackgroundImg from "../assets/bg.jpg";
import Logo from "../assets/logo.svg";
import WebMouse from "../assets/web-mouse.svg";
import android from "../assets/android.svg";
import apple from "../assets/apple.svg";
import FB from "../assets/FB.svg";
import IG from "../assets/IG.svg";
import Twitter from "../assets/Twitter.svg";
import Countdown from "react-countdown";

const styles = {
  imgStyle: {
    margin: "0 10px"
  }
};

const renderItem = props => {
  var seconds = (props.seconds / 60) * 100;
  var minutes = (props.minutes / 60) * 100;
  var hours = (props.hours / 24) * 100;

  //   console.warn(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "20vh",
        width: "60vw"
      }}
    >
      <CircularProgressbar
        strokeWidth={2}
        value={props.days}
        text={props.formatted.days}
        counterClockwise
      />
      <CircularProgressbar
        strokeWidth={2}
        value={hours}
        text={props.formatted.hours}
        counterClockwise
      />
      <CircularProgressbar
        strokeWidth={2}
        value={minutes}
        text={props.formatted.minutes}
        counterClockwise
      />
      <CircularProgressbar
        strokeWidth={2}
        value={seconds}
        text={props.formatted.seconds}
        counterClockwise
      />
    </div>
  );
};

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "55%"
        }}
      >
        <img src={Logo} alt="logo" width={300} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h3
            style={{
              fontFamily: "Roboto Slab",
              fontWeight: "bolder",
              fontSize: "22px",
              color: "#ffffff"
            }}
          >
            Convenient. Easy. Free
          </h3>
          <p style={{ fontFamily: "Roboto Slab", color: "#ffffff" }}>
            Coming Soon
          </p>
        </div>
        <Countdown date={Date.now() + 30000000000} renderer={renderItem} />,
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "45%"
          //   backgroundColor: "red"
        }}
      >
        <div
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center"
          }}
        >
          <h5 style={{ color: "#ffffff" }}>Subscribe to our Newsletter</h5>
          <div className="input-group" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div style={{ flexDirection: "row", display: "flex" }}>
            <img src={WebMouse} alt="web" style={styles.imgStyle} />
            <img src={android} alt="android" style={styles.imgStyle} />
            <img src={apple} alt="apple" style={styles.imgStyle} />
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <img src={FB} alt="FB" style={styles.imgStyle} />
            <img src={IG} alt="IG" style={styles.imgStyle} />
            <img src={Twitter} alt="aptwitterple" style={styles.imgStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
