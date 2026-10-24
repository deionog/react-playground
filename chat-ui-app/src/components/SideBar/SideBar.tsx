import { SideBarHeader } from "./SideBarHeader"
import { ConversationList } from "./ConversationList"
import './sidebar.css';
import { useState } from "react";
import sidebarBtn from '../../assets/sidebar_17261359.png'

export function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <aside className=
    "hidden sm:flex h-screen w-65 flex-col bg-zinc-900 text-zinc-100 transition-transform">
      <div className="sidebar-toggle">
          <button onClick={() => setOpen(!open)}><img src={sidebarBtn} alt="Sidebar Button" className="size-6 shrink-0" /></button>
      </div>
      <SideBarHeader />
      <ConversationList />
    </aside>
  )
}
