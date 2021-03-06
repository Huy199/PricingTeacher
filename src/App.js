import { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Landing1st from './components/Landing1st';
import Landing2nd from './components/Landing2nd';
import Landing3 from './components/Landing3';
import Landing4 from './components/Landing4';

function App() {
  useEffect(() => {
    if (window.innerWidth < 1440)
      document.body.style.zoom = window.innerWidth / 1440;
    window.onresize = () => {
      if (window.innerWidth < 1440)
        document.body.style.zoom = window.innerWidth / 1440;
    };
  }, []);
  return (
    <div className='App'>
      <div className='BG-NavBar'>
        <div className='NavBar container'>
          <div className='logo'>
            <svg
              width='47'
              height='47'
              viewBox='0 0 47 47'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 33.821C0 33.821 3.49324 32.5507 6.8277 28.5811C10.1622 24.6115 12.0676 18.4189 12.0676 18.4189V40.3311C12.0676 40.3311 11.1149 38.9021 8.25676 36.6791C5.39865 34.4561 0 33.821 0 33.821Z'
                fill='#A05DD6'
              />
              <path
                d='M1.74658 34.1386C1.74658 34.1386 4.12834 33.821 7.4628 29.8514C10.7973 25.8818 12.0675 21.7534 12.0675 21.7534V40.3311L1.74658 34.1386Z'
                fill='#B27ADD'
              />
              <path
                d='M47 33.821C47 33.821 43.5068 32.5507 40.1723 28.5811C36.8378 24.6115 34.9324 18.4189 34.9324 18.4189V40.3311C34.9324 40.3311 35.8851 38.9021 38.7432 36.6791C41.6014 34.4561 47 33.821 47 33.821Z'
                fill='#A05DD6'
              />
              <path
                d='M45.2534 34.1386C45.2534 34.1386 42.8717 33.821 39.5372 29.8514C36.2027 25.8818 34.9325 21.7534 34.9325 21.7534V40.3311L45.2534 34.1386Z'
                fill='#B27ADD'
              />
              <rect
                x='13.9729'
                y='28.8987'
                width='19.0541'
                height='6.35135'
                rx='3.17568'
                fill='#42466D'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M36.2025 14.9754C36.2026 14.9589 36.2026 14.9423 36.2026 14.9257C36.2026 7.91017 28.581 0 23.4999 0C18.4188 0 10.7973 7.91013 10.7972 14.9256C10.7972 14.9257 10.7972 14.9257 10.7972 14.9257C10.7971 14.9257 10.7971 14.9257 10.7971 14.9257V29.9797C10.7971 32.1889 12.588 33.9797 14.7971 33.9797H32.2025C34.4117 33.9797 36.2025 32.1889 36.2025 29.9797V14.9754Z'
                fill='#F5BB24'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M23.5 33.9797H32.2028C34.4119 33.9797 36.2028 32.1889 36.2028 29.9797V14.9754L36.2029 14.9257C36.2029 7.91017 28.5812 0 23.5002 0C23.5001 0 23.5001 2.34832e-09 23.5 2.34832e-09V33.9797Z'
                fill='#FFDC26'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M27.9458 14.9257C27.9458 14.9257 27.9459 14.9257 27.9459 14.9257C27.9459 14.9257 27.9459 14.9257 27.9459 14.9257V29.9797C27.9459 32.1889 26.155 33.9797 23.9459 33.9797H23.054C20.8448 33.9797 19.054 32.1889 19.054 29.9797V14.9604C19.054 14.9488 19.054 14.9373 19.054 14.9257C19.054 7.91017 21.7215 0 23.4999 0C25.2783 0 27.9458 7.91016 27.9458 14.9257Z'
                fill='#FFCA39'
              />
              <circle
                cx='23.5001'
                cy='15.2433'
                r='6.03378'
                fill='#42466D'
              />
              <circle
                cx='23.5001'
                cy='15.2432'
                r='4.76351'
                fill='#DDDFE6'
              />
              <circle
                cx='25.4053'
                cy='13.973'
                r='1.27027'
                fill='white'
              />
              <rect
                x='16.5134'
                y='35.25'
                width='13.973'
                height='3.81081'
                rx='1.90541'
                fill='#C8CAD0'
              />
              <rect
                x='16.5134'
                y='35.25'
                width='6.98649'
                height='3.81081'
                rx='1.90541'
                fill='#A0A2A6'
              />
              <rect
                x='20.0068'
                y='35.25'
                width='6.98649'
                height='3.81081'
                rx='1.90541'
                fill='#B0B3B9'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M27.946 42.7301C27.946 42.7334 27.946 42.7368 27.946 42.7402C27.946 44.7722 24.7704 46.6824 23.5001 46.6824C22.2298 46.6824 19.0542 44.7722 19.0542 42.7402L19.0541 42.7402V39.0608H23.4955C23.497 39.0608 23.4986 39.0608 23.5001 39.0608C23.5016 39.0608 23.5031 39.0608 23.5047 39.0608H27.946V42.7301Z'
                fill='#D72E2E'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M20.3242 41.803C20.3241 41.8088 20.3241 41.8145 20.3241 41.8203C20.3241 43.3444 22.5925 44.777 23.4998 44.777C24.4071 44.777 26.6755 43.3444 26.6755 41.8203C26.6755 41.8203 26.6755 41.8203 26.6755 41.8203H26.6755V39.0607H20.3242V41.803Z'
                fill='#EF792A'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M21.9122 40.5904C21.9122 40.5915 21.9122 40.5927 21.9122 40.5939C21.9122 41.4406 23.0464 42.2365 23.5 42.2365C23.9537 42.2365 25.0879 41.4406 25.0879 40.5939C25.0879 40.5939 25.0879 40.5939 25.0879 40.5939H25.0879V39.0608H21.9122V40.5904Z'
                fill='#FFCA39'
              />
              <path
                d='M23.5001 21.9121L26.6758 36.2027L23.5001 41.9189L20.3245 36.2027L23.5001 21.9121Z'
                fill='#A05DD6'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M23.5 41.9187L23.5001 41.9189L26.6758 36.2026L23.5001 21.9121L23.5 21.9126V41.9187Z'
                fill='#B27ADD'
              />
            </svg>
            <span>edunet</span>
          </div>
          {/* <div className='auth'>
            <div className='btn sign-up'>????ng k??</div>
            <div className='btn sign-in'>????ng nh???p</div>
          </div> */}
        </div>
      </div>
      <div className='container'>
        <Landing1st />
        <Contact />
      </div>
    </div>
  );
}

export default App;
