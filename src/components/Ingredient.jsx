// src/components/Ingredient.jsx
const Ingredient = ({ ingredient, onButtonClick, isStacked }) => {
    return (
      <li 
        style={{ 
          backgroundColor: ingredient.color,
          color: 'white'
        }}
      >
        {ingredient.name}
        <button onClick={onButtonClick}>
          {isStacked ? 'X' : '+'}
        </button>
      </li>
    );
};
  
export default Ingredient;