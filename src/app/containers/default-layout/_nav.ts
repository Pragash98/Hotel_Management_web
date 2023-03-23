import { INavData } from '@coreui/angular';

export const adminnavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Admins',
    iconComponent: { name: 'cil-star' },
    url: '/admin',
    children: [
      {
        name: 'Register',
        url: '/adminregister'
      },
      {
        name: 'View User Details',
        url: '/admin/viewuser'
      },
      {
        name:'Staff Register',
        url:'/admin/staffregister'
      },
      {
        name:'View Staffs',
        url:'/admin/viewstaff'
      },
      
      
    ]
  },

];

export const usernavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Users',
    iconComponent: { name: 'cil-star' },
    url: '/users',
    children: [
      {
        name: 'Profile',
        url: '/profile'
      },
      {
        name: 'Book Room',
        url: 'viewrooms'
      },    
      {
        name: 'Users Booking',
        url: 'rooms/userbooking'
      }, 
    ]
  },

  
];

export const staffnavItems: INavData[] = [
  {
    name: 'Staff',
    iconComponent: { name: 'cil-star' },
    url: '/staff',
    children: [
      {
        name: 'View Hotel',
        url: 'staff/viewhotel'
      },
      {
        name: 'create Hotel',
        url: 'staff/createhotel'
      },
      
    ]
  },

  
];
export const emptynavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
];