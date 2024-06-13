export const FormComponent=()=>{
    return <form>
        <Label/>
        <Break/>
       <InputText/>
       <Break/>
       <Label/>
       <Break/>
       <MailText/>
       <Break/>
       <Submit/>
       <Break/>
    </form>
}
const Break=()=>{
    return (<br/>)
}
const Label=()=>{
    return (<label>Name</label>)
}
const InputText=()=>{
    return (<input type="text" id="name"></input>)
}
const MailText=()=>{
    return (<input type="email" id="mail"></input>)
}
const Submit=()=>{
    return (<input type="submit" value="submit" />)
}