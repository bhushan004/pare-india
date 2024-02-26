import {
  Brochure,
  ImgGallery,
  Info,
  Shades,
  Trims,
} from '@/components/products';
import {
  DomeImg1,
  DomeImg2,
  DomeImg3,
  DomeImg4,
  DomeShade1Img1,
  DomeShade1Img2,
  DomeShade1Img3,
  DomeShade1Img4,
  DomeShade1Img5,
  DomeShade1Img6,
  DomeShade1Img7,
  DomeShade1Img8,
  DomeShade1Img9,
  DomeShade1Img10,
  DomeShade1Img11,
  DomeShade1Img12,
  DomeShade1Img13,
  DomeShade1Img14,
  DomeShade1Img15,
  DomeShade2Img1,
  DomeShade2Img2,
  WaveShade1Shade1,
  WaveShade1Shade2,
  WaveShade1Shade3,
  WaveShade1Shade4,
  WaveShade1Shade5,
  WaveShade1Shade6,
  WaveShade2Img1,
  WaveShade2Shade1,
  WaveShade2Shade2,
  WaveShade2Shade3,
  WaveShade2Shade4,
  WaveShade2Shade5,
  WaveShade2Shade6,
  WaveShade2Img2,
  WaveShade2Img3,
  WaveShade2Img4,
  WaveShade2Img5,
  WaveShade2Img6,
  WaveShade1Img6,
  LTrim,
  JtrimLarge,
  JtrimPro,
} from '@/utils/assets';
import DomeBanner from '@/components/products/dome/DomeBanner';

export const metadata = {
  title: 'Dome-Inspired Wooden Feel PVC Wall Panels | Transform Your Interior',
  description: 'Transform your walls with DOME\'s exquisite, dome-inspired panels. Crafted with elegance & detail, these intricately curved shapes & patterns add a touch of grandeur to any interior. Choose from natural wood, sophisticated marble, gleaming metallic, or soft fabric in a variety of stunning shades. Discover DOME',
}

const metallicData = [
  { img: DomeShade1Img1, shade: WaveShade1Shade1, fname: 'Gold Maple' },
  { img: DomeShade1Img2, shade: WaveShade1Shade3, fname: 'argento' },
  { img: DomeShade1Img3, shade: WaveShade1Shade2, fname: 'English Nut' },
  { img: DomeShade1Img4, shade: WaveShade1Shade4, fname: 'Noce Grande' },
  { img: DomeShade1Img5, shade: WaveShade1Shade4, fname: 'Danish Teak' },
  { img: DomeShade1Img6, shade: WaveShade1Shade4, fname: 'Linen Grey' },
  { img: DomeShade1Img7, shade: WaveShade1Shade4, fname: 'Linen Ivory' },
  { img: DomeShade1Img8, shade: WaveShade1Shade4, fname: 'Portoro' },
  { img: DomeShade1Img9, shade: WaveShade1Shade4, fname: 'Oro' },
  { img: DomeShade1Img10, shade: WaveShade1Shade4, fname: 'Oak Nair' },
  { img: DomeShade1Img11, shade: WaveShade1Shade4, fname: 'Spiced Walnut' },
  { img: DomeShade1Img12, shade: WaveShade1Shade4, fname: 'white mist' },
  { img: DomeShade1Img13, shade: WaveShade1Shade4, fname: 'Oak wood' },
  { img: DomeShade1Img14, shade: WaveShade1Shade4, fname: 'Rame' },
  {
    img: WaveShade1Img6,
    shade: WaveShade1Shade6,
    fname: 'weathred',
    lname: 'grey',
  },
];

const shade2Data = [
  { img: DomeShade2Img1, shade: WaveShade2Shade1, fname: 'Armani Grey' },
  { img: DomeShade2Img2, shade: WaveShade2Shade2, fname: 'Royal Statuario' }
];

const Jimages = [LTrim, JtrimLarge, JtrimPro];
const trim = [
  { fname: 'L TRIM' },
  { fname: 'J TRIM', lname: 'LARGE' },
  { fname: 'J TRIM', lname: 'PRO' },
];
const Wave = () => {
  return (
    <>
      <DomeBanner />
      <ImgGallery
        img1={DomeImg1}
        img2={DomeImg2}
        img3={DomeImg3}
        img4={DomeImg4}
      />
      <Info code="113" size="270mm X 3060mm" shades={17} collections={2} />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="MARBLE"
        secondData={shade2Data}
      />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <div className="bg-red-base py-5 font-montserrat text-white md:py-10">
        <h2 className="p-5 text-3xl font-bold md:px-10 md:text-4xl lg:px-16 lg:text-5xl">
          Expanding Possibilities with Innov2+
        </h2>
        <p className="p-3 md:mr-20 md:px-10 lg:px-16 lg:text-2xl">
          Alongside our versatile product range, we have more additional
          innovative solutions in the works. Stay tuned for the upcoming launch
          of Innov2+ products and explore even more possibilities to enhance
          your spaces.
        </p>
      </div>
    </>
  );
};

export default Wave;