import Explore from "@/components/home/explore";
import Newsletter from "@/components/home/newsletter";
import { fetcher } from "@/lib/api";
import EnquireButton from "@/components/blocks/enquire";
import CarouselHome from "@/components/home/carousel/carousel";
const Home = async () => {
  const data = await fetcher("/homepage?populate=deep,4");
  return (
    <main>
      <div className="flex justify-center items-center flex-col overflow-hidden">
        <div className="responsive">
          <div>
            <div className="2xl:mt-28 md:mt-14 mt-8 flex flex-col items-center">
              <div className="font-bold 2xl:text-9xl md:text-8xl text-4xl tracking-widest 2xl:mb-14 mb-6">
                <h1>{data?.attributes.titleUp}</h1>
                <h1 className="2xl:pl-44 md:pl-24 pl-12">
                  {data?.attributes.titleDown}
                </h1>
              </div>
              <div className="md:px-44 px-12 2xl:text-xl md:text-lg text-sm text-center text-white4wd">
                {data?.attributes.desc}
              </div>
            </div>
            <div className="2xl:border-t-4 border-t-2 border-green4wd 2xl:mt-28 md:mt-14 mt-8"></div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold 2xl:text-4xl md:text-2xl text-sm tracking-wide text-center 2xl:mt-20 md:mt-12 mt-6 px-4">
              {data?.attributes.ImageDesc.title}
            </h2>
            <div className="2xl:border-t-4 border-t-2 border-green4wd w-48 2xl:mt-8 md:mt-4 mt-2"></div>
            <div className="flex md:gap-8 gap-6 items-center justify-evenly flex-wrap w-full 2xl:mt-12 md:mt-8 mt-4">
              {data?.attributes.ImageDesc.contents.map((content) => {
                return (
                  <Explore
                    image={content.Image.data.attributes.url}
                    title={content.title}
                    desc={content.desc}
                    url={content.url}
                  />
                );
              })}
            </div>
          </div>
          <div className="2xl:border-t-8 border-t-4 border-orange4wd  2xl:mt-48 md:mt-36 mt-20 2xl:mb-16 mb-8 md:px-0 px-4"></div>
          <div className="2xl:text-4xl text-2xl 2xl:px-20 md:px-12 px-6">
            <h2 className="font-extrabold text-orange4wd">
              {data?.attributes.Carousel.title}
            </h2>
            <div className="2xl:mt-8 mt-4 2xl:px-36 md:px-8 px-2">
              <CarouselHome carousels={data?.attributes.Carousel.contents} />
            </div>
          </div>
          <div className="2xl:mt-40 md:mt-24 mt-12 2xl:mb-20 md:mb-12 mb-8  text-orange4wd flex flex-col items-center text-center">
            <h3 className="2xl:text-4xl md:text-3xl text-base md:mb-6 mb-2 font-normal">
              {data?.attributes.bottomtext}
            </h3>
            <h1 className="2xl:text-8xl md:text-7xl text-3xl font-bold">
              {data?.attributes.bottomtext2}
            </h1>
                <div className="md:mt-20 md:mb-24 mt-6 mb-8">
                  <EnquireButton text={data?.attributes.buttonText} cssColor="orange4wd" />
                </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;
