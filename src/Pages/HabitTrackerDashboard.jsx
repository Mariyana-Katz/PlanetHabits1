

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'


export default function HabitTrackerDashboard(){
    return(
        <>
        <Navbar/>
        <Hero/>
         <IntroCard title = " Daily Eco Habits Dashboard!"
                message = {
                    <>" Track your planet-positive actions each day! <br />Use the
                checklist below to mark which habits you’ve completed.
                <br />Small steps like saving energy, reducing waste, or biking
                instead of driving all add up — and this is your space to stay
                on track. 🌎💚 Keep it up!<br />
                Every day you check your habits adds to your streak — build
                momentum and see how your small actions create big impact over
                time!"
                    </>
                }
                />
        <Footer/>
        
       </>
    )
}