


function Habbit ({habit, handleChosen}) {

    //console.log(habit)
    
    function test () {
       handleChosen(habit.id)
    }
    return (
        <div className = "Habbit" >
            <h3>{habit.name}</h3>
            <img />
            <h1>📖</h1>
            <button onClick = {test}> Add Habit </button>
        </div>
    )
}


export default Habbit 