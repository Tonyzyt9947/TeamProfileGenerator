const employee = require('./employee')

class intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getRole(){
        return 'Intern'
    }
    getSchool(){

    }
}

module.exports = intern