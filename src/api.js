// @ts-ignore
import { API_URL, API_KEY, SHOP, NEWS, LIST_ITEMS, ITEM } from "./config";

const getAllNews = async () => {
  const response = await fetch(API_URL + NEWS, {
    headers: {
      Authorization: API_KEY,
    },
  });
  return await response.json();
};

const getAllShop = async () => {
  const response = await fetch(API_URL + SHOP, {
    headers: {
      Authorization: API_KEY,
    },
  });
  return await response.json();
};

const getAllCosmetik = async () => {
  const response = await fetch(API_URL + LIST_ITEMS,{
    headers: {
      Authorization: API_KEY,
    },
  });
  return await response.json();
};

const getItemId = async (id) => {
  const response = await fetch(API_URL + ITEM + id + '&lang=ru',{
    headers: {
      Authorization: API_KEY,
    },
  });
  return await response.json();
};

export { getItemId, getAllNews, getAllShop, getAllCosmetik };
