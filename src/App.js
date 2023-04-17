import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div>
        {data.map((d, i) => (
          <ul key={i}>
            <li>{d.capsule_serial}</li>
            <li>{d.capsule_id}</li>
            <li>{d.status}</li>
            <li>{d.original_launch}</li>
            <li>{d.original_launch_unix}</li>
            {d.missions.map((missions) => (
              <ul key={missions.name}>
                <li>{missions.name}</li>
                <li>{missions.flight}</li>
                <li></li>
              </ul>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
