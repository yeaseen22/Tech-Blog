"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { getCookie } from '@/utils/cookieUtils';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from '@/redux/actions/authAction';
import { authCheckerAction } from '@/redux/actions/userAction';


export default function Navigation() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const userToken = getCookie("authToken");

  // const { user } = useSelector((state) => state.authCheck);
  const { loading: logoutLoading, success: logoutSuccess } = useSelector((state) => state.userLogout);
  const { user } = useSelector((state) => state.user);

  const menuItems = [
    "Profile",
    "Dashboard",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];

  console.log("User -- ", user);
  console.log("Logout Success -- ", logoutSuccess);

  // Define route URLs for login and signup
  const loginRoute = "/login";
  const signupRoute = "/register";

  useEffect(() => {
    dispatch(authCheckerAction());
  }, []);

  /**
   * Logout Handle Function
   */
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">TECHBLOG</p>
        </NavbarBrand>
      </NavbarContent>

      {/* ===== NavItems Links for Middle Navigation ===== */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#" color="foreground">
            Video
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            News
          </Link>
        </NavbarItem>

      </NavbarContent>

      {/* ====== NavItems Links for End Naviagtion of Navbar ===== */}
      <NavbarContent justify="end">
        {
          !userToken ? (
            <>
              <NavbarItem className="hidden lg:flex">
                {/* Use the router to navigate to the login page */}
                <Link href={loginRoute}>Login</Link>
              </NavbarItem>

              <NavbarItem>
                {/* Use the router to navigate to the signup page */}
                <Button color="primary" variant="flat">
                  <Link href={signupRoute}>SignUp</Link>
                </Button>
              </NavbarItem>
            </>
          )
            :
            (
              <>
                {/* ---- Profile Avatar ---- */}
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">Post Blog</DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger"
                      onClick={handleLogout}
                    >
                      {!logoutLoading ? 'Log Out' : 'Logging-out..'}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )
        }
      </NavbarContent>

      {/* ===== Mobile Screens Menu ===== */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
