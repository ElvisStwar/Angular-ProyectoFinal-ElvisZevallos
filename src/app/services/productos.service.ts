import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fireStore:Firestore) { }

  addProducto(productos:Productos){

    const productosRef = collection(this.fireStore,"Abarrotes");
    return addDoc(productosRef, productos);

  }

  getProductos():Observable<Productos[]>{

    const productosRef = collection(this.fireStore, 'Abarrotes')
    return collectionData(productosRef, {idField:'id'}) as Observable<Productos[]>

   }


}
