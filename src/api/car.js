import Cars from './cars';

export default function getCarById(id) {
    return (
        Cars.find(item => item.id === id)
    );
}