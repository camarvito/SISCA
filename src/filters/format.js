export const toNumber = value => {
  const number = Number(value);
  return !isNaN(number) ? number : 0;
};

const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const toMoney = value => formatPrice(toNumber(value));
