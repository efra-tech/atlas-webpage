import phoneStackImg from '../imgs/phone-stack.jpg';
import style from './WaitlistLandingV1.css';

export default function WaitlistLanding(props) {
  return (
    <div className='container'>
      <div className='logo-font'>atlas.</div>
      <div className='container-main' style={{marginTop: '8%'}}>
        <div className='d-flex'>
          <img src={phoneStackImg} alt='atlas mockup' />
          <div className='align-content-center align-self-center text-center'>
            <h1>Unlock your digital campus.</h1>
            <p className='vision-stmt' style={{color:"#777575", fontSize: '0.9rem'}}>Atlas digitizes your college campus by bringing local businesses, clubs, and alumni right to your phone.</p>
            <p className='btn-headtitle' style={{color:"#9b9999", fontSize: '0.8rem'}}>Want exclusive access?</p>
            <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank'><button className='bttn'>Join the Waitlist</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}