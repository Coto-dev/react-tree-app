import '../App.css'
import React, {useState} from "react"

const Node = (props) => {
    const handleNodeClick = () => {
        props.setSelectedNodeId(props.selectedNodeId == props.id ? null : props.id)
    }
    const handleNodeDoubleClick = () => {
        props.setEditNodeId(props.NodeEditId == props.id ? null : props.id)
    }
    return (
        <div>
            <label className={
                `Label  ${props.id === props.selectedNodeId ? 'selected' : ''}`}
                   onClick={handleNodeClick}>
                 {props.label}
            </label>
            {props.children && <ul>{props.children.map((d) =>
                <Node
                    id={d.id}
                    label={d.label}
                    children={d.children}
                    selectedNodeId={props.selectedNodeId}
                    setSelectedNodeId={props.setSelectedNodeId}
                />
            )}</ul>}
        </div>
    )
}

export default Node