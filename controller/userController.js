import { UsersModel } from "../postgres/postgres.js";


export const getAllEmp = async(req, res) => {
    try {
        const users = await UsersModel.findAll({attributes: ['id', 'Name', 'createdAt', 'updatedAt'], raw: true });
        console.log(users);
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addEmp = async (req, res) => {
    try {
        const {Id, Name, Designation, Department } = req.body;
        const emp = await UsersModel.findOne({ where: { Id :Id } });
        if (emp) {
            return res.status(409).json({ error: 'User with this ID already exists' });
        }
        if (!Name || !Designation || !Department) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newUser = await UsersModel.create({Id, Name, Designation, Department });
        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}