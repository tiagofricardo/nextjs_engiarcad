import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Cta from "@layouts/components/Cta";

function Clients({ data }) {
  const { frontmatter } = data;
  const { title, client, call_to_action } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}

        <div className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {client.map((client) => (
            <a href={"https://" + client.link} target="_blank">
              <div className=" border-gray group relative rounded-xl 	bg-white p-10 pb-20 transition-all duration-300 ease-in-out hover:shadow-lg">
                <div className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in group-hover:translate-y-[-90%]">
                  <Image
                    src={client.image}
                    width={client.width}
                    height={10}
                  ></Image>
                </div>
                <div className=" group-hover: absolute top-[50%] left-[50%] mt-3 translate-x-[-50%] opacity-0 transition-all duration-300 ease-in group-hover:visible group-hover:translate-y-[10%] group-hover:text-primary group-hover:opacity-100">
                  <p>{client.link}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <Cta cta={call_to_action} />

        <div className="">
          <h4 className="">{"Missão e Postura Profissional"}</h4>
          <div>
            Desenvolver métodos de trabalho fiáveis e transparentes, por forma a
            satizfazer os interesses e promover a confiança dos clientes,
            assegurando a sua fidelização, elaborados num permanente rigor e
            ética profissional, no sentido de preservar a credibilidade técnica
            junto de todas as Entidades, não descurando uma constante
            aprendizagem de novas tecnologias e soluções técnicas, garantindo
            uma postura de vanguarda na optimização de recursos, e estabelecendo
            uma plataforma de referência na salvaguarda do desenvolvimento
            sustentado da sociedade e do ambiente.
          </div>
        </div>

        <a href={"google.com"} className="btn-home mt-10">
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
    </section>
  );
}

export default Clients;
