import img1 from './about1.jpg';
import img2 from './about2.jpg';

import SearchForm from '../../components/searchForm/SearchForm';

import './aboutPage.scss';

const AboutPage = () => {
    return ( 
        <section className="about">
            <div className="container">
                <h3 className="about__title section__title">About</h3>

                <p className="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius laborum eveniet veniam molestias atque voluptate rem magni sed architecto placeat quos labore, eligendi vero quaerat natus et obcaecati ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aliquid ex id, quos perspiciatis recusandae illo, nemo error velit odit nihil voluptatem provident quaerat aut optio voluptatibus enim illum veniam. 
                </p>

                <p className="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius laborum eveniet veniam molestias atque voluptate rem magni sed architecto placeat quos labore, eligendi vero quaerat natus et obcaecati ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aliquid ex id, quos perspiciatis recusandae illo, nemo error velit odit nihil voluptatem provident quaerat aut optio voluptatibus enim illum veniam. 
                </p>

                <div className="about__images">
                    <img src={img1} alt="" className="about__img" />
                    <img src={img2} alt="" className="about__img" />
                </div>

                <p className="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius laborum eveniet veniam molestias atque voluptate rem magni sed architecto placeat quos labore, eligendi vero quaerat natus et obcaecati ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aliquid ex id, quos perspiciatis recusandae illo, nemo error velit odit nihil voluptatem provident quaerat aut optio voluptatibus enim illum veniam. 
                </p>

                <p className="about__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius laborum eveniet veniam molestias atque voluptate rem magni sed architecto placeat quos labore, eligendi vero quaerat natus et obcaecati ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aliquid ex id, quos perspiciatis recusandae illo, nemo error velit odit nihil voluptatem provident quaerat aut optio voluptatibus enim illum veniam. 
                </p>

                <SearchForm/>
            </div>
        </section>
     );
}
 
export default AboutPage;