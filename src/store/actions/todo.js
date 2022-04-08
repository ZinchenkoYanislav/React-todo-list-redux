export const ACTION_ADD_TODO = 'ACTION_ADD_TODO'
export function addTodo(payload) {
    return {type: ACTION_ADD_TODO, payload}
}

export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO'
export function deleteTodo(payload) {
    return {type: ACTION_DELETE_TODO, payload}
}

export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_TODO'
export function updateTodo(payload) {
    return {type: ACTION_UPDATE_TODO, payload}
}