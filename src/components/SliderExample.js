import React from 'react';
import Slider from 'react-slick';

const style = {
  width: '280px'
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

class SliderExample extends React.Component {

  render() {
    return (
      <Slider {...settings}>
        <div><img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" style={style}/></div>
        <div><img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" style={style}/></div>
        <div><img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg" style={style}/></div>
        <div><img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" style={style}/></div>
      </Slider>
    );
  }
}

export default SliderExample;