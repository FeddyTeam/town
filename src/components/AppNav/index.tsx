import * as React from 'react'

import { Link, LinkProps } from 'react-router-dom'
import { ImagePlaceholder, Icon } from '..'

import classnames from 'classnames'

import './app-nav.css'

export interface IAppNavProps {
    position?: string
}

export interface IMenuItemProps extends LinkProps {
    icon?: string
}

const MenuItem = (props: IMenuItemProps) => (
    <Link {...props} className="nav-menu__item" />
)

const AppNav = ({ position = 'left' }: IAppNavProps) => {
    const classes = classnames('app-nav', `app-nav--position-${position}`)

    return (
        <nav className={classes}>
            <a href="#" className="app-nav__logo">
                <ImagePlaceholder width={60} height={60} />
            </a>
            <div className="nav-menu">
                <MenuItem to="/">
                    HOME
                </MenuItem>
                <MenuItem to="/ground">GROUND</MenuItem>
                <MenuItem to="/profile">PROFILE</MenuItem>
                <MenuItem to="/login">LOGIN</MenuItem>
            </div>
            <div className="app-nav__footer" />
        </nav>
    )
}

export default AppNav
