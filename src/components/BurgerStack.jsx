// src/components/BurgerStack.jsx
const BurgerStack = ({ ingredients }) => {
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
  
  export default BurgerStack;