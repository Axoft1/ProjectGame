// const API_KEY = "1";

// const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;

// export { API_URL };
const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = `https://fortniteapi.io/`

const NEWS = 'v1/news?lang=ru&type=br'

const SHOP = 'v2/shop?lang=ru'

const LIST_ITEMS = 'v2/items/list?lang=ru'

const ITEM = 'v2/items/get?id='

export {API_URL,API_KEY,SHOP,NEWS,LIST_ITEMS,ITEM}
