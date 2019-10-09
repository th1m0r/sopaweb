import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default function menu() {
    return (
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">Menu de opções</li>
            <MenuItem path='/' label='Dashboard' icon='dashboard' />
            <MenuTree label='Assistido' icon='edit'>
                <MenuItem path='/cadastro' label='Assistidos' icon='users' />
            </MenuTree>
            <MenuItem path='/pesquisa' label='Listagem' icon='search' />
            <MenuItem path='/frequencia' label='Frequencia' icon='calendar-check-o' />
            <MenuItem path='/aniversariantes' label='Aniversariantes' icon='birthday-cake' />
        </ul>

    )
}