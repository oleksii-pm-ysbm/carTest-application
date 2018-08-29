import _ from "lodash";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCars } from '../actions';

class CarsList extends Component {
    componentDidMount() {
        this.props.getCars();
    }

    renderList(){
        return _.map(this.props.cars, car => {
            return(
                    <div className="card mb-5" key={car.id}>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src={car.image} alt={car.title}/>
                            </div>
                            <div className="col-md">
                                <div >
                                    <h3>
                                        <Link to={`/cars/${car.id}`} className="text-dark" >{car.title}</Link>
                                    </h3>
                                    <div>
                                        <span>$ {car.price}</span>
                                    </div>
                                    <p className="mb-auto">{car.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCars: getCars
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
