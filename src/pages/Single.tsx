import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import img from '../../assets/img/single.png';
import activeLike from '../../assets/img/hearth.svg';
import disableLike from '../../assets/img/like.svg';

const StyledSingle = styled.div`
  margin-top: -20px;
  .img {
    width: 100%;
    height: auto;
    display: block;
  }

  .content__top-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 320px;
    width: 100%;
    span {
      margin-left: 18px;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      text-transform: lowercase;
      color: #c4c4c4;
    }
  }

  .content__top-right {
    display: flex;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: #b57661;
  }

  .content {
    margin-top: -60px;
    position: relative;
    z-index: 5;
    background: #ffffff;
    box-shadow: 1px -6px 17px rgba(111, 127, 207, 0.13);
    border-radius: 50px 50px 0 0;
    padding: 0 50px 100px;
  }

  .content__top {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .price {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #373737;
  }

  .like {
    margin-left: 28px;
    cursor: pointer;
    display: block;
  }

  .content__inner p {
    color: #000;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Single = () => {
  const [like, setLike] = useState(false);
  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      <Header mode="title" title="Банановое румбо" path="/category" />
      <StyledSingle>
        <img className="img" src={img} alt="img" />
        <main className="content">
          <div className="content__top">
            <div className="content__top-left">
              <h2 className="title">Банановое румбо</h2>
              <span className="width">1 кг</span>
            </div>
            <div className="content__top-right">
              <span className="price">0000,00 руб.</span>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img
                className="like"
                src={like ? activeLike : disableLike}
                alt="like"
                onClick={() => {
                  setLike(!like);
                }}
              />
            </div>
          </div>
          <div className="content__inner">
            <p>
              Если вы любите тропические фрукты и с удовольствием готовый есть
              бананы почти каждый день, то этот торт создан для Вас !
              Знакомьтесь, это » Банановое румбо». Для каждого дальневосточника,
              кто скучает по теплым морям и просто по летним теплым денькам этот
              торт рекомендуется в качестве лекарства для поднятия настроения!
            </p>
            <p>
              Его желтый сдобный бисквит с банановым сиропом и сметанным суфле
              разбудит в вас все самые солнечные и теплые воспоминания о лете,
              море, пляже и сочных фруктах. Яркое декорирование из глясажа,
              крема из сливок и желтой шоколадной глазури вызовут бурю эмоций у
              любителей нестандартных тортов. «Банановое румбо» это торт,
              который можно покупать по поводу и без него. Он подарит вам
              несколько минут невероятного отдыха в тишине, поскольку его вкус
              заставляет забыть обо всем и умолкнуть на пару минут для
              наслаждения.
            </p>
            <p>
              Состав: продукт сметанный, сахар, крем на растительных маслах,
              яйцо куриное пищевое, мука пшеничная в/с, смесь для приготовления
              бисквита , желатин пищевой, глюкозный сироп, патока крахмальная,
              глазурь шоколадная, смесь для приготовления суфле, крахмал
              картофельный, молоко цельное сгущенное с сахаром, посыпка
              кондитерская, ванилин, сухой куриный белок, консервант сорбиновая
              кислота, краситель пищевой,ароматизатор , агар агар, пектин ,
              лимонная кислота. Пищевая ценность в 100г. продукта: белки — 3,6г;
              жиры — 11,3г; углеводы- 34,0г . Энергетическая ценность:1070,1кДж
              /256 Ккал.
            </p>
          </div>
        </main>
      </StyledSingle>
    </div>
  );
};

export default Single;
