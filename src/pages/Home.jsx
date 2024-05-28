import { FirstSection } from "../cmps/Home/FirstSection"
import { SecondSection } from "../cmps/Home/SecondSection"
import { ThirdSection } from "../cmps/Home/ThirdSection"
import { FourthSection } from "../cmps/Home/FourthSection"
import { AppFooter } from "../cmps/AppFooter"

export function Home() {
    return (
        <section className="home">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <AppFooter />
        </section>
    )
}