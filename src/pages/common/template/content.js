import React from 'react'

export default function content(props) {
    return (
        <section className="content container-fluid" style={{marginBottom: 50}}>{props.children}</section>
    )
}