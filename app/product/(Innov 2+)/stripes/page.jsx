import {
  Brochure,
  ImgGallery,
  Info,
  Shades,
  Trims,
} from '@/components/products';
import {
  WaveImg1,
  WaveImg2,
  WaveImg3,
  WaveImg4,
  WaveShade1Img1,
  WaveShade1Img2,
  WaveShade1Img3,
  WaveShade1Img4,
  WaveShade1Img5,
  WaveShade1Img6,
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
  LTrim,
  JtrimLarge,
  JtrimPro,
} from '@/utils/assets';
import StripesBanner from '@/components/products/stripes/StripesBanner';

const metallicData = [
  { img: WaveShade1Img1, shade: WaveShade1Shade1, fname: 'Honey Maple DB' },
  { img: WaveShade1Img3, shade: WaveShade1Shade3, fname: 'Danish Teak DB' },
  { img: WaveShade1Img2, shade: WaveShade1Shade2, fname: 'Oak Noir DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'White Mist DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'Noce Grande DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'Gold Maple DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'English Nut DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'Oakwood Ocre DB' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'Spiced Walnut DB' },
  {
    img: WaveShade1Img6,
    shade: WaveShade1Shade6,
    fname: 'weathred',
    lname: 'grey',
  },
];

const shade2Data = [
  { img: WaveShade2Img1, shade: WaveShade2Shade1, fname: 'Royal Statuario DB' },
  { img: WaveShade2Img2, shade: WaveShade2Shade2, fname: 'Armani Creama DB' },
  { img: WaveShade2Img3, shade: WaveShade2Shade3, fname: 'Portoro' },
  { img: WaveShade2Img4, shade: WaveShade2Shade4, fname: 'Armani Grey DB' }
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
      <StripesBanner />
      <ImgGallery
        img1={WaveImg1}
        img2={WaveImg2}
        img3={WaveImg3}
        img4={WaveImg4}
      />
      <Info code="113" size="270mm X 3060mm" shades={12} collections={2} />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="FOREST"
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