import PropTypes from 'prop-types';
import { BiCartAdd } from 'react-icons/bi';
import Item from '../Item/Item';
const Header = ({shop,handleRemove, total , handleBuy}) => {
    return (
        <div className="navbar shadow sticky top-0 bg-white z-50 px-5 md:px-[8%]">
          <div>
            <a className="btn btn-ghost normal-case text-2xl">Fake Shope</a>
          </div>
          <div className="ml-auto ">
          <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4">
            <div className="indicator m-2">
              <span className="indicator-item badge badge-primary">{shop.length}</span> 
              <div className="grid btn place-items-center"><BiCartAdd className=' text-2xl' /></div>
            </div>
            </label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li className='text-2xl font-semibold mb-2'>Fake Shop</li>
              {
                shop.map((sho, index)=> 
                  <Item
                    key={index}
                    sho={sho}
                    index={index}
                    handleRemove={handleRemove}
                  />
                )
              }
              <hr className='mt-5'/><hr />
              <li className='text-lg font-medium my-2'>Total: {total.toFixed(2)}</li>
              <button 
                onClick={handleBuy}
                className="btn  btn-outline btn-success"
              >Buy Now</button>
    </ul>
          </div>
        </div>
          </div>
          
      </div>
    );
};
Header.propTypes = {
  shop: PropTypes.object,
  handleRemove: PropTypes.func,
  handleBuy: PropTypes.func,
  total: PropTypes.number,
};
export default Header;