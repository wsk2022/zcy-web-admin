import { createSlice } from '@reduxjs/toolkit';
export interface GlobalState {
  name: string
}
const initialState: GlobalState = {
  name: "狗子666"
};
// 创建一个 Slice
export const global = createSlice({
	name: 'global',
	initialState,
	// 定义 reducers 并生成关联的操作
  reducers: {
		setCounter(state, { payload }) {
			console.log(payload);
      state.name = payload.name;
		}
	}
})
// 导出 reducers 方法
export const { setCounter } = global.actions;

// 默认导出
export default global.reducer;
