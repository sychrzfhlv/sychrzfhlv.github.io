import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RiGasStationFill} from 'react-icons/ri'
import {FaOilCan} from 'react-icons/fa'
import {BiWind} from 'react-icons/bi'
import {SlSpeedometer} from 'react-icons/sl'
import {MdOutlineWaterDrop} from 'react-icons/md'

export const SidebarData =[
    {
        title: "Home",
        icon: <AiOutlineHome />,
        link: "/home"
    },
    {
        title: "Fuel",
        icon: <RiGasStationFill />,
        link: "/fuel"
    },
    {
        title: "Lubricant",
        icon: <FaOilCan />,
        link: "/lubricant"
    },
    {
        title: "Exhaust",
        icon: <BiWind />,
        link: "/exhaust"
    },
    {
        title: "RPM",
        icon: <SlSpeedometer />,
        link: "/home"
    },
    {
        title: "Cooling",
        icon: <MdOutlineWaterDrop />,
        link: "/cooling"
    },
]
