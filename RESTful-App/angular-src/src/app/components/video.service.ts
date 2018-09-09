import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from './video';

@Injectable()
export class VideoService {

  // REF:\zVIDEO\.20\(min.1.00)
  // preciso referenciar rota: "/api/videos" (servidor expressJs: app.js porto:3000)
  private _getUrl = '/api/videos';
  // REF:\zVIDEO\.22\(min.2.00)
  private _postUrl = '/api/video';
  // REF:\zVIDEO\.23\(min.1.00,5.30)
  private _putUrl = '/api/video/';
  // REF:\zVIDEO\.24\(min.1.00,6.00)
  private _deleteUrl = '/api/video/';

  constructor(private _http: Http) { }

  getVideos(){
    // captura todos os videos no pedido http.get("/api/videos")
    return this._http.get(this._getUrl)
    // a resposta obtida tem de ser mapeada como objeto json
    .map((response: Response) => response.json());
  }

  // adicionar video na BD
  addVideo(video: Video){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(video), options)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }
  // update video na BD
  updateVideo(video: Video){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }
  // update video na BD
  deleteVideo(video: Video){
      return this._http.delete(this._deleteUrl + video._id)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }

}
