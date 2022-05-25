
import purchase from '../../images/tool/purchase2.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const PurchaseBanner = ({date , setDate}) => {

    
    return (

        <div className='py-12'>
             <h2 className='text-4xl font-bold text-center mt-4'>Make Your Deal Today</h2>

             <div className="hero lg:max-w-96 ">
           
           <div className="hero-content flex-col lg:flex-row">
             <img src={purchase} className="max-w-sm rounded-lg shadow-2xl" alt='' />
             <div>
             <DayPicker 
             mode='single'
                 selected={date}
                 onSelect={setDate}

                 styles={{
                    caption: { color: 'red' }
                  }}
             
             />
             </div>
           </div>
         </div>


        </div>
    )      
};

export default PurchaseBanner;