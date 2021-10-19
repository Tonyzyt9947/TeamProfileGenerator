const Manager = require('../lib/manager')

describe('Manager', ()=>{
    describe('Initialization', ()=>{
        it('should create an object with name, id, email and office number', ()=>{
            const manager = new Manager('Sylvanas Windrunner', 1, 'thedarklady@horde.com', 1)

            expect(manager.name).toEqual('Sylvanas Windrunner')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('thedarklady@horde.com')
            expect(manager.officeNumber).toEqual(1)
        })
    })
})