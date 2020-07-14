const Yup = require('yup');

const User = require('../models/User');

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      age: Yup.number().required(),
    });
    
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400).json({ error: 'Complete all the fields correctly.' });
    }

    const users = await User.create(req.body);

    return res.json(users);
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      age: Yup.number().required(),
    });
    
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400).json({ error: 'Complete all the fields correctly.' });
    }
    
    const id = req.params.id;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(401).json({ error: 'User does not exist.' });
    } 

    await user.update(req.body);

    return res.json({ message: 'User updated.' });
  }

  async delete(req, res) {
    const id = req.params.id;

    const user = User.findByPk(id);

    if (!user) {
      return res.status(401).json({ error: 'User does not exist.' });
    }

    (await user).destroy();

    return res.json({ message: 'User deleted.' });
  }
}

module.exports = new UserController();