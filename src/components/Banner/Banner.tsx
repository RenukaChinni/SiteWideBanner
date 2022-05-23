import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import styles from './Banner.module.css';
import { IconRightArrow, IconClose } from 'components';
import { getBannerMessage, removeBanner } from 'store/slices/bannerMessage';

const getBannerColour = (idx: number): string => {
  const coloursArray = ['#8857F0', '#F08557', '#125089']
  return coloursArray[idx % coloursArray.length];
}

export const Banner: React.FC = () => {
  const dispatch = useAppDispatch();
  const bannerMessageItems = useAppSelector((state) => state.bannerMessage.items);
  const isLoading = useAppSelector((state) => state.bannerMessage.isLoading);

  useEffect(() => {
    dispatch(getBannerMessage());
  }, [dispatch])


  if (isLoading) {
    return <div>Loading...</div>
  }
  const handleOnClickClose = (id: number) => {
    return () => {
      dispatch(removeBanner({ id: id }));
    }
  }

  const handleOnClickArrow = (link: string) => {
    return () => {
      window.open(link);
    }
  }

  return (
    <div className={styles.banner}>
      {bannerMessageItems.map((bannerMessageItem, index) => (
        <div className={styles.bannerContent} style={{ background: getBannerColour(index) }} key={bannerMessageItem.id}>
          <div className={styles.bannerTextContainer} key={bannerMessageItem.id} onClick={handleOnClickArrow(bannerMessageItem.link)}>
            <div className={styles.bannerText}>
              {bannerMessageItem.message}
            </div>
            <span className={styles.bannerRightArrow}>
              <IconRightArrow className={styles.bannerRightArrowIcon} />
            </span>
          </div>
          <button className={styles.bannerClose} type="button">
            <span >
              <IconClose onClick={handleOnClickClose(bannerMessageItem.id)} />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};


