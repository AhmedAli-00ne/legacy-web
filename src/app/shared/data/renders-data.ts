export interface MainGalleryItem {
  title: string;
  thumbnailUrl: string;
  mediaUrl: string;
  isTrailer: boolean;
}

const items: MainGalleryItem[] = [

  {
    title: 'Iilaa Ana - Rob3 Carat',
    thumbnailUrl:
      '/assets/images/Renders/1.png',
    mediaUrl: 'https://www.youtube.com/watch?v=jy4QcMWNm3I',
    isTrailer: true,
  },
  {
    title: 'Jumeriah Bay ',
    thumbnailUrl:
      '/assets/images/Renders/2.jpg',
    mediaUrl: 'https://vimeo.com/208299881',
    isTrailer: false,
  },
  {
    title: 'Italiano x El Leithy',
    thumbnailUrl:
      '/assets/images/Renders/3.jpg',
    mediaUrl: 'https://vimeo.com/1032793363',
    isTrailer: false,
  },
  {
    title: 'Iilaa Ana - Amal Hayati',
    thumbnailUrl:
      '/assets/images/Renders/4.png',
    mediaUrl: 'https://www.youtube.com/watch?v=SQ_hccQp_Ls',
    isTrailer: true,
  },
  {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/5.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
  {
    title: 'Supercopa de Espana',
    thumbnailUrl:
      '/assets/images/Renders/6.png',
    mediaUrl: 'https://www.youtube.com/playlist?list=PLoXfU9tAFax0hif91n22JCpEw2Az9VJDm',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/7.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/8.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/9.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/10.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/11.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/12.png',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/13.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/14.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/15.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/16.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/17.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/18.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/19.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
    {
    title: 'Farawla Series',
    thumbnailUrl:
      '/assets/images/Renders/20.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=b5JmC1lsI8Y',
    isTrailer: true,
  },
];

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const MAIN_GALLERY_ITEMS: MainGalleryItem[] = shuffle(items);
