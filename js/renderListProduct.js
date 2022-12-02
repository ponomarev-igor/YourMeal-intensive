import { getData } from "./getDate.js";
import { API_URL } from "./const.js";
import { PREFIX_PRODUCT } from "./const.js";
import { catalogList } from "./elements.js";
import { createCardProduct } from "./createCardProduct.js";

export const renderListProduct = async () => {
  catalogList.textContent = ' ';
  const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
  const listCard = listProduct.map(createCardProduct);
  catalogList.append(...listCard);
}