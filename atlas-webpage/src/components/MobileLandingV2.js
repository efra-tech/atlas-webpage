import style from './MobileLandingV2.css';

import phoneStackImg from '../imgs/phoneStack.png';
import Message1Img from '../imgs/message1.png';
import AiAvatar from '../imgs/AI-avatar.png';

export default function MobileLanding(props) {
  return (
    <div className>
      <div className='logo-font'>atlas.</div>
      <div className>
        <h1>Unlock your digital campus.</h1>
        <p className='vision-stmt' style={{color:"#777575", fontSize: '0.9rem', paddingLeft: '3%', textAlign: 'center'}}>Atlas digitizes your college campus by bringing local businesses, clubs, and alumni right to your phone.</p>
        <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank' ><button className='btn'>Join the Waitlist</button></a>
        <div><img src={phoneStackImg} alt='atlas mockup' /></div>
        <div style={{background: "blue"}}>
          <p>For <i style={{textDecoration: 'underline'}}>Students</i></p>
          <p>We’re connecting you to the best-kept secrets of your college campus, making it even easier to find your favorite study spot, 3 am eats, club events, and more, all shared by real students and alumni of your campus.</p>
        </div>
        <div style={{background: "blue"}}>
          <p>For <i style={{textDecoration: 'underline'}}>Businesses</i></p>
          <p>Whether you’re a local restaurant, bookstore, cafe, or student-run side hustle, we’re creating a platform that connects you directly to college students. With over $600 billion in annual spending power, college students have the means to spend while you give them the essentials they need for an amazing college experience.</p>
        </div>
        <div className='messages-container'>
          <div><img src={Message1Img} alt='atlas mockup' style={{height: "13rem", background: "blue"}} /></div>
          <div style={{backgroundColor: '#5B24BF', borderRadius: "24px 24px 0px 24px"}}>
            <p>I’m looking for a place I can</p>
            <p>study with 5 people on</p>
            <p>campus.</p>
          </div>
          <div>
            <div><img src={AiAvatar} alt='atlas mockup' /></div>
            <div style={{backgroundColor: '#5B24BF', borderRadius: "24px 24px 0px 24px"}}>
              <p>Here are some suggestions on</p>
              <p>places you can study with 5</p>
              <p>people:</p>
            </div>
          </div>
        </div>
        <h1>what makes us different?</h1>
        <div className='btm-round-container'>
          <p><i style={{fontStyle: 'bold'}}>We recognize the unique needs of college students, and the unique environment of university campuses.</i></p>
          <p>Atlas is the ultimate solution for college students' unique priorities, providing resources for studying, affordable dining, living arrangements, socializing, and discovering clubs and organizations on campus. Social media is no longer reliable due to the overwhelming amount of information available. Atlas is the one-stop-shop for all student needs to thrive on campus.</p>
          <p>US universities are like mini-cities that are highly walkable and accessible to students. However, small businesses in these areas are still struggling to attract foot traffic. Through digital connectivity between students and businesses, Atlas aims to create a more prosperous university ecosystem.</p>
          <p>want exclusive access and pre-launch benefits?</p>
          <a rel="noreferrer" href='https://forms.gle/qV3QL2AMqX5jgoW67' target='_blank' ><button className='btn'>Join the Waitlist</button></a>
        </div>
        <div className='d-flex'>
          <div className='logo-font p-0 m-0'>atlas.</div>
          <p>2023. all rights reserved.</p>
        </div>
        <p>we’re building in public! follow us on socials for live updates.</p>
      </div>
    </div>
  );
}