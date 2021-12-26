import React, { Component } from "react";

export class ImageCard extends Component {
  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div className="image-card">
        <img src={urls.small} alt={alt_description} />;
      </div>
    );
  }
}

export default ImageCard;
