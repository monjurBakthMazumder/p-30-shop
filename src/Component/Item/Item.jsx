import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';

const Item = ({sho, handleRemove}) => {
    const {image, price, title} = sho;
    return (
        <li>
            <div className="flex items-center gap-3 border-2 rounded bg-white">
                <img src={image} alt={`image of ${title}`} className='w-16'/>
                <div className="flex justify-between items-center gap-1 w-full">
                    <div className="flex-1">
                        <h1 className='text-[13px]'>{title.slice(0,30)}</h1>
                        <p>${price}</p>
                    </div>
                    <TiDeleteOutline 
                        onClick={()=>handleRemove(sho)}
                        className='text-2xl hover:text-red-500'
                    />
                </div>
            </div>
        </li>
    );
};

Item.propTypes = {
    sho : PropTypes.object,
    handleRemove : PropTypes.number,
};

export default Item;