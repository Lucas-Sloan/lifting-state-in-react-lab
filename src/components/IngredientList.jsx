// src/components/IngredientList.jsx
const IngredientList = ({ ingredients }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ color: ingredient.color }}>
            {ingredient.name}
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;