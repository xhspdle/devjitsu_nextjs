import Header from './Header';

const Layout = props => (
    <>
        <div>
            <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Header/>
            {props.children}
        </div>
    </>
);

export default Layout;