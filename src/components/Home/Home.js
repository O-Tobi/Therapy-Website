import Hero from "../Hero/Hero";
import Service from "../Company-Service/Service";
import Therapists from "../Therapists/Therapists";
import Guide from "../Guide/Guide";

function Home () {
    return (
        <div>
            <Hero/>
            <Service />
            <Therapists />
            <Guide />
        </div>
    )
}

export default Home;