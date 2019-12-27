import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media.length <= 0) {
      photos = "image is not found";
    } else {
      photos = media;
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;
    // console.log(photos);
    if (!photos[active].medium) {
      return (
        <div className="carousel">
          <img src={photos} alt="primary animal" />
          <div className="carousel-smaller">
            <span style={{ color: "red" }}>Image Is Not Yet Available</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel">
          <img src={photos[active].medium} alt="primary animal" />
          <div className="carousel-smaller">
            {photos.map((photo, index) => (
              /* eslint-disable-next-line */
              <img
                onClick={this.handleIndexClick}
                key={photo.small}
                data-index={index}
                src={photo.small}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Carousel;
