import { useState } from 'react'
import IconArrow from './assets/IconArrow'
import './index.css'

interface birthDateValues {
  day: number
  month: number
  year: number
}

export default function App() {
  const [days, setDays] = useState('--')
  const [months, setMonths] = useState('--')
  const [years, setYears] = useState('--')

  const maxYears = (new Date().getFullYear() + 1000).toString()

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    const formValues: birthDateValues = {
      day: parseInt((form.day as HTMLInputElement).value),
      month: parseInt((form.month as HTMLInputElement).value),
      year: parseInt((form.year as HTMLInputElement).value),
    }

    const {
      daysLived: days,
      monthsLived: months,
      yearsLived: years,
    } = calculateAge(formValues.day, formValues.month, formValues.year)

    setDays(days.toString())
    setMonths(months.toString())
    setYears(years.toString())
    form.reset()
  }

  const calculateAge = (
    dayBorn: number,
    monthBorn: number,
    yearBorn: number
  ) => {
    const currentDate = new Date()

    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    let daysLived = currentDay
    let monthsLived = currentMonth
    let yearsLived = currentYear - yearBorn

    // adjust the current day if necessary
    if (currentDay < dayBorn) {
      // previous month
      const daysInPreviousMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate()

      daysLived = currentDay + daysInPreviousMonth - dayBorn
      monthsLived--
    } else {
      daysLived = currentDay - dayBorn
    }

    if (currentMonth < monthBorn) {
      monthsLived = currentMonth + 12 - monthBorn
      yearsLived--
    } else {
      monthsLived = currentMonth - monthBorn
    }

    return { daysLived, monthsLived, yearsLived }
  }

  return (
    <>
      <main className='border-main-container mx-4 px-4 py-10 h-[390px] w-auto bg-white md:w-[625px] md:h-[500px] shadow-xl md:p-10'>
        <h1 className='sr-only'>Age Calculator</h1>
        <form
          onSubmit={onSubmit}
          className='bg-white rounded-2xl flex flex-col gap-6'
        >
          <div className=' flex justify-between gap-4 md:justify-start md:gap-8'>
            <label className='flex flex-col'>
              <span className='uppercase font-bold text-xs text-gray-500 tracking-widest mb-1'>
                Day
              </span>
              <input
                id='day'
                type='number'
                required
                max={31}
                placeholder='DD'
                className='w-20 h-12 pl-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-purple font-extrabold md:w-28'
              />
            </label>

            <label className='flex flex-col'>
              <span className='uppercase font-bold text-xs text-gray-500 tracking-widest mb-1'>
                Month
              </span>
              <input
                id='month'
                type='number'
                required
                min={1}
                max={12}
                placeholder='MM'
                className='w-20 h-12 pl-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-purple font-extrabold md:w-28'
              />
            </label>

            <label className='flex flex-col'>
              <span className='uppercase font-bold text-xs text-gray-500 tracking-widest mb-1'>
                Year
              </span>
              <input
                id='year'
                type='number'
                required
                min={1}
                max={maxYears}
                placeholder='YYYY'
                className='w-20 h-12 pl-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-purple font-extrabold md:w-28'
              />
            </label>
          </div>
          <button
            type='submit'
            className='bg-primary-purple rounded-full self-center p-1 z-20 md:self-end md:p-3 hover-btn'
          >
            <IconArrow />
          </button>
          <hr className='relative bottom-12 md:bottom-16' />
        </form>

        <section>
          <h2 className='sr-only'>Result</h2>
          <p className='flex gap-2 text-5xl font-extrabold text-primary-purple italic md:text-7xl'>
            {years}
            <span className='text-slate-950'>years</span>
          </p>
          <p className='flex gap-2 text-5xl font-extrabold text-primary-purple italic md:text-7xl'>
            {months}
            <span className='text-slate-950'>months</span>
          </p>
          <p className='flex gap-2 text-5xl font-extrabold text-primary-purple italic md:text-7xl'>
            {days}
            <span className='text-slate-950'>days</span>
          </p>
        </section>
      </main>
    </>
  )
}
