import './PropertyCard.css';

export interface PropertyItem {
  sku: string;
  name: string;
  Image?: string;
  imageAlt?: string;
  price?: number;
  currency?: string;
  productLabel?: string;
  description?: string;
  longDescription?: string;
  productUrl?: string;
  category1?: string;
  category2?: string;
  category3?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  area?: number | string;
  areaUnit?: string;
}

interface PropertyCardProps {
  property: PropertyItem;
  onViewMore?: (property: PropertyItem) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewMore }) => {
  const formattedPrice =
    property.price != null && property.currency
      ? `${property.price.toLocaleString()} ${property.currency}`
      : property.price != null
        ? property.price.toLocaleString()
        : undefined;

  const community = property.category1 || property.category2 || property.category3;

  const handleViewMore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewMore) {
      onViewMore(property);
    } else if (property.productUrl) {
      window.open(property.productUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="property-card-wrapper">
      <div className="property-card">
        <div className="property-image-wrapper">
          <img className="property-image" src={property.Image || ''} alt={property.imageAlt || property.name} />
          {property.productLabel && <span className="property-badge">{property.productLabel}</span>}
          {community && <span className="property-community">{community}</span>}
        </div>
        <div className="property-body">
          <div className="property-name">{property.name}</div>
          {formattedPrice && <div className="property-price">{formattedPrice}</div>}
          <div className="property-specs">
            {property.bedrooms != null && Number(property.bedrooms) > 0 && (
              <span className="property-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21V7l9-4 9 4v14"/><path d="M9 21V11h6v10"/></svg>
                {property.bedrooms} Bed
              </span>
            )}
            {property.bathrooms != null && (
              <span className="property-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h16M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M6 12V5a2 2 0 012-2h1"/></svg>
                {property.bathrooms} Bath
              </span>
            )}
            {property.area && (
              <span className="property-spec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>
                {property.area} {property.areaUnit || 'sqm'}
              </span>
            )}
          </div>
          <button type="button" className="view-more-button" onClick={handleViewMore}>
            View more Information
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
