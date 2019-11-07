import Layout from '../layout/Layout';
import ParallaxScroll from '../components/ParallaxScroll';
import VideoSlide from '../components/VideoSlide';
import ContactUs from '../components/ContactUs';
import './index.scss';

const Index = () => (
    <Layout>
        <VideoSlide/>
        <ParallaxScroll/>
        <ContactUs/>
    </Layout>
);

export default Index;