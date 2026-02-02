import { SideBarHeader } from "./SideBarHeader"
import { ConversationList } from "./ConversationList"
import './sidebar.css';

export function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-65 flex-col bg-zinc-900 text-zinc-100">
      <SideBarHeader />
      <ConversationList />
    </aside>
  )
}
