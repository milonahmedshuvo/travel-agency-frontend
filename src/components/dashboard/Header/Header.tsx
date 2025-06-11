'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { LayoutDashboard, LogOutIcon } from "lucide-react";
import Image from "next/image";
import avater from "../../../assets/logo/img2.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slice/auth/authSlice";


const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch()
  const router = useRouter()


  const adminLinks = [
      { href: "/", text: "Home", icon: <LayoutDashboard size={20} /> },
      // { href: "/profile", text: "Profile", icon: <UserRoundCheck size={16} /> },
    ];
  
    



    const handleLogout = async() => {
        dispatch(logout())
    
        // await logOut({}).unwrap
         localStorage.removeItem('token')
         localStorage.removeItem('refreshToken')  
         router.push("/");
      }


    
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
       <div className="hidden md:flex items-center gap-4 ">
            {
              user ? (<DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-white">
                  {/* Avatar or Icon Here */}
                  <Image
                    className="h-[50px] w-[50px] rounded-full"
                    src={avater}
                    width={500}
                    height={200}
                    alt="user"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md">
                {(user?.role === "SUPER_ADMIN" || user?.role === "ADMIN"
                  ? adminLinks
                  : adminLinks
                ).map((link) => (
                  <Link href={link.href} key={link.href} passHref>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 text-lg">
                      {link.text}
                      <DropdownMenuShortcut>{link.icon}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                ))}

                <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100 text-lg text-red-500"
                    onClick={handleLogout}
                  >
                    Log Out
                    <DropdownMenuShortcut><LogOutIcon size={16} /></DropdownMenuShortcut>
                  </DropdownMenuItem>
              
              </DropdownMenuContent>
            </DropdownMenu>) : (<Link
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold"
            >
              Login
            </Link>)
            }
          </div>


    </div>
  </header>
  )
}

export default Header