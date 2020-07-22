import React, { useEffect } from "react"
import Link from "next/link"
import NavLink from "react-bootstrap/NavLink"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/router'


export default function DropdownMenu() {
    const router = useRouter()
    const { company, year } = router.query

    return (
        <DropdownButton id="dropdown-basic-button" title="Other metrics">
            <NavLink>
                <Dropdown.Item><Link href="/charts/[company]/[year]" as={`/charts/${company}/2019`} ><a>2019-2020</a></Link></Dropdown.Item>
            </NavLink>
            <NavLink>
                <Dropdown.Item><Link href="/charts/[company]/[year]" as={`/charts/${company}/2018`}><a>2018-2019</a></Link></Dropdown.Item>
            </NavLink>
            <NavLink>
                <Dropdown.Item><Link href="/charts/[company]/[year]" as={`/charts/${company}/2017`}><a>2017-2018</a></Link></Dropdown.Item>
            </NavLink>
        </DropdownButton>
    )
}