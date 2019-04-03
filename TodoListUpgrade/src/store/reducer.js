const defaultState = {
  inputValue: '',
  list: [
    // { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  ]
}

// reducer 可以接收 state，但是绝不能修改 state
export default (state = defaultState, action) => {
  console.log(state);
  console.log(action);
  // 2. 在 reducer.js 中获取数据，并 return 返回回去
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
}