const ImageList = (props) => {
  const images = props.images.map(({urls, alt_description, id}) => {
    return <img src={urls.small} alt={alt_description} key={'unsplash-' + id} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
