import React from 'react';
import Footer from './Footer';
import Header from './Header';

export class Thankyou extends React.Component {
    render() {
        return (
            <div>
                <h3>Congrats! Your data is saved in localstorage.</h3>
                <p>You can visit back the page or refresh, you will not lose the data</p>
            </div>

        );
    }
}

export default Thankyou;