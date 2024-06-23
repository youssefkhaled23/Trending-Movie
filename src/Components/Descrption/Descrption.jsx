import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataText } from "../../Context/Context";
import { SquareLoader } from "react-spinners";

export default function Descrption() {
  let { spinners } = useContext(dataText);
  const [Data, setData] = useState([]);
  let { type, id } = useParams();
  async function getAbout() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=c4b3993464687de9c4c4f7cf6f73c3bc`
    );
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      {spinners ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mt-5">
                <div className="overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${Data.poster_path}`}
                    className="rounded-2 w-100 h-100"
                    alt={Data.title}
                  />
                  <div className="rate p-1 position-absolute top-0 end-0 m-2 gap-1 rounded-2 bg-black d-flex justify-content-center align-items-center ">
                    <p className="mb-0 text-white rate-p">
                      {Data.vote_average}
                    </p>
                    <i className="fa-solid fa-star rate-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mt-5 bg-black">
                <h4 className="text-white mt-4">
                  Name: <span>{Data.title}</span>
                  <span>{Data.name}</span>
                </h4>
                <h5 className="text-white">
                  release_date:{" "}
                  <span className="text-danger">
                    {Data.release_date}
                    {Data.first_air_date}
                  </span>
                </h5>
                <h5 className="text-white">
                  Abstract: <span>{Data.overview}</span>
                </h5>
                <div>
                  {Data.genres?.map((e) => (
                    <button className="btn btn-danger ms-1 mt-1">
                      {e.name}
                    </button>
                  ))}
                </div>
                {Data.production_countries?.map((e) => (
                  <p className="mb-0 mt-2 text-white">Country: {e.name}</p>
                ))}
                {Data.spoken_languages?.map((e) => (
                  <p className="text-white">language: {e.english_name}</p>
                ))}
                <div>
                  <button className="btn btn-danger w-25">Trailer</button>
                  {Data.homepage !== "" ? (
                    <a
                      href={Data.homepage}
                      target="_blank"
                      className="btn btn-danger ms-2 w-50"
                    >
                      Watch Now
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <p className="mt-2 mb-1  text-white">production_companies:</p>
                {Data.production_companies?.map((e) => (
                  <p className="mb-0 text-white ms-3">- {e.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinners d-flex justify-content-center align-items-center">
          <SquareLoader color="white" />
        </div>
      )}
    </>
  );
}
