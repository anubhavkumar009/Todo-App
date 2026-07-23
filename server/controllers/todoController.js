const Todo=require("../models/Todo");


const createTodo=async(req,res)=>{
    try{
        console.log(req.body);

        const todo=await Todo.create(req.body);
        res.status(201).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

const getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find();
        res.json(todos);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};


const getTodoById=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);

        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }

        res.json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};


const updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }

        res.json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

const deleteTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndDelete(req.params.id);

        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }

        res.json({message:"Todo deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

module.exports={
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};
