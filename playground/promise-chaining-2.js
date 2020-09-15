require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed:false})
    return count
}

deleteTaskAndCount('5f57d812813b5a084c693cf0').then((count)=>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})