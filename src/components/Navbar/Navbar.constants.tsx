import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Add from '@mui/icons-material/Add';
import { Anchor, NavbarItem } from './Navbar.types';

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    id: 0,
    icon: <AccountBalanceWalletIcon/>,
    label: 'Расходы',
    route: '/costs'
  },
  {
    id: 1,
    icon: <Add/>,
    label: 'Добавить',
    route: '/add-cost'
  }
];

export const NAVBAR_WIDTH = 250;

export const ANCHOR:Anchor = 'left';