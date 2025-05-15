import { useEffect } from "react"
import LottieHero from "../../components/heroAnimation"
import { Link } from "react-router-dom"

const About = ()=>{
    const data = [{
        title : "Innovation at the Core",
        description : "Success in today’s fast-changing digital world requires constant reinvention, agility, and bold innovation. At INTELLECTRA, we help organizations stay ahead by transforming ideas into actionable, scalable solutions through our idea-to-solution framework. Whether through AI, automation, cybersecurity, or cloud solutions, we enable businesses to embrace innovation that fuels sustainable growth.",
        link : "/innovation"
    },{
        title : "Our Commitment to ESG",
        description : "Sustainability and ethical responsibility are not just corporate values—they are fundamental to the way we do business. We are deeply committed to environmental stewardship, social impact, and governance excellence. Our ESG initiatives are integrated into our business operations, partnerships, and community-driven projects, ensuring that we contribute to a more sustainable and inclusive world.",
        link : "/esg"
    },{
        title : "Industry Expertise",
        description : "With deep experience across multiple industries, our engineers and consultants help businesses navigate complexity with precision and confidence. We map your industry’s architecture to tailored technology solutions, ensuring that every implementation is purpose-built to meet your unique operational challenges. As industries continue to evolve and boundaries blur, we leverage insights from cross-industry collaborations to introduce breakthrough solutions that redefine business potential.",
        link : "/industry"
    },{
        title : "Solutions",
        description : "In today’s fast-evolving digital landscape, transformation is no longer optional—it’s essential. At INTELLECTRA, we empower businesses to adapt, accelerate, and thrive with secure, flexible, and future-ready ICT solutions. Our end-to-end services enable organizations to enhance digital agility, strengthen cybersecurity resilience, scale seamlessly with cloud and AI-driven technologies, and optimize workflows through intelligent automation—all designed to drive efficiency, innovation, and long-term success.",
        link : "/solutions"
    }]
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <div className="about pt-32 px-5 sm:px-16 md:px-32">
        <div className="content-about blur-bg p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col gap-3">
                <h1>About Us</h1>
                <h3>
                    For over 30 years, we have built a reputation for excellence, reliability, and trust. The continued confidence of our clients is a testament to our technical expertise, forward-thinking strategies, and unwavering commitment to delivering transformative solutions. At INTELLECTRA, technology is not just an enabler—it’s a catalyst for progress.
                </h3>
                <p>At INTELLECTRA, we empower businesses with cutting-edge Information & Communication Technologies (ICT) solutions, blending human expertise with the limitless possibilities of technology. Our focus is on delivering results-driven digital transformation that enhances operational efficiency, drives innovation, and maximizes return on investment (ROI).</p>
                <p>With a presence across multiple industries and global markets, we provide scalable, sustainable, and future-ready ICT services that combine global best practices with localized expertise. Our approach is insights-driven and outcome-focused, ensuring that every solution we implement contributes to long-term business success.</p>
                <p>As your trusted technology partner, we collaborate closely with clients to ensure that technology serves as a driving force behind business growth, efficiency, and societal impact. By embedding ourselves within local markets, we foster lasting relationships built on trust, expertise, and shared success.</p>
                <p>Our global network of skilled professionals brings together the right talent, innovation, and strategic insights to every engagement, ensuring that businesses thrive in an ever-evolving digital landscape. Using a consultative and collaborative approach, we help organizations achieve measurable business outcomes, enhance mission-critical operations, and drive meaningful impact.</p>
        </div>
        </div>
        <div className="px-5 sm:px-16 md:px-32 container-cards flex-wrap py-10   justify-between">
            {data.map((ele,idx)=>(<div className="card p-2" key={`Services_Card_${ele.title}_${idx}`}>
                    <div className="p-4 blur-bg content-card radius-border sm:p-6 md:p-10 lg:p-16 flex flex-col gap-4">
                        <h3>{ele.title}</h3>
                        <p>{ele.description}</p>
                        <div><Link to={ele.link}><span className="learn">See More</span> </Link></div>
                    </div>
                </div>))}

        </div>
    </div>)
}

export default About