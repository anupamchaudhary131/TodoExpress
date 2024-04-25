import {Router} from 'express';
import Todo from "../models/todo.models.js";


const router = Router();
router.get('/todos', async (req, res) => {
  const todos = await Todo.find({completed: false});
  const completedTodos = await Todo.find({completed: true});
  res.json({todos, completedTodos})
});

router.post("/add", async (req, res) => {
  const todo = await new Todo({
    title: req.body.todo
  });
  await todo.save();
  res.json({message: 'Todo added successfully', todo})
});

router.put("/set/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = req.body.completed;
  await todo.save();
  const todos = await Todo.find({completed: false});
  const completedTodos = await Todo.find({completed: true});
  res.json({message: 'ok', todos, completedTodos})
});

router.delete("/delete/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({message: 'Todo deleted successfully'})
});


router.put("/edit/:id", async (req, res) => {
  console.log(req.body.todo)
  const todo = await Todo.findById(req.params.id);
  console.log(todo)
  todo.title = req.body.todo;
  await todo.save();
  res.json({message: 'Todo updated successfully'})
});


export default router;
