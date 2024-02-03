import './mainPage.scss';
import example from '../../images/example.jpg';

const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo__info">
                        <h1 className="promo__title">The Library - everything about books</h1>
                        <p className="promo__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem enim molestiae molestias corporis deleniti sequi incidunt eligendi voluptas harum reiciendis officia voluptate, recusandae praesentium dolorem mollitia? Tempore, non laudantium!</p>
                    </div>
                    <div className="promo__media">
                        <div className="promo__slider">
                            <img src={example} alt="" className="promo__slider-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;