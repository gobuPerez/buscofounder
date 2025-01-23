import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sameDay(firstDate:Date, secondDate:Date):boolean {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  )
}

interface TimeObject {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateDifference(createdAt: Date):TimeObject {
  let start = new Date(createdAt);
  let end = new Date();

  const differenceSeconds = (end.getTime() - start.getTime()) / 1000;
  const differenceMinutes = differenceSeconds / 60;
  const differenceHours = differenceMinutes / 60;
  const differenceDays = differenceHours / 24;
  const differenceMonths = differenceDays / 30;
  const differenceYears = differenceMonths / 12;

  return {
    years: Math.floor(differenceYears),
    months: Math.floor(differenceMonths),
    days: Math.floor(differenceDays),
    hours: Math.floor(differenceHours),
    minutes: Math.floor(differenceMinutes),
    seconds: Math.floor(differenceSeconds)
  }
}

export function differenceToString(difference:TimeObject):string {
  return (
    difference.years > 0 ? `Hace ${difference.years} ${difference.years === 1 ? " año" : " años"}`
    : difference.months > 0 ? `Hace ${difference.months} ${difference.months === 1 ? " mes" : " meses"}`
    : difference.days > 0 ? `Hace ${difference.days} ${difference.days === 1 ? " día" : " días"}`
    : difference.hours > 0 ? `Hace ${difference.hours} ${difference.hours === 1 ? " hora" : " horas"}`
    : difference.minutes > 0 ? `Hace ${difference.minutes} ${difference.minutes === 1 ? " minuto" : " minutos"}`
    : difference.seconds > 0 ? `Hace ${difference.seconds} ${difference.seconds === 1 ? " segundo" : " segundos"}`
    : 'Justo ahora'
  )
}