import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function elapsedTime (createdAt:Date):string {

  const days:number = new Date().getDate() - createdAt.getDate();
  const hours:number = new Date().getHours() - createdAt.getHours();
  const minutes:number = new Date().getMinutes() - createdAt.getMinutes();
  const seconds:number = new Date().getSeconds() - createdAt.getSeconds();
  
  let differenceInYears = Math.floor(days / 365);
  let differenceInMonths = Math.floor(days / 30);

  if (differenceInYears > 0) return `Hace ${differenceInYears} ${differenceInYears === 1 ? " año" : " años"}`;
  else if (differenceInMonths > 0) return `Hace ${differenceInMonths} ${differenceInMonths === 1 ? " mes" : " meses"}`;
  else if (days !== null && days > 0) return `Hace ${days} ${days === 1 ? " día" : " días"}`;
  else if (hours !== null && hours > 0) return `Hace ${hours} ${hours === 1 ? " hora" : " horas"}`;
  else if (minutes !== null && minutes > 0) return `Hace ${minutes} ${minutes === 1 ? " minuto" : " minutos"}`;
  else if (seconds !== null && seconds > 0) return `Hace ${seconds} ${seconds === 1 ? " segundo" : " segundos"}`
  else return 'Justo ahora';
}

export function sameDay(firstDate:Date, secondDate:Date):boolean {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  )
}