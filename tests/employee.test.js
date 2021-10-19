const Employee = require('../lib/employee')

describe('Employee', ()=>{
    describe('Initialization', ()=>{
        it('should create an object with name, id, and email', ()=>{
            const employee = new Employee('Sylvanas Windrunner', 1, 'thedarklady@horde.com')

            expect(employee.name).toEqual('Sylvanas Windrunner')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('thedarklady@horde.com')
        })
    })
})