import { Producto, ProductoSchema } from "../model/schemas/producto.schema";


/* eslint-disable @typescript-eslint/no-explicit-any */
export const apiController = {
  welcome(req: any, res: any, next: any) {
    res.status(200).send('Hello from API');
  },
  async listarProductos(req: any, res: any, next: any) {
    try {
     let response = await ProductoSchema.find()
     res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async crearProductos(req: any, res: any, next: any) {
    let productotemporal:Producto={nombre:req.body.nombre, codigo:req.body.codigo, descripcion:req.body.descripcion, precio:req.body.precio}
       
        try {
          let producto=new ProductoSchema(productotemporal)
         let response = await producto.save()
         res.status(200).send(response);
        } catch (error) {
          res.status(400).send(error)
        }
  },
  async eliminarProductos(req: any, res: any, next: any) {
    try {
     let response = await ProductoSchema.deleteOne({_id:req.body.id})
     res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async actualizarProductos(req: any, res: any, next: any) {
    try {
     let producto = await ProductoSchema.findOne({_id:req.body.id})
     producto!.nombre=req.body.nombre
     producto!.codigo=req.body.codigo
     producto!.descripcion=req.body.descripcion
     producto!.precio=req.body.precio
     let response = await producto!.save()
     res.status(200).send(response);
    } catch (error) {
      res.status(400).send(error)
    }
  }
};
