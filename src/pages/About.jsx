import { FirstSection } from "../cmps/About/FirstSection";
import { SecondSection } from "../cmps/About/SecondSection";
import { FourthSection } from "../cmps/FourthSection";

export function About() {
    return (
        <section className="about">
            <FirstSection />
            <SecondSection />
            <FourthSection />
        </section> 
    )
}