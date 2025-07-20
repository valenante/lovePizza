import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./CarritoOrganizable.css";

const CarritoOrganizable = ({ carrito, setCarrito, enviarPedido, isLoading }) => {
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(carrito);
        const [movedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, movedItem);

        setCarrito(items);
    };

    const eliminarProducto = (index) => {
        const newCarrito = [...carrito];
        newCarrito.splice(index, 1);
        setCarrito(newCarrito);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
                <div className="carrito-section">
                    <h4 className="carrito-section-title">Platos</h4>
                    <Droppable droppableId="carrito">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`carrito-droppable ${snapshot.isDraggingOver ? "drag-over" : ""}`}
                            >
                                {carrito.map((item, index) => (
                                    <Draggable key={item._id + index} draggableId={item._id + index} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`carrito-item ${snapshot.isDragging ? "dragging" : ""}`}
                                            >
                                                <div className="carrito-item-nombre">
                                                    {item.nombre} x{item.cantidad}
                                                </div>
                                                <div className="carrito-item-eliminar">
                                                    <button
                                                        onClick={() => eliminarProducto(index)}
                                                        className="carrito-eliminar-button"
                                                        title="Eliminar"
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
        </DragDropContext>
    );
};

export default CarritoOrganizable;
