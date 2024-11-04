import Detail from '../components/Detail/Detail';
const DetailPage = ({selected,pending,handleCart}) => {
     
    return ( 
        <div className="flex flex-col items-center justify-center ">
            <h1>Product Details</h1>
            <Detail selected={selected} pending={pending} handleCart={handleCart} />
        </div>
     );
}
 
export default DetailPage;