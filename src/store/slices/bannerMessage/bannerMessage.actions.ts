import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBannerMessages } from 'mockData/bannerMessage';
import { logger } from 'utils';

export const getBannerMessage = createAsyncThunk(
  'bannerMessage/get',
  async () => {
    try {
      if (!localStorage.getItem('removedBannerIds')) {
        localStorage.setItem('removedBannerIds', [].toString());
      }
      const removedBannerIds = localStorage.getItem('removedBannerIds');
      const removedBannerIdsArray: number[] = JSON.parse('[' + removedBannerIds + ']');
      let bannerMessages = await fetchBannerMessages();
      bannerMessages = bannerMessages.filter((ele) => !removedBannerIdsArray.includes(ele.id));
      return bannerMessages;
    } catch (err) {
      logger.error({ err }, 'getBannerMessage');
      throw err;
    }
  }
);
