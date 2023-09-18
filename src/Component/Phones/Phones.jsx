import { useEffect, useState } from "react";
import axios from 'axios';
import Phone from "../Phone/Phone";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Phones = () => {
    const [phones, setPhones] = useState([])
    const [shop, setShop] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(data => setPhones(data.data))
    },[])
    const handleCut = item =>{
        const have = shop.find(data=> data.id === item.id)
        if(have){
            toast.success('Successfully Added', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
            setShop([...shop, item])
            setTotal(total + item.price)
            toast.success('Successfully Added', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    const handleRemove = item => {
        const removed = shop.filter(data=> data.id !== item.id)
            setTotal(total - item.price)
            setShop(removed)
        toast.error('Removed', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
    }
    const handleBuy = () => {
        setShop([])
        setTotal(0)
        toast.success('Your product will get soon', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    return (
        <>
            <Header shop={shop} handleRemove={handleRemove} total={total} handleBuy={handleBuy}/>
            <div className="px-5 md:px-[8%] text-center my-10 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                        phones.map((phone, i)=> 
                            <Phone
                                key={i}
                                phone={phone}
                                handleCut={handleCut}
                            />
                        )
                    }
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Phones;