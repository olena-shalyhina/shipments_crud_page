import axios from 'axios';

export async function getShipmentsData() {
  const response = await axios.get(
    `https://my.api.mockaroo.com/shipments.json?key=5e0b62d0`
  );
  return response.data;
}
