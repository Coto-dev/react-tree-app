import Node from "./Node";
import React from "react";

const Root = (node) => {

    return (
        <Node id={node.id}
              label={node.label}
              children = {node.children}
              selectedNodeId = {node.selectedNodeId}
              setSelectedNodeId = {node.setSelectedNodeId}
        >

        </Node>
    );
};
export default Root;