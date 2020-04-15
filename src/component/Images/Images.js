import Logo from '../../Global-Assets/global/alfalialogo-header.png'
import {
    FaHome,
    FaFacebook,
    FaInstagram,
    FaPaperPlane} from 'react-icons/fa'
import {AiOutlineCoffee} from 'react-icons/ai'
import { IoIosLock, IoIosCart, IoIosPricetags, IoLogoWhatsapp } from 'react-icons/io'

import imageBanner1 from '../../Global-Assets/images/productBanner/banner1.jpg'
import imageBanner2 from '../../Global-Assets/images/productBanner/Banner2.jpg'
import imageBanner3 from '../../Global-Assets/images/productBanner/banner3.jpg'

import Slide1 from '../../Global-Assets/images/banner/image1.jpg'
import Slide2 from '../../Global-Assets/images/banner/image2.jpg'
import Slide3 from '../../Global-Assets/images/banner/image3.jpg'

export const slide = [
    {
        id: 4,
        src: Slide1,
        alt: "slide 1"
    },
    {
        id: 5,
        src: Slide2,
        alt: "slide 2"
    },
    {
        id: 6,
        src: Slide3,
        alt: "slide 3"
    },
]

export const imageBanner = [
    {
        id : 1,
        src : imageBanner1,
        alt : 'image banner 1'
    },
    {
        id : 2,
        src : imageBanner2,
        alt : 'image Banner 2'
    },
    {
        id : 3,
        src : imageBanner3,
        alt : 'iamge Banner 3'
    },
]

export const icons = {
    FaHome,
    FaFacebook,
    FaInstagram,
    FaPaperPlane,
    AiOutlineCoffee,
    IoIosCart,
    IoIosLock,
    IoIosPricetags,
    IoLogoWhatsapp
}

export const logo = {
    id : 0,
    src : Logo,
    alt: 'Logo Alfalia Store'
}

