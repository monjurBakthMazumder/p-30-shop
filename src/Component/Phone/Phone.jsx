import PropTypes from 'prop-types';
import { BiCartAdd } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
const Phone = ({phone, handleCut}) => {
    const {category, description, image, price, title, rating,id} = phone;
    return (
        <div className="card card-compact border-2 text-start">
        <figure className='h-40'><img src={image} alt={`image of ${title}`} className='mt-5 h-full w-fit rounded-none'/></figure>
        <div className="card-body">
            <span className='flex justify-between items-center gap-1 h-fit'>
                <p className='text-2xl font-semibold'>${price}</p>
                <BiCartAdd 
                    onClick={()=>handleCut(phone)}
                    className=' p-1 text-4xl btn'
                />
            </span>
            <h2 className="card-title">{title.slice(0,25)}...</h2>
            <span className='flex items-center gap-[2px] text-base'>
                <p>Sale: {rating.count}</p>
                <p className='flex items-center gap-1'>Rating: {rating.rate} <AiOutlineStar/></p>
            </span>
            <span className='text-[13px] text-justify'>{description.slice(0,150)}...<span 
                 onClick={()=>document.getElementById(`my_modal_${id}`).showModal()}
                 className=' font-bold underline cursor-pointer text-gray-700'
            >read more</span></span>
            
            <dialog id={`my_modal_${id}`} className="modal">
            <div className="modal-box">
                <figure className='h-40'><img src={image} alt={`image of ${title}`} className='mt-5 h-full rounded-none'/></figure>
                <div className="card-body">
                    <span className='text-lg font-semibold'>${price}</span>
                    <h2 className="card-title">{title}</h2>
                    <span className='flex items-center gap-1'>
                        <p>sale: {rating.count}</p>
                        <p>Rating: {rating.rate}</p>
                    </span>
                    <span className='text-xs'>{category}</span>
                    <span>{description}</span>
                </div>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.object,
    handleCut: PropTypes.func,
};

export default Phone;

