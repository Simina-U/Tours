import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getData = async () => {
    setLoading(true); //to avoid state initialized with false
    try {
      const data = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tours = await data.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
