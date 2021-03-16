import * as Falcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as  RiIcons from 'react-icons/ri';



export const SideBarData = [

    {
        title: 'Account',
        path: '/overview',
        icon: <i class="far fa-user-circle"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'My Profile',
                path: '/',
                icon: <i class="far fa-user-circle"></i>
            },
            {
                title: 'Transactions',
                path: '/overview/revenue',
                icon: <AiIcons.AiFillHome />,
            }


        ]
    },
    {
        title: 'Main',
        path: '/reports/oke',
        icon: <i class="fas fa-home"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'Subscriptions',
                path: '/overview/plans',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Book',
                path: '/reports/radio',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'My Bookings',
                path: '/overview/bookings',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Messages',
                path: '/overview/messages',
                icon: <IoIcons.IoIosPaper />,
            }


        ]
    },
    {
        title: 'Tickets',
        path: '/reports/oke',
        icon: <i class="fas fa-ticket-alt"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'Referral & Claims',
                path: '/overview/plans',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Ratings',
                path: '/reports/radio',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Testimonials',
                path: '/overview/bookings',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Tickets',
                path: '/overview/messages',
                icon: <IoIcons.IoIosPaper />,
            }


        ]
    },
    {
        title: 'AutoShop',
        path: '/reports/oke',
        icon: <i class="fas fa-store"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'All Products List',
                path: '/overview/plans',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Carts',
                path: '/reports/radio',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'WishList',
                path: '/overview/bookings',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Orders',
                path: '/overview/messages',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Checkout',
                path: '/overview/messages',
                icon: <IoIcons.IoIosPaper />,
            }


        ]
    }


]