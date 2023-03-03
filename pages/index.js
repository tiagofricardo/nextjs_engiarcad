import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action, clients } =
    frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* LandingView */}
      <div className="grayscale-20 flex h-[calc(100vh-90px)] w-full items-center bg-landing bg-cover bg-fixed bg-right-bottom bg-no-repeat  ">
        <div className=" bg-gray-100 bg-opacity-60 p-[50px] ">
          <div className="mx-auto lg:col-10 ">
            <h2 className=" font-bold uppercase">{banner.title}</h2>
            <p className="mt-4 text-justify font-primary text-black md:text-lg	">
              {markdownify(banner.content)}
            </p>
            <a href={banner.button.link} className="btn-home mt-10">
              <span className="btn-home__circle"></span>
              <span className="btn-home__white-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-arrow-right"
                  viewBox="0 0 21 12"
                >
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
              <span className="btn-home__text">Contactar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <div className=" relative flex flex-col items-center overflow-x-hidden  shadow ">
        <div className=" whitespace-nowrappy-12  flex animate-slider1	items-center justify-center py-10 opacity-50 grayscale">
          {clients.client.map((client) => (
            <div className=" mx-[15px] md:mx-[40px]  ">
              <Image
                src={client.image}
                width={client.width}
                height={10}
              ></Image>
            </div>
          ))}
        </div>

        <div class=" absolute top-0 flex animate-slider2 items-center justify-center	whitespace-nowrap py-10 opacity-50 grayscale">
          {clients.client.map((client) => (
            <div className="mx-[15px] md:mx-[40px]  ">
              <Image
                src={client.image}
                width={client.width}
                height={10}
              ></Image>
            </div>
          ))}
        </div>

        <Link
          class="learn-more btn-slide mb-10 w-[300px] scale-[0.7] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 md:scale-[0.8] "
          href={clients.link}
        >
          <span class="circle " aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Ver todos os clientes</span>
        </Link>
      </div>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel  ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="mx-auto mb-5 h-[300px] w-[400px] ">
                          <Image
                            className="rounded-xl opacity-90"
                            src={slide}
                            alt=""
                            width={500}
                            height={100}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <ul className="list-circles mt-4">
                    {service?.itens.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 mb-2 text-justify	">
                    {service?.description}
                  </p>

                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* workflow 
      <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section>
      */}

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const clientsPage = await getListPage("content/clients.md");
  const clientsfrontmatter = clientsPage.frontmatter;

  const { frontmatter } = homePage;
  frontmatter.clients = clientsfrontmatter;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
