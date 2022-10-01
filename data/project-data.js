import { SiRubyonrails, SiHeroku } from "react-icons/si"
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa"

export const ProjectData = [
    {
        imageUrl: "https://res.cloudinary.com/ditoikfqn/image/upload/v1664611782/NextJS-Portfolio/braid_pn2hjz.jpg",
        imageAlt: "Braid Website Image",
        name: "Braid",
        year: "2021",
        desc: "E-commerce MVP built by a team of three as the final project for the part-time Web Development bootcamp at Le Wagon.",
        stack: [
            {
                label: "Ruby on Rails",
                icon: <SiRubyonrails />,
            },
            {
                label: "Html5",
                icon: <FaHtml5 />,
            },
            {
                label: "CSS",
                icon: <FaCss3 />,
            },
            {
                label: "Javascript",
                icon: <FaJs />,
            },
            {
                label: "Heroku",
                icon: <SiHeroku />,
            },
        ],
        sourceUrl: "https://github.com/AntoineBoucherCodes/Braid",
        linkUrl: "Website demo no longer available.",
    }
]