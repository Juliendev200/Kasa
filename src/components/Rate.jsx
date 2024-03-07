
import { FaStar } from 'react-icons/fa'

const Rate = ({ starnumber }) => {
    const rating = Array.from({ length: starnumber }, (_, index) => {
        return <span className='activestar' key={index} >&#9733;</span>
    })
    const unrated = Array.from({ length: 5 - starnumber }, (_, index) => {
        return <span className='star' key={index} >&#9733;</span>
    })
    return <div className='rating' >
        {rating}
        {unrated}
    </div>
}

export default Rate