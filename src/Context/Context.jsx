import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let dataText = createContext(null);

export default function Context({ children }) {
  // Use States
  const [dataInput, setdataInput] = useState(""); // Input Value
  const [data, setdata] = useState([]); // MovieData
  const [spinners, setspinners] = useState(false); // spinners
  const [dataTv, setdataTv] = useState([]); // Tv data
  const [dataPerson, setdataPerson] = useState([]); // Person Data
  let change = dataInput ? "search" : "discover";

  //   To get MovieData
  async function getDataMovie() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${change}/movie?api_key=c4b3993464687de9c4c4f7cf6f73c3bc`,
      {
        params: {
          query: dataInput,
        },
      }
    );
    // console.log(data.results);
    setdata(data.results);
    setspinners(true);
  }

  //   To get Tv Data
  async function getDataTv() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${change}/tv?api_key=c4b3993464687de9c4c4f7cf6f73c3bc`,
      {
        params: {
          query: dataInput,
        },
      }
    );
    // console.log(data.results);
    setdataTv(data.results);
    setspinners(true);
  }

  // To get Person data
  async function getDataPerson() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${change}/person?api_key=c4b3993464687de9c4c4f7cf6f73c3bc`
    );
    console.log(data.results);
    setdataPerson(data.results);
  }
  // Function to Get The Value OF Input
  function getInputValue(e) {
    setdataInput(e.target.value);
  }

  //   Use Effect To call The Functions
  useEffect(() => {
    getDataMovie();
    getDataTv();
    getDataPerson();
  }, [dataInput]);

  return (
    <>
      <dataText.Provider
        value={{
          getInputValue,
          dataInput,
          setdataInput,
          spinners,
          data,
          getDataMovie,
          getDataTv,
          dataTv,
          setdataTv,
          getDataPerson,
          dataPerson,
          setdataPerson,
        }}
      >
        {children}
      </dataText.Provider>
    </>
  );
}
