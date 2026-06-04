import type { StaticContentMessageTextPayload } from '../../mockController';
import './Comparison.css';

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  rating: number;
  features: { name: string; value: string }[];
}

const Comparison: React.FC<{ content: StaticContentMessageTextPayload }> = ({ content }) => {
  const products: Product[] = (content.curation as any)?.products || [];

  if (products.length === 0) return null;

  const allFeatures = products[0]?.features?.map(f => f.name) || [];

  return (
    <div className="comparison-template">
      <div className="comparison-header">
        <h2>Property Comparison</h2>
      </div>
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>
              {products.map(p => (
                <th key={p.id}>
                  <div className="comparison-product-header">
                    <img src={p.image} alt={p.name} />
                    <span className="comparison-product-name">{p.name}</span>
                    <span className="comparison-product-price">{p.price}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map(featureName => (
              <tr key={featureName}>
                <td className="comparison-feature-name">{featureName}</td>
                {products.map(p => {
                  const feature = p.features.find(f => f.name === featureName);
                  return <td key={p.id}>{feature?.value || '-'}</td>;
                })}
              </tr>
            ))}
            <tr>
              <td className="comparison-feature-name">Rating</td>
              {products.map(p => (
                <td key={p.id}>
                  <div className="comparison-rating">
                    {'★'.repeat(Math.floor(p.rating))}{'☆'.repeat(5 - Math.floor(p.rating))}
                    <span>{p.rating}</span>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
