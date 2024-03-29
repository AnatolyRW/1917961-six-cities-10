type TabProps = {
    images: string[];
  }

function PropertyGallery({images}: TabProps): JSX.Element {

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo_studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;
