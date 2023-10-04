import React, { useContext } from 'react';
import ContentData from '../../../content-data';
import { users } from '../../../Datas';
export default function AddTodoModal({ header, desc }) {
    const contextData = useContext(ContentData)
    const addTodoHandler = () => {
        let newTodo = {
            id: localStorage.getItem.length + 1,
            title: contextData.addTodoValue,
            isCompleted: false
        }
        users.admins[1].todos.push(newTodo)
        contextData.setAddTodoModal(false)
        contextData.setAddTodoValue('')
    }
    return (
        <>
            {contextData.addTodoModal && (
                <div className='modal-cotainer flex justify-center items-center'>
                    <div className={`modal-delete w-[650px] h-[250px] rounded-lg flex flex-col justify-between ${contextData.componentStyle} p-3`}>
                        <div className="headerModal">
                            <h4 className='font-bold text-lg'>{header}</h4>
                            <hr />
                        </div>
                        <div className="body-modal h-full pt-2 flex flex-col gap-2 justify-evenly">
                            <p className='desc-modal'>{desc}</p>
                            <div className="text-center">
                                <input
                                    type="text"
                                    value={contextData.addTodoValue}
                                    onChange={(e) => contextData.setAddTodoValue(e.target.value)}
                                    className='input-children'
                                />
                            </div>
                        </div>
                        <div className="btns-modal flex items-center overflow-hidden h-16 justify-end gap-2">
                            <div className="w-1/2"></div>
                            <div className="h-full w-1/2  flex justify-end gap-2">
                                <button className='w-auto h-full bg-red-700 text-white font-bold px-4 rounded hover:brightness-75' onClick={() => contextData.setAddTodoModal(false)}>لغو</button>
                                <button className='w-auto h-full bg-palette-700 text-white font-bold px-4 grow rounded hover:brightness-75' onClick={() => addTodoHandler()}>تایید</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}