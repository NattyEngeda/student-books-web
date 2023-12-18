import LinkList from "./components/LinkList"
import { Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  IconMenu2,
} from "@tabler/icons-react";
// Styles 
import '../styles/underline-style.css';

export default function Header() {
  return (
    <header className="bg-white z-40 w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0 ">
        <div>
          <h1
            className="text-2xl font-Secular-One text-black">Student books<span className="text-blue-800 text-3xl">.</span></h1>
        </div>
        <div className="hidden lg:block px-10 py-3">
          <ul className="flex flex-row items-center gap-10 font-semibold">
            <LinkList link={"/"} name={"Home"} />
            <LinkList link={"/about"} name={"About"} />
            <LinkList link={"/contact"} name={"Contact"} />
          </ul>
        </div>
        <div className="lg:hidden block">
          <Menu
            shadow="md"
            width={200}
            styles={{
            }}>

            <Menu.Target>
              <div className="w-12 h-12 glassy-header rounded-full flex items-center justify-center">
                <IconMenu2 size={25} />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item className="active:bg-gray-300" component={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/skills"
              >
                Skills
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/contact"
              >
                Contact
              </Menu.Item>
              <Menu.Item
                className="active:bg-gray-300"
                component={Link}
                to="/resume"
              >
                Resume
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </header>
  )
}
