export const formatIsk = (value: number): string =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' kr.'

export const deFormatIsk = (value: string): number => {
  if (!value || typeof value !== 'string') {
    return 0
  }
  const number = value.replace(/\./g, '').replace(' kr.', '')
  return parseInt(number)
}
