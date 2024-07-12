import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block">
        <Link href="/" className="font-bold text-xl text-blue-600 w-[20%]">
          Pixplore
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex items-center gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <Link href="/login">
          <Image
            src="/noavatar.png"
            alt="stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Login/Register</span>
        </Link>
        <MobileMenu />
      </div>
    </div>
  )
}
export default Navbar
