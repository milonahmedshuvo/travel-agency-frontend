

const Header = () => {

    
  return (
    <header className="bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50%  to-#156CF0    text-white h-20 flex items-center justify-between px-6 sticky top-0 z-30 shadow-md py-10" >
    <div className="flex flex-col space-y-2">
      <div  className="flex items-center gap-4">
        <span className="text-xl font-medium">Welcome Back Admin</span>
        <span className="text-2xl">🤩</span>
      </div>
      <div className="text-sm opacity-80">Please validate your action to proceed and unlock your reward</div>
    </div>
    <div>
      <img src="/placeholder-user.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
    </div>
  </header>
  )
}

export default Header