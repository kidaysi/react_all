import Image from "/main/banner.jpeg";
import SliderMain from "../../component/slider/slider";
import Accordion from "../../component/accordion/accordion";


export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_content">
          <br></br>  <br></br>
          <div className="info">
            <img src={Image} alt="" className="img" />
            <div className="info_content">
              <h2 >AnimalPlanet</h2>
              <p className="text">
                Добро пожаловать в наш зоомагазин! Мы рады предложить вам широкий выбор товаров для ваших домашних питомцев. У нас вы найдете качественные корма, игрушки, аксессуары, лекарства и многое другое для собак, кошек, грызунов, птиц и рыб. Наши опытные консультанты всегда готовы помочь вам с выбором товаров и дать рекомендации по уходу за вашими любимцами. Мы также проводим акции и предлагаем скидки на различные товары. Посетите наш зоомагазин и обеспечьте своих питомцев всем необходимым!
              </p>
            </div>
          </div>
          <SliderMain />
          <div className="accordion">
            <Accordion title="Какие виды товаров вы предлагаете?
" content="Наш зоомагазин предлагает широкий ассортимент товаров" />
            <Accordion title="Какие бренды кормов представлены?
" content="Royal Canin, Hill's, Purina, Acana, Orijen" />
            <Accordion title="Есть ли у вас услуги по консультации?" content="У нас есть профессиональные консультанты" />
            <Accordion title="Какие акции и скидки у вас действуют на данный момент?
" content="Мы регулярно проводим акции и предлагаем скидки на различные товары для животных" />
          </div>
        </div>
      </div>
    </main>
  );
}
