type Greetprops={
    name: string,
    messageCount?: number,
    isLoggedin: boolean
}

export const Greet = (props: Greetprops) =>{
    const {messageCount=0} = props
    return(
        <div>
            <h2>
                {
                    props.isLoggedin ? `Welcome ${props.name} !!! you have ${messageCount} unread messages` 
                    : 'Weclome Guest'
                }
                </h2>
        </div>
    )
}