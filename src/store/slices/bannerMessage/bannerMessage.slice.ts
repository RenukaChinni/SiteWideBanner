import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { BannerMessage } from 'mockData/bannerMessage';
import { getBannerMessage } from './bannerMessage.actions';

interface BannerMessageState {
  items: BannerMessage[];
  error?: SerializedError['message'];
  isLoading: boolean;
}

const initialState: BannerMessageState = {
  items: [],
  isLoading: false,
};

const bannerMessageSlice = createSlice({
  name: 'bannerMessage',
  initialState,
  reducers: {
    removeBanner: (state, action) => {
      state = Object.assign({}, state, {
        items: state.items.filter((item) => { return item.id != action.payload.id }),
      })
      const removedBannerIds = localStorage.getItem('removedBannerIds');
      const removedBannerIdsArray: number[] = JSON.parse('[' + removedBannerIds + ']');
      removedBannerIdsArray.push(action.payload.id);
      localStorage.setItem('removedBannerIds', removedBannerIdsArray.toString());
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannerMessage.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getBannerMessage.fulfilled, (state, action) => {
      state.items = [...action.payload];
      state.isLoading = false;
    })
    builder.addCase(getBannerMessage.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})
export const { removeBanner } = bannerMessageSlice.actions
export const bannerMessageReducer = bannerMessageSlice.reducer;
