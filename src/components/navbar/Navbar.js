import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import { NavLink as RouterLink } from 'react-router-dom';
import { useStyles } from './Navbar.styled';
import { SentimentSatisfiedAlt, WhatshotSharp } from '@material-ui/icons';

// App Routes
const routes = [

  {
    icon: SentimentSatisfiedAltIcon,
    label: 'Regular',
    href: '/regular',
  },
  {
    icon: WhatshotSharpIcon,
    label: 'Hot',
    href: '/hot',
  },
];

const Navbar = () => {
  // I. Logic & Data
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  //  -> Set Responsivenes Func
  const setResponsiveness = () => {
    return window.innerWidth < 769
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false }));
  };
  //  -> Styles
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    drawerLink,
    icon,
    active,
  } = useStyles();
  // II. Mount setResponsiveness Func
  useEffect(() => {
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);
  // III. Fake Mems Logo
  const Logo = (
    <Typography
      {...{
        variant: 'h6',
        component: RouterLink,
        to: '/regular',
        color: 'inherit',
        style: { textDecoration: 'none' },
      }}
      className={logo}
    >
      maczking MEM
    </Typography>
  );
  // IV. Get Desktop Menu Buttons Func
  const getDesktopMenuButtons = () => {
    return routes.map(({ icon: Icon, label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            exact: true,
            className: menuButton,
          }}
        >
          <Icon className={icon} /> {label}
        </Button>
      );
    });
  };
  // V. Create Desctop View
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {Logo}
        <div>{getDesktopMenuButtons()}</div>
      </Toolbar>
    );
  };
  // VI. Create Draver Menu
  const getDrawerChoices = (handleDrawerClose) => {
    return routes.map(({ icon: Icon, label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            exact: true,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            className: [active],
            key: label,
            onClick: handleDrawerClose,
          }}
        >
          <MenuItem className={drawerLink}>
            <Icon className={icon} /> {label}
          </MenuItem>
        </Link>
      );
    });
  };
  // VII. CreateMobile View
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices(handleDrawerClose)}
          </div>
        </Drawer>
        {Logo}
      </Toolbar>
    );
  };
  // VIII. Return Main Component
  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Navbar;
