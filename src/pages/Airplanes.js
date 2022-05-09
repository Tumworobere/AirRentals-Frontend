import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import { fetchAirplanes } from '../redux/airplanes/airplanes';
import { fetchPlaneStats } from '../redux/details/details';
import '../App.css';

export default function Airplanes() {
  const dispatch = useDispatch();

  const pageChange = (e) => {
    dispatch(fetchPlaneStats(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchAirplanes());
  }, []);

  const dataArray = useSelector((state) => state.airplanes.airplanes_arr);

  const airplanes = dataArray.map((plane) => (
    <Carousel.Item key={plane.id} className="overscroll-x-none item h-screen w-screen justify-center">
      <img
        className="d-block w-screen img justify-center"
        src={plane.images}
        alt="airplane"
      />
      <Carousel.Caption>
        <NavLink to="/details" className="mt-0 p-0 text-center font-bold text-green-700 uppercase" onClick={pageChange} id={plane.id}>
          <h3 id={plane.id}>{plane.name}</h3>
        </NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <section className="homepage">
        <div>
          <h1>
            Airplane Models
          </h1>

          <p>
            Please select an airplane model
          </p>
        </div>

        <div className="airplanes">
          <Carousel fade variant="dark" className="container">
            {airplanes}
          </Carousel>
        </div>
      </section>
    </>
  );
}
