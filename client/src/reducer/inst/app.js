const app = (state = {
}, action) => {
    console.log(action)
    switch (action.type) {
        case 'CHANGE_APP':
          return {
            ...state,
            [action.key] : action.value
          }
        default:
            return state
    }
}

export default app
