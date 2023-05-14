import '../App.css';
import Root from "./Root";
import React from "react";
import Node from "./Node";


const Tree = (props) => {
    return <div>{props.data.map(node =>
        <Node id={node.id}
              label={node.label}
              children = {node.children}
              selectedNodeId = {props.selectedNodeId}
              setSelectedNodeId = {props.setSelectedNodeId}
        />

    )}</div>;
};

export default Tree;