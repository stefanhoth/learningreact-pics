import React, { Component } from "react";

export class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 20); // see ImageList.css grid-auto-rows: 20px
    this.setState({ spans }); //same as {spans: spans}
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img ref={this.imageRef} src={urls.small} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
