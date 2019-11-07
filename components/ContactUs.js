import './ContactUs.scss';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('맹그는중');
    }
    
    return (
        <div className="ContactUs" id="contact">
            <div className="ContactUs-header">
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message</p>
            </div>
            <div className="ContactUs-row">
                <div className="ContactUs-column">
                    <img src="/static/img/map1.PNG" alt="map"/>
                </div>
                <div className="ContactUs-column">
                    <form onSubmit={handleSubmit} name="contact">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.."></input>
                        <label htmlFor="email">Email</label>
                        <input require="true" type="email" id="email" name="email" placeholder="Your email.."></input>
                        <label htmlFor="message">message</label>
                        <textarea require="true" id="message" name="message" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;