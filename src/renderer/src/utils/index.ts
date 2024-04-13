import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const dateFormatter = new Intl.DateTimeFormat(window.context.local, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'CAT'
})

export const formatDateFromMS = (ms: number) => dateFormatter.format(ms)
