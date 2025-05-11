export const ProductDeliver = () => {
    return (
        <div className="productDeliverWrapper">
            <div className="productDeliverName">
                <h3>Доставка</h3>
            </div>

            <div className="productDeliverContainer">
                <div className="productDeliverItem">
                    <h4>Курьерская доставка</h4>
                    <p>Доставка осуществляется курьером транспортной компании. В день доставки с вами свяжется курьер для уточнения времени и места доставки.</p>
                </div>

                <div className="productDeliverItem">
                    <h4>Самовывоз из офиса магазина</h4>
                    <p>Самовывоз доступен по будням в рабочее время. Удобное время получения с Вами согласует консультант магазина.</p>
                </div>

                <div className="productDeliverItem">
                    <h4>Доставка почтой</h4>
                    <p>Доставка осуществляется транспортной компании. В день доставки с вами свяжется менеджер для уточнения времени и места доставки.</p>
                </div>
            </div>
        </div>
    )
}