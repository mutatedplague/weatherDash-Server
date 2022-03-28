import { Request, Response } from "express";

class indexController {
    
    static index = (req: Request, res: Response) => {

        res.status(201).send("WeatherDash Server is online!");

    };


}
export default indexController;