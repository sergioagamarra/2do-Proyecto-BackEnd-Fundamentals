function DeleteUser(id){
    fetch("/delete-user/" + id,{
        method:"DELETE"
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        return data
    })
}

function DeleteMovie(id){
    fetch("/delete-movie/" + id,{
        method:"DELETE"
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        return data
    })
}

function UpdateMovie(id){
    fetch("/read-movie/" + id,{
        method:"POST"
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        return data
    })
}
