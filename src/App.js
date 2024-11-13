import React from "react";
import Navbar from "./component/Navbar";
import BrandsList from "./component/BandsList";
import ModalDialog from "./component/Modal";

class App extends React.Component {
    state = {
        bands: [],
        currentBand: {}, // ispravljeno ime stanja
        show : false

    };

    changeCurrentBand = (band) => {
        this.setState({ currentBand: band});
        this.handleShow();
    };

    handleClose = () => {
        this.setState({show:false})
    };
    handleShow = () => {
        this.setState({show:true})
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/73dd480bb5437faea2b1bcb0e1a7c8a3798090f2/bands_with_id.json')
            .then(res => res.json())
            .then(data => {
                this.setState({ bands: data });
            });
    }

    render() {
        return (
            <>
                <Navbar />
                <BrandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand} />
                <ModalDialog show={this.state.show} currentBand={this.state.currentBand} handleClose={this.handleClose}/>  {/* ispravljeno prosljeđivanje */}
            </>
        );
    }
}

export default App;
