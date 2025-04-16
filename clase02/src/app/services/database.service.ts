import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {Auto} from "../classes/auto";
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  sb = inject(SupabaseService)

  async listar()
  {
    //Por defecto SELECT * FROM autos
    //lt = less than. Es para poner filtros de "menor que".
    const {data, error, count, status, statusText} = await this.sb.supabase.from("autos").select("*"); 
    const autos = data as Auto[];
    console.log(data, error, count, status, statusText);
    return autos;
  }

  async crear(auto: Auto)
  {
    const {data, error} = await this.sb.supabase.from("autos").insert(auto);
    console.log(data, error);
  }

  async modificar(auto: Auto)
  {
    //UPDATE ... WHERE id = n;
    const {data, error, count, status, statusText} = await this.sb.supabase.from("autos").update(auto).eq("id", auto.id);
    console.log(data, error, count, status, statusText);

  }

  async eliminar(id: number)
  {
    const {data, error, count, status, statusText} = await this.sb.supabase.from("autos").delete().eq("id", id);
    console.log(data, error, count, status, statusText);
  }
}


// Los servicios son de instancia unica