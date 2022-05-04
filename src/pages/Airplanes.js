import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
// import { useNavigate, NavLink } from 'react-router-dom';
import { fetchData } from '../redux/airplanes/airplanes';
import '../App.css';

export default function Airplanes() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dataArray = useSelector((state) => state.planeReducer.data);

  const airplanes = dataArray.map((plane) => (
    <Carousel.Item key={plane.id}>
      <img
        className="d-block w-100 img"
        src={plane.images}
        alt="airplane"
      />
      <Carousel.Caption>
        <h3>{plane.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="airplanes">
      <Carousel fade variant="dark">
        {airplanes}
      </Carousel>
    </div>
  );
}
