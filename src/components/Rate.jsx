
import { FaStar } from 'react-icons/fa'

const Rate = ({ starnumber }) => {
    const rating = Array.from({ length: starnumber }, (_, index) => {
        return <FaStar size={25} className='activestar' key={index} />
    })
    const unrated = Array.from({ length: 5 - starnumber }, (_, index) => {
        return <FaStar size={25} className='star' key={index} />
    })
    return <div className='rating' >
        {rating}
        {unrated}
    </div>
}

export default Rate