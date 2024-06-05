import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  public photos: any[] = [];

  constructor(private _photoService: PhotoService) { }

  ngOnInit(): void {
    this._photoService.getphoto().subscribe(
      (response: any) => {
        if (response.success) {
          this.photos = response.data.memes;
        } else {
          alert('Failed to load photos');
        }
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }
}

