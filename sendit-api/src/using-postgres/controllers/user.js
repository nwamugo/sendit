import moment from 'moment';
import uuid from 'uuid';
import dbModel from '../models';
import Helper from './helper';

const User = {
  async signup(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'Some details are missing' });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ message: 'Please enter a valid email address' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    const createQuery = `INSERT INTO
      users(id, email, password, created_date, modified_date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`;
    const values = [
      uuid.v4(),
      req.body.email,
      hashPassword,
      moment(new Date()),
      moment(new Date())];

    try {
      const { rows } = await dbModel.query(createQuery, values);
      const token = Helper.generateToken(rows[0].id);
      return res.status(200).send({ token });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ message: 'User with that EMAIL already exists' });
      }
      return res.status(400).send(error);
    }
  },

  async login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'Some values are missing' });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ message: 'Please enter a valid email address' });
    }
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await dbModel.query(text, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).send({ message: 'The details are incorrect' });
      }
      if (!Helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).send({ message: 'Incorrect password' });
      }
      const token = Helper.generateToken(rows[0].id);
      return res.status(200).send({ token });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM parcels WHERE user_id = $1';
    try {
      const { rows, rowCount } = await dbModel.query(findAllQuery, [req.user.id]);
      return res.status(200).send({ rows, rowCount });
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
};

export default User;
