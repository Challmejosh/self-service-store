import Abandonment from '../components/Abandonment'

const AbandonmentPage = ({setCart,cart}) => {
    return ( 
        <div className="">
            <Abandonment cart={cart} setCart={setCart} />
        </div>
     );
}
 
export default AbandonmentPage;