export const getShipments = async () => {
  return await fetch('shipments.json').then((respons) => respons.json());
};
