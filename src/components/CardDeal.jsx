import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = ()=> {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal 
                 <br className='sm:block hidden'/ > in few easy steps   
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Check out our card deals, it is amazing and mak sure to subscribe to them, we have an excellent team that will guide yout through them.</p>

                <Button styles='mt-10' />
            </div>

            <div className={layout.sectionImg}>
                <img src={card} alt='card' className='w-100% h-100%'/>

            </div>

            
        </section>
    )
}

export default CardDeal