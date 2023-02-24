import { categories } from "../constants";
import Navlink from "./Navlink";
categories;

function Categories() {
  return (
    <nav>
      {categories.map((category) => (
        <Navlink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
}

export default Categories;
