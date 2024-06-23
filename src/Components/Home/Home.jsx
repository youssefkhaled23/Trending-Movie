import {  useContext } from "react";
import { Helmet } from "react-helmet";
import { SquareLoader } from "react-spinners";
import "./Home.css";
import { dataText } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Home() {
  // Context
  let {spinners , data  , dataTv , dataPerson  } = useContext(dataText)
  return (
    <div className="height">
      <Helmet title="Home" />
      {spinners ? (
        <div className="container-fluid">
          <h2 className="my-2 text-danger">Trending Movie</h2>
          <div className="row">
            {data.map((e) => (
              <div className="col-lg-3 col-md-6 col-sm-12 my-2" key={e.id}>
                <div className="card h-100 bg-black position-relative">
                  <div className="overflow-hidden">
                    <Link to={`/About/movie/${e.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                      className="w-100 rounded-2"
                      alt={e.title}
                      content={e.title}
                    />
                    </Link>
                  </div>
                  <h5 className="text-white mt-2">{e.title}</h5>
                  <div className="rate position-absolute top-0 end-0">
                    <div className="rate p-1 position-absolute top-0 end-0 m-2 gap-1 rounded-2 bg-black d-flex justify-content-center align-items-center ">
                      <p className="mb-0 text-white rate-p">
                        {e.vote_average.toFixed(1)}
                      </p>
                      <i className="fa-solid fa-star rate-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mb-0 pt-3 text-danger">Trending Tv</h2>
          <div className="row">
            {dataTv.map((e) => (
              <div className="col-lg-3 col-md-6 col-sm-12 my-4" key={e.id}>
                <div className="card h-100 bg-black position-relative">
                  <div className="overflow-hidden">
                    <Link to={`/About/movie/${e.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                      className="w-100 rounded-2"
                      alt={e.title}
                      content={e.title}
                    />
                    </Link>
                  </div>
                  <h5 className="text-white mt-2">{e.name}</h5>
                  <div className="rate position-absolute top-0 end-0">
                    <div className="rate p-1 position-absolute top-0 end-0 m-2 gap-1 rounded-2 bg-black d-flex justify-content-center align-items-center ">
                      <p className="mb-0 text-white rate-p">
                        {e.vote_average.toFixed(1)}
                      </p>
                      <i className="fa-solid fa-star rate-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mb-0 pt-3 text-danger">Most Popular Persons</h2>
          <div className="row justify-content-center">
            {dataPerson.map((e) => (
              <div className="col-lg-2 col-md-4 col-sm-12 my-4">
                <div className="card h-100 bg-black position-relative">
                  <div className="overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                      className="w-100 rounded-2 "
                      alt={e.name}
                    />
                  </div>
                  <h5 className="text-white mt-2">{e.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="spinners d-flex justify-content-center align-items-center">
          <SquareLoader color="white" />
        </div>
      )}
    </div>
  );
}
