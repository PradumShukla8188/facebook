import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  
  selectedFile: File | undefined;

  constructor(private http: HttpClient) {}

  onFileSelected(files: FileList | null) {
    if (files && files.length > 0) {
      // this.selectedFile = files.item(0);
    } else {
      this.selectedFile = undefined;
    }
  }

  uploadVideo() {
    if (!this.selectedFile) {
      return;
    }

    const uploadData = new FormData();
    uploadData.append('video', this.selectedFile, this.selectedFile.name);

    this.http.post('/upload', uploadData).subscribe(
      response => {
        console.log('Video uploaded successfully');
      },
      error => {
        console.error('Error uploading video:', error);
      }
    );
  }


}
