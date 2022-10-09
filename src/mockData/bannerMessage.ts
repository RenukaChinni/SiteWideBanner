export interface BannerMessage {
  id: number;
  message: string;
  link: string;
  isActive?: boolean;
}

export const fetchBannerMessages = () => new Promise<BannerMessage[]>((res) => res([{
  id: 1,
  message: 'We are having issues with our candidates, we will update you soon',
  link: 'http://google.com'
}, {
  id: 2,
  message: 'Oops, something went wrong. Please try again later',
  link: 'http://google.com'
}, {
  id: 3,
  message: 'We ran into a problem. Please refresh and try again',
  link: 'http://google.com'
}]));
