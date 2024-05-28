import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
export default function Navlink() {
    const links = [
        {
            href: "/dashboard",
            text: "dashboard",
            Icon: PersonIcon
        },

        {
            href: "/dasboard/users",
            text: "users",
            icon: ReaderIcon
        }
    ]
    return (
        <div className="flex items-center gap-5">
           {links.map(({href, text, Icon}, index)=> {
            return <Link href= {href} key= {index}>
                {text}
            </Link>
           })}
        </div>
    )
}