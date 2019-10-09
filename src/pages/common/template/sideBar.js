import React from 'react'
import Menu from './menu'


export default function sideBar(props) {
    return (
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* search form (Optional) */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>
                <Menu />
            </section>

        </aside>

    )
} 