

const Detail = ({name}) => {
   
    
    return(
        <>
        {
        name.map(i=>{
            return( 
            <>       
                <h1>
                    {i.name??'......'}{" is "}{i.age??'#'}{" years old."}
                </h1>
                <button>{"delete"}</button>
            </>
            )
        })
        }
        </>
    )
}

export default Detail