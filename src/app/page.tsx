import dynamic from "next/dynamic";
const ImageSlider = dynamic(() => import('@/app/components/ImageSlider'), {
  ssr: false,
});


export default function Home() {
  return (
    <div>
      <ImageSlider />
      <div style={{ height: '200vh', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ padding: '20px', textAlign: 'center' }}>
          Continue scrolling here...
        </h2>
      </div>
    </div>
  );
}
