import { BiSolidTimer, BiSolidDevices, BiLogoFirebase, BiLogoTailwindCss } from 'react-icons/bi'
import { BsFillLightningChargeFill, BsGithub } from 'react-icons/bs'
import { MdDynamicFeed } from 'react-icons/md'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiVisualstudio } from 'react-icons/di'
import { TbBrandNextjs  } from 'react-icons/tb'



export const FixNavData = [
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Skills',
        href: '/skills',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/contact',
    }
]

export const aboutData = [
    {
        icon: <BiSolidTimer />,
        title: 'Fast',
        description: 'i love things to be done perfectly yes i am strong thank you'
    },
    {
        icon: < BiSolidDevices />,
        title: 'Responsive',
        description: 'i love things to be done perfectly yes i am strong thank you'
    },
    {
        icon: <BsFillLightningChargeFill />,
        title: 'Intuitive',
        description: 'i love things to be done perfectly yes i am strong thank you'
    },
    {
        icon: <MdDynamicFeed />,
        title: 'Dynamic',
        description: 'i love things to be done perfectly yes i am strong thank you'
    },
]

export const skillsData = [
    {
        icon: <AiFillHtml5 />,
        name: 'HTML5',
    },
    {
        icon: <DiCss3 />,
        name: 'CSS3',
    },
    {
        icon: <BiLogoTailwindCss />,
        name: 'Tailwind CSS',
    },
    {
        icon: <FaReact />,
        name: 'REACT',
    },
    {
        icon: <TbBrandNextjs />,
        name: 'Next.js',
    },
    {
        icon: <BsGithub />,
        name: 'Git',
    },
    {
        icon: <DiVisualstudio />,
        name: 'Visual Studio',
    },
    {
        icon: <BiLogoFirebase />,
        name: 'Firebase',
    }

]

