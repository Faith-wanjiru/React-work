const baseurl = process.env.REACT_APP_BASE_URL;
console.log({baseurl});

export const login = async({username, password})=>{
    try{
        const response = await fetch(`${baseurl}/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password})
        })
        return response.json()
    }
    catch(error){
        return`Error during login:${error.message}`
    }
}