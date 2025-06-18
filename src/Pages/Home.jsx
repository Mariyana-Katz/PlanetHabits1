import React from 'react';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import IntroCard from '../Components/IntroCard';


export default function Home(){
return(
            <div>
                <Navbar/>
                <Hero/>
                  <IntroCard title = " Welcome to Planet Habits!"
                message = {
                    <>"Start small, make a big impact. Planet Habits helps you build
                        simple, eco-friendly habits that protect the planet — one day at
                        a time. Whether it’s turning off unused lights, biking instead
                        of driving, or cutting down on waste, every action matters.
                        Track your progress, learn new tips, and join a community of
                        changemakers working toward a cleaner, greener future."
                    </>
                }
                />
                <Footer/>
              
            </div>
        );
}