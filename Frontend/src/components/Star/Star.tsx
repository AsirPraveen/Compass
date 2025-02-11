//@ts-nocheck
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

const Star = ({stars}:any) => {

    const ratingStar = Array.from({length: 5}, (elem, index) => {
        let number=index+0.5;
        return (
            <span key={index}>
                {
                    stars >= index+1 ? 
                    (<FaStar className='icon' color='yellow'/>)
                    : 
                    stars >= number ? 
                    (<FaStarHalfAlt className='icon' color='yellow'/>)
                    : 
                    (<AiOutlineStar className="icon" color='yellow'/>)
                }
            </span>
        );
    });

    return (
        <div className='icon-style'>
            {ratingStar}
        </div>
    )
}

export default Star
