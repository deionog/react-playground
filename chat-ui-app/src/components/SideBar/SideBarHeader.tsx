import sidebarBtn from '../../assets/sidebar_17261359.png'
export function SideBarHeader() {
  return (
    <div className="p-3">
        <div className="sidebar-toggle">
            <button ><img src={sidebarBtn} alt="Sidebar Button" className="size-6 shrink-0" /></button>
        </div>
      <button className="w-full rounded-md border border-zinc-700 px-3 py-2 text-sm text-left hover:bg-zinc-800 transition">
        + New chat
      </button>
    </div>
  )
}
