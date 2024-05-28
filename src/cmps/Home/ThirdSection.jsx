import { DynamicSuccessStory } from "./DynamicSuccessStory"

export function ThirdSection() {
    return (
        <article className="third-desc">
                <svg width="147" height="100" viewBox="0 0 147 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 8 Copy">
                        <rect id="Rectangle" width="100" height="100" transform="matrix(1 0 0 -1 0 100)" fill="#002529" />
                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M47 56H147V60H47V56ZM47 64H147V68H47V64ZM147 72H47V76H147V72ZM47 80H147V84H47V80ZM147 88H47V92H147V88ZM47 96H147V100H47V96Z" fill="#79C8C7" />
                    </g>
                </svg>
                <div className="header-and-stories">
                    <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
                    <div className="stories grid">
                        <DynamicSuccessStory text='The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.'
                            author='Kady Baker' picDetails={{gender: 'female', num: '1'}} />
                        <DynamicSuccessStory text='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!' author='Aiysha Reese' picDetails={{gender: 'female', num: '2'}} />
                        <DynamicSuccessStory text='Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.' author='Arthur Clarke' picDetails={{gender: 'male', num: 3}} />
                    </div>
                </div>
            </article>
    )
}