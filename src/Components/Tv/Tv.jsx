import { useContext} from "react";
import { Helmet } from "react-helmet";
import { SquareLoader } from "react-spinners";
import { dataText } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Tv() {
  // UseContext
  let {spinners , dataTv} = useContext(dataText)
  return (
    <>
      <Helmet title="Tv" />
      {spinners ? (
        <div className="container-fluid pb-2">
          <h3 className="my-2 text-danger">The Best Tv To Watch</h3>
          <div className="row">
            {dataTv.map((e) => (
              <div className="col-lg-3 col-md-6 col-sm-12 my-2" key={e.id}>
                <div className="card h-100 bg-black position-relative">
                  <div className="overflow-hidden">
                    <Link to={`/About/tv/${e.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                      className="w-100 rounded-2"
                      alt={e.title}
                      content={e.title}
                    />
                    </Link>
                  </div>
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
        </div>
      ) : (
        <div className="spinners d-flex justify-content-center align-items-center">
          <SquareLoader color="white" />
        </div>
      )}
    </>
  );
}
