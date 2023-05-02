import phoneStackImg from '../imgs/phone-stack.jpg';
import style from './WaitlistLandingV1.css';

export default function WaitlistLanding(props) {
  return (
    <div className='container'>
      <div className='logo-font'>atlas.</div>
      <div className='container-main'>
        <div className='d-flex'>
          <img src={phoneStackImg} alt='atlas mockup' />
          <div className='row pt-5 pb-5'>
            <p> </p>
            <div>
              <h1>Unlock your digital campus.</h1>
              <p className='vision-stmt' style={{color:"#777575", fontSize: '0.9rem', paddingLeft: '3%', textAlign: 'center'}}>Atlas digitizes your college campus by bringing local businesses, clubs, and alumni right to your phone.</p>
              <div className='btn-container'>
                <div className='btn-headtitle pb-3 pt-1' style={{color:"#9b9999", fontSize: '0.8rem', paddingLeft: '3.3%'}}>Want exclusive access?</div>
                <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank' ><button className='btn'>Join the Waitlist</button></a>
              </div>
            </div>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}