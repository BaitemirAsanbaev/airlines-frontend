interface IAirline{
    id:number,
    name:string
}

interface IAirport{
    id:number,
    name:string,
    city:string,
    country:string,
    airlineID:number
}

interface IFlight{
    id:number,
    flightNumber:string,
    airlineID:number,
    departureAirportID:number,
    arrivalAirportID:number,
    departureDate:Date,
    arrivalDate:Date|null
}

interface ISeat{
    id:number,
    seatNumber:number,
    class:string,
    isOccupated:boolean
}

interface ITicket{
    id:number,
    ticketNumber:string,
    passengerID:number,
    flightID:number,
    seatID:number
}