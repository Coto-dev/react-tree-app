import './App.css';
import treeData from './ConstData/treeData';
import React from "react";
import Tree from "./components/Tree";

const App = () => {
    const [selectedNodeId, setSelectedNodeId] = React.useState(null);
    const [counter, increaseCount] = React.useState(7);
    const addChildToNode = (id, childNode) => {
        const updatedTreeData = [...treeData]
        const traverseAndUpdate = (nodes) => {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].id === id) {
                    if (!nodes[i].children) {
                        nodes[i].children = [];
                    }
                    nodes[i].children.push(childNode);
                    return;
                }

                if (nodes[i].children) {
                    traverseAndUpdate(nodes[i].children);
                }
            }
        };
        traverseAndUpdate(updatedTreeData);
        return updatedTreeData;
    }

    const removeNodeById = (nodes, id) => {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
                nodes.splice(i, 1); // Удаляем узел из массива, если найден
                return;
            }

            if (nodes[i].children) {
                removeNodeById(nodes[i].children, id); // Рекурсивный вызов для удаления в дочерних элементах
            }
        }
    };
    const editNode = (id, name) => {
        const updatedTreeData = [...treeData]
        const traverseAndUpdate = (nodes) => {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].id === id) {
                    if (!nodes[i].children) {
                        nodes[i].children = [];
                    }
                    nodes[i].label = name;
                    return;
                }

                if (nodes[i].children) {
                    traverseAndUpdate(nodes[i].children);
                }
            }
        };
        traverseAndUpdate(updatedTreeData);
        return updatedTreeData;
    }
    const onButtonAddClick = () => {
        const newNode = {
            id : {counter},
            label: 'New Node',
        };
        addChildToNode(selectedNodeId, newNode);
        increaseCount(counter+1)
    };
    const onButtonDeleteClick = () => {
        const updatedTreeData = removeNodeById(treeData,selectedNodeId);
    };
    const onButtonEditClick = () => {
       let name = prompt("New name :")
       editNode(selectedNodeId,name);
    };
    const onButtonReset = () => {
        let name = prompt("New name :")
        editNode(selectedNodeId,name);
    };

    return (
        <div>
            <div className="container">
                <div className="tree">
                    <div className="header">Tree</div>
                    <Tree data={treeData}
                          selectedNodeId ={selectedNodeId}
                          setSelectedNodeId={setSelectedNodeId}
                    />
                    <div className="buttons">
                        <button className="btn" type="button" onClick={onButtonAddClick}>Add</button>
                        <button className="btn" type="button" onClick={onButtonDeleteClick}>Remove</button>
                        <button className="btn" type="button" onClick={onButtonEditClick}>Edit</button>
                        <button className="btn" type="button" onClick={onButtonReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;
