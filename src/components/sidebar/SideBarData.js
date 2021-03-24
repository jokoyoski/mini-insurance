
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as  RiIcons from 'react-icons/ri';



export const SideBarData = [

    {
        title: 'Account',
        path: '/overview',
        icon: <i className="far fa-user-circle"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'Home',
                path: '/',
                icon: <i className="far fa-user-circle"></i>
            },
            {
                title: 'Vehicles',
                path: '/overview/vehicles',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title: 'My Profile',
                path: '/user/addprofile',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title: 'Reset Password',
                path: '/user/resetpassword',
                icon: <IoIcons.IoIosPaper />,
            }



        ]
    },
    {
        title: 'Main',
        path: '/reports/oke',
        icon: <i className="fas fa-home"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

            {
                title: 'Subscriptions',
                path: '/overview/plans',
                icon: <IoIcons.IoIosPaper />,
            },
          
            {
                title: 'My Bookings',
                path: '/overview/bookings',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Book',
                path: '/overview/book',
                icon: <IoIcons.IoIosPaper />,
            }
           


        ]
    },
   
    {
        title: 'AutoShop',
        path: '/reports/oke',
        icon: <i className="fas fa-store"></i>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [

        
            {
                title: 'AutoShop',
                path: '/overview/autoshop',
                icon: <IoIcons.IoIosPaper />,
            },
           
            {
                title: 'Manage Vehicle',
                path: '/user/managevehicle',
                icon: <IoIcons.IoIosPaper />,
            },
           


        ]
    }


]