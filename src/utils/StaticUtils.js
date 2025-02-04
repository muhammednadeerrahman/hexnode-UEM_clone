// spotlight top assets 
import CheckOrange from '../assets/icons/checkmarkOrange.svg'
import CheckBlue from '../assets/icons/checkmarkBlue.svg'
import CheckGreen from '../assets/icons/checkmarkGreen.svg'

// spotlight bottom assets 
import Gartner from '../assets/images/Gartner.png'
import Forrester from '../assets/images/Forrester.png'
import Idc from '../assets/images/idc.png'

// why Hexnode assets
import adaptIcon from '../assets/icons/adaptIcon.svg';
import SecurityIcon from '../assets/icons/securityIcon.svg';
import AutomationIcon from '../assets/icons/automation.svg';
import PolicyIcon from '../assets/icons/policyIcon.svg'
import LineTopLeft from '../assets/icons/lineTopLeft.svg'



// platform assets
import Android from '../assets/images/android.jpeg';
import Ios from '../assets/images/ios.jpeg';
import Windows from '../assets/images/windows.jpeg';
import Macos from '../assets/images/macos.jpeg';
import Tvos from '../assets/images/tvos.jpeg';
import Fireos from '../assets/images/fireos.jpeg';

// Customer assets
import Customer1 from '../assets/images/customer1.png';
import Customer2 from '../assets/images/customer2.png';
import Customer3 from '../assets/images/customer3.png';

// CustomerBrand assets
import Brand1 from '../assets/icons/Brand1.svg';
import Brand2 from '../assets/icons/Brand2.svg';
import Brand3 from '../assets/icons/brand3.svg';
import Brand4 from '../assets/icons/Brand4.svg';
import Brand5 from '../assets/icons/brand5.svg';
import Brand6 from '../assets/icons/brand6.svg';
import Brand7 from '../assets/icons/brand7.svg';
import Brand8 from '../assets/icons/brand8.svg';


export const navItems = [
    {
        title: ' Why Hexnodes',
        route: '#whyHexnode'

    },
    {
        title: ' Features',
        route: '#features'

    },
    {
        title: 'Platforms',
        route: '#platform'

    },
    {
        title: 'Customers',
        route: '#customers'

    },
]
export const spotlightCheckMark = [
    {
        title: 'Password policy applied',
        check: CheckOrange,
        bg: '#FCD598'
    },
    {
        title: 'TvOS Kiosk Active',
        check: CheckBlue,
        bg: '#C3E1E7'
    },
    {
        title: 'Device Enrolled',
        check: CheckGreen,
        bg: '#BCDCBE'
    },
]
export const spotlightBottom = [
    {
        title: 'Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.',
        image: Idc,
    },
    {
        title: 'Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.',
        image: Gartner,
    },
    {
        title: 'Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.',
        image: Forrester,
    },

]

export const whyHexnode = [
    {
        image: adaptIcon,
        title: "Adapt to the new normal",
        subTitle: "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
    },
    {
        image: SecurityIcon,
        title: "Zero compromise security",
        subTitle: "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
    },
    {
        image: AutomationIcon,
        title: "Get more done with automation",
        subTitle: "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
    },
    {
        image: PolicyIcon,
        title: "Unified Policy Management",
        subTitle: "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achieve single pane of glass management with Hexnode.",
    }
]
export const hexnodeAbsolute = [
    {
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                <path id="path" d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02" transform="translate(19047.193 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
            </svg>
        ),
    },
    {
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                <path id="path" d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02" transform="translate(19047.195 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
            </svg>
        ),
    },
    {
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                <path id="path" d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02" transform="translate(19047.193 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
            </svg>
        ),
    },
    {
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                <path id="path" d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02" transform="translate(19047.195 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
            </svg>
        ),
    },
]
export const feature = [
    {
        title: "Zero-touch Enrollment",
        content: "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
        image: require('../assets/images/enrollment.jpeg'),
    },
    {
        title: "Automation",
        content: "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
        image: require('../assets/images/automation.jpeg'),
    },
    {
        title: "Remote Access Management",
        content: "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
        image: require('../assets/images/remoteAccess.jpeg'),
    },
    {
        title: "Endpoint Security and Compliance",
        content: "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
        image: require('../assets/images/endpoint.jpeg'),
    },
    {
        title: "Integrations",
        content: "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
        image: require('../assets/images/integration.jpeg'),
    },
    {
        title: "App Management",
        content: "Simplify app management and distribution across your organization, ensuring smooth operation and adherence to policies.",
        image: require('../assets/images/appManagement.jpeg'),
    },
]

