import React from "react"
import VerticalNavGroup from "./VerticalNavGroup"
import VerticalNavLink from "./VerticalNavLink"
import VerticalNavSectionTitle from "./VerticalNavSectionTitle"

const resolveNavItemComponent = (item) => {
    if (item.sectionTitle) return VerticalNavSectionTitle
    if (item.children) return VerticalNavGroup

    return VerticalNavLink
}

const VerticalNavItems = props => {

    const { verticalNavItems } = props

    const RenderNavItems = verticalNavItems.map((item, index) => {
        const NavItem = resolveNavItemComponent(item)

        return <NavItem {...props} item={item} key={index} />
    })


    return <>{ RenderNavItems }</>
}

export default VerticalNavItems