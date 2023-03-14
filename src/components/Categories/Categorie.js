import React from 'react'

const Categorie = ({categorie, setCategorieId}) => {
    const {name, id} = categorie
    const handleCategorieId = (cateId) =>{
      setCategorieId(cateId)
    }

  return (
    <div>
      
      <button onClick={()=>handleCategorieId(id)} className='btn rounded-md px-2 py-[6px] border border-[#BDBDBD] text-[#828282]'>{name}</button>
    </div>
  )
}

export default Categorie