import express from 'express';
import StudentController from '../controllers/StudentController'

var router = express.Router();

class StudentRouters{
    private studentcontroller = new StudentController();

    get routes(){
        router.get('/all' , this.studentcontroller.getAll);
        return router;
    }

}

export = StudentRouters;