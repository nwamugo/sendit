import moment from 'moment';
import uuid from 'uuid';
import dbModel from '../models';


const Parcels = {
  async create(req, res) {
    const createQuery = `INSERT INTO
    parcels(id, destination, user_id, price, pickup_location, created_date, modified_date, status, present_location)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`;
    const values = [
      uuid.v4(),
      req.body.destination,
      req.user.id,
      req.body.price,
      req.body.pickup_location,
      moment(new Date()),
      moment(new Date()),
      'Queue',
      req.body.pickup_location];


    try {
      const { rows } = await dbModel.query(createQuery, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error.toString());
    }
  },

  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM parcels where user_id = $1';
    try {
      const { rows, rowCount } = await dbModel.query(findAllQuery, [req.user.id]);
      const allParcels = rows;
      const total = rowCount;
      return res.status(200).send({ allParcels, total });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getOne(req, res) {
    const text = 'SELECT * FROM parcels WHERE id = $1 AND user_id = $2';
    try {
      const { rows } = await dbModel.query(text, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send('Parcel was not found');
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async cancel(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id = $2';
    const updateOneQuery = `UPDATE parcels
      SET status=$1, modified_date=$2
      WHERE id=$3 AND user_id=$4 returning *`;
    try {
      const { rows } = await dbModel.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'Parcel not found' });
      }
      const values = [
        'cancelled',
        moment(new Date()),
        req.params.id,
        req.user.id];
      const response = await dbModel.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async changeDest(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
    const updateOneQuery = `UPDATE parcels
    SET destination=$1, modified_date=$2
    WHERE id=$3 AND user_id=$4 returning *`;
    try {
      const { rows } = await dbModel.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send('Parcel not found');
      }
      const values = [
        req.body.destination || rows[0].destination,
        moment(new Date()),
        req.params.id,
        req.user.id];
      const response = await dbModel.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async changeStatus(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
    const updateOneQuery = `UPDATE parcels
      SET status=$1,modified_date=$2
      WHERE id=$3 AND user_id=$4 returning *`;
    try {
      const { rows } = await dbModel.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'Parcel not found' });
      }
      const values = [
        req.body.status || rows[0].status,
        moment(new Date()),
        req.params.id,
        req.user.id];
      const response = await dbModel.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async updatePL(req, res) {
    const findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
    const updateOneQuery = `UPDATE parcels
      SET present_location=$1,modified_date=$2
      WHERE id=$3 AND user_id=$4 returning *`;
    try {
      const { rows } = await dbModel.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'Parcel not found' });
      }
      const values = [
        req.body.present_location || rows[0].present_location,
        moment(new Date()),
        req.params.id,
        req.user.id
      ];
      const response = await dbModel.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

export default Parcels;
