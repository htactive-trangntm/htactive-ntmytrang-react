const SELECT_FOOD = 'SELECT_FOOD';
export const selectUser= (user) => {
    console.log(`Click name ${user.name}`);
    return{
        type: 'SELECT_FOOD', //kiểu của action giá trị là string
        payload: user // dữ liệu đi kèm
    }
}