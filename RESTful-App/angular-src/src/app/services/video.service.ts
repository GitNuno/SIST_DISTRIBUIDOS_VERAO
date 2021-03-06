import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from '../models/video';

// Nos serviços crio metodos que fazem os pedidos via objeto Http
// Ex: capturo dados via http.get(/api/videos)
// "/api/videos" é a rota para servidor expressJs: app.js porto:3000
@Injectable()
export class VideoService {
  // REF:\zVIDEO\.20\(min.1.00)
  // rotas = \routes\api.js : para chamar servidor expressJs: Ex: http://localhost:3000/api/videos
  // notar que "putUrl = '/api/video/" termina com "/" pq em \routes\api.js temos: "router.put('/videos/:id',..)"
  // Nota: se definir EX.(_getUrl = 'http://localhost:3000/api/videos') consigo fazer GET_REQUEST no porto:4200
  private _getUrl = '/api/videos';
  // REF:\zVIDEO\.22\(min.2.00)
  private _postUrl = '/api/video';
  // REF:\zVIDEO\.23\(min.1.00,5.30)
  private _putUrl = '/api/video/';
  // REF:\zVIDEO\.24\(min.1.00,6.00)
  private _deleteUrl = '/api/video/';

   // UPLOAD ++
   // Notar que consigo fazer uploads mm no porto:4200
   filesToUpload: Array<File> = [];
   uri = 'http://localhost:3000/api/upload';

  constructor(private _http: Http) { }

  // UPLOAD ++
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append('uploads[]', files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this._http.post(this.uri, formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}
  // UPLOAD ++
  fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      // captura nome do ficheiro
      //this.product.photo = fileInput.target.files[0]['name'];
  }

  //
  getVideos() {
    // captura todos os videos no pedido http.get("/api/videos")
    return this._http.get(this._getUrl)
    // a resposta obtida tem de ser mapeada como objeto json
    .map((response: Response) => response.json());
  }

  // adicionar video na BD
  addVideo(video: Video) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(video),options)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }
  // update video na BD
  updateVideo(video: Video) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }
  // update video na BD
  deleteVideo(video: Video) {
      return this._http.delete(this._deleteUrl + video._id)
      // a resposta obtida tem de ser mapeada como objeto json
      .map((response: Response) => response.json());
  }

}
