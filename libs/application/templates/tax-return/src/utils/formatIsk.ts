export const formatIsk = (value: number): string =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' kr.'

export const deFormatIsk = (value: string): number => {
  const number = value.replace(/\./g, '').replace(' kr.', '')
  return parseInt(number)
}
