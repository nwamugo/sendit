import moment from 'moment';
import uuid from 'uuid';

class Parcel {
  constructor() {
    this.parcels = [];
  }

  create(parcel) {
    const newParcel = {
      id: uuid.v4(),
      destination: parcel.destination,
      presentLocation: parcel.pickupLocation,
      status: 'Queue',
      pickupLocation: parcel.pickupLocation,
      price: parcel.price,
      createdDate: moment.now(),
      modifiedDate: moment.now(),
    };
    this.parcels.push(newParcel);
    return newParcel;
  }

  findOneParcel(id) {
    return this.parcels.find(parcel => parcel.id === id);
  }

  findAllParcels() {
    return this.parcels;
  }

  changeDestination(id, data) {
    const parcel = this.findOneParcel(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels[index].destination = data.destination || parcel.destination;
    this.parcels[index].modifiedDate = moment.now();
    return this.parcels[index];
  }

  cancelOrder(id) {
    const parcel = this.findOneParcel(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels[index].status = 'cancelled';
    return this.parcels[index];
  }
}

export default new Parcel();
