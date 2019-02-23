export const updateObj = (oldState , newUpdate) =>{
    return {
        ...oldState,
        ...newUpdate
    }
}