export const platforms = [
    {
        title: "Android",
        image: Android,
        content: "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
    },
    {
        title: "iOS",
        image: Ios,
        content: "Manage iOS devices effectively with features tailored for Apple’s ecosystem, ensuring security and productivity.",
    },
    {
        title: "Windows",
        image: Windows,
        content: "Deploy and manage Windows devices with ease, ensuring security compliance and operational efficiency.",
    },
    {
        title: "macOS",
        image: Macos,
        content: "Empower your macOS devices with robust management capabilities to keep them secure and compliant.",
    },
    {
        title: "tvOS",
        image: Tvos,
        content: "Manage tvOS devices seamlessly, providing your organization with the tools to control and monitor media devices.",
    },
    {
        title: "Fire OS",
        image: Fireos,
        content: "Secure and manage your Fire OS devices for enhanced productivity and security in your organization.",
    }
];

export const customers = [
    {
        id: 1,
        content: "Hexnode is of great value. Works great with Android and iOS!",
        name: "Justin Modrak",
        image: Customer1,

        role: "Technology Coordinator",
        company: "East Troy Community School District",
    },
    {
        id: 2,
        content: "Most complete MDM solution I found, and I tested many of them, including major names.",
        name: "Dalibor Kruljac",
        image: Customer2,

        role: "",
        company: "KAMELEYA LTD",
    },
    {
        id: 3,
        content: "It seemed to be in-line with everything we were looking at.",
        name: "Chris Robinson",
        image: Customer3,
        role: "Executive Account Manager, NCS",
        company: "",
    },
]
export const customerBrand = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8,];

export const footer = ['Terms of Use', 'Privacy', 'Cookies']

export const drawer = ['Why Hexnode', 'Features', 'Platforms', 'Customers'];

