import { FirstSection } from "../cmps/About/FirstSection";
import { SecondSection } from "../cmps/About/SecondSection";

export function About() {
    return (
        <section className="about">
            <FirstSection />
            <SecondSection />
        </section> 
    )
}