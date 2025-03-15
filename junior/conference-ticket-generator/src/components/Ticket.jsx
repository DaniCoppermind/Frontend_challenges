import { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import ticketImage from '/images/pattern-ticket.svg'
import githubIcon from '/images/icon-github.svg'
import logo from '/images/logo-full.svg'

const Ticket = () => {
  const { setAvatarUrl, avatarUrl, fullName, githubUser, email, avatarImage } =
    useUserContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (
      avatarImage === null ||
      githubUser === '' ||
      fullName === '' ||
      email === ''
    ) {
      navigate('/')
    }
    if (avatarImage) {
      const url = URL.createObjectURL(avatarImage)
      setAvatarUrl(url)

      return () => URL.revokeObjectURL(url)
    }
  }, [avatarImage])

  return (
    <div className='mx-auto flex flex-col items-center p-4'>
      <section className='flex flex-col items-center max-w-md mx-auto mb-12 text-center'>
        <h3 className='text-3xl mb-4'>
          Congrats,{' '}
          <span className='bg-gradient-to-r from-[#FF8D8D] to-[#F7CC8F] text-transparent bg-clip-text'>
            {fullName}
          </span>
          ! Your ticket is ready.
        </h3>
        <p className='text-neutral-400 text-md md:text-lg'>
          We've emailed your ticket to{' '}
          <span className='text-[#FF8D8D]'>{email}</span> and will send updates
          in the run up to the event.
        </p>
      </section>

      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <div className='mt-12 relative inline-block transition-transform duration-300 ease-in-out hover:scale-105'>
          <img
            src={ticketImage || '/placeholder.svg'}
            className='w-full md:p-4'
            alt='Your Personal Ticket'
          />
          <span className='absolute rotate-90 right-0 top-13 text-neutral-400 md:top-32 md:text-5xl'>
            #10906
          </span>

          <div className='absolute left-5 top-5 md:left-15 md:top-15'>
            <img
              src={logo || '/placeholder.svg'}
              className='h-5 md:h-12'
              alt='Event logo'
            />
            <p className='ml-8 text-sm md:ml-18 md:text-2xl md:tracking-wide text-neutral-300'>
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
          <div className='absolute flex items-center justify-center gap-3 bottom-[10%] left-5 md:bottom-12 md:left-14'>
            {avatarUrl && (
              <img
                src={avatarUrl || '/placeholder.svg'}
                className='object-cover object-center w-10 rounded-md border-1 border-neutral-500 md:w-24'
                alt='Your avatar'
              />
            )}
            <div>
              <p className='md:text-3xl'>{fullName}</p>
              <div className='flex gap-1 items-center'>
                <img
                  src={githubIcon || '/placeholder.svg'}
                  alt='GitHub icon'
                  className='md:w-10'
                />
                <span className='text-sm text-neutral-400 md:text-2xl'>
                  {githubUser}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Ticket
