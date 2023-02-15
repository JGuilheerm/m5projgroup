// import pool from '../database/index'
const pool = require('../database/index')

const postsController = {
    getALL: async (req, res) => {
        try{
            const [rows, field] = await pool.query('SELECT * FROM contatos')
            res.json({data: rows})
        }catch(error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try{
            const {id} = req.params
            const [rows, field] = await
            pool.query('SELECT * FROM contatos WHERE id = ?', [id])
            res.json({data:rows})
        }catch(error){
            console.log(error)
        }
    },
    create: async (req, res) => {
        try{
            const {nome, endereco, telefone, email} = req.body
            const sql = 'INSERT INTO contatos (nome, endereco, telefone, email) VALUES (?,?,?,?)'
            const [rows, field] = await pool.query(sql, [nome, endereco, telefone, email])
            res.json({data: rows})
        }catch(error){
            console.log(error)
        }
    },
    update: async (req, res) => {
        try{
            const {nome, endereco, telefone, email} = req.body
            const {id} = req.params
            const sql = 'UPDATE contatos SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE id = ?'
            const [rows, field] = await pool.query(sql, [nome, endereco, telefone, email, id])
            res.json({data: rows})
        }catch(error) {
            console.log(error)
            res.json({status: "error"})
        }
    },
    delete: async (req, res) => {
        try{
            const {id} = req.params
            const sql = 'DELETE FROM contatos WHERE id = ?'
            const [rows, field] = await pool.query(sql, [id])
            res.json({data: rows})
        }catch(error){
            console.log(error)
            res.json({status: 'error'})
        }
    } 
}

module.exports = postsController
