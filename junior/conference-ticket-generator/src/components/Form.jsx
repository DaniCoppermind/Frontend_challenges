import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import DragAndDrop from './DragAndDrop'

const Form = () => {
  const { fullName, setFullName, email, setEmail, githubUser, setGithubUser } =
    useUserContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/ticket')
  }

  return (
    <>
      <div className='text-neutral-50 text-center w-80 m-auto md:w-100'>
        <h1 className='text-3xl mb-2'>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className='text-neutral-400 text-xl tracking-wide'>
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 p-4 items-center text-neutral-100 text-xl md:w-120 md:gap-4 md:m-auto '
      >
        <DragAndDrop />
        <div className='flex flex-col gap-1.5 w-full'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            id='fullName'
            className='border border-neutral-500 rounded-xl p-2 bg-neutral-700-opacity-low'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-1.5 w-full'>
          <label htmlFor='email'>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            required
            className='border border-neutral-500 rounded-xl p-2 bg-neutral-700-opacity-low'
            type='email'
            placeholder='example@email.com'
          />
        </div>
        <div className='flex flex-col gap-1.5 w-full'>
          <label htmlFor='githubUser'>Github Username</label>
          <input
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
            required
            id='githubUser'
            className='border border-neutral-500 rounded-xl p-2 bg-neutral-700-opacity-low'
            type='text'
            placeholder='@yourusername'
          />
        </div>
        <button className='w-full mt-4 text-slate-900 rounded-xl py-4 px-2 bg-orange-500 font-bold cursor-pointer'>
          Generate My Ticket
        </button>
      </form>
    </>
  )
}

export default Form
