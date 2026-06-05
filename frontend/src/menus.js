const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    id: 'pengaturan',
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        id: 'pengaturan-tampilan',
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        id: 'pengaturan-role',
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        id: 'pengaturan-user',
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;

addMenu({
	id: '_a23SYEh8EfGfS44y06AMZQ',
	route: '/rating',
    label: 'Review',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_1uASoExbEfGt54WqW4PGnA',
	route: '/booking',
    label: 'Booking',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_nMwqMExwEfGmhuROO-RZsA',
	route: '/pricing',
    label: 'Pricing',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_c-K7YEzVEfGZ4ZceE57zww',
	route: '#',
    label: 'Payment',
    permission: '',
	subMenus: [],
})

addSubMenu('Payment', {
	id: '_QANrEF2HEfGjCoBCLIsS7g',
	route: '/banktransfer',
	label: 'Bank Transfer',
    permission: '',
	
})

addMenu({
	id: '_NJkS0EzYEfGZ4ZceE57zww',
	route: '/notification',
    label: 'Notification',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_bei-4EzZEfGZ4ZceE57zww',
	route: '/cancellation',
    label: 'Cancellation',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_omppwF2REfGjCoBCLIsS7g',
	route: '/resource',
    label: 'Resource',
    permission: '',
	subMenus: [],
})
