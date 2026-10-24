import './sidebar.css';

export function SideBarHeader() {
  return (
    <div className="p-3">
        <div className='w-full flex justify-center items-center'>
          <button data-label="+ New Chat" className="btn w-full
          cursor-pointer
          relative
          rounded-md px-3 py-2 text-sm text-center
          bg-linear-to-r/decreasing from-violet-700 via-lime-300 to-violet-700 z-1
          ">
          </button>
        </div>

    </div>
  )
}
