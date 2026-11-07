import { Component, signal } from '@angular/core';
import {inject } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Component({
  imports: [],
  selector: 'app-client',
  styleUrl: './client.css',
  templateUrl: './client.html',
})
export class Client {

  private http = inject(HttpClient);

  protected posts:any =signal([]);

  deleteClient(id:any){
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(
      res =>{
        alert("Successfully Deleted!");
        this.posts.update(
          (posts: any[]) => posts.filter((post: any) => post.id !== id)
        );

      },
      err =>{
        console.log(err);
      }
    )
  }

  getClient() {
    this.http.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe(
      res => {
          console.log(res);
          this.posts.set(res);
      },
      err => {
          console.log(err);
      });
  }




}
