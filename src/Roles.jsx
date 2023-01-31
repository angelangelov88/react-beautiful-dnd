import React from 'react';
import classNames from 'classnames';
import {DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

const initialRoles = [
  {
    experience: "ZXhwMDhiMzg1MmUtNmJkOS0xMWVkLWFkYjEtMDZhNDM4ODNmMDBj",
    id: "cm9sMWMwMGQzODgtOWIzMS0xMWVkLThhMTgtMGE2NzZkNzZlMmVh",
    name: "New hdhfdhjffg",
    roleType: "SIGNER",
    signerIndex: "1",
    signerParent: null,
  },
  {
    experience: "ZXhwYWY0ZmRiZTEtNTUxOC0xMWVkLTlmMGMtMDJmYWMzNDAyNDM4",
    id: "cm9sY2M4ZWFmNjEtOWUyNS0xMWVkLTlmMDYtMGFjYjMxNWY4ZTg2",
    name: "bnbb",
    roleType: "WITNESS",
    signerIndex: "2",
    signerParent: "1"
  },
  {
    experience: "ZXhwYmQ4NGMxZDgtMDJjMC0xMWVkLWIwMjAtMGE0YWI0M2MzMzFl",
    id: "cm9sODg2NTU2ODQtOWU0MC0xMWVkLWJlMzQtMDYzMDNkYWI2MmJh",
    name: "appro",
    roleType: "APPROVER",
    signerIndex: "3",
    signerParent: null
  },
  {
    experience: "ZXhwYmQ4NGMxZDgtMDJjMC0xMWVkLWIwMjAtMGE0YWI0M2MzMzFl",
    id: "cm9sZWM4OTViMWUtOWU1NS0xMWVkLTkzMjktMDI1ZjhjZWI4Yjg4",
    name: "New Signer",
    roleType: "SIGNER",
    signerIndex: "4",
    signerParent: null
  },
];

const Roles = () => {
  const [roles, setRoles] = React.useState(initialRoles)

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(roles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setRoles(items);
  };

  return ( 
    <div className="m-5">
    <h1>react-beautiful-dnd</h1>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="roles">
      {(provided) => (
        <ul className="border border-green-300" {...provided.droppableProps} ref={provided.innerRef}>
        {roles.map(({roleType, id, name, signerIndex}, index) => (
          <Draggable key={id} draggableId={id} index={index}>
          {(provided) => (
              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <div className="flex items-center">
                  <p className="border border-gray-900 mr-3 p-1">{index}</p>
                  <p className="border border-gray-900 bg-white mr-3 p-1">{signerIndex}</p>
                  <p className={classNames(
                      'w-56 border border-gray-900 mb-2 px-2 py-2 cursor-pointer',
                      roleType === 'SIGNER' && 'bg-blue-400 text-blue-900',
                      roleType === 'WITNESS' && 'bg-yellow-400 text-yellow-900',
                      roleType === 'APPROVER' && 'bg-green-400 text-green-900',
                  )}>{name}</p>
                </div>
              </li>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
        </ul>
        )}
      </Droppable>
    </DragDropContext>
    </div>
   );
}
 
export default Roles;
export { Roles };