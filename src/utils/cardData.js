import useUniqueId from "../hooks";
import   cardHouse1 from '../assets/img/card-house1.png';
import   cardHouse2 from '../assets/img/card-house2.png';
import   cardHouse3 from '../assets/img/card-house3.png';
import   avatar1 from '../assets/img/avatar1.png';
import   avatar2 from '../assets/img/avatar2.png';
import   avatar3 from '../assets/img/avatar3.png';

export const card = [
    {
        id: useUniqueId,
        image: cardHouse1,
        avatar: avatar1,
        title: 'New Apartment Nice Wiew',
        content: 'Quincy St, Brooklyn, NY, USA' ,
        oldPrice:'$2,800/mo',
        newPrice: '$7,500/mo',
    },
    {
        id: useUniqueId,
        image: cardHouse2,
        avatar: avatar2,
        title: 'New Apartment Nice Wiew',
        content: 'Quincy St, Brooklyn, NY, USA' ,
        oldPrice:'$2,800/mo',
        newPrice: '$7,200/mo',
    },
    {
        id: useUniqueId,
        image: cardHouse3,
        avatar: avatar3,
        title: 'New Apartment Nice Wiew',
        content: 'Quincy St, Brooklyn, NY, USA' ,
        oldPrice:'$2,800/mo',
        newPrice: '$7,800/mo',
    },
]