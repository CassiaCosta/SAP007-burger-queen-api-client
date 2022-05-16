const productCards = ({ image, name, flavor, complement, price, onClick }) => {
  return (
    <div className="each-card">
      <ul className="items">
        <div className="item-img">
          <img src={image} alt="Item" width={'50px'} />
        </div>
        <li className="item-name">{name}</li>
        <section className="add-item">
          <li className="flavor" value="sabor"> Sabor: {flavor}</li>
          <li className="complement" name="complemento"> Complemento: {`${complement !== null ? complement : ''}`} </li>
        </section>
        <li className="item-price">Preço: R${price}</li>
      </ul>
      <button className="add-btn" onClick={onClick}>Adicionar</button>
    </div>
  );
};

export default productCards;
