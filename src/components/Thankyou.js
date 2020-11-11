import React from 'react';
import Footer from './Footer';
import Header from './Header';

export class Thankyou extends React.Component {
    render() {
        return (
            <div>
            <Header/>
                    Thankyou for submitting form
            <Footer/>
            </div>

        );
    }
}

export default Thankyou;