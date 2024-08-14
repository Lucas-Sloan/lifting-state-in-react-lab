// src/components/Ingredient.jsx
const Ingredient = ({ ingredient, onButtonClick, isStacked }) => {
    return (
      <li style={{ color: ingredient.color }}>
        {ingredient.name}
        <button onClick={onButtonClick}>
          {isStacked ? 'X' : '+'}
        </button>
      </li>
    );
};
  
export default Ingredient;