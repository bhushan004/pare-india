import {
  AboutSection,
  Hero,
  InfiniteScroll,
  NextProject,
  PareIndiaRotatingImg,
  Portfolio,
  ProductsRange,
  Projects,
  Qualities,
} from '@/components/home';

export const metadata = {
  title: 'Pare | High Quality Premium Wall & Ceiling Panels India',
  description: 'Pare stands proud as India\'s first manufacturer of wall and ceiling panels, Design interiors with our innovative product range. Wide range of innovative panels. First and largest manufacturer of Soffit Panels',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductsRange />
      <InfiniteScroll />
      <Portfolio />
      <Qualities />
      <div className="bg-[#151515] text-white">
        <Projects />
        <NextProject />
        <PareIndiaRotatingImg />
      </div>
    </main>
  );
}
