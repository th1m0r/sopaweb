import React from 'react'

export default function content(props) {
    return (
        <section className="content container-fluid">{props.children}</section>
    )
}