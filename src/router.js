import { Contact } from "./routes/Contact";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";

export const routes = [];
routes.push({name:'Home',path:'/', exec: Home });
routes.push({name:'Login',path:'/login', exec:Login});
routes.push({name:'Contact',path:'/contact', exec:Contact});

export function router(){
    const {pathname} = window.location
    const route = routes.find((route)=> route.path === pathname)   
    route.exec() 

}