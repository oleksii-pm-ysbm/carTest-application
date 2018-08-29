import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getCar} from '../actions';

class CarDetail extends Component {
    render() {
        const {car} = this.props;
        return (
            <div>
                <div className="mb-4">
                    <Link className="btn btn-primary" to={'/cars'}>К списку</Link>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src={car.image} alt={car.title}/>
                        </div>
                        <div className="col">
                            <h5 className="card-title">{car.title}</h5>
                            <div>$ {car.price}</div>
                            <div>{car.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({cars}, ownProps) {
    return {
        car: cars[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {getCar})(CarDetail);