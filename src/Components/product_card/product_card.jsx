import { GiSettingsKnobs } from "react-icons/gi";

export default function ProductCard({ itemId, name, image, price }) {
  return (
    <article>
      <div>
        <button>Compare</button>
        <GiSettingsKnobs />
      </div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
      <p>stock</p>
    </article>
  );
}
