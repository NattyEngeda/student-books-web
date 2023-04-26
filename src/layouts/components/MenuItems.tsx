import { NavLink } from "@mantine/core";

export default function MenuItems(props: any) {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        isActive ? "activeLink" : "inactiveLink"
      }>
      <div className='flex justify-end gap-1 items-end '>
        {/* {checkIcon(pageName)} */}
        <span>{props.name}</span>
      </div>
    </NavLink>
  )
}
