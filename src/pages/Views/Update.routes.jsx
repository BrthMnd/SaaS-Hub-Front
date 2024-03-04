
export const Updateroutes = () => {

    


    const handleChangeGen=({target})=>{
        console.log(target.value)
    }
    const handleChangeName=({target})=>{
        console.log(target.value)
    }
    
  return (
    <div>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" onChange={handleChangeName} />
        <label htmlFor="genero">Genero: </label>
        <input type="text" id="genero" onChange={handleChangeGen}/>
    </div>
  )
}
