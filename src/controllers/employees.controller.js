import { pool } from "../db.js";

export const getEmployees = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM employee ')
    res.json(rows)
}

export const createEmployees = async (req,res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query( 'INSERT INTO employee (name , salary) VALUES ( ? , ? )' , [name, salary] )
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const deleteEmployees = async(req,res) => {
    const result = await pool.query('DELETE FROM employee WHERE id=?' , [req.params.id])
    console.log(result)
    res.send('employee deleted')
}

export const updateEmployees = async(req,res) => {
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL (?, salary) WHERE id = ? ', [name, salary, id])
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id] )
    console.log(result)
    res.json(rows[0])
}