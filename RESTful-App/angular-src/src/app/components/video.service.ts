import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  // REF:\zVIDEO\.20\(min.1.00)
  // preciso referenciar rota: "/api/videos" (servidor expressJs: app.js porto:3000)
  private _getUrl = "/api/videos";

  constructor(private _http: Http) { }

  getVideos(){
    // captura todos os videos no pedido http.get("/api/videos")
    return this._http.get(this._getUrl)
    // a resposta tem de ser mapeada como objeto json
    .map((response: Response) => response.json());
  }

}
