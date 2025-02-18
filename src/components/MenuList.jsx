import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch'

function MenuList() {
    const {
        data:quizzes, 
        isPending,
        error,
    } = useFetch("http://localhost:3000/quizzes")
    console.log(quizzes);
    
  return (
    <div>
        {isPending && <p>Loading...</p>}
        {error && <div>{error}</div>}
        <div className='menu-list'>
           {quizzes && quizzes.map((item)=>{
            return (
                <Link to={`/quiz/${item.title}`} key={item.title} className='menu-item header-logo'>
                    <figure style={{backgroundColor: item.color}}>
                        <img src={item.icon} alt={item.title} />
                    </figure>
                    <span>{item.title}</span>
                </Link>
            )
           })}
        </div>
    </div>
  )
}

export default MenuList