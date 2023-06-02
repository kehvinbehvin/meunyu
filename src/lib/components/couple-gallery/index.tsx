import Gallery from 'react-photo-gallery';

export default function CoupleGallery() {
  const galleryPhotos = [
    { src: 'https://picsum.photos/1000/1000?random=1', width: 1, height: 1 },
    { src: 'https://picsum.photos/1000/1000?random=2', width: 1, height: 2 },
    { src: 'https://picsum.photos/1000/1000?random=3', width: 1, height: 1 },
  ];
  return <Gallery photos={galleryPhotos} direction="row" />;
}
