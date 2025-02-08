import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Disaster Management
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
          <li>
            <Link href="/boat-booking">Boat Booking</Link>
          </li>
          <li>
            <Link href="/missing-persons">Missing Persons</Link>
          </li>
          <li>
            <Link href="/community-help">Community Help</Link>
          </li>
          <li>
            <Link href="/volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

