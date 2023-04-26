import MenuItems from "./components/MenuItems";
import { Menu, Button, Modal } from '@mantine/core';
import { IconPhoto, IconHome, IconUser, IconShoppingCart, IconNote, IconNews } from '@tabler/icons';
import { Link } from "react-router-dom";
import { MenuIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="w-full h-20 normshad px-10 sticky top-0 right-0 shadow-lg flex flex-row items-center justify-between z-30">
      <div>
        <h1 className="text-2xl font-Secular-One text-black">Student books<span className="text-blue-800 text-3xl">.</span></h1>
      </div>
      <div>
        <div className="hidden  md:flex flex-row gap-10">

        </div>
        <div className="block md:hidden">
          <Menu
            // transition="pop"
            shadow="md"
            width={200}>
            <Menu.Target>
              <button className='bg-white text-primary-500 p-1 rounded'>
                <MenuIcon className='w-8 h-8' />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Pages</Menu.Label>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/'
                icon={<IconHome size={14}
                />}>Home</Menu.Item>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/gallery'
                icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/about'
                icon={<IconUser size={14} />}>Profile</Menu.Item>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/contact'
                icon={<IconNote size={14} />}>Contact Us</Menu.Item>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/order'
                icon={<IconShoppingCart size={14} />}>Order</Menu.Item>
              <Menu.Item
                className='active:bg-gray-300'
                component={Link}
                to='/blog'
                icon={<IconNews size={14} />}>Blog</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </header>
  )
}
