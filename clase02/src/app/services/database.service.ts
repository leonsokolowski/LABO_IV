import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {Auto} from "../classes/auto";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  supabase : SupabaseClient<any, "public", any>;
  constructor() 
  {
    this.supabase = createClient("https://byzbhahjyouroclvnnrf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5emJoYWhqeW91cm9jbHZubnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjQyMzYsImV4cCI6MjA1OTc0MDIzNn0.WvufmiiBrPraaW5MX1dc6s3m-iYzRm96mdR0wQ5QUMw");
  }

  async listar()
  {
    //Por defecto SELECT * FROM autos
    //lt = less than. Es para poner filtros de "menor que".
    const {data, error, count, status, statusText} = await this.supabase.from("autos").select("*"); 
    const autos = data as Auto[];
    console.log(data, error, count, status, statusText);
    return autos;
  }

  async crear(auto: Auto)
  {
    const {data, error} = await this.supabase.from("autos").insert(auto);
    console.log(data, error);
  }

  async modificar(auto: Auto)
  {
    //UPDATE ... WHERE id = n;
    const {data, error, count, status, statusText} = await this.supabase.from("autos").update(auto).eq("id", auto.id);
    console.log(data, error, count, status, statusText);

  }

  async eliminar(id: number)
  {
    const {data, error, count, status, statusText} = await this.supabase.from("autos").delete().eq("id", id);
    console.log(data, error, count, status, statusText);
  }
}


// Los servicios son de instancia unica