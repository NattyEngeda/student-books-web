import { NavLink } from "@mantine/core";

export default function MenuItems(props: any) {
  return (
    <NavLink
      top={props.link}
      className={({ isActive }) =>
        isActive ? "activeHeader" : "inactiveHeader"
      }>
      <div className="flex justify-end gap-1 items-end" >
        <span>{props.name}</span>
      </div>
    </NavLink>
  )
}
