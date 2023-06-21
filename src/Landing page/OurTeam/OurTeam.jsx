import React, { useEffect, useState } from "react";
import "./Landing-page.css";

//Create our team component & get data from Api github
function OurTeam(propos) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${propos.name}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
      <section className="our-team">
      <div className="Container ">
        <div className="card">
          <img src={info.avatar_url} alt="pic" className="Image" />
          <h5>{info.login}</h5>
          <p>Developer</p>
          <div className="icons ">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </section>

  );
}
export default OurTeam;
