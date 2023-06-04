function greet (name, owner) {
    let ownerMessage = 'Hello boss'
    let questMessage = 'Hello guest'
    if (name === owner) {
        return(ownerMessage)
    } else {
        return(questMessage)
    //res.send(process.env.MESSAGE_STYLE)
    }
    // Add code here
  }