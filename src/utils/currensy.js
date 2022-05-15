const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })

export function currensy(value)
{
  return formatter.format(value)
}