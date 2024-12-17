import './app.css'
import persons from './data/db.json'

function App() {
  console.log(persons)

  return (
    <main className='card__container'>
      {persons.map((person) => (
        <section key={person.id} className={`card__profile card__${person.id}`}>
          <div className='profile__person'>
            <img src={person.imgUrl} alt={person.name} />
            <div className='profile__person-data'>
              <h2>{person.name}</h2>
              <p>{person.verified}</p>
            </div>
          </div>

          <p className='profile__person-comment'>{person.comment}</p>

          <blockquote className='profile__person-information'>
            {person.information}
          </blockquote>
        </section>
      ))}
    </main>
  )
}

export default App
