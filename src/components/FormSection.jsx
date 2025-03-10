// // src/components/FormSection.js
// import React from "react";
// import FormField from "./FormField";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const FormSection = ({ fields, formData, onChange }) => {
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     // Logic for reordering fields can be implemented here
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <Droppable droppableId="droppable">
//         {(provided) => (
//           <div ref={provided.innerRef} {...provided.droppableProps}>
//             {fields.map((field, index) => (
//               <Draggable
//                 key={field.name}
//                 draggableId={field.name}
//                 index={index}
//               >
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     {field.type === "section" ? (
//                       <div className="mb-4">
//                         <h3 className="font-bold">{field.label}</h3>
//                         <FormSection
//                           fields={field.fields}
//                           formData={formData}
//                           onChange={onChange}
//                         />
//                       </div>
//                     ) : (
//                       <FormField
//                         field={field}
//                         value={formData[field.name] || ""}
//                         onChange={onChange}
//                       />
//                     )}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default FormSection;
