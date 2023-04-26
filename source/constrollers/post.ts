import {Request, Response, NextFunction} from 'express';
import axios,{ Axios, AxiosResponse} from 'axios';

interface Post{
    userId: Number,
    id: Number,
    title: String,
    body: String
}

const getPosts =async (req:Request, res:Response, next:NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts:[Post] = result.data;
    return res.status(200).json({
        message: posts
    });
}

const updatePost = async(req:Request, res:Response, next:NextFunction)=>{
    let id:string = req.params.id;
    let title:string = req.params.title ?? null;
    let body:string = req.params.body ?? null;


    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        ...(title &&{title}),
        ...(body && {body})
    });

    return res.status(200).json({
        message:response.data
    });
}

const deletePost = async(req: Request, res: Response, next:NextFunction)=>{
    let id:string =  req.params.id;
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return res.status(200).json({
        messsage: 'Post deleted successfully'
    })
}

const addPost = async (req:Request, res:Response, nextFunction: NextFunction)=>{
    let title:string = req.params.title;
    let body:string = req.params.body;

    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`,{
        title,
        body
    });

    return res.status(200).json({
        message: response.data
    });
}


export default {getPosts, updatePost};