export const messageOption = [
    {
        title: 'Home',
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#1A1A1A" stroke-width="1.7" d="M2.85 9.35c0-.423.218-.85.635-1.143l7.496-5.172h.001a1.84 1.84 0 0 1 2.036 0l7.495 5.17.002.002c.417.293.635.72.635 1.142V19.7c0 .73-.676 1.45-1.65 1.45h-15c-.974 0-1.65-.72-1.65-1.45z" class="c39a3af9stroke"></path><path stroke="#1A1A1A" stroke-linecap="round" stroke-width="1.7" d="M17.25 15A7.86 7.86 0 0 1 12 17.002 7.86 7.86 0 0 1 6.75 15" class="c39a3af9stroke"></path></svg>

        ),
        activeIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="63eba" fill="#fff"><path fill-rule="evenodd" d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786" clip-rule="evenodd"></path></mask><path fill="#2E72F6" fill-rule="evenodd" d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786" clip-rule="evenodd"></path><path fill="#2E72F6" d="m3 7.51-.965-1.4-.01.007zm7.5-5.175L9.538.934l-.003.002zM21 7.51l.974-1.393-.009-.006zm-7.5-5.175.966-1.4-.004-.001zM6.116 14.434l1.268 1.132zm1.2-.068 1.133-1.268zm-1.132 1.268L5.05 16.902zm11.632 0 1.133 1.268zm.068-1.2-1.268 1.132zm-1.2-.068-1.133-1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175zm-.265.44c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35zm0 10.35V9.35H.3V19.7zm.8.6a.9.9 0 0 1-.615-.227.5.5 0 0 1-.185-.373H.3c0 2.335 2.022 4 4.2 4zm15 0h-15v3.4h15zm.8-.6a.5.5 0 0 1-.185.373.9.9 0 0 1-.615.227v3.4c2.178 0 4.2-1.665 4.2-4zm0-10.35V19.7h3.4V9.35zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233zm-7.491-5.169 7.5 5.175 1.93-2.798-7.5-5.175zm-1.073.002a.99.99 0 0 1 1.076 0L14.462.934a4.39 4.39 0 0 0-4.924 0zm-4.078 11.83a.85.85 0 0 1-1.2.068l2.265-2.536a2.55 2.55 0 0 0-3.6.203zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 0 0 .203 3.6zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.4 10.4 0 0 0 12 19.552zm4.684-1.786A7 7 0 0 1 12 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65zm-.068 1.2a.85.85 0 0 1 .068-1.2l2.265 2.536a2.55 2.55 0 0 0 .203-3.6zm1.2.068a.85.85 0 0 1-1.2-.068l2.536-2.265a2.55 2.55 0 0 0-3.6-.203zM12 17.852a8.7 8.7 0 0 0 5.816-2.218l-2.265-2.536A5.3 5.3 0 0 1 12 14.452zm-5.816-2.218A8.7 8.7 0 0 0 12 17.852v-3.4a5.3 5.3 0 0 1-3.551-1.354z" mask="url(#63eba)"></path></svg>
        ),

    },
    {
        title: 'Messages',
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="d8eda" fill="#fff"><path fill-rule="evenodd" d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" clip-rule="evenodd"></path></mask><path fill="#1A1A1A" d="m19.441 21.868 1.2-1.204zM15.56 18v-1.7h.702l.498.496zM20.3 5A1.3 1.3 0 0 0 19 3.7V.3A4.7 4.7 0 0 1 23.7 5zm0 8.956V5h3.4v8.956zm0 2.544v-2.544h3.4V16.5zm0 4.306V16.5h3.4v4.306zm.341-.142a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267zm-3.882-3.868 3.882 3.868-2.4 2.409-3.882-3.869zM5 16.3h10.559v3.4H5zM3.7 15A1.3 1.3 0 0 0 5 16.3v3.4A4.7 4.7 0 0 1 .3 15zm0-10v10H.3V5zM5 3.7A1.3 1.3 0 0 0 3.7 5H.3A4.7 4.7 0 0 1 5 .3zm14 0H5V.3h14z" class="cd798d3efill" mask="url(#d8eda)"></path><path fill="#1A1A1A" fill-rule="evenodd" d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z" class="cd798d3efill" clip-rule="evenodd"></path></svg>

        ),
        activeIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="ca82a" fill="#fff"><path fill-rule="evenodd" d="M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063zm-4.15 2.85A.85.85 0 0 0 17 7H7a.85.85 0 0 0 0 1.7h10c.47 0 .85-.38.85-.85m-5 4A.85.85 0 0 0 12 11H7a.85.85 0 0 0 0 1.7h5c.47 0 .85-.38.85-.85" clip-rule="evenodd"></path></mask><path fill="#2E72F6" fill-rule="evenodd" d="M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063zm-4.15 2.85A.85.85 0 0 0 17 7H7a.85.85 0 0 0 0 1.7h10c.47 0 .85-.38.85-.85m-5 4A.85.85 0 0 0 12 11H7a.85.85 0 0 0 0 1.7h5c.47 0 .85-.38.85-.85" clip-rule="evenodd"></path><path fill="#2E72F6" d="M15.558 18v-1.7h.702l.498.496zm3.883 3.87 1.2-1.205zM19 .3A4.7 4.7 0 0 1 23.7 5h-3.4A1.3 1.3 0 0 0 19 3.7zM5 .3h14v3.4H5zM.3 5A4.7 4.7 0 0 1 5 .3v3.4A1.3 1.3 0 0 0 3.7 5zm0 10V5h3.4v10zM5 19.7A4.7 4.7 0 0 1 .3 15h3.4A1.3 1.3 0 0 0 5 16.3zm10.558 0H5v-3.4h10.558zm2.683 3.374-3.883-3.87 2.4-2.408 3.883 3.87zm5.459-2.267c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185zm0-4.307v4.307h-3.4V16.5zm0-2.543V16.5h-3.4v-2.543zM23.7 5v8.957h-3.4V5zm-6.7.3a2.55 2.55 0 0 1 2.55 2.55h-3.4c0 .47.38.85.85.85zm-10 0h10v3.4H7zM4.45 7.85A2.55 2.55 0 0 1 7 5.3v3.4c.47 0 .85-.38.85-.85zM7 10.4a2.55 2.55 0 0 1-2.55-2.55h3.4A.85.85 0 0 0 7 7zm10 0H7V7h10zm2.55-2.55A2.55 2.55 0 0 1 17 10.4V7a.85.85 0 0 0-.85.85zM12 9.3a2.55 2.55 0 0 1 2.55 2.55h-3.4c0 .47.38.85.85.85zm-5 0h5v3.4H7zm-2.55 2.55A2.55 2.55 0 0 1 7 9.3v3.4c.47 0 .85-.38.85-.85zM7 14.4a2.55 2.55 0 0 1-2.55-2.55h3.4A.85.85 0 0 0 7 11zm5 0H7V11h5zm2.55-2.55A2.55 2.55 0 0 1 12 14.4V11a.85.85 0 0 0-.85.85z" mask="url(#ca82a)"></path></svg>),
    },
    {
        title: 'News',
        content: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#1A1A1A" stroke-linecap="round" stroke-width="1.7" d="M20 4a6.98 6.98 0 0 1 2.101 5c0 1.959-.804 3.73-2.101 5" class="196cb84fstroke"></path><mask id="4399a" fill="#fff"><path fill-rule="evenodd" d="M9.5 14h.718l5.231 3.452A1 1 0 0 0 17 16.617V1.858a1 1 0 0 0-1.55-.835L10.937 4H5a5 5 0 0 0-1.923 9.617l1.967 7.212a2.268 2.268 0 0 0 4.456-.597z" clip-rule="evenodd"></path></mask><path fill="#1A1A1A" d="m10.218 14 .936-1.419-.426-.28h-.51zM9.5 14v-1.7H7.8V14zm5.95 3.452-.937 1.42zm0-16.429-.937-1.419zM10.937 4v1.7h.51l.426-.28zm-7.86 9.617 1.64-.447-.22-.802-.766-.32zm1.966 7.212 1.64-.447zm5.174-8.529H9.5v3.4h.718zm6.168 3.733-5.232-3.452L9.28 15.42l5.232 3.452zm-1.086.584a.7.7 0 0 1 1.085-.584l-1.872 2.838c1.795 1.185 4.187-.103 4.187-2.253zm0-14.759v14.76h3.4V1.858zm1.085.584a.7.7 0 0 1-1.085-.584h3.4c0-2.15-2.392-3.438-4.187-2.254zm-4.51 2.977 4.51-2.977-1.872-2.838-4.511 2.977zM5 5.7h5.938V2.3H5zM1.7 9A3.3 3.3 0 0 1 5 5.7V2.3c-3.7 0-6.7 3-6.7 6.7zm2.032 3.048A3.3 3.3 0 0 1 1.7 9h-3.4a6.7 6.7 0 0 0 4.123 6.186zm2.952 8.334L4.718 13.17l-3.28.895 1.966 7.211zm.548.418a.57.57 0 0 1-.548-.418l-3.28.894A3.97 3.97 0 0 0 7.232 24.2zm.568-.568a.57.57 0 0 1-.568.568v3.4a3.97 3.97 0 0 0 3.968-3.968zM7.8 14v6.232h3.4V14z" class="e610e426fill" mask="url(#4399a)"></path></svg>

        ),
        activeIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#2E72F6" fill-rule="evenodd" d="M10.218 14H9.5v6.232a2.268 2.268 0 0 1-4.456.597l-1.967-7.212A5.001 5.001 0 0 1 5 4h5.938l4.511-2.977A1 1 0 0 1 17 1.858v14.76a1 1 0 0 1-1.55.834zM20.595 3.393a.85.85 0 1 0-1.19 1.214A6.13 6.13 0 0 1 21.251 9a6.13 6.13 0 0 1-1.846 4.393.85.85 0 1 0 1.19 1.214A7.83 7.83 0 0 0 22.95 9a7.83 7.83 0 0 0-2.356-5.607" clip-rule="evenodd"></path></svg>
        ),
    }

]
export const homeTab = [
    {
        title: 'Featured Article',
        contentTitle: 'What is Apple Lockdown Mode?',
        content: 'Apple unveiled its most restrictive security feature yet, Apple Lockdown Mode. What is it? Who is it meant for? Read all about it here.'
    },
    {
        title: 'Search the Help Center',
        contentTitle: 'Unified Endpoint Management Help | Hexnode',
        content: 'Dive through our knowledge base to explore Hexnode UEMs features in detail.'
    },
    {
        title: 'Have a question? Ask the Hexnode community',
        contentTitle: 'Hexnode Connect - Unified Endpoint Management Community',
        content: 'The right place to ask questions, get answers. Connect with other community members, learn and share knowledge.'
    },

]
