// Маска телефона +7 (___) ___-__-__
const PREFIX = "+7 "
const LENGTH = 10 // цифр после +7

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, LENGTH)
  if (digits.length === 0) return ""
  const d = digits.split("")
  return (
    PREFIX +
    (d[0] ? "(" + d[0] : "") +
    (d[1] ? d[1] : "") +
    (d[2] ? d[2] + ") " : d[2] ? ")" : "") +
    (d[3] ? d[3] : "") +
    (d[4] ? d[4] : "") +
    (d[5] ? d[5] + "-" : "") +
    (d[6] ? d[6] : "") +
    (d[7] ? d[7] : "") +
    (d[8] ? "-" + d[8] : "") +
    (d[9] ? d[9] : "")
  )
}

export function parsePhone(masked: string): string {
  const digits = masked.replace(/\D/g, "")
  if (digits.startsWith("8") && digits.length === 11) return digits.slice(1)
  if (digits.startsWith("7") && digits.length === 11) return digits.slice(1)
  return digits.slice(0, LENGTH)
}

export function getPhoneDigitsOnly(masked: string): string {
  return parsePhone(masked).replace(/\D/g, "").slice(0, LENGTH)
}

export function isValidPhone(masked: string): boolean {
  return getPhoneDigitsOnly(masked).length === LENGTH
}
